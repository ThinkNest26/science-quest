/* Science Quest: "My Science Lab".
   Lab points are earned by answering science questions and spent on building rooms and furniture.
   Equipment is bought with coins in the science shop (avatar.js).
   An experiment unlocks when its room, its furniture and its equipment are all ready. */
(function(){
  function icon(k, x, y, s){ return (window.SQ_ART && window.SQ_ART.icon) ? '<g transform="translate('+x+' '+y+') scale('+s+')">'+window.SQ_ART.icon(k)+'</g>' : ''; }

  /* ---------- rooms and furniture (drawn in a 90 x 100 box, floor at the bottom) ---------- */
  var ROOMS = [
    {id:'bench',    name:'Chemistry bench',          price:0,   wall:'#E3F5F3', floor:'#C9E7E2'},
    {id:'nature',   name:'Nature corner',            price:60,  wall:'#EAF7EF', floor:'#CBE8C9'},
    {id:'forces',   name:'Forces workshop',          price:80,  wall:'#FFF5E3', floor:'#F1DDB4'},
    {id:'electric', name:'Electricity station',      price:100, wall:'#F1EDFC', floor:'#DCD3F5'},
    {id:'studio',   name:'Light and sound studio',   price:100, wall:'#FCEFF2', floor:'#F3CFD8'},
    {id:'sky',      name:'Weather and space deck',   price:120, wall:'#EAF4FD', floor:'#C9DFF5'}
  ];
  var FURN = [
    {id:'labbench',  room:'bench',    name:'Lab bench',        price:20},
    {id:'sink',      room:'bench',    name:'Lab sink',         price:30},
    {id:'shelves',   room:'bench',    name:'Jar shelves',      price:30},
    {id:'plantshelf',room:'nature',   name:'Plant shelf',      price:30},
    {id:'aquarium',  room:'nature',   name:'Fish tank',        price:40},
    {id:'bughotel',  room:'nature',   name:'Bug hotel',        price:30},
    {id:'workbench', room:'forces',   name:'Workbench',        price:30},
    {id:'ramptrack', room:'forces',   name:'Ramp track',       price:40},
    {id:'magnetboard',room:'forces',  name:'Magnet board',     price:40},
    {id:'circuitboard',room:'electric',name:'Circuit table',   price:40},
    {id:'desklamp',  room:'electric', name:'Desk lamp',        price:30},
    {id:'turbine',   room:'electric', name:'Wind turbine',     price:50},
    {id:'curtains',  room:'studio',   name:'Blackout curtains',price:40},
    {id:'drumkit',   room:'studio',   name:'Sound corner',     price:40},
    {id:'mirrorwall',room:'studio',   name:'Mirror wall',      price:40},
    {id:'weatherstation',room:'sky',  name:'Weather station',  price:40},
    {id:'scope',     room:'sky',      name:'Big telescope',    price:60},
    {id:'starmap',   room:'sky',      name:'Star map',         price:30}
  ];
  function furn(id){
    switch(id){
      case 'labbench': return '<rect x="4" y="54" width="82" height="10" rx="3" fill="#7A5A3A"/><rect x="10" y="64" width="8" height="36" fill="#5C4330"/><rect x="72" y="64" width="8" height="36" fill="#5C4330"/><path d="M20 54 h10 v-16 l8 16z" fill="#BFE3F7" stroke="#7FA8C9" stroke-width="1.5"/><path d="M44 54 l6 -22 h6 l6 22z" fill="#F2789B" opacity=".85"/><rect x="66" y="34" width="8" height="20" rx="3" fill="#A88BEB"/>';
      case 'sink': return '<rect x="8" y="50" width="74" height="50" rx="4" fill="#E8ECEF" stroke="#9AA3AE" stroke-width="2"/><rect x="18" y="52" width="54" height="10" rx="3" fill="#C9D1DC"/><path d="M45 52 V30 h14 v6" stroke="#9AA3AE" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M59 40 v6" stroke="#7DD3FC" stroke-width="3" stroke-dasharray="3 3"/><rect x="22" y="72" width="46" height="22" rx="3" fill="#D5DBE3"/>';
      case 'shelves': return '<rect x="6" y="10" width="78" height="90" rx="3" fill="#B7834A"/><rect x="12" y="16" width="66" height="78" fill="#F7EBDD"/><rect x="12" y="40" width="66" height="4" fill="#B7834A"/><rect x="12" y="68" width="66" height="4" fill="#B7834A"/>'+[[18,'#F6B93B'],[34,'#47A86A'],[50,'#E0607E'],[64,'#3D8BE0']].map(function(j,i){ return '<rect x="'+j[0]+'" y="'+(i%2?24:22)+'" width="10" height="'+(i%2?16:18)+'" rx="2" fill="'+j[1]+'"/><rect x="'+j[0]+'" y="'+(i%2?50:48)+'" width="10" height="'+(i%2?18:20)+'" rx="2" fill="'+j[1]+'" opacity=".7"/>'; }).join('');
      case 'plantshelf': return '<rect x="6" y="40" width="78" height="6" fill="#B7834A"/><rect x="6" y="74" width="78" height="6" fill="#B7834A"/><rect x="10" y="46" width="4" height="54" fill="#8A5E2E"/><rect x="76" y="46" width="4" height="54" fill="#8A5E2E"/>'+[16,40,64].map(function(x,i){ return '<path d="M'+x+' 40 h14 l-2 -12 h-10z" fill="#C2452F"/><path d="M'+(x+7)+' 28 v-'+(10+i*5)+'" stroke="#2F8F57" stroke-width="2.5"/><ellipse cx="'+(x+3)+'" cy="'+(24-i*4)+'" rx="5" ry="3" fill="#47A86A"/><ellipse cx="'+(x+11)+'" cy="'+(22-i*4)+'" rx="5" ry="3" fill="#5BBE7C"/>'; }).join('')+'<path d="M24 74 h12 l-2 -10 h-8z M54 74 h12 l-2 -10 h-8z" fill="#C2452F"/>';
      case 'aquarium': return '<rect x="4" y="66" width="82" height="34" fill="#7A5A3A"/><rect x="6" y="24" width="78" height="42" rx="3" fill="#9ED6F5" stroke="#4A5677" stroke-width="2.5"/><path d="M30 46 c6 -6 14 -6 18 0 c-4 6 -12 6 -18 0z M30 46 l-6 -4 v8z" fill="#F6B93B"/><path d="M60 38 c4 -4 10 -4 12 0 c-2 4 -8 4 -12 0z" fill="#E0607E"/><path d="M14 64 c2 -10 -4 -14 2 -24 M74 64 c-2 -8 4 -12 0 -20" stroke="#47A86A" stroke-width="3" fill="none"/><circle cx="52" cy="30" r="2" fill="#fff"/><circle cx="56" cy="36" r="1.5" fill="#fff"/>';
      case 'bughotel': return '<path d="M10 40 L45 14 L80 40Z" fill="#8A5E2E"/><rect x="14" y="40" width="62" height="60" fill="#B7834A"/><rect x="18" y="44" width="26" height="24" fill="#5C4330"/>'+[22,28,34,40].map(function(x){ return '<circle cx="'+x+'" cy="56" r="3" fill="#D9B98A"/>'; }).join('')+'<rect x="48" y="44" width="24" height="24" fill="#C9A66A"/><path d="M50 48 h20 M50 54 h20 M50 60 h20" stroke="#7A5A3A" stroke-width="2"/><rect x="18" y="72" width="54" height="24" fill="#6B8E4E"/>'+icon('ladybird',52,74,.14);
      case 'workbench': return '<rect x="4" y="52" width="82" height="10" fill="#B7834A"/><rect x="10" y="62" width="8" height="38" fill="#8A5E2E"/><rect x="72" y="62" width="8" height="38" fill="#8A5E2E"/><rect x="10" y="10" width="70" height="40" fill="#E9D3A1" stroke="#B7834A" stroke-width="2"/><path d="M22 18 v18 M34 16 l-4 22 M48 18 h10 v4 h-10z M66 18 v24" stroke="#4A5677" stroke-width="3"/><circle cx="66" cy="16" r="4" fill="none" stroke="#4A5677" stroke-width="2.5"/>';
      case 'ramptrack': return '<path d="M4 100 L86 50 V100Z" fill="#E9D3A1" stroke="#B7834A" stroke-width="2"/><path d="M4 100 L86 50" stroke="#F6B93B" stroke-width="4"/><g transform="rotate(-31 62 62)"><rect x="52" y="54" width="20" height="8" rx="2" fill="#E2453A"/><circle cx="56" cy="64" r="3" fill="#2B2E34"/><circle cx="68" cy="64" r="3" fill="#2B2E34"/></g>';
      case 'magnetboard': return '<rect x="6" y="10" width="78" height="56" rx="3" fill="#E8ECEF" stroke="#6B7280" stroke-width="3"/><rect x="40" y="66" width="8" height="34" fill="#6B7280"/>'+icon('magnet',12,16,.22)+icon('paperclip',42,16,.18)+icon('nail',60,36,.18)+'<rect x="16" y="46" width="22" height="10" fill="#E2453A"/><rect x="27" y="46" width="11" height="10" fill="#3D8BE0"/>';
      case 'circuitboard': return '<rect x="4" y="54" width="82" height="10" fill="#4A5677"/><rect x="10" y="64" width="6" height="36" fill="#2F3B57"/><rect x="74" y="64" width="6" height="36" fill="#2F3B57"/><rect x="14" y="40" width="10" height="14" fill="#2B2E34"/><rect x="14" y="40" width="10" height="5" fill="#F6B93B"/><path d="M19 40 C19 24 60 24 64 34 M24 50 h40" stroke="#E2453A" stroke-width="2" fill="none"/><circle cx="66" cy="34" r="8" fill="#FFE58A" stroke="#C98A12" stroke-width="2"/><rect x="40" y="46" width="12" height="6" fill="#9AA3AE"/>';
      case 'desklamp': return '<rect x="20" y="92" width="40" height="8" rx="3" fill="#4A5677"/><path d="M40 92 L30 56 L56 30" stroke="#4A5677" stroke-width="5" fill="none"/><path d="M50 22 L74 36 L60 46Z" fill="#7559D1"/><path d="M66 42 L80 72 L50 60Z" fill="#FFF3B0" opacity=".7"/>';
      case 'turbine': return '<path d="M44 100 L48 34 L52 100Z" fill="#E8ECEF" stroke="#9AA3AE" stroke-width="1.5"/><circle cx="48" cy="32" r="4" fill="#9AA3AE"/><path d="M48 32 L46 4 L52 6Z M48 32 L74 44 L70 48Z M48 32 L24 46 L22 40Z" fill="#fff" stroke="#9AA3AE" stroke-width="1.5"/>';
      case 'curtains': return '<rect x="4" y="6" width="82" height="6" rx="3" fill="#4A5677"/><path d="M6 12 c4 30 -4 60 4 88 h30 c-6 -28 2 -58 -2 -88z" fill="#2F2A4D"/><path d="M84 12 c-4 30 4 60 -4 88 h-30 c6 -28 -2 -58 2 -88z" fill="#2F2A4D"/><path d="M14 20 v76 M76 20 v76" stroke="#433C6B" stroke-width="3"/>';
      case 'drumkit': return '<ellipse cx="30" cy="72" rx="22" ry="7" fill="#E2453A"/><rect x="8" y="72" width="44" height="22" fill="#E2453A"/><ellipse cx="30" cy="94" rx="22" ry="6" fill="#B33328"/><ellipse cx="30" cy="72" rx="20" ry="5" fill="#F7F1E3"/><path d="M66 100 V40" stroke="#9AA3AE" stroke-width="3"/><ellipse cx="66" cy="40" rx="18" ry="4" fill="#F6B93B"/><path d="M40 50 L54 64 M46 48 L58 60" stroke="#B7834A" stroke-width="3" stroke-linecap="round"/>';
      case 'mirrorwall': return '<rect x="8" y="6" width="74" height="94" rx="6" fill="#8B5CF6"/><rect x="14" y="12" width="62" height="82" rx="4" fill="#CFE3F2"/><path d="M24 34 L44 18 M24 56 L60 24 M40 80 L68 56" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>';
      case 'weatherstation': return '<path d="M44 100 V20" stroke="#6B7280" stroke-width="4"/><path d="M44 24 h28" stroke="#6B7280" stroke-width="3"/><path d="M60 24 l12 -6 v12z" fill="#E2453A"/><path d="M44 40 l-26 -8 M44 40 l-20 12" stroke="#6B7280" stroke-width="2"/><circle cx="18" cy="32" r="5" fill="#3D8BE0"/><circle cx="24" cy="52" r="5" fill="#3D8BE0"/><rect x="56" y="62" width="20" height="38" rx="2" fill="#fff" stroke="#9AA3AE" stroke-width="2"/><rect x="60" y="80" width="12" height="16" fill="#9ED6F5"/>';
      case 'scope': return '<path d="M30 100 L46 62 L62 100" stroke="#4A5677" stroke-width="4" fill="none"/><g transform="rotate(-35 46 50)"><rect x="18" y="42" width="66" height="16" rx="4" fill="#2F4B8C"/><rect x="78" y="38" width="12" height="24" rx="3" fill="#3D8BE0"/></g>';
      case 'starmap': return '<rect x="8" y="8" width="74" height="64" rx="4" fill="#1B2350" stroke="#B7834A" stroke-width="3"/>'+[[20,20],[34,30],[50,22],[64,36],[28,52],[56,56],[70,18]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2" fill="#FFF6C9"/>'; }).join('')+'<path d="M20 20 L34 30 L50 22 L64 36" stroke="#FFF6C9" stroke-width="1" opacity=".6" fill="none"/><circle cx="66" cy="58" r="6" fill="#F6B93B"/>';
    }
    return '';
  }

  /* ---------- small things that are tested in experiments ---------- */
  function heap(col, grain){ var s = '<path d="M20 96 C30 64 90 64 100 96Z" fill="'+col+'" stroke="#B9AF9A" stroke-width="3"/>'; if (grain) [[40,86],[56,80],[70,88],[84,90],[50,92],[64,84]].forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2.4" fill="'+grain+'"/>'; }); return s; }
  var THINGS = {
    sugar: heap('#FFFFFF','#E5E7EB'), salt: heap('#F3F4F6','#D1D5DB'), sand: heap('#E6CF96','#B8955A'), rice: heap('#FAF7EE','#E8DFC8'),
    flour: heap('#FBF8F1'), chalkdust: heap('#EDE9E3','#CFC8BE'), coffee: heap('#6B3E22','#4A2814')
  };
  function thing(k){ return THINGS[k] || (window.SQ_ART ? window.SQ_ART.icon(k) : ''); }

  /* ---------- experiments ----------
     type 'test': try each object in turn; type 'race': run conditions side by side; type 'slider': change one thing and watch */
  var EXP = [
    {id:'magnets', title:'Which things are magnetic?', room:'forces', furn:'magnetboard', kit:['magnet'], topic:'Forces and magnets',
     q:'Will every metal object stick to the magnet?', o:['No, only some metals stick','Yes, every metal sticks','Nothing will stick'], a:0,
     type:'test', scene:'magnet', yes:'It sticks!', no:'It does not stick',
     things:[['Paperclip','paperclip',1],['Iron nail','nail',1],['Steel spoon','spoon',1],['Foil','foil',0],['Drinks can','can',0],['Pencil','pencil',0],['Button','button',0],['Cork','cork',0]],
     explain:'Magnets attract things made of iron or steel, like paperclips, nails and steel spoons. Foil and most drinks cans are made of aluminium, which is a metal but is not magnetic. Wood, plastic and cork are not magnetic either.'},
    {id:'conductors', title:'Which materials let electricity through?', room:'electric', furn:'circuitboard', kit:['circuit'], topic:'Electricity',
     q:'Put each object in the gap in the circuit. Which ones will make the bulb light?', o:['The metal objects','The plastic objects','All of them'], a:0,
     type:'test', scene:'circuit', yes:'The bulb lights up!', no:'The bulb stays off',
     things:[['Paperclip','paperclip',1],['Foil','foil',1],['Iron nail','nail',1],['Steel spoon','spoon',1],['Pencil (wood)','pencil',0],['Button (plastic)','button',0],['Elastic band','elastic',0],['Paper','paper',0]],
     explain:'Materials that let electricity flow through them are called conductors. Metals are good conductors, so the bulb lights. Wood, plastic, rubber and paper are insulators: they stop electricity, so the circuit is broken and the bulb stays off.'},
    {id:'dissolve', title:'Which solids dissolve in water?', room:'bench', furn:'sink', kit:['beaker'], topic:'States of matter',
     q:'Which of these will disappear into the water when you stir?', o:['Sugar and salt','Sand and rice','All of them'], a:0,
     type:'test', scene:'beaker', yes:'It dissolves!', no:'It does not dissolve',
     things:[['Sugar','sugar',1],['Salt','salt',1],['Coffee granules','coffee',1],['Sand','sand',0],['Rice','rice',0],['Chalk dust','chalkdust',0]],
     explain:'When a solid dissolves, it breaks into pieces so tiny that they spread through the water and you can no longer see them. Sugar, salt and coffee dissolve. Sand, rice and chalk do not: they sink to the bottom or make the water cloudy.'},
    {id:'melting', title:'Where does ice melt fastest?', room:'bench', furn:'labbench', kit:['thermo','stopwatch'], topic:'States of matter',
     q:'Four ice cubes are put in different places. Which will melt first?', o:['In warm water','In the fridge','On the table'], a:0,
     type:'race', unit:'minutes to melt', lowWins:true, run:'Start the stopwatch',
     rows:[['In the fridge (5°C)','icecube',120,'Over 2 hours'],['On the table (21°C)','icecube',45,'45 minutes'],['On a sunny windowsill (35°C)','icecube',20,'20 minutes'],['In warm water (40°C)','icecube',6,'6 minutes']],
     explain:'Ice melts when it is heated above 0°C. The warmer the place, the faster heat flows into the ice, so it melts more quickly. Warm water touches every side of the cube, so it melts the fastest of all.'},
    {id:'filter', title:'Can we clean muddy water?', room:'bench', furn:'sink', kit:['funnel','beaker'], topic:'Materials',
     q:'Which will make muddy water the clearest?', o:['Pouring it through filter paper','Pouring it through a sieve','Just leaving it in a jug for one minute'], a:0,
     type:'race', unit:'clearness', lowWins:false, run:'Pour the muddy water',
     rows:[['Left in a jug for 1 minute','bucket',10,'Still very muddy'],['Through a sieve','window',35,'Big bits removed'],['Through filter paper','paper',90,'Almost clear']],
     explain:'Filter paper has tiny holes. Water can pass through, but bits of soil are too big and get trapped. A sieve has bigger holes, so it only catches the large pieces. Filtering separates a solid from a liquid. (It still is not safe to drink!)'},
    {id:'plants', title:'What do plants need to grow?', room:'nature', furn:'plantshelf', kit:['seedtray'], topic:'Plants',
     q:'Three bean plants are grown for 10 days. Which will grow tallest and greenest?', o:['Light and water','Dark cupboard with water','Light but no water'], a:0,
     type:'race', unit:'height after 10 days (cm)', lowWins:false, run:'Grow for 10 days',
     rows:[['Light and water','sunflower',14,'14 cm, green and strong'],['Dark cupboard, with water','cresspale',9,'9 cm, pale and floppy'],['Light, no water','cressdry',2,'2 cm, dried up']],
     explain:'Plants need light and water to grow well. In the dark, a plant grows tall and thin looking for light, but turns pale because it cannot make food. Without water, it dries up and stops growing.'},
    {id:'friction', title:'Which surface makes the most friction?', room:'forces', furn:'ramptrack', kit:['toycar','tape'], topic:'Forces',
     q:'The car rolls down the same ramp onto three surfaces. Where will it travel furthest?', o:['Smooth wood','Carpet','Bubble wrap'], a:0,
     type:'race', unit:'distance travelled (cm)', lowWins:false, run:'Let the car go',
     rows:[['Smooth wood','wood',150,'150 cm'],['Carpet','sock',60,'60 cm'],['Bubble wrap','plastic',35,'35 cm']],
     explain:'Friction is a force that slows things down when surfaces rub together. Smooth surfaces make less friction, so the car keeps rolling. Rough, bumpy surfaces make more friction and stop the car sooner. It was a fair test: same car, same ramp, same height.'},
    {id:'evaporation', title:'Where does water evaporate fastest?', room:'sky', furn:'weatherstation', kit:['jug'], topic:'States of matter',
     q:'Four saucers of water are left for 2 days. Which will dry up first?', o:['Warm and windy garden','Dark cupboard','Cool shady corner'], a:0,
     type:'race', unit:'water left after 2 days (ml)', lowWins:true, run:'Wait 2 days',
     rows:[['Warm, windy garden','windsock',0,'0 ml, all gone!'],['In front of a fan','vane',10,'10 ml'],['Sunny windowsill','sun',30,'30 ml'],['Dark cupboard','window',90,'90 ml']],
     explain:'Evaporation is when liquid water turns into an invisible gas called water vapour. Warmth gives water particles more energy to escape, and wind carries the vapour away. So the warm, windy garden dried first, and the cool, still cupboard hardly changed.'},
    {id:'shadows', title:'How can you make a shadow bigger?', room:'studio', furn:'curtains', kit:['torchkit'], topic:'Light',
     q:'What happens to the shadow when you move the puppet closer to the torch?', o:['It gets bigger','It gets smaller','It stays the same'], a:0,
     type:'slider', scene:'shadow', label:'Move the puppet', minL:'Near the torch', maxL:'Near the wall',
     explain:'A shadow forms when an opaque object blocks the light. When the puppet is close to the torch, it blocks a lot of the light, so the shadow is big. When it moves nearer the wall, it blocks less light, so the shadow gets smaller and sharper.'},
    {id:'pitch', title:'How can a ruler change its sound?', room:'studio', furn:'drumkit', kit:['ruler'], topic:'Sound',
     q:'You twang a ruler over the edge of a table. What happens when you make the part hanging over shorter?', o:['The sound gets higher','The sound gets lower','Nothing changes'], a:0,
     type:'slider', scene:'ruler', label:'Change how much ruler hangs over the edge', minL:'Short', maxL:'Long', sound:true,
     explain:'Sounds are made by vibrations. A short ruler vibrates very quickly, which makes a high-pitched sound. A long ruler vibrates more slowly, which makes a low-pitched sound. Twanging harder makes it louder, but does not change the pitch.'}
  ];

  /* ---------- scenes for "test" experiments ---------- */
  function testScene(scene, obj, state){
    var t = obj ? thing(obj[1]) : '', s = '';
    if (scene==='magnet') {
      s = '<rect width="360" height="200" rx="16" fill="#FFF5E3"/><rect x="0" y="160" width="360" height="40" fill="#F1DDB4"/>' + icon('magnet', 250, 40, 1);
      if (obj) s += '<g class="tobj'+(state==='result' && obj[2] ? ' stick' : state==='result' ? ' wobble' : '')+'"><g transform="translate(60 70) scale(.8)">'+t+'</g></g>';
    } else if (scene==='circuit') {
      var on = state==='result' && obj && obj[2];
      s = '<rect width="360" height="200" rx="16" fill="#F1EDFC"/><rect x="40" y="120" width="44" height="26" rx="4" fill="#2B2E34"/><rect x="40" y="120" width="16" height="26" fill="#F6B93B"/>'+
          '<path d="M84 133 H140 M220 133 H300 V60 H200 M160 60 H62 V120" stroke="#E2453A" stroke-width="5" fill="none"/>'+
          '<circle cx="180" cy="56" r="18" fill="'+(on?'#FFE58A':'#F7F9FB')+'" stroke="#9AA3AE" stroke-width="3"/><rect x="172" y="70" width="16" height="10" fill="#9AA3AE"/>'+
          (on ? '<path d="M180 26 v-12 M156 34 l-8 -8 M204 34 l8 -8 M152 56 h-12 M208 56 h12" stroke="#F6B93B" stroke-width="4" stroke-linecap="round"/>' : '')+
          '<circle cx="140" cy="133" r="5" fill="#4A5677"/><circle cx="220" cy="133" r="5" fill="#4A5677"/>';
      if (obj) s += '<g transform="translate(144 100) scale(.6)">'+t+'</g>';
    } else { // beaker of water
      var gone = state==='result' && obj && obj[2];
      s = '<rect width="360" height="200" rx="16" fill="#E3F5F3"/><path d="M120 40 h120 v130 a10 10 0 0 1 -10 10 h-100 a10 10 0 0 1 -10 -10z" fill="#fff" fill-opacity=".6" stroke="#9AA3AE" stroke-width="4"/>'+
          '<path d="M124 80 h112 v88 a8 8 0 0 1 -8 8 h-96 a8 8 0 0 1 -8 -8z" fill="'+(gone && obj[1]==='coffee' ? '#C8A27A' : '#BFE7FF')+'" opacity=".85"/>';
      if (obj) s += state==='result' ? (obj[2] ? '<g class="fade"><g transform="translate(140 100) scale(.65)">'+t+'</g></g>' : '<g transform="translate(140 118) scale(.65)">'+t+'</g>')
                                     : '<g transform="translate(140 6) scale(.65)">'+t+'</g>';
      if (state==='result') s += '<path d="M196 30 L184 150" stroke="#B7834A" stroke-width="6" stroke-linecap="round"/>';
    }
    return '<svg viewBox="0 0 360 200" width="100%" style="display:block;max-width:520px;margin:0 auto">'+s+'</svg>';
  }
  /* ---------- scenes for "slider" experiments (v goes from 0 to 1) ---------- */
  function sliderScene(scene, v){
    var s = '';
    if (scene==='shadow') {
      var px = 90 + v*190, size = 26 * (330 - 40) / (330 - px + 30) ;
      s = '<rect width="360" height="200" rx="16" fill="#2F2A4D"/><rect x="330" y="10" width="20" height="180" fill="#F7F1E3"/>'+
          '<path d="M60 100 L330 '+(100-size*1.8)+' V'+(100+size*1.8)+'Z" fill="#FFF3B0" opacity=".25"/>'+
          '<ellipse cx="338" cy="100" rx="8" ry="'+(size*1.6).toFixed(1)+'" fill="#1F2B4D"/>'+
          icon('torch', 4, 70, .55)+
          '<g transform="translate('+(px-16)+' 70)"><path d="M16 60 V30" stroke="#B7834A" stroke-width="3"/><circle cx="16" cy="18" r="13" fill="#F6B93B"/><path d="M6 10 l-4 -10 l10 6 M26 10 l4 -10 l-10 6" fill="#F6B93B"/><circle cx="12" cy="17" r="2" fill="#1F2B4D"/><circle cx="20" cy="17" r="2" fill="#1F2B4D"/></g>'+
          '<text x="180" y="190" font-size="13" font-family="Nunito,Arial" font-weight="800" fill="#fff" text-anchor="middle">Shadow height: '+Math.round(size*3.2)+' cm</text>';
    } else {
      var len = 20 + v*110, wob = 4 + (1-v)*10;
      s = '<rect width="360" height="200" rx="16" fill="#FCEFF2"/><rect x="0" y="110" width="200" height="90" fill="#B7834A"/><rect x="0" y="104" width="200" height="8" fill="#8A5E2E"/>'+
          '<rect x="80" y="96" width="'+(120+len)+'" height="8" rx="2" fill="#F6D365" stroke="#C98A12"/><rect x="90" y="86" width="40" height="12" rx="3" fill="#4A5677"/>'+
          '<path d="M'+(200+len)+' '+(100-wob)+' v'+(wob*2)+'" stroke="#E0607E" stroke-width="3" stroke-dasharray="3 3"/>'+
          '<text x="270" y="40" font-size="15" font-family="Nunito,Arial" font-weight="800" fill="#1F2B4D" text-anchor="middle">Overhang: '+Math.round(5+v*25)+' cm</text>'+
          '<text x="270" y="62" font-size="15" font-family="Nunito,Arial" font-weight="900" fill="#7559D1" text-anchor="middle">'+(v<.34?'High pitch':v<.67?'Middle pitch':'Low pitch')+'</text>';
    }
    return '<svg viewBox="0 0 360 200" width="100%" style="display:block;max-width:520px;margin:0 auto">'+s+'</svg>';
  }

  window.SQ_LAB = {ROOMS:ROOMS, FURN:FURN, EXP:EXP, furn:furn, thing:thing, testScene:testScene, sliderScene:sliderScene, icon:icon};
})();
