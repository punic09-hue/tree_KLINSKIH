/* 5 вариантов картинки для обложки. Линейная графика белым цветом с прозрачностью —
   одинаково читается на синем фоне светлой темы и тёмно-синем фоне тёмной. Все рисунки — оригинальные. */
window.HERO_ART = {
 kolomna: { name:'Коломенский кремль над Окой', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".8" stroke-width="2.2">
  <path d="M40 196 V118 L62 88 L84 118 V196"/><path d="M52 118 V104 M72 118 V104"/>
  <path d="M84 150 V140 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 h12 v-10 h12 v10 V196"/>
  <path d="M276 196 V96 L304 58 L332 96 V196"/><path d="M286 96 V82 H322 V96 M296 196 V170 a8 8 0 0 1 16 0 V196"/>
  <path d="M332 156 H440 V196"/>
  <path d="M460 196 V134 H520 V196 M468 134 C468 104 512 104 512 134 M490 102 V78 M482 86 H498"/>
  <path d="M530 196 V150 H566 V196 M536 150 C536 130 560 130 560 150 M548 128 V114"/>
 </g>
 <path d="M20 196 H600" stroke-opacity=".85" stroke-width="2.4"/><path d="M0 218 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.5" stroke-width="1.8"/><path d="M0 240 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.3" stroke-width="1.8"/>
 <path d="M120 60 c10 -8 20 -8 30 0 M150 60 c10 -8 20 -8 30 0" stroke-opacity=".4" stroke-width="1.6"/></g>`},
 road: { name:'Путь: от Оки к Уральским горам', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <path d="M0 170 L70 120 L120 150 L190 80 L250 140 L320 100 L380 150" stroke-opacity=".35" stroke-width="2"/>
 <path d="M360 200 L430 110 L470 140 L530 70 L600 130" stroke-opacity=".8" stroke-width="2.4"/>
 <path d="M430 110 l-12 18 M530 70 l-16 24 l10 -4" stroke-opacity=".5" stroke-width="1.8"/>
 <path d="M0 250 C120 240 180 210 260 205 S420 200 470 190" stroke-opacity=".8" stroke-width="2.2" stroke-dasharray="2 10"/>
 <circle cx="40" cy="246" r="5" stroke-opacity=".9" stroke-width="2"/><circle cx="470" cy="190" r="5" stroke-opacity=".9" stroke-width="2"/>
 <path d="M30 230 V214 l10 -10 l10 10 V230" stroke-opacity=".6" stroke-width="1.8"/>
 <path d="M462 176 V160 l8 -8 l8 8 V176" stroke-opacity=".6" stroke-width="1.8"/>
 <path d="M80 40 a14 14 0 1 0 0.1 0" stroke-opacity=".35" stroke-width="1.8"/></g>`},
 church: { name:'Успенская церковь Верх-Исетского завода', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".8" stroke-width="2.2">
  <path d="M220 200 V120 H380 V200"/><path d="M220 120 L300 96 L380 120"/>
  <path d="M260 120 V96 C260 66 340 66 340 96 V120" /><path d="M300 70 V40 M290 50 H310"/>
  <path d="M400 200 V100 H440 V200 M400 100 L420 70 L440 100 M420 70 V40 M412 48 H428"/>
  <path d="M380 150 H400"/><path d="M160 200 V150 H220 M160 150 C160 130 200 130 200 150"/>
  <path d="M248 200 V160 a10 10 0 0 1 20 0 V200 M330 200 V160 a10 10 0 0 1 20 0 V200 M290 200 V166 a10 10 0 0 1 20 0 V200"/>
 </g>
 <path d="M60 200 H560" stroke-opacity=".85" stroke-width="2.4"/><path d="M0 222 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.45" stroke-width="1.8"/><path d="M0 244 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.28" stroke-width="1.8"/>
 <path d="M60 200 l-30 -20 M80 200 v-30 l-10 10 M80 170 l10 10" stroke-opacity=".35" stroke-width="1.6"/></g>`},
 train: { name:'Уральская горнозаводская дорога, 1878', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <path d="M0 210 H600 M0 222 H600" stroke-opacity=".7" stroke-width="2"/>
 <path d="M10 222 v8 M50 222 v8 M90 222 v8 M130 222 v8 M170 222 v8 M210 222 v8 M250 222 v8 M290 222 v8 M330 222 v8 M370 222 v8 M410 222 v8 M450 222 v8 M490 222 v8 M530 222 v8 M570 222 v8" stroke-opacity=".35" stroke-width="1.6"/>
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M330 196 V140 H380 V110 H420 V140 H460 L480 170 V196 Z"/><path d="M350 140 V118 h-8 v-12 h24 v12 h-8"/>
  <path d="M392 120 H410 V136 H392Z"/><circle cx="350" cy="200" r="10"/><circle cx="395" cy="200" r="14"/><circle cx="440" cy="200" r="14"/>
  <path d="M200 196 V150 H310 V196 M210 150 V138 H300 V150"/><circle cx="225" cy="202" r="8"/><circle cx="285" cy="202" r="8"/><path d="M310 186 H330"/>
  <path d="M70 196 V150 H180 V196 M80 150 V138 H170 V150"/><circle cx="95" cy="202" r="8"/><circle cx="155" cy="202" r="8"/><path d="M180 186 H200"/>
 </g>
 <path d="M354 100 c-10 -18 14 -24 4 -42 c-8 -14 14 -20 8 -36 M366 100 c14 -10 30 -6 40 -20" stroke-opacity=".45" stroke-width="2"/>
 <path d="M0 120 L60 80 L110 110 L170 60 L230 110" stroke-opacity=".25" stroke-width="2"/></g>`},
 tree: { name:'Родословное древо', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <path d="M300 250 V120" stroke-opacity=".85" stroke-width="3"/>
 <g stroke-opacity=".75" stroke-width="2.2"><path d="M300 170 C260 150 220 140 180 110 M300 150 C340 130 380 120 420 90 M300 130 C280 100 260 80 230 60 M300 125 C320 95 345 75 370 55 M180 110 C160 90 150 80 130 76 M420 90 C440 76 460 70 480 70"/></g>
 <g stroke-opacity=".6" stroke-width="2"><circle cx="300" cy="104" r="12"/><circle cx="180" cy="110" r="9"/><circle cx="420" cy="90" r="9"/><circle cx="230" cy="60" r="8"/><circle cx="370" cy="55" r="8"/><circle cx="130" cy="76" r="7"/><circle cx="480" cy="70" r="7"/></g>
 <g stroke-opacity=".4" stroke-width="1.8"><path d="M300 250 C270 255 240 262 210 262 M300 250 C330 256 360 262 392 262 M300 250 C290 258 280 266 266 272 M300 250 C312 260 326 268 340 272"/></g>
 <path d="M100 250 H500" stroke-opacity=".5" stroke-width="2"/></g>`},
 dam: { name:'Плотина и пруд ВИЗа', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
   <path d="M0 150 C60 120 110 135 160 118 S260 100 320 122 S430 104 520 120 S600 112 600 112" stroke-opacity=".25" stroke-width="2"/>
   <path d="M0 168 C80 150 140 160 220 146 S360 140 440 150 S560 140 600 146" stroke-opacity=".18" stroke-width="2"/>
   <g stroke-opacity=".75" stroke-width="2.2">
    <path d="M330 200 V120 H420 V200"/><path d="M330 120 L375 95 L420 120"/>
    <path d="M350 200 V150 H368 V200 M384 200 V150 H402 V200"/>
    <path d="M440 200 V70 H456 V200 M470 200 V88 H484 V200"/>
    <path d="M436 70 H460 M466 88 H488"/>
   </g>
   <g stroke-opacity=".45" stroke-width="2"><path d="M448 64 c-6 -14 10 -18 4 -32 c-5 -11 9 -15 6 -26"/><path d="M477 82 c-6 -12 9 -16 3 -28"/></g>
   <path d="M120 200 L190 176 H600" stroke-opacity=".8" stroke-width="2.4"/>
   <path d="M190 176 V200 M240 176 V200 M290 176 V200" stroke-opacity=".4" stroke-width="1.6"/>
   <g stroke-opacity=".55" stroke-width="1.8">
    <path d="M0 212 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/>
    <path d="M10 232 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/>
    <path d="M0 252 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke-opacity=".35"/>
   </g>
   <g stroke-opacity=".35" stroke-width="1.6"><path d="M40 140 l10 -24 l10 24 M70 136 l12 -30 l12 30 M520 112 l10 -22 l10 22 M550 110 l12 -28 l12 28"/></g>
  </g>`}
};
