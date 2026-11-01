import json,re,sys,os,shutil
src,tpl,out=sys.argv[1:4]
d=json.load(open(src))
if os.path.exists(out): shutil.rmtree(out)
shutil.copytree(tpl,out)
D=out+'/data/'
P={p['ID']:p for p in d['persons']}
pri=set(d['priority'])
def yr(s):
    m=re.search(r'(1[6-9]\d\d|20\d\d)',s or '');return int(m.group(1)) if m else None
hide={i for i,p in P.items() if (yr(p['Родился']) or 0)>=1980}
P={i:p for i,p in P.items() if i not in hide}
def ids(s): return [x.strip() for x in (s or '').split(',') if x.strip() in P]
# generations
gen={}
haspar=lambda i:bool(ids(P[i]['ID_отца'])+ids(P[i]['ID_матери']))
def g(i,seen=()):
    if i in gen: return gen[i]
    par=[x for x in ids(P[i]['ID_отца'])+ids(P[i]['ID_матери']) if x not in seen]
    sp=[x for x in ids(P[i]['ID_супруга(ов)']) if haspar(x) and x not in seen]
    if par: v=max(g(x,seen+(i,)) for x in par)+1
    elif sp: v=g(sp[0],seen+(i,))
    else: v=0
    gen[i]=v;return v
for i in P: g(i)
# shift: Афонасий = I
base=gen.get('1') or 0
R=['I','II','III','IV','V','VI','VII','VIII','IX','X']
kids={x for p in P.values() for x in ids(p['ID_отца'])+ids(p['ID_матери'])}
def rom(i):
    v=gen[i]
    if not haspar(i) and i not in kids and not ids(P[i]['ID_супруга(ов)']): return ''
    return R[v-base] if v is not None and 0<=v-base<10 else ''
links={}
for l in d['links']: links.setdefault(l['№ персоны'],[]).append(l)
pid=lambda i:'K'+i.zfill(3)
persons=[];research={}
for i,p in P.items():
    note=p['Роль / комментарий'];srcs=p['Источник']
    persons.append(dict(id=pid(i),pri=i in pri,name=p['ФИО'],sex=p['Пол'],gen=rom(i),branch=p['Ветвь/регион'],
      b=p['Родился'],d=p['Умер'] if p['Умер']!='?' else '',father=pid(p['ID_отца']) if p['ID_отца'] in P else '',
      mother=pid(p['ID_матери']) if p['ID_матери'] in P else '',fam='',spouses=[pid(x) for x in ids(p['ID_супруга(ов)'])],
      parish='',burial='',estate=p['Сословие/профессия'],quality='',note=note,src=srcs,verbatim='',ev=[],num=i,
      bplace=p['Место рождения'],dplace='',hiddenKids=sum(1 for h in hide if i in (d_:=[x for x in d['removed'] if x['ID']==h] and [d['removed'][0]['ID_отца']]) ),places=[]))
    r=dict(pri=i in pri,branch=p['Ветвь/регион'],gen=rom(i),parish='',burial='',estate=p['Сословие/профессия'],quality='',
      note=' '.join(x for x in [p['Заметка о связи'],note] if x),src=srcs+''.join('; '+l['Источник / факт']+(' '+l['URL'] if l['URL'] else '') for l in links.get(i,[])),verbatim='')
    if p['Проживание']: r['note']+=' Проживание: '+p['Проживание']+'.'
    research[i]=r
# hiddenKids proper
for x in persons: x['hiddenKids']=sum(1 for r in d['removed'] if r['ID_отца']==x['num'] or r['ID_матери']==x['num'])
# families
fams={};fi=0
for i,p in P.items():
    if p['Пол']=='М':
        for w in ids(p['ID_супруга(ов)']):
            fams[(i,w)]=None
for i,p in P.items():
    f,m=p['ID_отца'] if p['ID_отца'] in P else '',p['ID_матери'] if p['ID_матери'] in P else ''
    if f or m: fams.setdefault((f,m),None)
F=[]
for n,(h,w) in enumerate(fams,1):
    a=h or w
    F.append(dict(id='F%03d'%n,gen=rom(a),branch=P[a]['Ветвь/регион'],h=pid(h) if h else '',w=pid(w) if w else '',date='',note=''))
fid={(f['h'],f['w']):f['id'] for f in F}
for x in persons: x['fam']=fid.get((x['father'],x['mother']),'')
# sources
S=[]
for n,s in enumerate(d['sources'],1):
    st=s['Статус'];res='ПОЛОЖИТЕЛЬНЫЙ' if 'полож' in (st+s['Результат'][:40]).lower() else 'ОТРИЦАТЕЛЬНЫЙ' if 'отриц' in (st+s['Результат'][:40]).lower() else 'В РАБОТЕ'
    S.append(dict(n=str(n),res=res,type=st,ref=s['Источник / издание'],yr=s['Период / охват'],what=s['Что проверено'],got=s['Результат'],where=s['URL / файл'],date=''))
# places
PL=[]
for g_ in d['geo']:
    PL.append(dict(id='G%02d'%int(g_['№']),name=g_['Название'],addr='',lat=g_['Широта'],lon=g_['Долгота'],url=g_['Яндекс Карты'],
      exact=g_['Точность']=='exact',cat=g_['Категория'],period=g_['Период'],events=[dict(d=g_['Период'],t=g_['Категория'],w=g_['Персоны'],ids=[],hid=False)],
      coord='точно' if g_['Точность']=='exact' else ('объект' if g_['Точность']=='object' else 'примерно'),src=g_['Источник'],geo='',about=g_['Факт / событие'],who=g_['Персоны']))
# studies: metrics table
ms=d['metrics'];cols=list(ms[0])
ST={'metrics':dict(ico='📜',title='Метрики и ревизии: проверка',cols=cols,rows=[[m[c] for c in cols] for m in ms])}
lc=list(d['links'][0]);ST['links']=dict(ico='🔗',title='Ссылки-подтверждения',cols=lc,rows=[[l[c] for c in lc] for l in d['links'] if l['№ персоны'] in P])
def w(name,var,obj): open(D+name,'w').write('window.%s=%s;\n'%(var,json.dumps(obj,ensure_ascii=False,indent=1)))
w('persons.js','TREE_PERSONS',persons);w('families.js','TREE_FAMILIES',F);w('sources.js','TREE_SOURCES',S)
w('places.js','TREE_PLACES',PL);w('research.js','TREE_RESEARCH',research);w('studies.js','TREE_STUDIES',ST)
print(len(persons),len(F),len(S),len(PL),'hidden',hide, {k:rom(k) for k in ['1','2','9','87','93']})
cfg=dict(title='Род КЛИНСКИХ',subtitle='Коломна — Екатеринбург (Верх-Исетский завод)',contact=dict(name='Михаил',email=''),
 short='Клинских',pageTitle='Родословие Клинских',kicker='Родословие · Коломна · Екатеринбург',heading='Род Клинских',heroArt='kolomna',
 levels=dict(viz='Коломна / ВИЗ',ekb='Екатеринбург',ru='Россия',world='Мир'),mapCenter=[56.84,60.6],mapZoom=5,
 updated=d['updated'],cutoff=1979,rootNum='1',focusNum='9')
open(D+'config.js','w').write('/* Настройки сайта рода Клинских. */\nwindow.TREE_CONFIG='+json.dumps(cfg,ensure_ascii=False,indent=1)+';\n')
M=r"""(function(){const w=t=>'https://ru.wikipedia.org/w/index.php?search='+encodeURIComponent(t);
window.TREE_MILESTONES=[
{who:'Афонасий Клинских',ids:['1'],years:'≈1780-е',intro:'Родоначальник, мещанин города Коломны. Документ о нём самом ищется в 7-й ревизии 1816 г. (ЦГАМ ф.51 оп.8 д.118).',
 ev:[{y:'1812',l:'ru',t:'Отечественная война',u:w('Отечественная война 1812 года')},{y:'1816',l:'viz',t:'7-я ревизия мещан Коломны'}]},
{who:'Матвей Афонасьевич и Авдотья Семеновна',ids:['2','3'],years:'1806 — 1855',intro:'Мещане Коломны. Сыновья Иван, Павел, Григорий, Георгий (Егор), дочь Софья.',
 ev:[{y:'1850',l:'viz',t:'Ревизия 1850 г., семья в Коломне'},{y:'1855',l:'viz',t:'Смерть Матвея Афонасьевича'},{y:'1858',l:'viz',t:'10-я ревизия: семья среди мещан Коломны'},{y:'1861',l:'ru',t:'Отмена крепостного права',u:w('Крестьянская реформа 1861 года')}]},
{who:'Георгий (Егор) Матвеевич и Екатерина Никифоровна',ids:['9','14'],years:'1844 — после 1896',intro:'Переселились из Коломны в Екатеринбург; десять детей крещены в Успенской церкви Верх-Исетского завода.',
 ev:[{y:'1871',l:'ekb',t:'Рождение дочери Елены, ВИЗ'},{y:'1883',l:'ekb',t:'Рождение сына Серапиона'},{y:'1896',l:'ekb',t:'Рождение дочери Натальи'}]},
{who:'Серапион Георгиевич',ids:['87'],years:'1883 — 1952',intro:'Младший унтер-офицер; от него идёт следующая ветвь рода.',
 ev:[{y:'1914',l:'world',t:'Первая мировая война',u:w('Первая мировая война')},{y:'1941',l:'ru',t:'Великая Отечественная война',u:w('Великая Отечественная война')}]}];})();
"""
open(D+'milestones.js','w').write(M)
h=open(out+'/assets/hero-art.js').read()
art=""" kolomna: { name:'Коломенский кремль и Ока', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
   <g stroke-opacity=".75" stroke-width="2.2">
    <path d="M60 200 V120 L80 96 L100 120 V200"/><path d="M100 160 H300"/><path d="M100 160 V150 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10 h10 v-10 h10 v10"/>
    <path d="M300 200 V100 L325 70 L350 100 V200"/><path d="M350 165 H470 V200"/>
    <path d="M490 200 V130 H540 V200 M500 130 C500 100 530 100 530 130 M515 98 V80 M508 86 H522"/>
   </g>
   <path d="M60 200 H600" stroke-opacity=".8" stroke-width="2.4"/>
   <g stroke-opacity=".5" stroke-width="1.8"><path d="M0 222 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/><path d="M10 244 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke-opacity=".3"/></g>
  </g>`},
"""
h=h.replace('window.HERO_ART = {\n','window.HERO_ART = {\n'+art,1)
open(out+'/assets/hero-art.js','w').write(h)
