/* Science Quest original art: simple flat SVG pictures, viewBox 0 0 120 120. */
(function(){
  function kid(skin, hair, shirt, style){
    var h = '';
    if (style==='bunches') h = '<circle cx="34" cy="40" r="10" fill="'+hair+'"/><circle cx="86" cy="40" r="10" fill="'+hair+'"/>';
    if (style==='puffs') h = '<circle cx="40" cy="26" r="12" fill="'+hair+'"/><circle cx="80" cy="26" r="12" fill="'+hair+'"/>';
    return '<path d="M34 120 C34 92 46 82 60 82 C74 82 86 92 86 120Z" fill="'+shirt+'"/>'+
      '<rect x="54" y="70" width="12" height="14" rx="5" fill="'+skin+'"/>'+ h +
      '<circle cx="60" cy="48" r="25" fill="'+skin+'"/>'+
      (style==='short' ? '<path d="M35 46 C35 24 85 24 85 46 C80 34 70 30 60 32 C50 30 40 34 35 46Z" fill="'+hair+'"/>'
                       : '<path d="M35 48 C33 22 87 22 85 48 C78 36 66 33 52 36 C44 38 38 42 35 48Z" fill="'+hair+'"/>')+
      '<circle cx="51" cy="50" r="3" fill="#1F2B4D"/><circle cx="69" cy="50" r="3" fill="#1F2B4D"/>'+
      '<circle cx="45" cy="58" r="4" fill="#F59C9C" opacity=".5"/><circle cx="75" cy="58" r="4" fill="#F59C9C" opacity=".5"/>'+
      '<path d="M53 60 Q60 66 67 60" stroke="#1F2B4D" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
  }
  function eyes(x1,x2,y,r){ r=r||3; return '<circle cx="'+x1+'" cy="'+y+'" r="'+r+'" fill="#1F2B4D"/><circle cx="'+x2+'" cy="'+y+'" r="'+r+'" fill="#1F2B4D"/>'; }
  function treeTrunk(){ return '<rect x="53" y="70" width="14" height="44" rx="4" fill="#8A5A36"/>'; }

  var A = {
    hazel: kid('#F2C9A5','#8B4F2A','#3FA37A','bunches'),
    maya: kid('#8D5A3B','#1E1B24','#E07A5F','puffs'),
    leo: kid('#E3B088','#3B2A20','#3D8BE0','short'),
    moss: '<path d="M18 96 C18 86 34 84 54 86 L96 86 C104 86 106 96 98 98 L22 100Z" fill="#B8D98F"/>'+
      '<circle cx="62" cy="66" r="26" fill="#C98B4E"/><path d="M62 66 m-16 0 a16 16 0 1 0 16 -16 a10 10 0 1 1 -10 10" stroke="#8A5A2B" stroke-width="4" fill="none" stroke-linecap="round"/>'+
      '<path d="M24 88 L18 66 M30 88 L30 64" stroke="#B8D98F" stroke-width="4" stroke-linecap="round"/><circle cx="18" cy="64" r="4" fill="#1F2B4D"/><circle cx="30" cy="62" r="4" fill="#1F2B4D"/>'+
      '<path d="M22 92 Q28 96 34 92" stroke="#5E7F3A" stroke-width="2" fill="none" stroke-linecap="round"/>',
    oak: treeTrunk()+'<circle cx="40" cy="52" r="24" fill="#E39B3A"/><circle cx="80" cy="52" r="24" fill="#D9822B"/><circle cx="60" cy="36" r="26" fill="#EDB34A"/>'+
      '<circle cx="30" cy="96" r="4" fill="#D9822B"/><circle cx="94" cy="104" r="4" fill="#E39B3A"/><circle cx="84" cy="88" r="3" fill="#EDB34A"/>',
    pine: '<rect x="54" y="92" width="12" height="24" rx="3" fill="#8A5A36"/><path d="M60 8 L84 44 H72 L92 72 H76 L98 98 H22 L44 72 H28 L48 44 H36Z" fill="#2E8A57"/>'+
      '<path d="M60 8 L70 24 H50Z" fill="#3FA36B"/>',
    holly: '<rect x="54" y="80" width="12" height="36" rx="4" fill="#8A5A36"/><circle cx="60" cy="54" r="38" fill="#2E7D4F"/>'+
      '<path d="M36 40 l6 -6 6 6 6 -6 6 6 -6 6 6 6 -6 6 -6 -6 -6 6 -6 -6 6 -6z" fill="#3E9B63"/><path d="M66 58 l6 -6 6 6 6 -6 6 6 -6 6 6 6 -6 6 -6 -6 -6 6 -6 -6 6 -6z" fill="#3E9B63"/>'+
      '<circle cx="54" cy="66" r="5" fill="#D63B3B"/><circle cx="62" cy="70" r="5" fill="#D63B3B"/><circle cx="58" cy="60" r="5" fill="#E84A4A"/><circle cx="80" cy="40" r="5" fill="#D63B3B"/><circle cx="40" cy="74" r="5" fill="#E84A4A"/>',
    appletree: treeTrunk()+'<circle cx="60" cy="46" r="38" fill="#5DB36F"/><circle cx="44" cy="40" r="5" fill="#E84A4A"/><circle cx="74" cy="34" r="5" fill="#E84A4A"/><circle cx="66" cy="58" r="5" fill="#E84A4A"/><circle cx="40" cy="60" r="5" fill="#E84A4A"/>',
    leaf: '<path d="M60 108 C30 90 22 50 60 12 C98 50 90 90 60 108Z" fill="#E8862E"/><path d="M60 112 V30 M60 60 L44 46 M60 76 L76 62 M60 90 L46 80" stroke="#B5621B" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
    daisy: '<path d="M60 116 V60" stroke="#3F9E5E" stroke-width="5"/><path d="M60 96 C48 92 42 84 42 78 C52 80 58 86 60 96Z" fill="#5DBB7A"/>'+
      [0,45,90,135,180,225,270,315].map(function(a){return '<ellipse cx="60" cy="30" rx="8" ry="16" fill="#fff" stroke="#E1E5EA" transform="rotate('+a+' 60 46)"/>';}).join('')+'<circle cx="60" cy="46" r="10" fill="#F6B93B"/>',
    sunflower: '<path d="M60 116 V54" stroke="#3F9E5E" stroke-width="6"/><path d="M60 90 C44 88 36 78 34 70 C48 70 58 78 60 90Z" fill="#5DBB7A"/>'+
      [0,30,60,90,120,150,180,210,240,270,300,330].map(function(a){return '<ellipse cx="60" cy="18" rx="7" ry="14" fill="#F6C33B" transform="rotate('+a+' 60 40)"/>';}).join('')+'<circle cx="60" cy="40" r="14" fill="#8A5A36"/>',
    tulip: '<path d="M60 116 V56" stroke="#3F9E5E" stroke-width="5"/><path d="M60 100 C48 96 42 80 46 68 C54 76 58 86 60 100Z" fill="#5DBB7A"/><path d="M40 30 L50 42 L60 26 L70 42 L80 30 C82 54 74 64 60 64 C46 64 38 54 40 30Z" fill="#E0607E"/>',
    plantparts: '<rect x="0" y="80" width="120" height="40" fill="#C99A6B"/>'+
      '<path d="M60 82 L48 104 M60 82 L60 112 M60 82 L72 106 M54 94 L44 98 M66 96 L78 96" stroke="#F3E3C9" stroke-width="3" stroke-linecap="round"/>'+
      '<path d="M60 82 V40" stroke="#3F9E5E" stroke-width="5"/><path d="M60 66 C44 66 36 56 34 50 C48 48 56 56 60 66Z" fill="#5DBB7A"/><path d="M60 58 C76 58 84 48 86 42 C72 40 64 48 60 58Z" fill="#5DBB7A"/>'+
      [0,40,80,120,160,200,240,280,320].map(function(a){return '<ellipse cx="60" cy="10" rx="6" ry="11" fill="#F6C33B" transform="rotate('+a+' 60 26)"/>';}).join('')+'<circle cx="60" cy="26" r="9" fill="#8A5A36"/>'+
      '<g font-family="Nunito,sans-serif" font-weight="800" font-size="8" fill="#1F2B4D"><text x="84" y="22">petals</text><text x="88" y="46">leaf</text><text x="66" y="76">stem</text><text x="84" y="114">roots</text></g>',
    kiki: '<path d="M30 70 C30 46 50 34 66 38 C84 42 92 58 88 74 C84 90 64 96 48 92 C38 90 30 82 30 70Z" fill="#2F86D6"/>'+
      '<path d="M40 76 C44 92 70 96 84 82 C80 96 58 102 44 94Z" fill="#F08A3C"/><path d="M48 72 C58 84 72 84 84 72 C80 90 56 94 48 72Z" fill="#F7A55A"/>'+
      '<path d="M84 50 L112 44 L86 58Z" fill="#1F2B4D"/><circle cx="76" cy="50" r="5" fill="#fff"/><circle cx="77" cy="50" r="3" fill="#1F2B4D"/>'+
      '<path d="M30 70 L10 80 L28 82Z" fill="#2575C0"/><path d="M44 58 C54 54 64 60 66 70 C56 72 48 68 44 58Z" fill="#5AA8EC"/><path d="M54 92 V104 M64 92 V104" stroke="#E0607E" stroke-width="3"/>',
    trout: '<path d="M14 60 C30 36 76 34 94 58 C76 82 30 84 14 60Z" fill="#9DB7A6"/><path d="M92 58 L114 40 L110 60 L114 80Z" fill="#7F9C8A"/>'+
      '<path d="M20 64 C40 74 72 74 90 62" stroke="#E7A0A8" stroke-width="6" fill="none"/>'+
      '<circle cx="46" cy="50" r="2" fill="#5E7A68"/><circle cx="60" cy="48" r="2" fill="#5E7A68"/><circle cx="72" cy="52" r="2" fill="#5E7A68"/><circle cx="54" cy="56" r="2" fill="#5E7A68"/>'+
      '<path d="M54 40 L64 28 L70 42Z" fill="#7F9C8A"/><circle cx="28" cy="56" r="4" fill="#1F2B4D"/><path d="M36 50 Q40 60 36 68" stroke="#6C8A76" stroke-width="2.5" fill="none"/>',
    frog: '<ellipse cx="60" cy="96" rx="44" ry="10" fill="#7CC4A6"/><path d="M26 92 C26 60 94 60 94 92Z" fill="#6CC27A"/>'+
      '<circle cx="42" cy="58" r="13" fill="#6CC27A"/><circle cx="78" cy="58" r="13" fill="#6CC27A"/><circle cx="42" cy="57" r="7" fill="#fff"/><circle cx="78" cy="57" r="7" fill="#fff"/>'+eyes(43,79,58,4)+
      '<path d="M44 80 Q60 90 76 80" stroke="#2E7D4F" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M24 94 C14 94 14 86 22 84 M96 94 C106 94 106 86 98 84" stroke="#4FAA62" stroke-width="5" fill="none" stroke-linecap="round"/>',
    lizard: '<path d="M8 88 C30 92 40 80 60 80 C80 80 96 72 104 66 C110 62 112 70 104 74 C96 80 90 90 70 92 C50 94 30 100 8 88Z" fill="#E1A63B"/>'+
      '<path d="M48 84 L40 100 M72 82 L82 98 M58 84 L54 98 M84 76 L94 88" stroke="#C8892A" stroke-width="4" stroke-linecap="round"/>'+
      '<circle cx="100" cy="66" r="2.5" fill="#1F2B4D"/><path d="M50 82 L54 78 L58 82 L62 78 L66 82 L70 78 L74 82" stroke="#B87A20" stroke-width="2" fill="none"/>'+
      '<circle cx="90" cy="24" r="12" fill="#F6C33B"/>',
    otter: '<path d="M6 92 C20 96 30 86 38 80" stroke="#6E4628" stroke-width="9" fill="none" stroke-linecap="round"/>'+
      '<path d="M30 84 C30 62 56 56 76 60 C92 62 98 76 92 88 C86 98 44 100 30 84Z" fill="#8A5A36"/><path d="M44 86 C50 74 72 72 86 80 C80 92 56 94 44 86Z" fill="#C9A27A"/>'+
      '<circle cx="88" cy="52" r="17" fill="#8A5A36"/><circle cx="78" cy="38" r="5" fill="#6E4628"/><circle cx="98" cy="38" r="5" fill="#6E4628"/>'+
      '<ellipse cx="94" cy="58" rx="10" ry="7" fill="#C9A27A"/>'+eyes(84,96,48,2.5)+'<ellipse cx="96" cy="55" rx="3.5" ry="2.5" fill="#1F2B4D"/>'+
      '<path d="M104 58 L114 56 M104 61 L114 63" stroke="#6E4628" stroke-width="1.5"/>'+
      '<path d="M0 100 C20 94 40 104 60 98 C80 92 100 104 120 98 V120 H0Z" fill="#7FC4E8" opacity=".8"/>',
    rabbit: '<ellipse cx="60" cy="88" rx="30" ry="24" fill="#D9CFC4"/><circle cx="60" cy="56" r="20" fill="#E6DED5"/>'+
      '<ellipse cx="50" cy="22" rx="7" ry="20" fill="#E6DED5"/><ellipse cx="70" cy="22" rx="7" ry="20" fill="#E6DED5"/><ellipse cx="50" cy="22" rx="3" ry="14" fill="#F2B6C2"/><ellipse cx="70" cy="22" rx="3" ry="14" fill="#F2B6C2"/>'+
      eyes(53,67,54)+'<path d="M57 62 L60 65 L63 62Z" fill="#E0607E"/><circle cx="90" cy="92" r="8" fill="#fff"/>',
    badger: '<ellipse cx="62" cy="84" rx="40" ry="24" fill="#7C7F86"/><path d="M14 74 C14 54 30 44 44 50 L52 78 C40 86 22 86 14 74Z" fill="#fff"/>'+
      '<path d="M18 64 C24 56 34 54 42 56 L46 70 C36 72 26 70 18 64Z" fill="#2B2F38"/><circle cx="30" cy="66" r="2.5" fill="#fff"/><circle cx="14" cy="74" r="4" fill="#2B2F38"/>'+
      '<path d="M40 104 V110 M82 104 V110" stroke="#2B2F38" stroke-width="6" stroke-linecap="round"/><circle cx="96" cy="40" r="7" fill="#4B2D5E"/><circle cx="104" cy="46" r="6" fill="#5B3A70"/>',
    cow: '<rect x="22" y="50" width="76" height="40" rx="18" fill="#fff" stroke="#D5D9DE" stroke-width="2"/><path d="M40 52 C48 60 44 72 34 72 C30 64 32 56 40 52Z M70 70 C80 64 90 70 88 80 C80 84 72 80 70 70Z" fill="#2B2F38"/>'+
      '<path d="M30 88 V108 M46 88 V108 M74 88 V108 M90 88 V108" stroke="#D5D9DE" stroke-width="7" stroke-linecap="round"/><circle cx="22" cy="50" r="16" fill="#fff" stroke="#D5D9DE" stroke-width="2"/><ellipse cx="18" cy="60" rx="10" ry="7" fill="#F2B6C2"/>'+eyes(16,28,46,2.5),
    giraffe: '<path d="M70 26 L78 26 L84 78 L66 78Z" fill="#F2C14E"/><ellipse cx="70" cy="86" rx="28" ry="14" fill="#F2C14E"/><path d="M50 96 V116 M88 96 V116" stroke="#E0A93A" stroke-width="6" stroke-linecap="round"/>'+
      '<ellipse cx="78" cy="22" rx="14" ry="9" fill="#F2C14E"/><path d="M74 12 V6 M82 12 V6" stroke="#B5621B" stroke-width="3"/><circle cx="80" cy="20" r="2.5" fill="#1F2B4D"/>'+
      '<circle cx="74" cy="44" r="4" fill="#C8892A"/><circle cx="78" cy="62" r="4" fill="#C8892A"/><circle cx="60" cy="84" r="5" fill="#C8892A"/><circle cx="80" cy="88" r="5" fill="#C8892A"/>',
    lion: '<circle cx="60" cy="56" r="34" fill="#C8792A"/><circle cx="60" cy="58" r="22" fill="#F2B04E"/>'+eyes(52,68,54)+'<path d="M56 64 L60 68 L64 64Z" fill="#8A4A1A"/><path d="M54 72 Q60 76 66 72" stroke="#8A4A1A" stroke-width="2" fill="none"/><path d="M40 92 V112 M80 92 V112" stroke="#F2B04E" stroke-width="10" stroke-linecap="round"/>',
    shark: '<path d="M8 66 C30 44 80 44 100 62 C80 78 30 80 8 66Z" fill="#8FA6BC"/><path d="M98 62 L116 42 L110 64 L116 84Z" fill="#7A92A9"/><path d="M52 50 L60 26 L70 50Z" fill="#7A92A9"/>'+
      '<path d="M14 68 C34 76 70 76 92 66 C70 80 30 80 14 68Z" fill="#E7EEF4"/><circle cx="26" cy="60" r="3" fill="#1F2B4D"/><path d="M40 60 V70 M44 60 V70 M48 60 V70" stroke="#6E869C" stroke-width="2"/>',
    bear: '<ellipse cx="60" cy="88" rx="34" ry="26" fill="#7A4E2D"/><circle cx="60" cy="50" r="26" fill="#8A5A36"/><circle cx="38" cy="30" r="9" fill="#8A5A36"/><circle cx="82" cy="30" r="9" fill="#8A5A36"/>'+
      '<ellipse cx="60" cy="58" rx="12" ry="9" fill="#C9A27A"/>'+eyes(50,70,46)+'<ellipse cx="60" cy="54" rx="5" ry="3.5" fill="#1F2B4D"/>',
    bolt: '<rect x="56" y="4" width="8" height="14" fill="#8A93A6"/><circle cx="60" cy="6" r="6" fill="#F6B93B"/>'+
      '<rect x="30" y="16" width="60" height="44" rx="14" fill="#7FCFC6" stroke="#16918C" stroke-width="3"/><rect x="38" y="26" width="44" height="24" rx="8" fill="#1F2B4D"/>'+
      '<circle cx="50" cy="38" r="5" fill="#7FE0D6"/><circle cx="70" cy="38" r="5" fill="#7FE0D6"/><path d="M54 46 Q60 50 66 46" stroke="#7FE0D6" stroke-width="2" fill="none"/>'+
      '<rect x="36" y="62" width="48" height="34" rx="10" fill="#A6DCD6" stroke="#16918C" stroke-width="3"/><circle cx="60" cy="78" r="6" fill="#F6B93B"/>'+
      '<path d="M36 70 L22 82 M84 70 L98 82" stroke="#16918C" stroke-width="5" stroke-linecap="round"/><circle cx="44" cy="106" r="9" fill="#1F2B4D"/><circle cx="76" cy="106" r="9" fill="#1F2B4D" transform="rotate(8 76 106)"/><circle cx="76" cy="106" r="3" fill="#8A93A6"/><circle cx="44" cy="106" r="3" fill="#8A93A6"/>',
    den: '<path d="M10 96 L60 30 L110 96Z" fill="#9FD2F2" opacity=".85" stroke="#3D8BE0" stroke-width="3"/><rect x="18" y="66" width="10" height="30" fill="#B07A4A"/><rect x="92" y="66" width="10" height="30" fill="#B07A4A"/>'+
      '<path d="M44 96 L60 60 L76 96Z" fill="#1F2B4D" opacity=".75"/><ellipse cx="14" cy="100" rx="10" ry="6" fill="#9CA3AF"/><ellipse cx="106" cy="100" rx="10" ry="6" fill="#9CA3AF"/><ellipse cx="34" cy="102" rx="8" ry="5" fill="#B4BAC3"/><ellipse cx="88" cy="102" rx="8" ry="5" fill="#B4BAC3"/>',
    paper: '<path d="M30 30 H90 L86 104 H34Z" fill="#E9D3AE"/><path d="M30 30 L40 20 H80 L90 30" fill="#D9BE90"/><path d="M50 70 C54 76 50 84 46 84 M70 60 C74 70 66 80 70 92" stroke="#A88A5A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M54 14 C50 6 58 2 58 2 C58 2 66 6 62 14 C60 18 56 18 54 14Z" fill="#5AA8EC"/>',
    plastic: '<path d="M14 40 C40 30 80 50 106 38 L106 84 C80 96 40 76 14 86Z" fill="#9FD2F2" stroke="#3D8BE0" stroke-width="3"/><path d="M30 46 C30 40 36 36 36 36 C36 36 42 40 42 46 C42 50 30 50 30 46Z M68 54 C68 48 74 44 74 44 C74 44 80 48 80 54 C80 58 68 58 68 54Z" fill="#3D8BE0"/><path d="M60 92 V100 M70 94 V106 M80 90 V98" stroke="#5AA8EC" stroke-width="3" stroke-linecap="round"/>',
    wood: '<rect x="14" y="44" width="92" height="32" rx="4" fill="#C8894E"/><path d="M20 56 C40 52 60 62 100 56 M24 66 C50 62 70 70 98 66" stroke="#9E6533" stroke-width="2.5" fill="none"/><circle cx="74" cy="58" r="4" fill="none" stroke="#9E6533" stroke-width="2"/>',
    metal: '<rect x="12" y="40" width="96" height="44" rx="10" fill="#BFC7D2" stroke="#8A93A6" stroke-width="3"/><path d="M26 52 L46 52 M24 60 L36 60" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
    glass: '<rect x="38" y="20" width="44" height="12" rx="3" fill="#8A93A6"/><path d="M34 34 H86 C90 34 92 38 92 42 V100 C92 106 88 110 82 110 H38 C32 110 28 106 28 100 V42 C28 38 30 34 34 34Z" fill="#D9F1FA" stroke="#7FB8D6" stroke-width="3"/><path d="M40 46 V92" stroke="#fff" stroke-width="5" stroke-linecap="round"/>',
    rock: '<path d="M14 98 C10 76 26 54 50 50 C72 44 98 58 106 80 C110 92 104 100 92 100 H24 C18 100 14 100 14 98Z" fill="#9CA3AF"/><path d="M40 64 C46 60 54 60 58 64 M70 74 C76 72 82 74 86 78" stroke="#7B828E" stroke-width="3" fill="none" stroke-linecap="round"/>',
    pencil: '<rect x="20" y="52" width="68" height="16" fill="#F6B93B"/><rect x="20" y="52" width="68" height="5" fill="#F9CD6B"/><path d="M88 52 L106 60 L88 68Z" fill="#E9C99B"/><path d="M100 57 L106 60 L100 63Z" fill="#1F2B4D"/><rect x="10" y="52" width="10" height="16" rx="3" fill="#E0607E"/>',
    key: '<circle cx="36" cy="60" r="18" fill="none" stroke="#D9A72B" stroke-width="9"/><path d="M54 60 H104 M90 60 V74 M100 60 V70" stroke="#D9A72B" stroke-width="9" stroke-linecap="square"/>',
    bucket: '<path d="M28 42 H92 L84 104 H36Z" fill="#E0607E"/><path d="M28 42 C28 10 92 10 92 42" stroke="#8A93A6" stroke-width="4" fill="none"/><rect x="24" y="38" width="72" height="10" rx="5" fill="#C94B69"/>',
    window: '<rect x="20" y="16" width="80" height="88" rx="6" fill="#D9F1FA" stroke="#B07A4A" stroke-width="7"/><path d="M60 16 V104 M20 60 H100" stroke="#B07A4A" stroke-width="6"/><path d="M30 28 L40 40 M70 28 L80 40" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
    spoon: '<ellipse cx="38" cy="40" rx="18" ry="24" fill="#BFC7D2" stroke="#8A93A6" stroke-width="3" transform="rotate(-40 38 40)"/><path d="M50 54 L96 100" stroke="#8A93A6" stroke-width="9" stroke-linecap="round"/>',
    straw: '<path d="M40 110 L76 14" stroke="#3D8BE0" stroke-width="12" stroke-linecap="round"/><path d="M44 98 L49 86 M52 78 L57 66 M60 58 L65 46 M68 38 L73 26" stroke="#fff" stroke-width="5"/>',
    squirrel: '<path d="M70 104 C112 100 116 50 94 30 C82 18 70 28 76 42 C84 56 92 80 70 104Z" fill="#D9682B"/>'+
      '<ellipse cx="54" cy="84" rx="20" ry="22" fill="#E07B3A"/><ellipse cx="52" cy="90" rx="10" ry="14" fill="#F5D1A8"/><circle cx="46" cy="52" r="16" fill="#E07B3A"/>'+
      '<path d="M36 40 L34 26 L44 36Z M52 38 L56 24 L60 38Z" fill="#E07B3A"/><circle cx="42" cy="50" r="3" fill="#1F2B4D"/><circle cx="32" cy="56" r="2.5" fill="#1F2B4D"/><circle cx="56" cy="78" r="6" fill="#A0652E"/><path d="M50 74 C54 70 60 72 62 76" stroke="#6E4628" stroke-width="3" fill="none"/>',
    vane: '<rect x="56" y="40" width="8" height="74" fill="#5B6478"/><path d="M40 114 H80" stroke="#5B6478" stroke-width="6"/>'+
      '<g class="spinme"><path d="M20 40 H100" stroke="#1F2B4D" stroke-width="5"/><path d="M100 40 L86 30 V50Z" fill="#1F2B4D"/><path d="M20 40 L10 26 H30Z M20 40 L10 54 H30Z" fill="#16918C"/></g>'+
      '<circle cx="60" cy="40" r="6" fill="#F6B93B"/><text x="56" y="22" font-family="Nunito,sans-serif" font-weight="900" font-size="12" fill="#1F2B4D">N</text>',
    sun: '<circle cx="60" cy="60" r="24" fill="#F6C33B"/>'+[0,45,90,135,180,225,270,315].map(function(a){return '<path d="M60 22 V8" stroke="#F6B93B" stroke-width="6" stroke-linecap="round" transform="rotate('+a+' 60 60)"/>';}).join('')+eyes(52,68,58)+'<path d="M52 66 Q60 72 68 66" stroke="#1F2B4D" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
    ladybird: '<ellipse cx="60" cy="66" rx="34" ry="30" fill="#E23B3B"/><path d="M60 38 V96" stroke="#1F2B4D" stroke-width="4"/><circle cx="60" cy="38" r="16" fill="#1F2B4D"/><circle cx="44" cy="60" r="6" fill="#1F2B4D"/><circle cx="76" cy="60" r="6" fill="#1F2B4D"/><circle cx="46" cy="82" r="5" fill="#1F2B4D"/><circle cx="74" cy="82" r="5" fill="#1F2B4D"/><circle cx="54" cy="34" r="3" fill="#fff"/><circle cx="66" cy="34" r="3" fill="#fff"/>',
    bell: '<path d="M60 16 C38 16 32 38 32 58 L24 82 H96 L88 58 C88 38 82 16 60 16Z" fill="#E9B13B" stroke="#C88E1C" stroke-width="3"/><circle cx="60" cy="90" r="9" fill="#C88E1C"/><path d="M14 40 Q8 56 14 72 M106 40 Q112 56 106 72" stroke="#3D8BE0" stroke-width="4" fill="none" stroke-linecap="round"/>',
    lemon: '<ellipse cx="60" cy="62" rx="42" ry="30" fill="#F8D53B" stroke="#E0B21C" stroke-width="3"/><path d="M16 62 L8 60 M104 62 L112 64" stroke="#E0B21C" stroke-width="5" stroke-linecap="round"/><path d="M60 30 C64 20 74 18 80 20 C76 28 68 32 60 30Z" fill="#5DBB7A"/>',
    strawberry: '<path d="M60 108 C30 90 22 58 34 44 C44 36 76 36 86 44 C98 58 90 90 60 108Z" fill="#E23B4A"/><path d="M38 42 L48 28 L56 40 L64 26 L70 40 L82 30 L84 44Z" fill="#3F9E5E"/>'+[[48,60],[66,58],[56,74],[72,76],[46,82],[60,92]].map(function(p){return '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="2" ry="3" fill="#FFE08A"/>';}).join(''),
    feather: '<path d="M92 12 C50 20 26 58 28 98 C60 92 90 60 92 12Z" fill="#E8ECF2" stroke="#B4BAC3" stroke-width="3"/><path d="M92 12 L20 112" stroke="#8A93A6" stroke-width="4" stroke-linecap="round"/><path d="M76 34 L62 30 M66 50 L50 48 M56 66 L40 66 M80 44 L70 52 M70 62 L60 70" stroke="#B4BAC3" stroke-width="2.5" stroke-linecap="round"/>',
    pinecone: '<path d="M60 12 C84 30 90 70 60 110 C30 70 36 30 60 12Z" fill="#8A5A36"/>'+[[60,30],[50,46],[70,46],[60,60],[46,64],[74,64],[54,78],[66,78],[60,94]].map(function(p){return '<path d="M'+(p[0]-9)+' '+p[1]+' Q'+p[0]+' '+(p[1]+10)+' '+(p[0]+9)+' '+p[1]+'" stroke="#C8894E" stroke-width="3" fill="none"/>';}).join(''),
    dandelion: '<path d="M60 116 V56" stroke="#3F9E5E" stroke-width="5"/><path d="M60 96 L44 84 L52 82 L40 72 M60 90 L76 80 L68 78 L80 68" stroke="#5DBB7A" stroke-width="5" fill="none" stroke-linejoin="round"/>'+[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map(function(a){return '<path d="M60 40 L60 14" stroke="#F6C33B" stroke-width="7" stroke-linecap="round" transform="rotate('+a+' 60 40)"/>';}).join('')+'<circle cx="60" cy="40" r="10" fill="#F2B02B"/>',
    clover: '<path d="M60 116 V60" stroke="#3F9E5E" stroke-width="5"/><path d="M60 100 C46 96 40 88 44 80 C52 82 58 90 60 100Z M60 100 C74 96 80 88 76 80 C68 82 62 90 60 100Z" fill="#5DBB7A"/>'+[[60,24],[48,32],[72,32],[52,44],[68,44],[60,52],[60,36]].map(function(p){return '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="7" ry="9" fill="#D77BB0"/>';}).join(''),
    rose: '<path d="M60 116 V60" stroke="#3F9E5E" stroke-width="5"/><path d="M60 92 C46 90 40 80 40 74 C50 76 58 82 60 92Z" fill="#5DBB7A"/><circle cx="60" cy="40" r="24" fill="#D93B4A"/><path d="M60 40 m-12 0 a12 12 0 1 0 12 -12 a7 7 0 1 1 -7 7" stroke="#A82434" stroke-width="3.5" fill="none"/><path d="M38 34 C44 22 54 18 60 18 M82 34 C76 22 66 18 60 18" stroke="#A82434" stroke-width="3" fill="none"/>',
    sponge: '<rect x="20" y="40" width="80" height="44" rx="10" fill="#F6D04D" stroke="#D9A72B" stroke-width="3"/>'+[[34,52],[52,60],[72,50],[86,66],[42,72],[64,74]].map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="4" fill="#D9A72B"/>';}).join(''),
    marble: '<circle cx="60" cy="60" r="34" fill="#BEE6F5" stroke="#7FB8D6" stroke-width="3"/><path d="M44 52 C50 40 66 40 72 48" stroke="#3D8BE0" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="48" cy="46" r="6" fill="#fff"/>',
    hat: '<path d="M26 82 C26 44 94 44 94 82Z" fill="#8E6BD8"/><rect x="22" y="78" width="76" height="16" rx="6" fill="#7559D1"/><circle cx="60" cy="38" r="10" fill="#B9A8EE"/>',
    glove: '<path d="M38 104 V60 C38 54 46 54 46 60 V40 C46 34 54 34 54 40 V36 C54 30 62 30 62 36 V40 C62 34 70 34 70 40 V62 L80 52 C86 48 92 54 88 60 L72 84 V104Z" fill="#8E6BD8" stroke="#6A4FB8" stroke-width="3"/>',
    raincoat: '<path d="M40 22 H80 L100 46 L92 54 L84 46 V106 H36 V46 L28 54 L20 46Z" fill="#F6C33B" stroke="#D9A72B" stroke-width="3"/><path d="M60 26 V106" stroke="#D9A72B" stroke-width="3"/><circle cx="66" cy="50" r="3" fill="#8A6A2A"/><circle cx="66" cy="70" r="3" fill="#8A6A2A"/><circle cx="66" cy="90" r="3" fill="#8A6A2A"/>',
    lunchbox: '<rect x="18" y="40" width="84" height="56" rx="10" fill="#3D8BE0" stroke="#2A6FBD" stroke-width="3"/><rect x="18" y="40" width="84" height="16" rx="8" fill="#5AA8EC"/><rect x="50" y="34" width="20" height="12" rx="3" fill="#8FD4A2"/>',
    ruler: '<rect x="8" y="46" width="104" height="28" rx="4" fill="#E8B86A" stroke="#B5862E" stroke-width="3"/><path d="M20 46 V58 M32 46 V54 M44 46 V58 M56 46 V54 M68 46 V58 M80 46 V54 M92 46 V58 M104 46 V54" stroke="#8A5A2B" stroke-width="2.5"/>',
    thermometer: '<rect x="50" y="10" width="20" height="78" rx="10" fill="#fff" stroke="#8A93A6" stroke-width="3"/><circle cx="60" cy="96" r="16" fill="#E23B3B" stroke="#8A93A6" stroke-width="3"/><rect x="56" y="40" width="8" height="52" fill="#E23B3B"/><path d="M70 24 H78 M70 36 H78 M70 48 H78 M70 60 H78 M70 72 H78" stroke="#8A93A6" stroke-width="2.5"/>',
    raingauge: '<path d="M40 14 H80 V100 C80 106 76 110 70 110 H50 C44 110 40 106 40 100Z" fill="#E6F4FB" stroke="#7FB8D6" stroke-width="3"/><rect x="43" y="70" width="34" height="37" rx="4" fill="#5AA8EC" opacity=".7"/><path d="M40 30 H52 M40 46 H52 M40 62 H52 M40 78 H52 M40 94 H52" stroke="#3D8BE0" stroke-width="2.5"/>',
    windsock: '<path d="M24 10 V114" stroke="#8A93A6" stroke-width="6" stroke-linecap="round"/><path d="M28 24 L104 40 L104 62 L28 78Z" fill="#F07A3C"/><path d="M47 28 L47 74 M66 32 L66 70 M85 36 L85 66" stroke="#fff" stroke-width="10"/>',
    woodlouse: '<ellipse cx="60" cy="62" rx="40" ry="24" fill="#6B7280"/>'+[34,46,58,70,82].map(function(x){return '<path d="M'+x+' 40 Q'+(x+3)+' 62 '+x+' 84" stroke="#4B5260" stroke-width="3" fill="none"/>';}).join('')+'<path d="M24 72 L16 84 M36 80 L32 92 M84 80 L88 92 M96 72 L104 84 M20 56 L8 48 M20 60 L8 64" stroke="#4B5260" stroke-width="3" stroke-linecap="round"/>',
    daffodil: '<path d="M60 116 V56" stroke="#3F9E5E" stroke-width="5"/><path d="M54 116 C50 90 46 74 40 62 M66 116 C70 92 76 78 82 66" stroke="#5DBB7A" stroke-width="5" fill="none"/>'+[0,60,120,180,240,300].map(function(a){return '<ellipse cx="60" cy="22" rx="9" ry="14" fill="#F6E27A" transform="rotate('+a+' 60 38)"/>';}).join('')+'<circle cx="60" cy="38" r="11" fill="#F2A72B"/><circle cx="60" cy="38" r="6" fill="#E0861C"/>',
    bulb: '<path d="M60 14 C66 24 84 40 84 66 C84 88 72 98 60 98 C48 98 36 88 36 66 C36 40 54 24 60 14Z" fill="#C9955A" stroke="#9E6B33" stroke-width="3"/><path d="M60 20 C56 40 54 70 60 96 M60 20 C66 44 68 70 62 96" stroke="#9E6B33" stroke-width="2" fill="none"/><path d="M44 98 L38 112 M52 100 L50 114 M60 100 V116 M68 100 L70 114 M76 98 L82 112" stroke="#B5862E" stroke-width="3" stroke-linecap="round"/>',
    beanpod: '<path d="M14 72 C30 40 80 34 108 44 C96 62 50 86 14 72Z" fill="#7CCB5E" stroke="#4F9A3A" stroke-width="3"/>'+[[36,64],[54,58],[72,52],[90,48]].map(function(p){return '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="8" ry="6" fill="#B6E39A"/>';}).join(''),
    bud: '<path d="M10 90 C40 80 70 70 110 40" stroke="#8A5A36" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M40 80 C34 64 42 52 48 48 C54 56 50 70 40 80Z" fill="#7CCB8E"/><path d="M80 58 C76 40 86 30 94 28 C98 38 92 52 80 58Z" fill="#9AD8A6"/><circle cx="62" cy="68" r="5" fill="#B6E3BE"/>',
    nest: '<path d="M18 70 C18 98 102 98 102 70Z" fill="#B07A4A"/><path d="M18 70 C40 76 80 76 102 70 M24 80 C44 86 76 86 96 80" stroke="#8A5A36" stroke-width="3" fill="none"/>'+
      '<circle cx="44" cy="58" r="12" fill="#BFC7D2"/><circle cx="76" cy="58" r="12" fill="#D5D9DE"/><path d="M40 50 L36 42 L46 46Z M72 50 L76 42 L80 50Z" fill="#F6B93B"/><circle cx="46" cy="54" r="2" fill="#1F2B4D"/><circle cx="78" cy="54" r="2" fill="#1F2B4D"/>',
    sunhat: '<ellipse cx="60" cy="72" rx="52" ry="14" fill="#F2D27A"/><path d="M30 70 C30 40 90 40 90 70Z" fill="#F6C33B"/><rect x="30" y="60" width="60" height="9" fill="#E0607E"/>',
    acorn: '<path d="M38 52 C38 88 82 88 82 52Z" fill="#C8894E"/><path d="M32 52 C32 32 88 32 88 52Z" fill="#8A5A36"/><path d="M60 34 V22" stroke="#6E4628" stroke-width="5" stroke-linecap="round"/><path d="M40 44 L80 44" stroke="#6E4628" stroke-width="2"/>',
    snow: '<g stroke="#7FB8D6" stroke-width="5" stroke-linecap="round"><path d="M60 14 V106 M20 37 L100 83 M20 83 L100 37"/><path d="M50 20 L60 30 L70 20 M50 100 L60 90 L70 100"/></g>',
    scarf: '<path d="M30 40 C30 20 90 20 90 40 L90 54 H30Z" fill="#3D8BE0"/><rect x="26" y="50" width="68" height="10" rx="4" fill="#fff"/><circle cx="60" cy="18" r="8" fill="#fff"/>'+
      '<path d="M24 70 H96 V86 H24Z" fill="#E0607E"/><path d="M72 86 V112 H86 V86Z" fill="#E0607E"/><path d="M72 104 H86 M72 96 H86" stroke="#fff" stroke-width="3"/>',
    diary: '<rect x="22" y="14" width="76" height="94" rx="8" fill="#fff" stroke="#16918C" stroke-width="4"/><rect x="22" y="14" width="14" height="94" fill="#16918C"/>'+
      '<circle cx="56" cy="38" r="8" fill="#F6C33B"/><path d="M72 40 C72 34 82 32 84 38 C90 38 90 46 84 46 H74 C70 46 70 40 72 40Z" fill="#BFC7D2"/><path d="M48 62 H88 M48 74 H88 M48 86 H76" stroke="#D5D9DE" stroke-width="4" stroke-linecap="round"/>'
  };

  var BG = {
    autumn:['#FFF3E2','#E9C38B'], park:['#EAF7EF','#A6DDB0'], river:['#E6F4FB','#8FC9E8'], rock:['#FFF5E3','#E3C69A'],
    class:['#F1EDFC','#D7CDF4'], garden:['#EAF7EF','#A6DDB0'], rain:['#E3E9F2','#A9C3DA'],
    spring:['#EAF7EF','#A6DDB0'], summer:['#FFF6DA','#F2D27A'], winter:['#EEF4FA','#FFFFFF']
  };

  window.SQ_ART = {
    icon: function(key, size){
      return '<svg viewBox="0 0 120 120" width="'+(size||120)+'" height="'+(size||120)+'" aria-hidden="true">'+(A[key]||'')+'</svg>';
    },
    scene: function(keys, bg){
      var c = BG[bg] || BG.park, n = keys.length, w = 600, h = 300;
      var s = '<svg viewBox="0 0 '+w+' '+h+'" class="scene-svg" aria-hidden="true"><rect width="'+w+'" height="'+h+'" fill="'+c[0]+'"/>'+
        '<path d="M0 238 C140 220 300 252 600 228 V300 H0Z" fill="'+c[1]+'"/>';
      if (bg==='rain') for (var i=0;i<26;i++) s += '<path class="drop" style="animation-delay:'+(i%7*0.2)+'s" d="M'+(i*23+8)+' '+(i*37%120+10)+' l-4 12" stroke="#7FA9CC" stroke-width="3" stroke-linecap="round"/>';
      if (bg==='winter') for (var j=0;j<22;j++) s += '<circle class="flake" style="animation-delay:'+(j%6*0.4)+'s" cx="'+(j*28+10)+'" cy="'+(j*41%160+10)+'" r="'+(3+j%3)+'" fill="#fff" stroke="#D5E3EF"/>';
      if (bg==='autumn') for (var k=0;k<6;k++) s += '<ellipse class="fall" style="animation-delay:'+(k*0.7)+'s" cx="'+(k*100+40)+'" cy="'+(30+k%3*30)+'" rx="7" ry="4" fill="'+(k%2?'#E39B3A':'#D9822B')+'"/>';
      if (bg==='summer' || bg==='spring') s += '<circle cx="540" cy="52" r="26" fill="#FFE08A" opacity=".9"/>';
      var size = n===1 ? 200 : n===2 ? 170 : 150, gap = (w - n*size) / (n+1);
      keys.forEach(function(k,i){
        var x = gap + i*(size+gap), y = h - size - 30;
        s += '<g class="bob" style="animation-delay:'+(i*0.6)+'s"><svg x="'+x+'" y="'+y+'" width="'+size+'" height="'+size+'" viewBox="0 0 120 120">'+(A[k]||'')+'</svg></g>';
      });
      return s + '</svg>';
    }
  };
})();
