/* 5 вариантов картинки для обложки. Линейная графика белым цветом с прозрачностью —
   одинаково читается на синем фоне светлой темы и тёмно-синем фоне тёмной. Все рисунки — оригинальные. */
window.HERO_ART = {
 rows: { name:'Торговые ряды', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M120 200 V110 H560 V200"/><path d="M110 110 H570 M116 100 H564 V110"/>
  <path d="M126 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M166 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M206 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M246 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M286 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M326 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M366 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M406 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M446 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M486 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 M526 200 V144.0 a14.0 14.0 0 0 1 28 0 V200 "/>
  <path d="M310 100 V70 H370 V100 M300 70 L340 46 L380 70"/><circle cx="340" cy="84" r="8"/>
 </g>
 <g stroke-opacity=".45" stroke-width="1.8"><path d="M140 200 v-14 h12 v14 M226 200 l6 -16 l6 16 M386 194 h20 v6 h-20z M470 200 v-12 a6 6 0 0 1 12 0 v12"/></g>
 <path d="M60 200 H600" stroke-opacity=".85" stroke-width="2.4"/><path d="M60 214 H600" stroke-opacity=".3" stroke-width="1.6" stroke-dasharray="10 8"/></g>`},
 shop: { name:'Мещанская лавка', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M220 200 V100 L320 60 L420 100 V200"/><path d="M210 104 L320 56 L430 104"/>
  <path d="M244 120 H396 V146 H244Z"/>
  <path d="M244 200 V160 H300 V200 M340 200 V160 H396 V200 M300 160 H340"/>
  <path d="M310 200 V172 H330 V200"/>
  <path d="M300 84 h40 v16 h-40z"/>
 </g>
 <text x="320" y="139" fill="#fff" fill-opacity=".85" stroke="none" font-family="Georgia,serif" font-size="15" text-anchor="middle" letter-spacing="2">ТОРГОВЛЯ</text>
 <g stroke-opacity=".6" stroke-width="1.8">
  <path d="M460 200 v-26 h30 v26 M456 174 h38 M466 174 v-8 h18 v8 M475 166 v-6 M490 186 h10 v6"/>
  <path d="M520 200 l8 -26 h26 l8 26z M528 174 h26"/>
  <path d="M150 200 v-30 c0 -10 30 -10 30 0 v30 M150 180 h30"/>
 </g>
 <path d="M80 200 H600" stroke-opacity=".85" stroke-width="2.4"/></g>`},
 scales: { name:'Весы и гири', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M370 210 V70 M340 210 H400 M352 210 l18 -14 l18 14"/><circle cx="370" cy="64" r="6"/>
  <path d="M270 90 L470 50"/>
  <path d="M270 90 l-30 60 M270 90 l30 60 M234 150 h72 c-4 18 -68 18 -72 0z"/>
  <path d="M470 50 l-30 60 M470 50 l30 60 M434 110 h72 c-4 18 -68 18 -72 0z"/>
 </g>
 <g stroke-opacity=".6" stroke-width="2"><path d="M252 150 l6 -18 h24 l6 18 M264 132 v-6 h12 v6"/><path d="M450 110 c-4 -20 4 -26 20 -26 s24 6 20 26"/><path d="M462 88 l8 -8 l8 8"/></g>
 <g stroke-opacity=".55" stroke-width="1.8"><path d="M520 210 l6 -22 h24 l6 22z M532 188 v-6 h12 v6"/><path d="M570 210 l4 -14 h16 l4 14z M578 196 v-4 h8 v4"/><path d="M150 210 c-10 -40 50 -40 40 0z M160 186 c6 -8 14 -8 20 0"/></g>
 <path d="M100 210 H600" stroke-opacity=".7" stroke-width="2.4"/></g>`},
 house: { name:'Мещанский дом на торговой улице', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M180 200 V110 H380 V200"/><path d="M168 112 L280 60 L392 112"/>
  <path d="M260 92 h40 v18 h-40z M280 92 v18"/>
  <path d="M200 130 h36 v40 h-36z M262 130 h36 v40 h-36z M324 130 h36 v40 h-36z"/>
  <path d="M196 130 l22 -12 l22 12 M258 130 l22 -12 l22 12 M320 130 l22 -12 l22 12"/>
  <path d="M196 174 h44 M258 174 h44 M320 174 h44"/>
  <path d="M400 200 V130 H470 V200 M394 132 L435 108 L476 132 M420 200 V160 H450 V200"/>
  <path d="M400 150 H470"/>
 </g>
 <text x="435" y="146" fill="#fff" fill-opacity=".8" stroke="none" font-family="Georgia,serif" font-size="11" text-anchor="middle">ЛАВКА</text>
 <g stroke-opacity=".5" stroke-width="1.8"><path d="M490 200 V120 M482 122 h16 M490 122 c4 -6 10 -6 14 0"/><path d="M110 200 V150 M98 200 l12 -40 l12 40 M100 176 h20"/></g>
 <path d="M60 200 H600" stroke-opacity=".85" stroke-width="2.4"/><path d="M60 214 H600 M60 228 H600" stroke-opacity=".25" stroke-width="1.6" stroke-dasharray="14 10"/></g>`},
 pier: { name:'Хлебная пристань на Оке', svg:`
  <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
 <g stroke-opacity=".85" stroke-width="2.2">
  <path d="M60 186 H300 M80 186 V210 M140 186 V210 M200 186 V210 M260 186 V210"/>
  <path d="M100 186 V150 H200 V186 M94 152 L150 126 L206 152"/>
  <path d="M220 186 c-8 -22 28 -22 20 0 M246 186 c-8 -22 28 -22 20 0 M232 170 c-8 -22 28 -22 20 0"/>
  <path d="M330 196 L350 220 H540 L560 196 Z"/><path d="M445 196 V90 M445 96 L520 186 H445"/>
  <path d="M370 196 c-8 -20 26 -20 18 0 M396 196 c-8 -20 26 -20 18 0 M383 182 c-8 -20 26 -20 18 0"/>
  <path d="M480 196 v-14 h26 v14 M486 182 v-8 h14 v8"/>
 </g><path d="M0 230 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.5" stroke-width="1.8"/><path d="M0 252 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 " stroke-opacity="0.3" stroke-width="1.8"/>
 <path d="M80 70 c10 -8 20 -8 30 0 M110 70 c10 -8 20 -8 30 0" stroke-opacity=".4" stroke-width="1.6"/></g>`},
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
