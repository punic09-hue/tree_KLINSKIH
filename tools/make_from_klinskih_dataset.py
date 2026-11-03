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
    fa=[x for x in ids(P[i]['ID_отца']) if x not in seen]
    if fa: v=g(fa[0],seen+(i,))+1   # поколение — по отцовской линии
    elif par: v=max(g(x,seen+(i,)) for x in par)+1
    elif sp: v=g(sp[0],seen+(i,))
    else: v=0
    gen[i]=v;return v
for i in P: g(i)
# жена со своими (в т.ч. гипотетическими) предками: выровнять её род по поколению мужа
kids_of=lambda x:[k for k in P if x in ids(P[k]['ID_отца'])+ids(P[k]['ID_матери'])]
for i in P:
    if P[i]['Пол']!='Ж' or not haspar(i): continue
    sp=[x for x in ids(P[i]['ID_супруга(ов)']) if x in gen and haspar(x)]
    if not sp or gen[sp[0]]==gen[i]: continue
    dg=gen[sp[0]]-gen[i]; AN=set(); st=[i]
    while st:
        c=st.pop()
        for x in ids(P[c]['ID_отца'])+ids(P[c]['ID_матери']):
            if x not in AN: AN.add(x); st.append(x)
    own=set(); st=[i]
    while st:
        c=st.pop()
        for k in kids_of(c):
            if k not in own: own.add(k); st.append(k)
    grp=set(AN)|{i}; st=list(AN)
    while st:
        c=st.pop()
        for k in kids_of(c):
            if k not in grp and k not in own and k!=i: grp.add(k); st.append(k)
    for x in grp: gen[x]+=dg
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
# config.js, milestones.js и hero-art.js ведутся вручную в папке сайта и здесь не перезаписываются
