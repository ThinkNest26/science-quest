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
  var EYEC = ['#6B4226','#2B2233','#3E7D52','#3D72B8','#9A7440','#6E7480'];
  var EMB = [['atom','⚛️ Atom'],['flask','🧪 Flask'],['planet','🪐 Planet'],['leaf','🍃 Leaf'],['bolt','⚡ Lightning'],['magnet','🧲 Magnet']];
  var LEGS = [['jeans','👖 Jeans'],['skirt','Skirt and leggings'],['trousers','Smart trousers']];

  /* shop: id, name, slot, price, colour (for coats) */
  var SHOP = [
    // measuring and recording
    {id:'notebook',  name:'Lab notebook',      slot:'hand', cat:'measure', price:15},
    {id:'ruler',     name:'Ruler',             slot:'hand', cat:'measure', price:15},
    {id:'tape',      name:'Tape measure',      slot:'hand', cat:'measure', price:20},
    {id:'thermo',    name:'Thermometer',       slot:'hand', cat:'measure', price:25},
    {id:'jug',       name:'Measuring jug',     slot:'hand', cat:'measure', price:25},
    {id:'stopwatch', name:'Stopwatch',         slot:'hand', cat:'measure', price:30},
    {id:'forcemeter',name:'Force meter',       slot:'hand', cat:'measure', price:35},
    {id:'scales',    name:'Weighing scales',   slot:'hand', cat:'measure', price:40},
    {id:'datalogger',name:'Data logger',       slot:'hand', cat:'measure', price:60},
    // chemistry and materials
    {id:'testtube',  name:'Test tube',         slot:'hand', cat:'chem', price:25},
    {id:'pipette',   name:'Pipette',           slot:'hand', cat:'chem', price:20},
    {id:'beaker',    name:'Beaker',            slot:'hand', cat:'chem', price:25},
    {id:'funnel',    name:'Funnel and filter', slot:'hand', cat:'chem', price:25},
    {id:'petri',     name:'Petri dish',        slot:'hand', cat:'chem', price:25},
    {id:'litmus',    name:'Indicator paper',   slot:'hand', cat:'chem', price:30},
    {id:'mortar',    name:'Pestle and mortar', slot:'hand', cat:'chem', price:35},
    {id:'rack',      name:'Test tube rack',    slot:'hand', cat:'chem', price:40},
    {id:'flask',     name:'Bubbling flask',    slot:'hand', cat:'chem', price:40},
    {id:'burner',    name:'Bunsen burner',     slot:'hand', cat:'chem', price:60},
    // living things
    {id:'magnifier', name:'Magnifying glass',  slot:'hand', cat:'bio', price:20},
    {id:'tweezers',  name:'Tweezers',          slot:'hand', cat:'bio', price:15},
    {id:'bugpot',    name:'Bug viewer pot',    slot:'hand', cat:'bio', price:25},
    {id:'seedtray',  name:'Seed tray',         slot:'hand', cat:'bio', price:30},
    {id:'net',       name:'Bug net',           slot:'hand', cat:'bio', price:40},
    {id:'quadrat',   name:'Quadrat',           slot:'hand', cat:'bio', price:35},
    {id:'skull',     name:'Skeleton model',    slot:'hand', cat:'bio', price:55},
    {id:'stetho',    name:'Stethoscope',       slot:'neck', cat:'bio', price:50},
    {id:'binoculars',name:'Binoculars',        slot:'neck', cat:'bio', price:50},
    {id:'microscope',name:'Microscope',        slot:'hand', cat:'bio', price:90},
    // forces, light, sound and electricity
    {id:'magnet',    name:'Horseshoe magnet',  slot:'hand', cat:'phys', price:30},
    {id:'barmagnet', name:'Bar magnet',        slot:'hand', cat:'phys', price:25},
    {id:'spring',    name:'Spring',            slot:'hand', cat:'phys', price:20},
    {id:'torchkit',  name:'Torch',             slot:'hand', cat:'phys', price:25},
    {id:'mirrorkit', name:'Mirror',            slot:'hand', cat:'phys', price:25},
    {id:'tuningfork',name:'Tuning fork',       slot:'hand', cat:'phys', price:30},
    {id:'toycar',    name:'Toy car and ramp',  slot:'hand', cat:'phys', price:35},
    {id:'pulley',    name:'Pulley',            slot:'hand', cat:'phys', price:40},
    {id:'circuit',   name:'Battery and bulb',  slot:'hand', cat:'phys', price:45},
    {id:'buzzer',    name:'Buzzer circuit',    slot:'hand', cat:'phys', price:45},
    {id:'solar',     name:'Solar panel',       slot:'hand', cat:'phys', price:60},
    // earth, weather and space
    {id:'hammer',    name:'Rock hammer',       slot:'hand', cat:'earth', price:35},
    {id:'fossil',    name:'Fossil',            slot:'hand', cat:'earth', price:40},
    {id:'compass',   name:'Compass',           slot:'hand', cat:'earth', price:30},
    {id:'raingauge', name:'Rain gauge',        slot:'hand', cat:'earth', price:30},
    {id:'windsock',  name:'Windsock',          slot:'hand', cat:'earth', price:30},
    {id:'vane',      name:'Weather vane',      slot:'hand', cat:'earth', price:35},
    {id:'globe',     name:'Globe',             slot:'hand', cat:'earth', price:50},
    {id:'telescope', name:'Telescope',         slot:'hand', cat:'earth', price:70},
    {id:'rocket',    name:'Model rocket',      slot:'hand', cat:'earth', price:80},
    // safety and headgear
    {id:'goggles',   name:'Safety goggles',    slot:'head', cat:'gear', price:30},
    {id:'gloves',    name:'Safety gloves',     slot:'hand', cat:'gear', price:20},
    {id:'earmuffs',  name:'Ear defenders',     slot:'head', cat:'gear', price:35},
    {id:'headlamp',  name:'Cave headlamp',     slot:'head', cat:'gear', price:45},
    {id:'hardhat',   name:'Hard hat',          slot:'head', cat:'gear', price:40},
    {id:'explorer',  name:'Explorer hat',      slot:'head', cat:'gear', price:45},
    {id:'lanyard',   name:'Lab pass',          slot:'neck', cat:'gear', price:20},
    {id:'helmet',    name:'Space helmet',      slot:'head', cat:'gear', price:120},
    // lab coats (two are free)
    {id:'coat-white',name:'White lab coat',    slot:'coat', cat:'coat', price:0,  col:'#FFFFFF'},
    {id:'coat-sky',  name:'Sky lab coat',      slot:'coat', cat:'coat', price:0,  col:'#DCEBFB'},
    {id:'coat-mint', name:'Mint lab coat',     slot:'coat', cat:'coat', price:40, col:'#CFF1E2'},
    {id:'coat-lilac',name:'Lilac lab coat',    slot:'coat', cat:'coat', price:40, col:'#E6DEFA'},
    {id:'coat-sun',  name:'Sunny lab coat',    slot:'coat', cat:'coat', price:40, col:'#FFF0B8'},
    {id:'coat-coral',name:'Coral lab coat',    slot:'coat', cat:'coat', price:40, col:'#FFD6CF'},
    // companions
    {id:'plant',     name:'Potted seedling',   slot:'pet', cat:'pet', price:30},
    {id:'beetle',    name:'Pet beetle',        slot:'pet', cat:'pet', price:50},
    {id:'tortoise',  name:'Tortoise',          slot:'pet', cat:'pet', price:70},
    {id:'owl',       name:'Owl',               slot:'pet', cat:'pet', price:90},
    {id:'robot',     name:'Robot helper',      slot:'pet', cat:'pet', price:100},
    // places (backgrounds); the lab is free
    {id:'bg-lab',    name:'Science lab',       slot:'bg', cat:'bg', price:0},
    {id:'bg-garden', name:'Nature garden',     slot:'bg', cat:'bg', price:60},
    {id:'bg-ocean',  name:'Under the sea',     slot:'bg', cat:'bg', price:80},
    {id:'bg-forest', name:'Rainforest',        slot:'bg', cat:'bg', price:80},
    {id:'bg-volcano',name:'Volcano',           slot:'bg', cat:'bg', price:90},
    {id:'bg-space',  name:'Outer space',       slot:'bg', cat:'bg', price:100}
  ];
  var BYID = {}; SHOP.forEach(function(x){ BYID[x.id] = x; });

  function def(l){
    l = l || {};
    var o = {kind:l.kind||'girl', skin:l.skin|0, hair:l.hair, hc:l.hc|0, sc:l.sc|0, glasses:!!l.glasses, freckles:!!l.freckles,
             face:l.face||'smile', shirt:l.shirt|0, eye:l.eye|0,
             emb:l.emb||(l.kind==='boy'?'atom':'flask'), legs:l.legs||(l.kind==='boy'?'jeans':'skirt'), coat:l.coat||'coat-white', wear:l.wear||{}, owned:l.owned||{}};
    if (l.lab) o.lab = l.lab;   // the child's science lab travels with their scientist
    if (!o.hair || !HAIR[o.kind].some(function(h){return h[0]===o.hair;})) o.hair = o.kind==='girl' ? 'long' : 'short';
    if (!o.wear.bg) o.wear.bg = 'bg-lab';
    return o;
  }
  function owns(l, id){ var it = BYID[id]; return it && (it.price === 0 || !!(l.owned||{})[id]); }
  function spent(l){ var n = 0, o = (l && l.owned) || {}; for (var k in o) if (BYID[k]) n += BYID[k].price; return n; }
  function icon(k, x, y, s){ return (window.SQ_ART && window.SQ_ART.icon) ? '<g transform="translate('+x+' '+y+') scale('+s+')">'+window.SQ_ART.icon(k)+'</g>' : ''; }

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
    var s = '', ink = '#2B2233', c = HAIRC[l.hc%6], brow = l.hair==='scarf' ? '#4B2E1F' : shade(c), ec = EYEC[l.eye%6];
    // eyebrows
    if (l.face==='think') s += '<path d="M71 82 Q81 79 92 82 M108 76 Q118 70 129 76" stroke="'+brow+'" stroke-width="3.4" fill="none" stroke-linecap="round"/>';
    else s += '<path d="M71 80 Q81 74 92 78 M108 78 Q119 74 129 80" stroke="'+brow+'" stroke-width="3.4" fill="none" stroke-linecap="round"/>';
    // big shiny eyes
    var ry = l.face==='wow' ? 13.5 : 12;
    [83,117].forEach(function(x, i){
      s += '<ellipse cx="'+x+'" cy="100" rx="10.5" ry="'+ry+'" fill="#fff"/>';
      s += '<ellipse cx="'+x+'" cy="101.5" rx="8" ry="'+(ry-2.5)+'" fill="'+ec+'"/>';
      s += '<ellipse cx="'+x+'" cy="102" rx="4.6" ry="'+(ry-6)+'" fill="#1C1420"/>';
      s += '<circle cx="'+(x+3.2)+'" cy="96.5" r="3.2" fill="#fff"/><circle cx="'+(x-3)+'" cy="106" r="1.5" fill="#fff" opacity=".9"/>';
      s += '<path d="M'+(x-11)+' 98 Q'+x+' '+(86-(ry-12))+' '+(x+11)+' 98" stroke="'+ink+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
      if (l.kind==='girl') s += i===0 ? '<path d="M73 94 l-5 -3 M73.5 98 l-5.5 -1" stroke="'+ink+'" stroke-width="2" stroke-linecap="round"/>'
                                      : '<path d="M127 94 l5 -3 M126.5 98 l5.5 -1" stroke="'+ink+'" stroke-width="2" stroke-linecap="round"/>';
    });
    // nose, cheeks and freckles
    s += '<path d="M97.5 111 Q100 113.5 102.5 111" stroke="'+shade(SKIN[l.skin%6])+'" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
    s += '<ellipse cx="69" cy="114" rx="7.5" ry="4.5" fill="#F28B9B" opacity=".45"/><ellipse cx="131" cy="114" rx="7.5" ry="4.5" fill="#F28B9B" opacity=".45"/>';
    if (l.freckles) [[66,110],[71,112],[64,114],[134,110],[129,112],[136,114]].forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.2" fill="#9B5B3A" opacity=".8"/>'; });
    // mouth
    if (l.face==='grin') s += '<path d="M84 116 Q100 120 116 116 Q114 134 100 135 Q86 134 84 116Z" fill="#7A2E3A"/><path d="M86 117 Q100 121 114 117 L113 121 Q100 124 87 121Z" fill="#fff"/><path d="M91 129 Q100 124 109 129 Q105 134.5 100 134.5 Q95 134.5 91 129Z" fill="#F28B9B"/>';
    else if (l.face==='wow') s += '<ellipse cx="100" cy="123" rx="6.5" ry="8" fill="#7A2E3A"/><ellipse cx="100" cy="127" rx="4" ry="3" fill="#F28B9B"/>';
    else if (l.face==='think') s += '<path d="M91 122 Q99 118 110 121" stroke="'+ink+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
    else s += '<path d="M88 117 Q100 120 112 117 Q110 131 100 132 Q90 131 88 117Z" fill="#7A2E3A"/><path d="M93 127 Q100 122.5 107 127 Q104 132 100 132 Q96 132 93 127Z" fill="#F28B9B"/>';
    if (l.glasses) s += '<g fill="#fff" fill-opacity=".18" stroke="#6A4BC4" stroke-width="3"><circle cx="83" cy="100" r="15"/><circle cx="117" cy="100" r="15"/></g><path d="M98 98 Q100 95.5 102 98 M68 97 L58 94 M132 97 L142 94" stroke="#6A4BC4" stroke-width="3" fill="none" stroke-linecap="round"/>';
    return s;
  }

  /* little picture on the T-shirt */
  function emblem(k, x, y, col){
    var st = 'stroke="'+col+'" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"';
    switch(k){
      case 'flask': return '<path d="M'+(x-3)+' '+(y-9)+' v6 l-6 11 a2 2 0 0 0 2 3 h14 a2 2 0 0 0 2 -3 l-6 -11 v-6 M'+(x-5)+' '+(y-9)+' h10" '+st+'/><path d="M'+(x-6.5)+' '+(y+5)+' h13 l2 4 h-17z" fill="'+col+'"/>';
      case 'planet': return '<circle cx="'+x+'" cy="'+y+'" r="6" fill="'+col+'"/><ellipse cx="'+x+'" cy="'+y+'" rx="11" ry="3.5" transform="rotate(-20 '+x+' '+y+')" '+st+'/>';
      case 'leaf': return '<path d="M'+(x-8)+' '+(y+8)+' C'+(x-8)+' '+(y-6)+' '+(x+2)+' '+(y-10)+' '+(x+9)+' '+(y-9)+' C'+(x+9)+' '+(y+2)+' '+(x+4)+' '+(y+9)+' '+(x-8)+' '+(y+8)+'Z M'+(x-8)+' '+(y+8)+' L'+(x+3)+' '+(y-3)+'" '+st+'/>';
      case 'bolt': return '<path d="M'+(x+2)+' '+(y-10)+' L'+(x-6)+' '+(y+2)+' H'+x+' L'+(x-2)+' '+(y+10)+' L'+(x+6)+' '+(y-2)+' H'+x+'Z" fill="'+col+'"/>';
      case 'magnet': return '<path d="M'+(x-7)+' '+(y-8)+' V'+(y+1)+' a7 7 0 0 0 14 0 V'+(y-8)+'" stroke="'+col+'" stroke-width="4.5" fill="none"/>';
    }
    return '<g '+st+'><ellipse cx="'+x+'" cy="'+y+'" rx="11" ry="4"/><ellipse cx="'+x+'" cy="'+y+'" rx="11" ry="4" transform="rotate(60 '+x+' '+y+')"/><ellipse cx="'+x+'" cy="'+y+'" rx="11" ry="4" transform="rotate(-60 '+x+' '+y+')"/></g><circle cx="'+x+'" cy="'+y+'" r="2.4" fill="'+col+'"/>';
  }

  /* ---------- equipment ---------- */
  var HAND = {x:150, y:184};
  function handItem(id, skin){
    var h = skin ? '<circle cx="'+HAND.x+'" cy="'+HAND.y+'" r="9" fill="'+skin+'" stroke="rgba(0,0,0,.12)"/>' : '', s = '';
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
      case 'ruler': s = '<rect x="156" y="104" width="14" height="84" rx="2" fill="#F6D365" stroke="#C98A12" stroke-width="2"/><path d="M156 114 h6 M156 124 h4 M156 134 h6 M156 144 h4 M156 154 h6 M156 164 h4 M156 174 h6" stroke="#8A5A00" stroke-width="2"/>'; break;
      case 'tape': s = '<circle cx="164" cy="160" r="18" fill="#F6B93B" stroke="#C98A12" stroke-width="2.5"/><circle cx="164" cy="160" r="6" fill="#4A5677"/><path d="M182 168 h16 v8 h-16z" fill="#FFF3B0" stroke="#C98A12" stroke-width="1.5"/>'; break;
      case 'jug': s = '<path d="M144 132 h34 l-4 52 h-26z" fill="#fff" fill-opacity=".8" stroke="#9AA3AE" stroke-width="2.5"/><path d="M146 156 h30 l-2 28 h-26z" fill="#9ED6F5"/><path d="M178 140 c10 0 10 20 -2 22" stroke="#9AA3AE" stroke-width="3" fill="none"/><path d="M148 142 h6 M148 152 h8 M148 162 h6 M148 172 h8" stroke="#4A5677" stroke-width="1.6"/><path d="M144 132 l-6 -4" stroke="#9AA3AE" stroke-width="3"/>'; break;
      case 'stopwatch': s = '<circle cx="164" cy="156" r="20" fill="#fff" stroke="#E2453A" stroke-width="5"/><rect x="160" y="128" width="8" height="8" rx="2" fill="#E2453A"/><path d="M164 156 V142 M164 156 l9 6" stroke="#2B2E34" stroke-width="3" stroke-linecap="round"/>'; break;
      case 'forcemeter': s = '<path d="M164 98 v10" stroke="#6B7280" stroke-width="3"/><rect x="156" y="108" width="16" height="56" rx="4" fill="#E8ECEF" stroke="#6B7280" stroke-width="2"/><path d="M160 116 h8 M160 126 h8 M160 136 h8 M160 146 h8 M160 156 h8" stroke="#3D8BE0" stroke-width="2"/><path d="M164 164 v12 a5 5 0 1 1 -6 4" stroke="#6B7280" stroke-width="3" fill="none"/>'; break;
      case 'scales': s = '<rect x="138" y="168" width="52" height="16" rx="5" fill="#4A5677"/><rect x="144" y="160" width="40" height="8" rx="3" fill="#BFC7D2"/><rect x="152" y="171" width="24" height="9" rx="2" fill="#9EE3B8"/><text x="164" y="179" font-size="8" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#1F2B4D">125g</text><circle cx="164" cy="150" r="10" fill="#E2453A"/>'; break;
      case 'datalogger': s = '<rect x="140" y="130" width="40" height="52" rx="7" fill="#2F4B8C"/><rect x="146" y="136" width="28" height="22" rx="3" fill="#CFF1E2"/><path d="M148 154 l6 -8 l6 4 l6 -10 l6 6" stroke="#16918C" stroke-width="2" fill="none"/><circle cx="152" cy="168" r="4" fill="#F6B93B"/><circle cx="168" cy="168" r="4" fill="#E0607E"/><path d="M180 140 c14 0 14 -24 4 -30" stroke="#6B7280" stroke-width="2.5" fill="none"/>'; break;
      case 'pipette': s = '<g transform="rotate(20 164 150)"><rect x="160" y="112" width="8" height="64" rx="3" fill="#fff" stroke="#9AA3AE" stroke-width="2"/><path d="M162 176 l2 12 l2 -12z" fill="#9AA3AE"/><ellipse cx="164" cy="108" rx="8" ry="10" fill="#E2453A"/><rect x="161" y="150" width="6" height="24" fill="#7DD3FC"/></g><circle cx="176" cy="196" r="3" fill="#7DD3FC"/>'; break;
      case 'beaker': s = '<path d="M144 132 h36 v46 a6 6 0 0 1 -6 6 h-24 a6 6 0 0 1 -6 -6z" fill="#fff" fill-opacity=".85" stroke="#9AA3AE" stroke-width="2.5"/><path d="M146 156 h32 v22 a4 4 0 0 1 -4 4 h-24 a4 4 0 0 1 -4 -4z" fill="#F6B93B"/><path d="M144 132 l-5 -4" stroke="#9AA3AE" stroke-width="3"/><path d="M150 142 h8 M150 150 h6" stroke="#4A5677" stroke-width="1.6"/>'; break;
      case 'funnel': s = '<path d="M140 120 h48 l-18 30 v24 h-12 v-24z" fill="#fff" fill-opacity=".85" stroke="#9AA3AE" stroke-width="2.5"/><path d="M146 124 h36 l-18 22z" fill="#F7F1E3" stroke="#D9B98A" stroke-width="1.5"/><circle cx="164" cy="182" r="2.5" fill="#7DD3FC"/>'; break;
      case 'petri': s = '<ellipse cx="164" cy="166" rx="26" ry="9" fill="#fff" fill-opacity=".8" stroke="#9AA3AE" stroke-width="2.5"/><ellipse cx="164" cy="164" rx="20" ry="6" fill="#FDE7B0"/><circle cx="156" cy="163" r="2.5" fill="#47A86A"/><circle cx="168" cy="165" r="3" fill="#E0607E"/><circle cx="172" cy="162" r="2" fill="#3D8BE0"/>'; break;
      case 'litmus': s = '<rect x="148" y="118" width="10" height="56" rx="2" fill="#F2789B"/><rect x="148" y="146" width="10" height="28" fill="#3D8BE0"/><rect x="164" y="122" width="10" height="52" rx="2" fill="#F6D365"/><rect x="164" y="150" width="10" height="24" fill="#47A86A"/>'; break;
      case 'mortar': s = '<path d="M140 156 h48 c0 18 -10 28 -24 28 c-14 0 -24 -10 -24 -28z" fill="#E8ECEF" stroke="#9AA3AE" stroke-width="2.5"/><path d="M150 156 c4 -4 24 -4 28 0" fill="#C9A66A"/><path d="M170 160 L184 120" stroke="#BFC7D2" stroke-width="9" stroke-linecap="round"/>'; break;
      case 'rack': s = '<rect x="132" y="150" width="60" height="8" rx="2" fill="#B7834A"/><rect x="132" y="180" width="60" height="6" rx="2" fill="#B7834A"/><path d="M136 158 v22 M188 158 v22" stroke="#B7834A" stroke-width="4"/>'+[[144,'#E0607E'],[158,'#47A86A'],[172,'#3D8BE0'],[186,'#F6B93B']].map(function(t){ return '<rect x="'+(t[0]-5)+'" y="132" width="10" height="44" rx="5" fill="#fff" stroke="#9AA3AE" stroke-width="1.6"/><rect x="'+(t[0]-4)+'" y="158" width="8" height="17" rx="4" fill="'+t[1]+'"/>'; }).join(''); break;
      case 'burner': s = '<rect x="146" y="176" width="36" height="8" rx="3" fill="#4A5677"/><rect x="158" y="136" width="12" height="42" rx="2" fill="#9AA3AE"/><path d="M164 136 c-10 -10 -4 -22 0 -30 c4 8 10 20 0 30z" fill="#3D8BE0" opacity=".85"/><path d="M164 132 c-4 -6 -2 -12 0 -16 c2 4 4 10 0 16z" fill="#9EE3F5"/>'; break;
      case 'tweezers': s = '<path d="M154 182 L172 118 M160 184 L176 120" stroke="#9AA3AE" stroke-width="4" stroke-linecap="round"/><ellipse cx="174" cy="114" rx="4" ry="6" fill="#47A86A"/>'; break;
      case 'bugpot': s = '<rect x="142" y="140" width="40" height="40" rx="6" fill="#fff" fill-opacity=".7" stroke="#9AA3AE" stroke-width="2.5"/><rect x="140" y="130" width="44" height="12" rx="4" fill="#E2453A"/><circle cx="162" cy="136" r="5" fill="#CFEFFF" stroke="#9AA3AE"/>'+icon('ladybird',148,150,.25); break;
      case 'seedtray': s = '<rect x="132" y="164" width="60" height="20" rx="3" fill="#2B2E34"/><rect x="134" y="160" width="56" height="8" fill="#7A4A2A"/>'+[142,156,170,184].map(function(x){ return '<path d="M'+x+' 160 v-10" stroke="#47A86A" stroke-width="2.5"/><ellipse cx="'+(x-4)+'" cy="150" rx="5" ry="3" fill="#5BBE7C"/><ellipse cx="'+(x+4)+'" cy="149" rx="5" ry="3" fill="#47A86A"/>'; }).join(''); break;
      case 'quadrat': s = '<rect x="136" y="122" width="52" height="52" fill="none" stroke="#F6B93B" stroke-width="5"/><path d="M162 122 v52 M136 148 h52" stroke="#F6B93B" stroke-width="2"/><circle cx="148" cy="136" r="3" fill="#fff" stroke="#F6B93B"/><circle cx="176" cy="160" r="3" fill="#E0607E"/>'; break;
      case 'skull': s = '<circle cx="164" cy="134" r="16" fill="#F7F1E3" stroke="#C9C1AE" stroke-width="2"/><circle cx="158" cy="134" r="4" fill="#4A5677"/><circle cx="170" cy="134" r="4" fill="#4A5677"/><path d="M164 150 v34 M152 158 h24 M154 166 h20 M156 174 h16" stroke="#F7F1E3" stroke-width="4" stroke-linecap="round"/>'; break;
      case 'barmagnet': s = '<g transform="rotate(-30 164 150)"><rect x="140" y="140" width="24" height="20" fill="#E2453A"/><rect x="164" y="140" width="24" height="20" fill="#3D8BE0"/><text x="152" y="155" font-size="11" font-family="Arial" font-weight="bold" fill="#fff" text-anchor="middle">N</text><text x="176" y="155" font-size="11" font-family="Arial" font-weight="bold" fill="#fff" text-anchor="middle">S</text></g>'; break;
      case 'spring': var sp=''; for (var y=120;y<172;y+=8) sp += '<ellipse cx="164" cy="'+y+'" rx="12" ry="4" fill="none" stroke="#9AA3AE" stroke-width="3"/>'; s = sp; break;
      case 'torchkit': s = icon('torch', 140, 116, .5) + '<path d="M196 136 l18 -12 v40z" fill="#FFF3B0" opacity=".7"/>'; break;
      case 'mirrorkit': s = icon('mirror', 134, 104, .55); break;
      case 'tuningfork': s = '<path d="M156 110 v34 q0 10 8 10 q8 0 8 -10 v-34" stroke="#9AA3AE" stroke-width="6" fill="none"/><path d="M164 154 v30" stroke="#9AA3AE" stroke-width="6"/><path d="M148 116 q-6 6 0 12 M180 116 q6 6 0 12" stroke="#7559D1" stroke-width="2.5" fill="none"/>'; break;
      case 'toycar': s = '<path d="M128 184 L196 150 V184Z" fill="#D9B98A"/><g transform="rotate(-26 168 156)"><rect x="152" y="146" width="34" height="12" rx="4" fill="#E2453A"/><path d="M158 146 l4 -8 h14 l4 8z" fill="#E2453A"/><circle cx="160" cy="160" r="5" fill="#2B2E34"/><circle cx="178" cy="160" r="5" fill="#2B2E34"/></g>'; break;
      case 'pulley': s = '<path d="M136 112 h56" stroke="#7A4A2A" stroke-width="5"/><path d="M164 112 v10" stroke="#6B7280" stroke-width="3"/><circle cx="164" cy="132" r="11" fill="#BFC7D2" stroke="#6B7280" stroke-width="3"/><path d="M153 132 v32 M175 132 v40" stroke="#B7834A" stroke-width="2"/><rect x="146" y="164" width="14" height="14" fill="#4A5677"/>'; break;
      case 'buzzer': s = '<rect x="138" y="160" width="14" height="26" rx="3" fill="#2B2E34"/><rect x="138" y="160" width="14" height="9" fill="#F6B93B"/><path d="M145 160 C145 140 168 150 170 140 M152 182 C186 182 186 150 180 144" stroke="#3D8BE0" stroke-width="2.5" fill="none"/><circle cx="176" cy="134" r="11" fill="#4A5677"/><circle cx="176" cy="134" r="4" fill="#BFC7D2"/><path d="M192 124 q6 10 0 20 M198 118 q10 16 0 32" stroke="#7559D1" stroke-width="2.5" fill="none"/>'; break;
      case 'solar': s = '<g transform="rotate(-15 164 140)"><rect x="136" y="116" width="56" height="38" rx="3" fill="#2F4B8C" stroke="#BFC7D2" stroke-width="3"/><path d="M150 116 v38 M164 116 v38 M178 116 v38 M136 128 h56 M136 141 h56" stroke="#5C7FC9" stroke-width="1.6"/></g><path d="M164 154 v22" stroke="#9AA3AE" stroke-width="4"/><circle cx="196" cy="108" r="8" fill="#FFD966"/>'; break;
      case 'fossil': s = icon('ammonite', 134, 126, .5); break;
      case 'compass': s = '<circle cx="164" cy="156" r="20" fill="#F7F1E3" stroke="#B7834A" stroke-width="5"/><path d="M164 140 l5 16 l-5 4 l-5 -4z" fill="#E2453A"/><path d="M164 172 l5 -16 l-5 -4 l-5 4z" fill="#4A5677"/><text x="164" y="139" font-size="8" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#1F2B4D" dy="-1">N</text>'; break;
      case 'raingauge': s = icon('raingauge', 134, 118, .52); break;
      case 'windsock': s = icon('windsock', 136, 112, .52); break;
      case 'vane': s = icon('vane', 134, 104, .56); break;
      case 'globe': s = '<circle cx="164" cy="144" r="22" fill="#3D8BE0"/><path d="M152 132 c6 -4 12 2 8 8 c-4 6 -12 2 -12 8 c0 6 6 6 4 12 M170 126 c6 2 10 8 6 14 c-4 4 -8 0 -6 8" fill="none" stroke="#47A86A" stroke-width="5" stroke-linecap="round"/><path d="M140 144 a24 24 0 0 0 48 0" stroke="#B7834A" stroke-width="3" fill="none"/><path d="M164 168 v10 M152 182 h24" stroke="#B7834A" stroke-width="4"/>'; break;
      case 'rocket': s = '<path d="M164 96 c12 12 14 36 10 60 h-20 c-4 -24 -2 -48 10 -60z" fill="#F7F9FB" stroke="#9AA3AE" stroke-width="2.5"/><circle cx="164" cy="124" r="6" fill="#3D8BE0" stroke="#2F4B8C" stroke-width="2"/><path d="M154 140 l-10 18 h10z M174 140 l10 18 h-10z" fill="#E2453A"/><path d="M158 156 h12 l-6 14z" fill="#F6B93B"/>'; break;
      case 'gloves': s = icon('glove', 134, 128, .5); break;
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
      case 'earmuffs': return '<path d="M58 100 C56 46 144 46 142 100" stroke="#2B2E34" stroke-width="7" fill="none"/><rect x="46" y="86" width="20" height="34" rx="9" fill="#F6B93B" stroke="#C98A12" stroke-width="2"/><rect x="134" y="86" width="20" height="34" rx="9" fill="#F6B93B" stroke="#C98A12" stroke-width="2"/>';
      case 'helmet': return '<circle cx="100" cy="100" r="62" fill="#BFE3F7" fill-opacity=".28" stroke="#DDE3EA" stroke-width="6"/><path d="M62 70 Q74 50 96 44" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>';
    }
    return '';
  }
  function neckItem(id){
    if (id==='stetho') return '<path d="M84 146 C80 172 96 184 104 172 M116 146 C120 160 116 170 108 172" stroke="#2B2E34" stroke-width="3.5" fill="none"/><circle cx="104" cy="178" r="7" fill="#9AA3AE" stroke="#2B2E34" stroke-width="2.5"/>';
    if (id==='binoculars') return '<path d="M86 146 L92 176 M114 146 L108 176" stroke="#4A5677" stroke-width="3"/><rect x="84" y="172" width="14" height="24" rx="5" fill="#2B2E34"/><rect x="102" y="172" width="14" height="24" rx="5" fill="#2B2E34"/><rect x="96" y="178" width="8" height="8" fill="#4A5677"/><circle cx="91" cy="196" r="5" fill="#9EE3F5"/><circle cx="109" cy="196" r="5" fill="#9EE3F5"/>';
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
  var HEAD = 'translate(0 -34)';                                   // the head is drawn at (100,96) and lifted to (100,62)
  var HANDAT = 'translate(157 134) scale(.7) translate(-150 -184)'; // equipment sits in the raised hand
  var NECKAT = 'translate(100 110) scale(.72) translate(-100 -146)';
  var SHOE2 = ['#F28C38','#16918C','#3D8BE0','#7559D1','#F6B93B','#3D8BE0'];
  var uid = 0;
  function body(l){
    var w = l.wear || {}, skin = SKIN[l.skin%6], hc = HAIRC[l.hc%6], coat = (BYID[l.coat] && owns(l, l.coat)) ? BYID[l.coat].col : '#FFFFFF',
        sh = SHIRT[l.shirt%6], line = '#C9D1DC', id = 'avk' + (++uid);
    var s = bg(owns(l, w.bg) ? w.bg : 'bg-lab');
    s += '<g transform="'+HEAD+'">'+hairBack(l, hc)+'</g>';
    // legs, skirt and trainers
    if (l.legs==='skirt') {
      var lg = shade(sh);
      s += '<rect x="78" y="176" width="19" height="26" rx="6" fill="'+lg+'"/><rect x="103" y="176" width="19" height="26" rx="6" fill="'+lg+'"/>';
      s += '<defs><clipPath id="'+id+'"><path d="M70 160 H130 L138 188 Q100 194 62 188Z"/></clipPath></defs>';
      s += '<path d="M70 160 H130 L138 188 Q100 194 62 188Z" fill="'+sh+'"/><g clip-path="url(#'+id+')" stroke="'+lg+'" stroke-width="2.2" opacity=".55"><path d="M78 158 L72 196 M92 158 L90 196 M108 158 L110 196 M122 158 L128 196 M60 172 H140 M60 182 H140"/></g>';
      s += '<path d="M70 160 H130 L138 188 Q100 194 62 188Z" fill="none" stroke="'+lg+'" stroke-width="1.5" opacity=".6"/>';
    } else {
      var jn = l.legs==='trousers' ? '#4A5677' : '#3B5B8C', cf = l.legs==='trousers' ? '#4A5677' : '#5D80B5';
      s += '<path d="M70 160 H130 L127 200 H103 L100 176 L97 200 H73Z" fill="'+jn+'"/>';
      s += '<rect x="72" y="192" width="26" height="8" rx="2" fill="'+cf+'"/><rect x="102" y="192" width="26" height="8" rx="2" fill="'+cf+'"/>';
      if (l.legs!=='trousers') s += '<path d="M100 164 V176" stroke="#2E4870" stroke-width="1.6"/>';
    }
    [[67,1],[101,-1]].forEach(function(f){ var x = f[0];
      s += '<path d="M'+(x+4)+' 198 H'+(x+24)+' Q'+(x+34)+' 198 '+(x+34)+' 208 V210 H'+x+' V204 Q'+x+' 198 '+(x+4)+' 198Z" fill="'+sh+'"/>';
      s += '<rect x="'+(x-1)+'" y="208" width="36" height="6" rx="3" fill="#fff" stroke="'+line+'"/>';
      s += '<path d="M'+(x+22)+' 200 Q'+(x+33)+' 201 '+(x+33)+' 208 H'+(x+22)+'Z" fill="'+SHOE2[l.shirt%6]+'"/>';
      s += '<path d="M'+(x+9)+' 201 h7 M'+(x+9)+' 204 h7" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>';
    });
    // T-shirt and picture
    s += '<path d="M72 114 Q100 106 128 114 L131 166 H69Z" fill="'+sh+'"/>';
    s += emblem(l.emb, 100, 140, l.shirt%6===2 ? '#7A4A2A' : '#FFFFFF');
    // left arm hangs down
    s += '<path d="M64 124 Q56 140 55 156" stroke="'+line+'" stroke-width="19" stroke-linecap="round" fill="none"/><path d="M64 124 Q56 140 55 156" stroke="'+coat+'" stroke-width="15.5" stroke-linecap="round" fill="none"/>';
    s += '<circle cx="55" cy="163" r="7.5" fill="'+skin+'"/>';
    // open lab coat
    s += '<path d="M88 108 L68 115 Q59 119 59 132 L57 178 H87 L88 140 L95 118Z" fill="'+coat+'" stroke="'+line+'" stroke-width="2" stroke-linejoin="round"/>';
    s += '<path d="M112 108 L132 115 Q141 119 141 132 L143 178 H113 L112 140 L105 118Z" fill="'+coat+'" stroke="'+line+'" stroke-width="2" stroke-linejoin="round"/>';
    s += '<path d="M88 108 L82 122 L90 126 L95 118Z M112 108 L118 122 L110 126 L105 118Z" fill="'+coat+'" stroke="'+line+'" stroke-width="1.8" stroke-linejoin="round"/>';
    s += '<rect x="64" y="146" width="18" height="13" rx="2" fill="none" stroke="'+line+'" stroke-width="2"/><rect x="67" y="139" width="3" height="10" rx="1" fill="#3D8BE0"/><rect x="73" y="141" width="3" height="8" rx="1" fill="#E2453A"/>';
    s += '<rect x="118" y="156" width="18" height="13" rx="2" fill="none" stroke="'+line+'" stroke-width="2"/>';
    s += '<circle cx="117" cy="146" r="1.8" fill="'+line+'"/><circle cx="117" cy="160" r="1.8" fill="'+line+'"/>';
    // neck and head
    s += '<rect x="92" y="98" width="16" height="16" rx="6" fill="'+skin+'"/><path d="M92 110 Q100 115 108 110" stroke="rgba(0,0,0,.08)" stroke-width="3" fill="none"/>';
    s += '<g transform="'+HEAD+'">';
    if (l.hair !== 'scarf') s += '<ellipse cx="57" cy="103" rx="8" ry="9" fill="'+skin+'"/><ellipse cx="143" cy="103" rx="8" ry="9" fill="'+skin+'"/>';
    s += '<ellipse cx="100" cy="97" rx="43" ry="41" fill="'+skin+'"/>';
    s += face(l) + hairFront(l, hc);
    if (w.head && owns(l, w.head)) s += headItem(w.head);
    s += '</g>';
    if (w.neck && owns(l, w.neck)) s += '<g transform="'+NECKAT+'">'+neckItem(w.neck)+'</g>';
    // right arm raised, holding the equipment
    s += '<path d="M136 122 Q150 150 157 140" stroke="'+line+'" stroke-width="19" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M136 122 Q150 150 157 140" stroke="'+coat+'" stroke-width="15.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
    if (w.hand && owns(l, w.hand)) s += '<g transform="'+HANDAT+'">'+handItem(w.hand)+'</g>';
    s += '<circle cx="157" cy="134" r="7.5" fill="'+skin+'" stroke="rgba(0,0,0,.1)"/>';
    if (w.pet && owns(l, w.pet)) s += petItem(w.pet);
    return s;
  }
  function svg(look, size, label){
    var l = def(look), id = 'avc' + (++uid);
    return '<svg viewBox="0 0 200 220" width="'+(size||200)+'" height="'+Math.round((size||200)*1.1)+'" role="img" aria-label="'+(label||'My scientist')+'" style="display:block;border-radius:'+(size<60?'50%':'18px')+'">'+
      '<defs><clipPath id="'+id+'"><rect width="200" height="220" rx="18"/></clipPath></defs><g clip-path="url(#'+id+')">'+body(l)+'</g></svg>';
  }
  /* just the head and shoulders, for the little name chip */
  function headshot(look, size){
    var l = def(look), id = 'avf' + (++uid);
    return '<svg viewBox="44 6 112 112" width="'+size+'" height="'+size+'" role="img" aria-label="My scientist" style="display:block">'+
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
  window.SQ_AV = {svg:svg, headshot:headshot, item:item, fit:fit, item:item, def:def, owns:owns, spent:spent, SHOP:SHOP, BYID:BYID, SKIN:SKIN, HAIRC:HAIRC, SCARF:SCARF, SHIRT:SHIRT, HAIR:HAIR, FACES:FACES, EYEC:EYEC, EMB:EMB, LEGS:LEGS};
})();
