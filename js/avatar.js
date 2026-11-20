/* Science Quest: "My Scientist" characters.
   SQ_AV.svg(look, size) draws a child's scientist. SQ_AV.item(id) draws a shop item on its own.
   look = {kind:'girl'|'boy', skin, hair, hc, sc, glasses, freckles, face, shirt, coat, wear:{head,hand,neck,pet,bg}, owned:{id:date}} */
(function(){
  var SKIN = ['#FCE3CF','#F5CBA7','#E0A979','#C68650','#8D5524','#5C3A1E'];
  var HAIRC = ['#2A1E17','#4B2E1F','#7A4A2A','#B5532A','#E2B85C','#A7A9AC'];
  var SCARF = ['#F2789B','#A88BEB','#2F4B8C','#16918C','#D9B98A','#E2453A'];
  var SHIRT = ['#16918C','#7559D1','#F6B93B','#E0607E','#3D8BE0','#47A86A'];
  var HAIR = {
    girl: [['long','Long'],['ponytail','Ponytail'],['puffs','Puffs'],['bob','Bob'],['braids','Braids'],['curly','Curly'],['scarf','Headscarf']],
    boy:  [['short','Short'],['side','Side parting'],['curly','Curly'],['spiky','Spiky'],['twists','Twists'],['buzz','Buzz cut']]
  };
  var FACES = [['smile','Smile'],['grin','Big grin'],['wow','Wow!'],['think','Thinking']];

  /* shop: id, name, slot, price, colour (for coats) */
  var SHOP = [
    // lab kit (held in the hand)
    {id:'magnifier', name:'Magnifying glass', slot:'hand', price:20},
    {id:'notebook',  name:'Lab notebook',     slot:'hand', price:15},
    {id:'testtube',  name:'Test tube',        slot:'hand', price:25},
    {id:'thermo',    name:'Thermometer',      slot:'hand', price:25},
    {id:'magnet',    name:'Horseshoe magnet', slot:'hand', price:30},
    {id:'flask',     name:'Bubbling flask',   slot:'hand', price:40},
    {id:'hammer',    name:'Rock hammer',      slot:'hand', price:35},
    {id:'net',       name:'Bug net',          slot:'hand', price:40},
    {id:'circuit',   name:'Battery and bulb', slot:'hand', price:45},
    {id:'telescope', name:'Telescope',        slot:'hand', price:70},
    {id:'microscope',name:'Microscope',       slot:'hand', price:90},
    // headgear
    {id:'goggles',   name:'Safety goggles',   slot:'head', price:30},
    {id:'headlamp',  name:'Cave headlamp',    slot:'head', price:45},
    {id:'hardhat',   name:'Hard hat',         slot:'head', price:40},
    {id:'explorer',  name:'Explorer hat',     slot:'head', price:45},
    {id:'helmet',    name:'Space helmet',     slot:'head', price:120},
    // around the neck
    {id:'stetho',    name:'Stethoscope',      slot:'neck', price:50},
    {id:'lanyard',   name:'Lab pass',         slot:'neck', price:20},
    // lab coats (two are free)
    {id:'coat-white',name:'White lab coat',   slot:'coat', price:0,  col:'#FFFFFF'},
    {id:'coat-sky',  name:'Sky lab coat',     slot:'coat', price:0,  col:'#DCEBFB'},
    {id:'coat-mint', name:'Mint lab coat',    slot:'coat', price:40, col:'#CFF1E2'},
    {id:'coat-lilac',name:'Lilac lab coat',   slot:'coat', price:40, col:'#E6DEFA'},
    {id:'coat-sun',  name:'Sunny lab coat',   slot:'coat', price:40, col:'#FFF0B8'},
    {id:'coat-coral',name:'Coral lab coat',   slot:'coat', price:40, col:'#FFD6CF'},
    // companions
    {id:'plant',     name:'Potted seedling',  slot:'pet',  price:30},
    {id:'beetle',    name:'Pet beetle',       slot:'pet',  price:50},
    {id:'tortoise',  name:'Tortoise',         slot:'pet',  price:70},
    {id:'owl',       name:'Owl',              slot:'pet',  price:90},
    {id:'robot',     name:'Robot helper',     slot:'pet',  price:100},
    // places (backgrounds); the lab is free
    {id:'bg-lab',    name:'Science lab',      slot:'bg',   price:0},
    {id:'bg-garden', name:'Nature garden',    slot:'bg',   price:60},
    {id:'bg-ocean',  name:'Under the sea',    slot:'bg',   price:80},
    {id:'bg-forest', name:'Rainforest',       slot:'bg',   price:80},
    {id:'bg-volcano',name:'Volcano',          slot:'bg',   price:90},
    {id:'bg-space',  name:'Outer space',      slot:'bg',   price:100}
  ];
  var BYID = {}; SHOP.forEach(function(x){ BYID[x.id] = x; });

  function def(l){
    l = l || {};
    var o = {kind:l.kind||'girl', skin:l.skin|0, hair:l.hair, hc:l.hc|0, sc:l.sc|0, glasses:!!l.glasses, freckles:!!l.freckles,
             face:l.face||'smile', shirt:l.shirt|0, coat:l.coat||'coat-white', wear:l.wear||{}, owned:l.owned||{}};
    if (!o.hair || !HAIR[o.kind].some(function(h){return h[0]===o.hair;})) o.hair = o.kind==='girl' ? 'long' : 'short';
    if (!o.wear.bg) o.wear.bg = 'bg-lab';
    return o;
  }
  function owns(l, id){ var it = BYID[id]; return it && (it.price === 0 || !!(l.owned||{})[id]); }
  function spent(l){ var n = 0, o = (l && l.owned) || {}; for (var k in o) if (BYID[k]) n += BYID[k].price; return n; }
  function icon(k, x, y, s){ return (window.SQ_ART && SQ_ART.icon) ? '<g transform="translate('+x+' '+y+') scale('+s+')">'+SQ_ART.icon(k)+'</g>' : ''; }

  /* ---------- places ---------- */
  function bg(id){
    var g = '';
    if (id==='bg-space') {
      g = '<rect width="200" height="220" fill="#1B2350"/>';
      [[20,20],[48,48],[170,30],[150,70],[30,120],[180,130],[12,80],[120,18],[70,14]].forEach(function(p,i){ g += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(i%3?1.6:2.6)+'" fill="#FFF6C9"/>'; });
      g += '<circle cx="168" cy="56" r="16" fill="#E0607E"/><ellipse cx="168" cy="56" rx="26" ry="6" fill="none" stroke="#F6B93B" stroke-width="3"/><circle cx="26" cy="160" r="10" fill="#3D8BE0"/>';
    } else if (id==='bg-ocean') {
      g = '<rect width="200" height="220" fill="#2E8BC9"/><rect y="150" width="200" height="70" fill="#E9D3A1"/>';
      [[24,40,5],[34,70,3],[176,30,4],[168,60,6],[184,96,3]].forEach(function(b){ g += '<circle cx="'+b[0]+'" cy="'+b[1]+'" r="'+b[2]+'" fill="none" stroke="#BFE7FF" stroke-width="2"/>'; });
      g += '<path d="M150 100 c10 -10 24 -10 30 0 c-6 10 -20 10 -30 0z M150 100 l-8 -6 v12z" fill="#F6B93B"/><path d="M14 150 c4 -20 -6 -30 4 -50 M24 150 c-4 -16 8 -26 0 -44" stroke="#47A86A" stroke-width="5" fill="none" stroke-linecap="round"/>';
    } else if (id==='bg-forest') {
      g = '<rect width="200" height="220" fill="#CDEBC8"/>';
      [[10,40,'#47A86A'],[180,30,'#2F8F57'],[190,110,'#47A86A'],[6,120,'#2F8F57'],[40,6,'#5BBE7C'],[160,0,'#5BBE7C']].forEach(function(l){ g += '<ellipse cx="'+l[0]+'" cy="'+l[1]+'" rx="34" ry="18" fill="'+l[2]+'" transform="rotate(-25 '+l[0]+' '+l[1]+')"/>'; });
      g += '<path d="M176 60 c4 -6 12 -6 14 0 c-2 6 -10 6 -14 0z" fill="#E2453A"/>';
    } else if (id==='bg-volcano') {
      g = '<rect width="200" height="220" fill="#FFE1C2"/><path d="M110 150 L150 60 L170 60 L210 150Z" fill="#8A5A44"/><path d="M150 60 C152 40 168 40 170 60Z" fill="#F26B3A"/><path d="M152 62 L146 90 L156 80 L160 96 L166 62Z" fill="#F6B93B"/>'+
          '<circle cx="146" cy="30" r="10" fill="#C9C4C2"/><circle cx="160" cy="22" r="12" fill="#D9D5D3"/><circle cx="176" cy="30" r="9" fill="#C9C4C2"/><rect y="150" width="200" height="70" fill="#C9A27A"/>';
    } else if (id==='bg-garden') {
      g = '<rect width="200" height="220" fill="#E4F4FF"/><rect y="150" width="200" height="70" fill="#9AD27A"/><circle cx="170" cy="34" r="16" fill="#FFD966"/>';
      [[20,150,'#E0607E'],[40,156,'#F6B93B'],[178,152,'#7559D1'],[188,160,'#E0607E']].forEach(function(f){ g += '<path d="M'+f[0]+' '+(f[1]+20)+' V'+f[1]+'" stroke="#2F8F57" stroke-width="3"/><circle cx="'+f[0]+'" cy="'+f[1]+'" r="6" fill="'+f[2]+'"/><circle cx="'+f[0]+'" cy="'+f[1]+'" r="2.4" fill="#FFF"/>'; });
      g += '<path d="M30 60 q6 -8 12 0 q6 -8 12 0" stroke="#4A5677" stroke-width="2" fill="none"/>';
    } else { // the lab
      g = '<rect width="200" height="220" fill="#E3F5F3"/><rect x="10" y="44" width="56" height="5" rx="2" fill="#B7834A"/><rect x="134" y="44" width="56" height="5" rx="2" fill="#B7834A"/>'+
          '<path d="M18 44 v-12 h8 v12z" fill="#BFE3F7"/><path d="M34 44 l4 -14 h6 l4 14z" fill="#F2789B"/><circle cx="58" cy="37" r="7" fill="#F6B93B"/>'+
          '<path d="M142 44 v-16 h7 v16z" fill="#A88BEB"/><path d="M158 44 l4 -12 h6 l4 12z" fill="#47A86A"/><rect x="176" y="30" width="8" height="14" rx="2" fill="#3D8BE0"/>';
    }
    return g;
  }

  /* ---------- hair ---------- */
  function hairBack(l, c){
    switch (l.hair){
      case 'long':   return '<path d="M56 96 C52 46 148 46 144 96 L152 172 C128 182 72 182 48 172Z" fill="'+c+'"/>';
      case 'bob':    return '<path d="M55 98 C50 48 150 48 145 98 L148 134 C132 142 68 142 52 134Z" fill="'+c+'"/>';
      case 'ponytail': return '<path d="M138 74 C170 76 172 120 160 150 C156 128 150 112 140 100Z" fill="'+c+'"/><rect x="134" y="70" width="12" height="10" rx="4" fill="'+SHIRT[(l.shirt+1)%6]+'"/>';
      case 'puffs':  return '<circle cx="60" cy="58" r="22" fill="'+c+'"/><circle cx="140" cy="58" r="22" fill="'+c+'"/>';
      case 'braids': var b=''; for (var y=108;y<=168;y+=13){ b += '<ellipse cx="62" cy="'+y+'" rx="8" ry="8" fill="'+c+'"/><ellipse cx="138" cy="'+y+'" rx="8" ry="8" fill="'+c+'"/>'; }
                     return b + '<circle cx="62" cy="176" r="5" fill="'+SHIRT[l.shirt]+'"/><circle cx="138" cy="176" r="5" fill="'+SHIRT[l.shirt]+'"/>';
      case 'scarf':  return '<path d="M50 104 C46 36 154 36 150 104 L156 160 C132 172 68 172 44 160Z" fill="'+SCARF[l.sc%6]+'"/>';
    }
    return '';
  }
  function hairFront(l, c){
    switch (l.hair){
      case 'long': case 'bob': return '<path d="M58 98 C56 56 80 48 100 48 C122 48 146 56 142 98 C138 80 124 68 104 66 C94 78 76 86 58 98Z" fill="'+c+'"/>';
      case 'ponytail': case 'puffs': return '<path d="M59 94 C58 58 82 50 100 50 C120 50 142 58 141 94 C134 76 118 68 100 68 C82 68 66 76 59 94Z" fill="'+c+'"/>';
      case 'braids': return '<path d="M59 96 C58 58 80 50 100 50 C120 50 142 58 141 96 C136 76 116 66 101 70 L99 70 C84 66 64 76 59 96Z" fill="'+c+'"/><path d="M100 52 V70" stroke="'+shade(c)+'" stroke-width="2"/>';
      case 'scarf': var sc = SCARF[l.sc%6];
        return '<path d="M56 104 C54 52 146 52 144 104 C142 82 124 66 100 66 C76 66 58 82 56 104Z" fill="'+sc+'"/>'+
          '<path d="M58 104 C60 134 80 140 100 140 C120 140 140 134 142 104 L148 112 C146 152 122 160 100 160 C78 160 54 152 52 112Z" fill="'+sc+'"/>'+
          '<path d="M60 96 C70 74 130 74 140 96 M62 118 C72 142 128 142 138 118" stroke="'+shade(sc)+'" stroke-width="2" fill="none" opacity=".6"/>';
      case 'short': return '<path d="M58 96 C56 58 80 48 100 48 C124 48 146 60 142 96 C134 78 120 70 100 70 C82 70 66 78 58 96Z" fill="'+c+'"/>';
      case 'side': return '<path d="M59 94 C57 60 84 50 104 52 C128 54 143 66 141 94 C137 80 128 72 116 70 C108 78 88 76 72 74 C66 80 62 86 59 94Z" fill="'+c+'"/>';
      case 'buzz': return '<path d="M61 90 C62 60 82 54 100 54 C118 54 138 60 139 90 C130 74 116 68 100 68 C84 68 70 74 61 90Z" fill="'+c+'" opacity=".9"/>';
      case 'spiky': return '<path d="M58 94 L56 70 L70 72 L72 52 L86 60 L96 42 L106 58 L120 44 L124 62 L140 56 L136 74 L144 92 C130 76 70 76 58 94Z" fill="'+c+'"/>';
      case 'twists': var t = '<path d="M60 92 C60 62 140 62 140 92 C130 76 70 76 60 92Z" fill="'+c+'"/>';
        for (var x=64;x<=136;x+=12){ t += '<rect x="'+(x-5)+'" y="'+(46+Math.abs(100-x)/4)+'" width="10" height="26" rx="5" fill="'+c+'"/>'; }
        return t;
      case 'curly': var s = '';
        for (var a=195;a<=345;a+=15){ var r = a*Math.PI/180; s += '<circle cx="'+(100+42*Math.cos(r)).toFixed(1)+'" cy="'+(94+42*Math.sin(r)).toFixed(1)+'" r="13" fill="'+c+'"/>'; }
        s += '<circle cx="86" cy="58" r="13" fill="'+c+'"/><circle cx="112" cy="58" r="13" fill="'+c+'"/><circle cx="100" cy="54" r="12" fill="'+c+'"/>';
        if (l.kind==='girl') s += '<circle cx="54" cy="116" r="12" fill="'+c+'"/><circle cx="146" cy="116" r="12" fill="'+c+'"/><circle cx="56" cy="134" r="11" fill="'+c+'"/><circle cx="144" cy="134" r="11" fill="'+c+'"/>';
        return s;
    }
    return '';
  }
  function shade(hex){ var n = parseInt(hex.slice(1),16), r=(n>>16)*.75|0, g=((n>>8)&255)*.75|0, b=(n&255)*.75|0; return 'rgb('+r+','+g+','+b+')'; }

  /* ---------- face ---------- */
  function face(l){
    var s = '', ink = '#2B2233', c = HAIRC[l.hc%6];
    // eyebrows
    s += '<path d="M77 86 Q85 82 93 86 M107 86 Q115 82 123 86" stroke="'+(l.hair==='scarf'?'#4B2E1F':c)+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
    if (l.face==='think') s = '<path d="M77 84 Q85 82 93 86 M107 82 Q115 78 123 84" stroke="'+(l.hair==='scarf'?'#4B2E1F':c)+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
    // eyes
    var ey = l.face==='wow' ? 7 : 6;
    s += '<ellipse cx="85" cy="100" rx="4.6" ry="'+ey+'" fill="'+ink+'"/><ellipse cx="115" cy="100" rx="4.6" ry="'+ey+'" fill="'+ink+'"/><circle cx="86.6" cy="97.6" r="1.6" fill="#fff"/><circle cx="116.6" cy="97.6" r="1.6" fill="#fff"/>';
    if (l.kind==='girl') s += '<path d="M80 96 l-4 -3 M81 99 l-5 -1 M120 96 l4 -3 M119 99 l5 -1" stroke="'+ink+'" stroke-width="1.6" stroke-linecap="round"/>';
    // cheeks and freckles
    s += '<ellipse cx="76" cy="113" rx="7" ry="4.5" fill="#F28B9B" opacity=".35"/><ellipse cx="124" cy="113" rx="7" ry="4.5" fill="#F28B9B" opacity=".35"/>';
    if (l.freckles) [[74,108],[79,111],[72,112],[126,108],[121,111],[128,112]].forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.2" fill="#9B5B3A" opacity=".8"/>'; });
    // mouth
    if (l.face==='grin') s += '<path d="M87 114 Q100 132 113 114 Z" fill="#7A2E3A"/><path d="M93 123 Q100 129 107 123 Q100 119 93 123Z" fill="#F28B9B"/><path d="M89 115 H111" stroke="#fff" stroke-width="3"/>';
    else if (l.face==='wow') s += '<ellipse cx="100" cy="121" rx="6" ry="7.5" fill="#7A2E3A"/>';
    else if (l.face==='think') s += '<path d="M90 120 Q98 116 110 119" stroke="'+ink+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
    else s += '<path d="M88 116 Q100 127 112 116" stroke="'+ink+'" stroke-width="3.2" fill="none" stroke-linecap="round"/>';
    if (l.glasses) s += '<g fill="#fff" fill-opacity=".25" stroke="#3B2A6B" stroke-width="3"><circle cx="85" cy="100" r="11"/><circle cx="115" cy="100" r="11"/></g><path d="M96 99 Q100 96 104 99 M74 98 L62 95 M126 98 L138 95" stroke="#3B2A6B" stroke-width="3" fill="none"/>';
    return s;
  }

  /* ---------- equipment ---------- */
  var HAND = {x:150, y:184};
  function handItem(id, skin){
    var h = '<circle cx="'+HAND.x+'" cy="'+HAND.y+'" r="9" fill="'+skin+'" stroke="rgba(0,0,0,.12)"/>', s = '';
    switch(id){
      case 'magnifier': s = '<path d="M152 178 L160 160" stroke="#7A4A2A" stroke-width="7" stroke-linecap="round"/><circle cx="166" cy="146" r="16" fill="#CFEFFF" fill-opacity=".7" stroke="#6B7280" stroke-width="5"/><path d="M158 140 q4 -6 10 -6" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>'; break;
      case 'notebook': s = '<rect x="140" y="150" width="34" height="42" rx="3" fill="#F6B93B" stroke="#C98A12" stroke-width="2"/><rect x="146" y="158" width="22" height="3" fill="#fff"/><rect x="146" y="165" width="16" height="3" fill="#fff"/><path d="M140 154 h-3 M140 162 h-3 M140 170 h-3 M140 178 h-3" stroke="#6B7280" stroke-width="2"/>'; break;
      case 'testtube': s = '<g transform="rotate(14 160 156)"><rect x="152" y="126" width="16" height="56" rx="8" fill="#fff" stroke="#9AA3AE" stroke-width="2.5"/><path d="M154 156 h12 v18 a6 6 0 0 1 -12 0z" fill="#47A86A"/><rect x="150" y="124" width="20" height="5" rx="2" fill="#9AA3AE"/></g>'; break;
      case 'thermo': s = '<rect x="156" y="124" width="12" height="58" rx="6" fill="#fff" stroke="#9AA3AE" stroke-width="2.5"/><rect x="160" y="146" width="4" height="30" fill="#E2453A"/><circle cx="162" cy="180" r="7" fill="#E2453A"/>'; break;
      case 'magnet': s = icon('magnet', 138, 128, .42); break;
      case 'flask': s = '<path d="M154 126 h14 v18 l16 32 a6 6 0 0 1 -5 8 h-36 a6 6 0 0 1 -5 -8 l16 -32z" fill="#fff" stroke="#9AA3AE" stroke-width="2.5"/><path d="M145 166 h32 l5 10 a5 5 0 0 1 -4 7 h-34 a5 5 0 0 1 -4 -7z" fill="#A88BEB"/><circle cx="160" cy="118" r="4" fill="#A88BEB" opacity=".7"/><circle cx="168" cy="108" r="3" fill="#A88BEB" opacity=".5"/><circle cx="158" cy="100" r="2.4" fill="#A88BEB" opacity=".4"/>'; break;
      case 'hammer': s = '<path d="M150 186 L166 138" stroke="#B7834A" stroke-width="7" stroke-linecap="round"/><path d="M154 134 L180 142 L176 150 L166 146 L158 144Z" fill="#6B7280"/>'; break;
      case 'net': s = '<path d="M150 188 L170 112" stroke="#B7834A" stroke-width="5" stroke-linecap="round"/><ellipse cx="176" cy="98" rx="18" ry="14" fill="#fff" fill-opacity=".5" stroke="#4A5677" stroke-width="3"/><path d="M162 98 h28 M176 84 v28 M166 88 l20 20 M186 88 l-20 20" stroke="#9AA3AE" stroke-width="1.2"/>'; break;
      case 'circuit': s = '<rect x="140" y="160" width="14" height="28" rx="3" fill="#2B2E34"/><rect x="140" y="160" width="14" height="10" fill="#F6B93B"/><path d="M147 160 C147 140 172 150 172 136 M154 184 C180 184 180 150 176 140" stroke="#E2453A" stroke-width="2.5" fill="none"/><circle cx="174" cy="126" r="10" fill="#FFE58A" stroke="#C98A12" stroke-width="2"/><rect x="169" y="134" width="10" height="6" fill="#9AA3AE"/><path d="M174 106 v-6 M160 112 l-4 -4 M188 112 l4 -4" stroke="#F6B93B" stroke-width="2.5" stroke-linecap="round"/>'; break;
      case 'telescope': s = '<g transform="rotate(-38 160 160)"><rect x="140" y="152" width="58" height="14" rx="4" fill="#3D8BE0"/><rect x="190" y="148" width="12" height="22" rx="3" fill="#2F4B8C"/><rect x="134" y="155" width="10" height="8" rx="2" fill="#2F4B8C"/></g>'; break;
      case 'microscope': return '<rect x="150" y="196" width="44" height="8" rx="3" fill="#4A5677"/><path d="M182 196 C190 170 186 150 172 138" stroke="#4A5677" stroke-width="8" fill="none" stroke-linecap="round"/><rect x="160" y="128" width="12" height="40" rx="3" fill="#E8ECEF" stroke="#4A5677" stroke-width="2.5" transform="rotate(-20 166 148)"/><rect x="156" y="180" width="30" height="4" fill="#4A5677"/><circle cx="160" cy="124" r="5" fill="#2B2E34"/>' + h;
    }
    return s + h;
  }
  function headItem(id){
    switch(id){
      case 'goggles': return '<path d="M58 74 Q100 64 142 74" stroke="#2F4B8C" stroke-width="7" fill="none"/><circle cx="84" cy="72" r="13" fill="#9EE3F5" fill-opacity=".85" stroke="#2B2E34" stroke-width="4"/><circle cx="116" cy="72" r="13" fill="#9EE3F5" fill-opacity=".85" stroke="#2B2E34" stroke-width="4"/><path d="M78 66 q4 -4 8 -2 M110 66 q4 -4 8 -2" stroke="#fff" stroke-width="2.5" fill="none"/>';
      case 'headlamp': return '<path d="M58 76 Q100 62 142 76" stroke="#2B2E34" stroke-width="7" fill="none"/><rect x="88" y="58" width="24" height="16" rx="5" fill="#4A5677"/><circle cx="100" cy="66" r="6" fill="#FFE58A"/><path d="M94 52 l-6 -10 M100 50 v-12 M106 52 l6 -10" stroke="#F6B93B" stroke-width="3" stroke-linecap="round"/>';
      case 'hardhat': return '<path d="M56 82 C56 38 144 38 144 82Z" fill="#F6B93B"/><rect x="46" y="78" width="108" height="10" rx="5" fill="#E09E1A"/><rect x="94" y="44" width="12" height="36" rx="5" fill="#E09E1A"/>';
      case 'explorer': return '<ellipse cx="100" cy="70" rx="62" ry="11" fill="#C9A66A"/><path d="M68 70 C66 34 134 34 132 70Z" fill="#D9B98A"/><rect x="68" y="58" width="64" height="9" fill="#7A4A2A"/>';
      case 'helmet': return '<circle cx="100" cy="100" r="62" fill="#BFE3F7" fill-opacity=".28" stroke="#DDE3EA" stroke-width="6"/><path d="M62 70 Q74 50 96 44" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>';
    }
    return '';
  }
  function neckItem(id){
    if (id==='stetho') return '<path d="M84 146 C80 172 96 184 104 172 M116 146 C120 160 116 170 108 172" stroke="#2B2E34" stroke-width="3.5" fill="none"/><circle cx="104" cy="178" r="7" fill="#9AA3AE" stroke="#2B2E34" stroke-width="2.5"/>';
    if (id==='lanyard') return '<path d="M88 146 L98 186 M112 146 L102 186" stroke="#16918C" stroke-width="4"/><rect x="88" y="184" width="24" height="20" rx="3" fill="#fff" stroke="#16918C" stroke-width="2.5"/><rect x="92" y="188" width="8" height="8" rx="2" fill="#F6B93B"/><rect x="102" y="190" width="7" height="2.4" fill="#9AA3AE"/><rect x="102" y="195" width="6" height="2.4" fill="#9AA3AE"/>';
    return '';
  }
  function petItem(id){
    switch(id){
      case 'plant': return '<path d="M16 196 h30 l-4 22 h-22z" fill="#C2452F"/><path d="M31 196 V176" stroke="#2F8F57" stroke-width="3"/><ellipse cx="23" cy="178" rx="9" ry="5" fill="#47A86A" transform="rotate(-30 23 178)"/><ellipse cx="39" cy="176" rx="9" ry="5" fill="#5BBE7C" transform="rotate(30 39 176)"/>';
      case 'beetle': return icon('beetle', 6, 172, .38);
      case 'tortoise': return icon('tortoise', 0, 168, .44);
      case 'owl': return '<ellipse cx="30" cy="192" rx="20" ry="24" fill="#9B6B3A"/><ellipse cx="30" cy="200" rx="12" ry="14" fill="#E9D3A1"/><circle cx="22" cy="182" r="8" fill="#fff"/><circle cx="38" cy="182" r="8" fill="#fff"/><circle cx="22" cy="182" r="4" fill="#2B2233"/><circle cx="38" cy="182" r="4" fill="#2B2233"/><path d="M27 188 l3 5 l3 -5z" fill="#F6B93B"/><path d="M12 172 l6 6 M48 172 l-6 6" stroke="#7A4A2A" stroke-width="4" stroke-linecap="round"/>';
      case 'robot': return '<rect x="12" y="176" width="36" height="32" rx="8" fill="#BFC7D2" stroke="#6B7280" stroke-width="2.5"/><circle cx="23" cy="190" r="5" fill="#3D8BE0"/><circle cx="37" cy="190" r="5" fill="#3D8BE0"/><path d="M22 200 h16" stroke="#6B7280" stroke-width="3" stroke-linecap="round"/><path d="M30 176 v-10" stroke="#6B7280" stroke-width="3"/><circle cx="30" cy="164" r="4" fill="#E2453A"/><rect x="18" y="208" width="8" height="8" fill="#6B7280"/><rect x="34" y="208" width="8" height="8" fill="#6B7280"/>';
    }
    return '';
  }

  /* ---------- whole scientist ---------- */
  function body(l){
    var w = l.wear || {}, skin = SKIN[l.skin%6], hc = HAIRC[l.hc%6], coat = (BYID[l.coat] && owns(l, l.coat)) ? BYID[l.coat].col : '#FFFFFF';
    var s = bg(owns(l, w.bg) ? w.bg : 'bg-lab');
    s += hairBack(l, hc);
    // lab coat, shirt and neck
    s += '<rect x="89" y="124" width="22" height="30" rx="8" fill="'+skin+'"/>';
    s += '<path d="M38 222 C38 172 62 148 100 148 C138 148 162 172 162 222Z" fill="'+coat+'" stroke="#C9D1DC" stroke-width="2"/>';
    s += '<path d="M84 149 L100 184 L116 149 C110 146 90 146 84 149Z" fill="'+SHIRT[l.shirt%6]+'"/>';
    s += '<path d="M84 149 L100 190 M116 149 L100 190" stroke="#C9D1DC" stroke-width="2.5"/><path d="M100 190 V222" stroke="#C9D1DC" stroke-width="2"/>';
    s += '<circle cx="104" cy="200" r="2.4" fill="#C9D1DC"/><circle cx="104" cy="212" r="2.4" fill="#C9D1DC"/>';
    s += '<rect x="56" y="186" width="20" height="14" rx="2" fill="none" stroke="#C9D1DC" stroke-width="2"/><rect x="60" y="178" width="3" height="12" rx="1" fill="#3D8BE0"/><rect x="66" y="180" width="3" height="10" rx="1" fill="#E2453A"/>';
    // head
    if (l.hair !== 'scarf') s += '<circle cx="60" cy="102" r="8" fill="'+skin+'"/><circle cx="140" cy="102" r="8" fill="'+skin+'"/>';
    s += '<circle cx="100" cy="96" r="41" fill="'+skin+'"/>';
    s += face(l);
    s += hairFront(l, hc);
    if (w.neck && owns(l, w.neck)) s += neckItem(w.neck);
    if (w.head && owns(l, w.head)) s += headItem(w.head);
    if (w.pet && owns(l, w.pet)) s += petItem(w.pet);
    if (w.hand && owns(l, w.hand)) s += handItem(w.hand, skin);
    return s;
  }
  var uid = 0;
  function svg(look, size, label){
    var l = def(look), id = 'avc' + (++uid);
    return '<svg viewBox="0 0 200 220" width="'+(size||200)+'" height="'+Math.round((size||200)*1.1)+'" role="img" aria-label="'+(label||'My scientist')+'" style="display:block;border-radius:'+(size<60?'50%':'18px')+'">'+
      '<defs><clipPath id="'+id+'"><rect width="200" height="220" rx="18"/></clipPath></defs><g clip-path="url(#'+id+')">'+body(l)+'</g></svg>';
  }
  /* just the head and shoulders, for the little name chip */
  function headshot(look, size){
    var l = def(look), id = 'avf' + (++uid);
    return '<svg viewBox="44 40 112 112" width="'+size+'" height="'+size+'" role="img" aria-label="My scientist" style="display:block">'+
      '<defs><clipPath id="'+id+'"><rect width="200" height="220"/></clipPath></defs><g clip-path="url(#'+id+')">'+body(l)+'</g></svg>';
  }
  /* a shop item on its own, for the shop shelves */
  function item(id){
    var it = BYID[id]; if (!it) return '';
    var g = '<rect width="200" height="220" fill="#F7F9FB"/>';
    if (it.slot==='bg') g = bg(id);
    else if (it.slot==='coat') g += '<path d="M40 222 C40 150 64 120 100 120 C136 120 160 150 160 222Z" fill="'+it.col+'" stroke="#C9D1DC" stroke-width="3"/><path d="M84 121 L100 170 L116 121" fill="#fff" stroke="#C9D1DC" stroke-width="3"/><circle cx="104" cy="186" r="3" fill="#C9D1DC"/><circle cx="104" cy="204" r="3" fill="#C9D1DC"/>';
    else {
      var inner = it.slot==='head' ? '<circle cx="100" cy="96" r="41" fill="#EEF1F5"/>'+headItem(id)
                : it.slot==='neck' ? '<rect x="89" y="124" width="22" height="30" rx="8" fill="#EEF1F5"/><path d="M60 222 C60 172 72 148 100 148 C128 148 140 172 140 222Z" fill="#fff" stroke="#C9D1DC" stroke-width="2"/>'+neckItem(id)
                : it.slot==='pet' ? petItem(id) : handItem(id,'#F5CBA7');
      return '<svg viewBox="0 0 200 220" width="100%" role="img" aria-label="'+it.name+'" style="display:block;background:#F7F9FB" data-fit="1"><g>'+inner+'</g></svg>';
    }
    return '<svg viewBox="0 0 200 220" width="100%" role="img" aria-label="'+it.name+'" style="display:block">'+g+'</svg>';
  }

  /* zoom shop pictures so each item fills its little shelf */
  function fit(root){
    (root||document).querySelectorAll('svg[data-fit]').forEach(function(sv){
      try { var b = sv.firstChild.getBBox(), p = 14, w = b.width + p*2, h = b.height + p*2, W = Math.max(w, h/1.1), H = W*1.1;
        sv.setAttribute('viewBox', (b.x - p - (W-w)/2)+' '+(b.y - p - (H-h)/2)+' '+W+' '+H); } catch(e){}
    });
  }
  window.SQ_AV = {svg:svg, headshot:headshot, item:item, fit:fit, item:item, def:def, owns:owns, spent:spent, SHOP:SHOP, BYID:BYID, SKIN:SKIN, HAIRC:HAIRC, SCARF:SCARF, SHIRT:SHIRT, HAIR:HAIR, FACES:FACES};
})();
