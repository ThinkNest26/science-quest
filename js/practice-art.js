/* Science Quest: diagrams for Science Practice questions.
   SQ_VIS(spec) turns a short picture description into an SVG (viewBox 320 x 180).
   spec examples: 'i:lion,cow'  'plant:roots'  'body:knee'  'chain:sunflower,caterpillar,kiki'  'cycle:egg,tadpole,frog'
   Highlighted parts get a bright ring and an arrow; nothing is labelled with the answer. */
(function(){
  var INK = '#1F2B4D';
  function art(k, x, y, s){ return (window.SQ_ART && window.SQ_ART.icon) ? '<g transform="translate('+x+' '+y+') scale('+s+')">'+window.SQ_ART.icon(k)+'</g>' : ''; }
  function wrap(s, bg){ return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px;background:'+(bg||'#F7F9FB')+'">'+s+'</svg>'; }
  function ring(x, y, r){ return '<circle cx="'+x+'" cy="'+y+'" r="'+(r||16)+'" fill="none" stroke="#E2453A" stroke-width="4" stroke-dasharray="6 4"/>'; }
  function arrow(x1, y1, x2, y2){ var a = Math.atan2(y2-y1, x2-x1), h = 10;
    return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" stroke="#E2453A" stroke-width="4" stroke-linecap="round"/><path d="M'+x2+' '+y2+' L'+(x2-h*Math.cos(a-.5))+' '+(y2-h*Math.sin(a-.5))+' L'+(x2-h*Math.cos(a+.5))+' '+(y2-h*Math.sin(a+.5))+'Z" fill="#E2453A"/>'; }
  function point(x, y, from){ return ring(x, y) + arrow(from[0], from[1], x + (from[0]>x?18:-18), y + (from[1]>y?12:-12)); }
  function label(x, y, t, c){ return '<text x="'+x+'" y="'+y+'" font-family="Nunito,Arial" font-weight="800" font-size="13" text-anchor="middle" fill="'+(c||INK)+'">'+t+'</text>'; }

  /* little drawings that are not in the main art set */
  var EXTRA = {
    bee: '<ellipse cx="60" cy="62" rx="26" ry="18" fill="#F6B93B"/><path d="M48 46 v32 M62 44 v36 M76 48 v28" stroke="#1F2B4D" stroke-width="7"/><ellipse cx="52" cy="38" rx="14" ry="10" fill="#E6F6FF" opacity=".9"/><ellipse cx="70" cy="36" rx="14" ry="10" fill="#E6F6FF" opacity=".9"/><circle cx="88" cy="60" r="10" fill="#1F2B4D"/>',
    butterfly: '<path d="M60 60 C30 20 10 40 22 62 C10 84 34 96 60 66Z" fill="#7559D1"/><path d="M60 60 C90 20 110 40 98 62 C110 84 86 96 60 66Z" fill="#E0607E"/><rect x="56" y="40" width="8" height="46" rx="4" fill="#1F2B4D"/><path d="M58 40 l-8 -12 M62 40 l8 -12" stroke="#1F2B4D" stroke-width="2.5"/>',
    eggs: '<ellipse cx="44" cy="70" rx="16" ry="20" fill="#F7F1E3" stroke="#C9C1AE" stroke-width="2"/><ellipse cx="76" cy="72" rx="16" ry="20" fill="#F7F1E3" stroke="#C9C1AE" stroke-width="2"/>',
    frogspawn: [[40,50],[60,44],[80,52],[50,68],[70,66],[90,70],[38,84],[62,86],[82,88]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="10" fill="#DDEFF7" stroke="#9AC7DB" stroke-width="2"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="#1F2B4D"/>'; }).join(''),
    hen: '<ellipse cx="62" cy="70" rx="34" ry="26" fill="#C9965A"/><circle cx="92" cy="44" r="14" fill="#C9965A"/><path d="M104 44 l10 4 l-10 4z" fill="#F6B93B"/><path d="M88 30 q4 -10 8 0 q4 -10 8 2" fill="#E2453A"/><circle cx="95" cy="42" r="2.5" fill="#1F2B4D"/><path d="M50 94 v12 M70 94 v12" stroke="#F6B93B" stroke-width="4"/><path d="M28 60 q-14 -16 -6 -26 q6 10 14 14z" fill="#8A5E2E"/>',
    adult: '<circle cx="60" cy="24" r="14" fill="#E0A979"/><path d="M46 20 q14 -18 28 0" fill="#4B2E1F"/><rect x="44" y="40" width="32" height="44" rx="10" fill="#3D8BE0"/><rect x="46" y="82" width="12" height="32" fill="#2F4B8C"/><rect x="62" y="82" width="12" height="32" fill="#2F4B8C"/>',
    child: '<circle cx="60" cy="40" r="13" fill="#E0A979"/><path d="M47 36 q13 -16 26 0" fill="#4B2E1F"/><rect x="47" y="54" width="26" height="32" rx="8" fill="#E0607E"/><rect x="49" y="84" width="9" height="24" fill="#2F4B8C"/><rect x="62" y="84" width="9" height="24" fill="#2F4B8C"/>',
    lamb: '<ellipse cx="60" cy="70" rx="26" ry="18" fill="#fff" stroke="#C9C1AE" stroke-width="2"/><circle cx="86" cy="58" r="10" fill="#4A5677"/><path d="M44 86 v14 M56 86 v14 M68 86 v14 M78 86 v14" stroke="#4A5677" stroke-width="4"/>',
    seed: '<ellipse cx="60" cy="70" rx="16" ry="11" fill="#B7834A"/><path d="M50 66 q10 -6 20 0" stroke="#8A5E2E" stroke-width="2" fill="none"/>',
    seedling: '<rect x="20" y="88" width="80" height="20" fill="#8A5E2E"/><path d="M60 88 V60" stroke="#47A86A" stroke-width="4"/><ellipse cx="50" cy="58" rx="10" ry="5" fill="#5BBE7C"/><ellipse cx="70" cy="58" rx="10" ry="5" fill="#47A86A"/><path d="M60 88 l-6 10 M60 88 l6 10" stroke="#F7F1E3" stroke-width="2"/>',
    dead: '<path d="M20 92 h80" stroke="#8A5E2E" stroke-width="5"/><path d="M60 92 C58 70 64 56 54 40" stroke="#8A6A4A" stroke-width="5" fill="none"/><path d="M54 40 l-10 -6 M58 54 l12 -8" stroke="#8A6A4A" stroke-width="3"/><ellipse cx="44" cy="34" rx="6" ry="3" fill="#B59A6A"/><ellipse cx="72" cy="44" rx="6" ry="3" fill="#B59A6A"/>',
    log: '<rect x="12" y="62" width="96" height="30" rx="15" fill="#8A5E2E"/><ellipse cx="108" cy="77" rx="10" ry="15" fill="#C9A66A"/><circle cx="108" cy="77" r="6" fill="none" stroke="#8A5E2E" stroke-width="2"/><path d="M20 70 h30 M40 82 h40" stroke="#6B4A2A" stroke-width="2"/>',
    rockpool: '<ellipse cx="60" cy="74" rx="52" ry="24" fill="#5BA9D6" stroke="#9AA3AE" stroke-width="6"/><path d="M40 70 c6 -8 14 -8 18 0" stroke="#E2453A" stroke-width="4" fill="none"/><circle cx="76" cy="78" r="6" fill="#E0607E"/>',
    pond: '<ellipse cx="60" cy="76" rx="54" ry="22" fill="#3D8BE0"/><ellipse cx="46" cy="72" rx="12" ry="5" fill="#47A86A"/><path d="M98 72 v-28 M104 74 v-22" stroke="#2F8F57" stroke-width="3"/>',
    desert: '<rect x="0" y="80" width="120" height="40" fill="#E6CF96"/><circle cx="96" cy="26" r="14" fill="#FFD966"/><path d="M40 80 V44 a8 8 0 0 1 16 0 V80 M40 62 h-10 v-10 M56 58 h10 v-10" stroke="#47A86A" stroke-width="10" fill="none" stroke-linecap="round"/>',
    arctic: '<rect x="0" y="0" width="120" height="120" fill="#EAF4FD"/><path d="M0 84 L30 66 L60 80 L90 60 L120 76 V120 H0Z" fill="#FFFFFF" stroke="#C9DFF5"/><ellipse cx="62" cy="70" rx="24" ry="14" fill="#FFFFFF" stroke="#C9C1AE" stroke-width="2"/><circle cx="84" cy="62" r="9" fill="#FFFFFF" stroke="#C9C1AE" stroke-width="2"/><circle cx="88" cy="60" r="2" fill="#1F2B4D"/>',
    ocean: '<rect x="0" y="20" width="120" height="100" fill="#2E8BC9"/><path d="M0 28 q15 -8 30 0 t30 0 t30 0 t30 0" stroke="#BFE7FF" stroke-width="3" fill="none"/>',
    woodland: '<rect x="0" y="86" width="120" height="34" fill="#7DBB5E"/><rect x="24" y="50" width="10" height="40" fill="#8A5E2E"/><circle cx="29" cy="40" r="20" fill="#47A86A"/><rect x="80" y="44" width="10" height="46" fill="#8A5E2E"/><circle cx="85" cy="34" r="22" fill="#2F8F57"/>',
    eye: '<path d="M14 60 Q60 20 106 60 Q60 100 14 60Z" fill="#fff" stroke="#1F2B4D" stroke-width="4"/><circle cx="60" cy="60" r="18" fill="#3D8BE0"/><circle cx="60" cy="60" r="8" fill="#1F2B4D"/><circle cx="66" cy="54" r="3" fill="#fff"/>',
    ear: '<path d="M70 20 C30 16 26 60 44 72 C56 82 50 100 66 102 C80 104 84 88 80 80 C92 60 96 24 70 20Z" fill="#E0A979" stroke="#B5794C" stroke-width="3"/><path d="M66 40 C50 40 50 60 62 64" stroke="#B5794C" stroke-width="4" fill="none"/>',
    nose: '<path d="M60 16 C56 50 34 70 40 86 C48 96 72 96 80 86 C86 70 64 50 60 16Z" fill="#E0A979" stroke="#B5794C" stroke-width="3"/><ellipse cx="50" cy="86" rx="6" ry="4" fill="#8A5E3C"/><ellipse cx="70" cy="86" rx="6" ry="4" fill="#8A5E3C"/>',
    tongue: '<path d="M20 50 Q60 30 100 50 Q96 70 60 70 Q24 70 20 50Z" fill="#B33328"/><path d="M38 60 C38 100 82 100 82 60Z" fill="#F28B9B" stroke="#D9557C" stroke-width="3"/><path d="M60 64 V84" stroke="#D9557C" stroke-width="2"/>',
    hand: '<path d="M40 104 V60 C40 52 50 52 50 60 V30 C50 22 60 22 60 30 V26 C60 18 70 18 70 26 V32 C70 24 80 24 80 32 V64 C84 54 96 56 92 66 L80 96 C76 104 70 108 60 108 H48 C44 108 40 106 40 104Z" fill="#E0A979" stroke="#B5794C" stroke-width="3"/>',
    teeth: '<path d="M14 40 Q60 14 106 40 V56 H14Z" fill="#E0607E"/>'+[20,36,52,68,84].map(function(x){ return '<rect x="'+x+'" y="40" width="14" height="22" rx="4" fill="#fff" stroke="#C9C1AE"/>'; }).join(''),
    run: '<circle cx="66" cy="22" r="12" fill="#E0A979"/><path d="M62 34 L54 66 L72 86 L66 108 M54 66 L40 86 L28 84 M60 44 L80 56 L92 46 M60 44 L44 52 L36 42" stroke="#3D8BE0" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    sleep: '<rect x="10" y="64" width="100" height="30" rx="6" fill="#7559D1"/><rect x="10" y="56" width="30" height="16" rx="6" fill="#fff"/><circle cx="28" cy="52" r="12" fill="#E0A979"/><path d="M70 30 h14 l-14 14 h14 M90 14 h10 l-10 10 h10" stroke="#3D8BE0" stroke-width="3" fill="none"/>',
    washhands: '<path d="M34 56 h52 l-6 30 h-40z" fill="#E8ECEF" stroke="#9AA3AE" stroke-width="3"/><path d="M60 30 v-12 h20" stroke="#9AA3AE" stroke-width="5" fill="none"/><path d="M78 26 v14" stroke="#7DD3FC" stroke-width="3" stroke-dasharray="3 3"/><circle cx="52" cy="50" r="8" fill="#fff" stroke="#BFE7FF" stroke-width="2"/><circle cx="68" cy="46" r="6" fill="#fff" stroke="#BFE7FF" stroke-width="2"/>',
    moon: '<circle cx="60" cy="60" r="40" fill="#1B2350"/><path d="M74 26 A36 36 0 1 0 74 94 A28 28 0 1 1 74 26Z" fill="#F7F1E3"/>',
    tv: '<rect x="14" y="20" width="92" height="62" rx="6" fill="#2B2E34"/><rect x="20" y="26" width="80" height="50" fill="#7DD3FC"/><path d="M48 94 h24 M60 82 v12" stroke="#2B2E34" stroke-width="5"/><ellipse cx="60" cy="100" rx="30" ry="8" fill="#B7834A"/>'
  };
  function icon(k, x, y, s){ return EXTRA[k] ? '<g transform="translate('+x+' '+y+') scale('+s+')">'+EXTRA[k]+'</g>' : art(k, x, y, s); }

  /* ---------- diagrams ---------- */
  function plant(mark){
    var s = '<rect x="0" y="130" width="320" height="50" fill="#B7834A"/><path d="M160 130 V48" stroke="#2F8F57" stroke-width="7"/>'+
      '<path d="M160 100 C130 96 116 80 112 72 C134 70 152 80 160 100Z M160 86 C190 82 204 66 208 58 C186 56 168 66 160 86Z" fill="#47A86A"/>'+
      [0,60,120,180,240,300].map(function(a){ var r = a*Math.PI/180; return '<ellipse cx="'+(160+18*Math.cos(r))+'" cy="'+(36+18*Math.sin(r))+'" rx="13" ry="8" fill="#F2789B" transform="rotate('+a+' '+(160+18*Math.cos(r))+' '+(36+18*Math.sin(r))+')"/>'; }).join('')+
      '<circle cx="160" cy="36" r="10" fill="#F6B93B"/><path d="M160 130 l-20 26 M160 130 l-4 34 M160 130 l18 30 M146 148 l-12 8 M170 146 l12 6" stroke="#F7F1E3" stroke-width="3"/>';
    var at = {flower:[160,36,[250,24]], petal:[178,36,[256,40]], leaf:[124,82,[52,60]], stem:[160,116,[240,116]], roots:[160,150,[250,164]], seed:[160,36,[250,24]]}[mark];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#EAF4FD');
  }
  function tree(mark){
    var bare = mark==='winter', s = '<rect x="0" y="140" width="320" height="40" fill="#9AD27A"/>'+
      '<path d="M150 140 V80 C150 70 140 60 120 52 M156 96 C170 80 190 74 204 70 M154 80 V40" stroke="#8A5E2E" stroke-width="10" fill="none" stroke-linecap="round"/><rect x="146" y="80" width="18" height="62" fill="#8A5E2E"/>'+
      '<path d="M152 142 l-22 20 M158 142 l2 30 M162 142 l24 18" stroke="#8A5E2E" stroke-width="4"/>';
    if (!bare) s += '<circle cx="118" cy="48" r="28" fill="'+(mark==='autumn'?'#E2873A':'#47A86A')+'"/><circle cx="156" cy="32" r="30" fill="'+(mark==='autumn'?'#D9443A':'#2F8F57')+'"/><circle cx="200" cy="58" r="28" fill="'+(mark==='autumn'?'#F2A93B':'#47A86A')+'"/>';
    if (mark==='autumn') [[100,150],[220,156],[180,166],[130,170]].forEach(function(p){ s += '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="7" ry="4" fill="#E2873A"/>'; });
    if (bare) s += '<rect x="0" y="0" width="320" height="140" fill="#E4EEF7" opacity=".6"/><rect x="0" y="136" width="320" height="10" fill="#fff"/>';
    if (mark==='spring') [[110,40],[150,24],[196,52],[170,44],[126,60]].forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" fill="#FBDDE5"/>'; });
    var at = {trunk:[155,112,[250,112]], branch:[194,72,[260,50]], leaves:[156,32,[250,20]], roots:[160,162,[250,168]]}[mark];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#EAF4FD');
  }
  function body(mark){
    var sk = '#E0A979', s = '<circle cx="160" cy="34" r="22" fill="'+sk+'"/><path d="M138 30 q22 -26 44 0" fill="#4B2E1F"/><circle cx="152" cy="34" r="2.5" fill="'+INK+'"/><circle cx="168" cy="34" r="2.5" fill="'+INK+'"/><path d="M154 44 q6 5 12 0" stroke="'+INK+'" stroke-width="2" fill="none"/>'+
      '<circle cx="138" cy="36" r="5" fill="'+sk+'"/><circle cx="182" cy="36" r="5" fill="'+sk+'"/><rect x="154" y="54" width="12" height="10" fill="'+sk+'"/>'+
      '<rect x="138" y="62" width="44" height="54" rx="12" fill="#3D8BE0"/>'+
      '<path d="M140 70 L116 98 L106 124 M180 70 L204 98 L214 124" stroke="'+sk+'" stroke-width="11" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<path d="M140 70 L118 96 M180 70 L202 96" stroke="#3D8BE0" stroke-width="13" stroke-linecap="round"/>'+
      '<path d="M150 114 L146 146 L144 168 M170 114 L174 146 L176 168" stroke="#2F4B8C" stroke-width="13" fill="none" stroke-linecap="round"/>'+
      '<path d="M134 172 h14 M172 172 h14" stroke="#1F2B4D" stroke-width="8" stroke-linecap="round"/><circle cx="104" cy="128" r="7" fill="'+sk+'"/><circle cx="216" cy="128" r="7" fill="'+sk+'"/>';
    var at = {head:[160,26,[260,20]], eye:[152,34,[80,20]], ear:[182,36,[260,46]], nose:[160,40,[90,52]], mouth:[160,46,[250,70]], neck:[160,58,[80,74]],
              shoulder:[182,70,[260,90]], elbow:[116,98,[50,90]], arm:[204,98,[270,110]], hand:[216,128,[280,150]], knee:[146,146,[70,150]], leg:[174,140,[260,150]], foot:[180,172,[270,176]], tummy:[160,96,[80,120]]}[mark];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#FFF5E3');
  }
  function skeleton(mark){
    var b = '#F7F1E3', st = '#C9C1AE', s = '<rect width="320" height="180" fill="#2F4B8C" rx="16"/><circle cx="160" cy="28" r="18" fill="'+b+'" stroke="'+st+'" stroke-width="2"/><circle cx="153" cy="26" r="4" fill="#2F4B8C"/><circle cx="167" cy="26" r="4" fill="#2F4B8C"/>'+
      '<path d="M160 46 V112" stroke="'+b+'" stroke-width="6"/>'+[58,66,74,82].map(function(y){ return '<path d="M144 '+y+' Q160 '+(y-6)+' 176 '+y+'" stroke="'+b+'" stroke-width="4" fill="none"/>'; }).join('')+
      '<path d="M140 52 H180 M140 52 L124 84 L118 112 M180 52 L196 84 L202 112 M144 112 H176 L170 114 M150 114 L146 146 L144 170 M170 114 L174 146 L176 170" stroke="'+b+'" stroke-width="5" fill="none" stroke-linecap="round"/>';
    var at = {skull:[160,28,[250,22]], ribs:[160,72,[250,72]], spine:[160,100,[80,104]], armbone:[124,84,[60,70]], legbone:[174,140,[250,150]]}[mark];
    if (at) s += point(at[0], at[1], at[2]);
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto">'+s+'</svg>';
  }
  function chain(list){
    var n = list.length, gap = 300/n, s = '';
    list.forEach(function(k, i){ var x = 10 + i*gap; s += icon(k, x + gap/2 - 34, 56, .58); if (i < n-1) s += arrow(x + gap/2 + 30, 90, x + gap*1.5 - 34, 90); });
    return wrap(s, '#EAF7EF');
  }
  function cycle(list){
    var n = list.length, s = '<circle cx="160" cy="90" r="58" fill="none" stroke="#C9D1DC" stroke-width="3" stroke-dasharray="6 6"/>';
    list.forEach(function(k, i){ var a = -Math.PI/2 + i*2*Math.PI/n, x = 160 + 64*Math.cos(a), y = 90 + 62*Math.sin(a);
      s += '<circle cx="'+x+'" cy="'+y+'" r="27" fill="#fff" stroke="#9AA3AE" stroke-width="2"/>' + icon(k, x-22, y-22, .37);
      var a2 = a + Math.PI/n; s += '<path d="M'+(160+58*Math.cos(a2-.25))+' '+(90+58*Math.sin(a2-.25))+' L'+(160+58*Math.cos(a2+.12))+' '+(90+58*Math.sin(a2+.12))+'" stroke="#E2453A" stroke-width="4"/>'; });
    return wrap(s, '#FFF5E3');
  }
  function season(name){
    var sky = {spring:'#DCEFFF', summer:'#BFE3FF', autumn:'#F6E2C8', winter:'#E4EEF7'}[name], s = tree(name).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
    if (name==='summer') s += '<circle cx="270" cy="30" r="20" fill="#FFD966"/>';
    if (name==='winter') [[40,30],[90,60],[250,40],[280,90],[60,100],[220,20]].forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="#fff"/>'; });
    if (name==='spring') s += icon('daffodil', 40, 110, .4) + icon('chick', 240, 112, .4);
    return wrap(s, sky);
  }
  function shadow(where){
    var px = where==='near' ? 110 : 220, size = where==='near' ? 60 : 28;
    var s = '<rect width="320" height="180" fill="#2F2A4D"/><rect x="292" y="10" width="20" height="160" fill="#F7F1E3"/>'+
      '<path d="M50 90 L292 '+(90-size*1.4)+' V'+(90+size*1.4)+'Z" fill="#FFF3B0" opacity=".22"/>'+art('torch', 0, 60, .55)+
      '<rect x="'+(px-8)+'" y="72" width="16" height="36" rx="4" fill="#F6B93B"/><ellipse cx="300" cy="90" rx="7" ry="'+size+'" fill="#111826"/>';
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  function magnets(pair){
    function bar(x, left){ var c1 = left==='N' ? '#E2453A' : '#3D8BE0', c2 = left==='N' ? '#3D8BE0' : '#E2453A';
      return '<rect x="'+x+'" y="72" width="50" height="36" fill="'+c1+'"/><rect x="'+(x+50)+'" y="72" width="50" height="36" fill="'+c2+'"/>'+label(x+25, 95, left, '#fff')+label(x+75, 95, left==='N'?'S':'N', '#fff'); }
    var a = pair.charAt(0), b = pair.charAt(1);   // the poles that face each other
    return wrap(bar(40, a==='N'?'S':'N') + bar(180, b) + '<path d="M150 78 h20 M150 102 h20" stroke="#9AA3AE" stroke-width="3" stroke-dasharray="4 4"/>', '#FFF5E3');
  }
  function soil(mark){
    var s = '<rect x="0" y="0" width="320" height="30" fill="#BFE3FF"/><path d="M0 30 h320" stroke="#47A86A" stroke-width="6"/>'+
      '<rect x="0" y="33" width="320" height="45" fill="#4A3426"/><rect x="0" y="78" width="320" height="50" fill="#A9784F"/><rect x="0" y="128" width="320" height="52" fill="#8E9196"/>'+
      [[30,50],[90,62],[200,48],[270,66]].map(function(p){ return '<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="6" ry="3" fill="#7A5A3A"/>'; }).join('')+
      [[40,96],[120,110],[230,92],[280,114]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5" fill="#C9C4C2"/>'; }).join('')+'<path d="M150 56 c8 -8 16 8 24 0" stroke="#D98A8A" stroke-width="5" fill="none" stroke-linecap="round"/>';
    var at = {topsoil:[60,56,[20,12]], subsoil:[160,102,[250,12]], bedrock:[160,154,[270,10]]}[mark];
    if (at) s += ring(at[0], at[1], 18) + arrow(at[2][0]+40, 18, at[0]+10, at[1]-16);
    return wrap(s);
  }
  function flower(mark){
    var s = '<path d="M160 180 V100" stroke="#2F8F57" stroke-width="7"/>'+[0,72,144,216,288].map(function(a){ var r = a*Math.PI/180;
        return '<ellipse cx="'+(160+34*Math.cos(r))+'" cy="'+(80+34*Math.sin(r))+'" rx="26" ry="15" fill="#F2789B" transform="rotate('+a+' '+(160+34*Math.cos(r))+' '+(80+34*Math.sin(r))+')"/>'; }).join('')+
      '<circle cx="160" cy="80" r="16" fill="#F6B93B"/>'+[[148,64],[172,64],[146,92],[174,92],[160,58]].map(function(p){ return '<path d="M160 80 L'+p[0]+' '+p[1]+'" stroke="#8A5E2E" stroke-width="2"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.5" fill="#E2873A"/>'; }).join('');
    if (mark==='bee') s += icon('bee', 210, 24, .55);
    var at = {petal:[202,80,[270,40]], stamen:[148,64,[70,24]], stem:[160,150,[250,150]]}[mark];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#EAF7EF');
  }
  function celery(col){
    var c = col || '#3D8BE0';
    return wrap('<path d="M120 60 h80 l-8 110 h-64z" fill="#fff" fill-opacity=".6" stroke="#9AA3AE" stroke-width="3"/><path d="M123 110 h74 l-5 58 h-64z" fill="'+c+'" opacity=".7"/>'+
      '<path d="M156 160 V30 M166 160 V30" stroke="#8CCB6E" stroke-width="10"/><path d="M156 160 V30" stroke="'+c+'" stroke-width="2" opacity=".8"/><path d="M166 160 V30" stroke="'+c+'" stroke-width="2" opacity=".8"/>'+
      '<path d="M160 34 c-20 -10 -30 -26 -24 -30 c10 4 20 14 24 30 c6 -18 16 -26 26 -28 c4 6 -6 22 -26 28z" fill="#47A86A"/><path d="M146 18 l6 8 M176 12 l-6 10" stroke="'+c+'" stroke-width="2"/>', '#EAF4FD');
  }
  function see(kind){
    // light from a lamp bounces off a teddy into an eye
    var s = '<rect width="320" height="180" fill="'+(kind==='dark'?'#141827':'#FFF5E3')+'"/>';
    if (kind!=='dark') s += '<rect x="20" y="20" width="40" height="10" rx="4" fill="#4A5677"/><circle cx="40" cy="38" r="12" fill="#FFE58A"/>'+arrow(54, 46, 140, 104)+arrow(170, 104, 248, 66);
    s += '<circle cx="160" cy="118" r="20" fill="#B7834A"/><circle cx="146" cy="100" r="8" fill="#B7834A"/><circle cx="174" cy="100" r="8" fill="#B7834A"/><circle cx="160" cy="150" r="22" fill="#B7834A"/>'+
         '<g transform="translate(250 40) scale(.45)">'+EXTRA.eye+'</g>';
    if (kind==='dark') s += '<rect width="320" height="180" fill="#000" opacity=".75"/>';
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  function ramp(surface){
    var col = {wood:'#C9965A', carpet:'#B8536B', ice:'#DDF3FF', grass:'#7DBB5E', sand:'#E6CF96'}[surface] || '#C9965A';
    return wrap('<path d="M10 150 L120 70 V150Z" fill="#E9D3A1" stroke="#B7834A" stroke-width="2"/><rect x="120" y="146" width="200" height="12" fill="'+col+'"/>'+
      '<g transform="translate(46 84) rotate(36)"><rect x="0" y="0" width="34" height="14" rx="4" fill="#E2453A"/><circle cx="7" cy="16" r="5" fill="#2B2E34"/><circle cx="27" cy="16" r="5" fill="#2B2E34"/></g>', '#F7F9FB');
  }
  function row(list){
    var n = list.length, w = 320/n, sc = n === 1 ? 1.25 : Math.min(.9, (w-8)/120), s = '';
    list.forEach(function(k, i){ s += icon(k, i*w + (w-120*sc)/2, 90 - 60*sc, sc); });
    return wrap(s);
  }
  function scene(name){ return wrap('<g transform="translate(40 0) scale(1.5)">'+(EXTRA[name]||'')+'</g>' + (name==='log' ? art('woodlouse', 210, 110, .4) : ''), '#EAF7EF'); }

  function bars(list){
    var items = list.map(function(x){ var p = x.split('='); return [p[0], +p[1]]; }), mx = Math.max.apply(null, items.map(function(x){return x[1];})) || 1;
    var w = 260/items.length, s = '<path d="M40 20 V150 H310" stroke="#4A5677" stroke-width="2" fill="none"/>';
    items.forEach(function(it, i){ var h = it[1]/mx*112, x = 48 + i*w;
      s += '<rect x="'+(x+6)+'" y="'+(150-h)+'" width="'+(w-16)+'" height="'+h+'" rx="4" fill="'+['#16918C','#7559D1','#F6B93B','#E0607E','#3D8BE0'][i%5]+'"/>'+
           label(x + w/2 - 2, 144 - h, it[1]) + '<text x="'+(x + w/2 - 2)+'" y="168" font-family="Nunito,Arial" font-weight="800" font-size="11" text-anchor="middle" fill="'+INK+'">'+it[0]+'</text>'; });
    return wrap(s, '#FFFFFF');
  }


  /* ---------- Year 4 diagrams ---------- */
  // series circuits. spec: complete | gap | open | closed | nocell | buzzer | two | test-<object>
  function circuit(kind){
    var W = '#3B4664', sw = 'stroke="'+W+'" stroke-width="5" stroke-linecap="round" fill="none"', s = '';
    var buzz = kind==='buzzer', test = kind.indexOf('test-')===0, obj = test ? kind.slice(5) : '';
    // top: bulb or buzzer at (160,40)
    s += '<path d="M60 40 H142 M178 40 H260" '+sw+'/>';
    if (buzz) s += '<rect x="142" y="24" width="36" height="32" rx="8" fill="#2B2E34"/><circle cx="160" cy="40" r="8" fill="#4A5677"/><circle cx="160" cy="40" r="3" fill="#9AA3AE"/>';
    else s += '<circle cx="160" cy="30" r="17" fill="#FFFFFF" stroke="#9AA3AE" stroke-width="3"/><path d="M153 34 q7 -14 14 0" stroke="#C99A3B" stroke-width="2" fill="none"/><rect x="150" y="44" width="20" height="12" rx="2" fill="#B8BEC8"/><path d="M142 40 H150 M170 40 H178" '+sw+'/>';
    // right side: wire, or a gap, or a test object
    if (kind==='gap') s += '<path d="M260 40 V78 M260 108 V140" '+sw+'/><circle cx="260" cy="78" r="5" fill="'+W+'"/><circle cx="260" cy="108" r="5" fill="'+W+'"/>';
    else if (test) s += '<path d="M260 40 V64 M260 124 V140" '+sw+'/><rect x="252" y="62" width="16" height="10" rx="2" fill="#E2453A"/><rect x="252" y="116" width="16" height="10" rx="2" fill="#2B2E34"/>' + icon(obj, 228, 66, .52);
    else s += '<path d="M260 40 V140" '+sw+'/>';
    // bottom: cell(s) or plain wire
    if (kind==='nocell') s += '<path d="M60 140 H260" '+sw+'/>';
    else {
      var cells = kind==='two' ? [108,164] : [136];
      s += '<path d="M60 140 H'+cells[0]+' M'+(cells[cells.length-1]+48)+' 140 H260" '+sw+'/>';
      if (kind==='two') s += '<path d="M156 140 H164" '+sw+'/>';
      cells.forEach(function(x){ s += '<rect x="'+x+'" y="128" width="40" height="24" rx="4" fill="#2B2E34"/><rect x="'+(x+28)+'" y="128" width="12" height="24" rx="3" fill="#C99A3B"/><rect x="'+(x+40)+'" y="134" width="5" height="12" rx="1" fill="#9AA3AE"/>'; });
    }
    // left side: wire or switch
    if (kind==='open' || kind==='closed') {
      s += '<path d="M60 140 V110 M60 72 V40" '+sw+'/><circle cx="60" cy="110" r="5" fill="'+W+'"/><circle cx="60" cy="72" r="5" fill="'+W+'"/>';
      s += kind==='open' ? '<path d="M60 110 L34 80" '+sw+'/>' : '<path d="M60 110 V72" '+sw+'/>';
    } else s += '<path d="M60 140 V40" '+sw+'/>';
    return wrap(s, '#F7F9FB');
  }
  // digestive system. part: mouth | oesophagus | stomach | small | large | rectum
  function gut(part){
    var sk = '#F4D6B8', s = '<path d="M120 178 V92 C120 74 134 66 160 66 C186 66 200 74 200 92 V178Z" fill="'+sk+'" stroke="#D9B08C" stroke-width="2"/><circle cx="160" cy="34" r="24" fill="'+sk+'" stroke="#D9B08C" stroke-width="2"/><rect x="150" y="54" width="20" height="16" fill="'+sk+'"/>'+
      '<path d="M152 44 q8 5 16 0" stroke="#B5794C" stroke-width="3" fill="none"/>'+
      '<path d="M160 46 V96" stroke="#E0607E" stroke-width="5"/>'+
      '<path d="M160 96 C190 88 196 112 178 120 C168 124 160 114 158 108Z" fill="#E0607E"/>'+
      '<path d="M138 124 V168 H182 V124 H138" stroke="#9C6B3D" stroke-width="9" fill="none" stroke-linejoin="round"/>'+
      '<path d="M146 134 q8 -8 14 0 t14 0 M146 146 q8 -8 14 0 t14 0 M146 158 q8 -8 14 0 t14 0" stroke="#F2A0A8" stroke-width="5" fill="none"/>'+
      '<path d="M160 168 V178" stroke="#9C6B3D" stroke-width="7"/>';
    var at = {mouth:[160,46,[260,30]], oesophagus:[160,74,[80,60]], stomach:[180,104,[268,92]], small:[160,146,[80,130]], large:[182,130,[270,150]], rectum:[160,174,[80,172]]}[part];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#FFF5E3');
  }
  // teeth in an upper jaw, seen from below. type: incisor | canine | molar
  function jaw(type){
    var s = '<path d="M60 170 C60 60 100 20 160 20 C220 20 260 60 260 170" fill="#F28B9B" stroke="#D9557C" stroke-width="3"/><path d="M92 170 C92 84 120 52 160 52 C200 52 228 84 228 170" fill="#E0607E"/>';
    var pos = [[146,34,'i'],[174,34,'i'],[126,40,'i'],[194,40,'i'],[108,52,'c'],[212,52,'c'],[96,70,'p'],[224,70,'p'],[88,92,'p'],[232,92,'p'],[82,116,'m'],[238,116,'m'],[78,140,'m'],[242,140,'m'],[76,162,'m'],[244,162,'m']];
    pos.forEach(function(t){ var x = t[0], y = t[1];
      if (t[2]==='i') s += '<rect x="'+(x-9)+'" y="'+(y-10)+'" width="18" height="20" rx="4" fill="#fff" stroke="#C9C1AE" stroke-width="2"/>';
      else if (t[2]==='c') s += '<path d="M'+(x-9)+' '+(y+9)+' L'+x+' '+(y-12)+' L'+(x+9)+' '+(y+9)+'Z" fill="#fff" stroke="#C9C1AE" stroke-width="2" stroke-linejoin="round"/>';
      else s += '<rect x="'+(x-12)+'" y="'+(y-10)+'" width="24" height="20" rx="7" fill="#fff" stroke="#C9C1AE" stroke-width="2"/><path d="M'+(x-6)+' '+y+' h12 M'+x+' '+(y-6)+' v12" stroke="#DCD5C4" stroke-width="2"/>'; });
    var at = {incisor:[146,34,[146,110]], canine:[108,52,[180,120]], molar:[82,116,[170,130]]}[type];
    if (at) s += ring(at[0], at[1], 15) + arrow(at[2][0], at[2][1], at[0] + (at[2][0]>at[0]?16:-16), at[1] + 14);
    return wrap(s, '#FFF5E3');
  }
  // thermometer reading. n = temperature in degrees Celsius (-20 to 110)
  function thermo(n){
    n = +n; var top = 22, bot = 150, lo = -20, hi = 110, y = function(t){ return bot - (t-lo)/(hi-lo)*(bot-top); };
    var s = '<rect x="146" y="12" width="28" height="150" rx="14" fill="#fff" stroke="#9AA3AE" stroke-width="3"/><circle cx="160" cy="160" r="16" fill="#E2453A"/>'+
      '<rect x="155" y="'+y(n)+'" width="10" height="'+(152-y(n))+'" fill="#E2453A"/>';
    for (var t = -20; t <= 110; t += 10) { var yy = y(t); s += '<path d="M174 '+yy+' h'+(t%20===0?14:8)+'" stroke="#4A5677" stroke-width="2"/>' + (t%20===0 ? '<text x="196" y="'+(yy+4)+'" font-family="Nunito,Arial" font-weight="800" font-size="11" fill="'+INK+'">'+t+'</text>' : ''); }
    s += label(240, 100, '\u00B0C');
    return wrap(s, '#F7F9FB');
  }
  // water cycle. stage: evaporation | condensation | precipitation | collection | none
  function wcycle(stage){
    var s = '<rect x="0" y="0" width="320" height="180" fill="#DCEFFF"/><circle cx="282" cy="30" r="18" fill="#FFD966"/>'+
      '<path d="M0 150 Q40 140 80 150 T160 150 V180 H0Z" fill="#2E8BC9"/><path d="M150 180 L220 70 L300 180Z" fill="#9AA3AE"/><path d="M205 92 L220 70 L236 94 Q220 88 205 92Z" fill="#fff"/>'+
      '<path d="M236 180 C220 160 200 158 160 162" stroke="#3D8BE0" stroke-width="7" fill="none"/>'+
      '<g fill="#fff" stroke="#C9D6E3" stroke-width="2"><ellipse cx="120" cy="40" rx="34" ry="16"/><ellipse cx="146" cy="32" rx="24" ry="16"/><ellipse cx="200" cy="46" rx="26" ry="12"/></g>'+
      '<path d="M190 64 l-4 10 M202 62 l-4 10 M214 64 l-4 10 M196 80 l-4 10 M208 80 l-4 10" stroke="#3D8BE0" stroke-width="3" stroke-linecap="round"/>'+
      '<path d="M50 136 q-6 -12 0 -24 t0 -24 M74 136 q-6 -12 0 -24 t0 -24" stroke="#8FC9E8" stroke-width="3" fill="none" stroke-dasharray="4 4"/>';
    var at = {evaporation:[62,108,[30,40]], condensation:[130,40,[60,70]], precipitation:[202,74,[280,100]], collection:[200,162,[290,150]]}[stage];
    if (at) s += point(at[0], at[1], at[2]);
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // particles in a box. state: solid | liquid | gas
  function particles(state){
    var s = '<rect x="100" y="20" width="120" height="140" rx="6" fill="#fff" stroke="#4A5677" stroke-width="3"/>', pts = [], i, j;
    if (state==='solid') for (i=0;i<5;i++) for (j=0;j<5;j++) pts.push([122+i*19, 82+j*17]);
    else if (state==='liquid') [[116,150],[134,152],[152,150],[170,152],[188,150],[206,148],[124,136],[142,134],[160,136],[178,134],[196,136],[132,118],[150,120],[168,118],[186,120],[204,122],[116,124]].forEach(function(p){ pts.push(p); });
    else [[120,40],[180,50],[150,80],[200,96],[126,110],[176,132],[140,150],[204,150]].forEach(function(p){ pts.push(p); });
    pts.forEach(function(p){ s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="8.5" fill="#7559D1" stroke="#4A3A9C" stroke-width="1.5"/>'; });
    return wrap(s, '#F1EDFC');
  }
  // three bottles with different water levels, labelled A B C
  function bottles(){
    var s = '';
    [[70,40],[160,80],[250,120]].forEach(function(b, i){ var x = b[0], h = b[1];
      s += '<path d="M'+(x-22)+' 160 V80 Q'+(x-22)+' 62 '+(x-8)+' 56 V30 H'+(x+8)+' V56 Q'+(x+22)+' 62 '+(x+22)+' 80 V160Z" fill="#E8F4FB" stroke="#7FA9C4" stroke-width="3"/>'+
           '<rect x="'+(x-20)+'" y="'+(160-h*0.8)+'" width="40" height="'+(h*0.8-2)+'" fill="#3D8BE0" opacity=".75"/>' + label(x, 176, 'ABC'.charAt(i)); });
    return wrap(s, '#F7F9FB');
  }
  // three drums of different sizes, labelled A B C
  function drums(){
    var s = '';
    [[70,34],[160,24],[250,14]].forEach(function(d, i){ var x = d[0], r = d[1];
      s += '<rect x="'+(x-r)+'" y="'+(110-r*0.6)+'" width="'+(2*r)+'" height="'+(r*1.4)+'" fill="#E0607E"/><ellipse cx="'+x+'" cy="'+(110-r*0.6)+'" rx="'+r+'" ry="'+(r*0.35)+'" fill="#F7F1E3" stroke="#C9C1AE" stroke-width="2"/>'+
           '<ellipse cx="'+x+'" cy="'+(110+r*0.8)+'" rx="'+r+'" ry="'+(r*0.35)+'" fill="#B33F5E"/>' + label(x, 172, 'ABC'.charAt(i)); });
    return wrap(s, '#F7F9FB');
  }
  // sound travelling from a drum to an ear
  function soundpath(dist){
    var far = dist==='far', ex = far ? 270 : 170, s = icon('drum', 20, 60, .55);
    for (var k=0;k<(far?6:3);k++) s += '<path d="M'+(100+k*26)+' 70 q12 20 0 40" stroke="#7559D1" stroke-width="3" fill="none" opacity="'+(1-k*0.13)+'"/>';
    s += '<g transform="translate('+(ex-20)+' 60) scale(.45)">'+EXTRA.ear+'</g>';
    return wrap(s, '#F7F9FB');
  }


  /* ---------- Year 5 diagrams ---------- */
  // the Sun and 8 planets in order; n (1-8) rings one planet
  function planets(n){
    var sizes = [4,7,7.5,5,16,14,10,10], cols = ['#9AA3AE','#E6C07B','#3D8BE0','#D9573A','#D9A066','#E8CF8F','#8FD3E0','#3B5BDB'], s = '<rect width="320" height="180" fill="#141827"/><circle cx="-40" cy="90" r="70" fill="#FFD966"/>';
    var x = 46;
    sizes.forEach(function(r, i){ x += (i ? sizes[i-1] : 0) + r + 9; s += '<circle cx="'+x+'" cy="90" r="'+r+'" fill="'+cols[i]+'"/>'; if (i===5) s += '<ellipse cx="'+x+'" cy="90" rx="'+(r+8)+'" ry="4" fill="none" stroke="#E8CF8F" stroke-width="2"/>'; if (+n===i+1) s += '<circle cx="'+x+'" cy="90" r="'+(r+8)+'" fill="none" stroke="#FF6B5E" stroke-width="3" stroke-dasharray="5 4"/>'; });
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // orbits: earth (Earth around the Sun) | moon (Moon around the Earth)
  function orbit(kind){
    var s = '<rect width="320" height="180" fill="#141827"/>';
    if (kind==='moon') s += '<ellipse cx="160" cy="90" rx="110" ry="60" fill="none" stroke="#9AA3AE" stroke-width="2" stroke-dasharray="5 5"/><circle cx="160" cy="90" r="26" fill="#3D8BE0"/><path d="M146 80 q8 -8 16 2 q6 10 -4 14 M168 98 q8 2 6 10" stroke="#47A86A" stroke-width="6" fill="none"/><circle cx="270" cy="90" r="11" fill="#D8DCE3"/>'+arrow(214, 148, 250, 140);
    else s += '<ellipse cx="160" cy="90" rx="128" ry="66" fill="none" stroke="#9AA3AE" stroke-width="2" stroke-dasharray="5 5"/><circle cx="160" cy="90" r="30" fill="#FFD966"/><circle cx="288" cy="90" r="11" fill="#3D8BE0"/><path d="M283 86 q4 -4 8 1" stroke="#47A86A" stroke-width="3" fill="none"/>'+arrow(224, 154, 262, 146);
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // day and night: Sun on the left lights half of the Earth. where: day | night
  function daynight(where){
    var s = '<rect width="320" height="180" fill="#141827"/><circle cx="20" cy="90" r="46" fill="#FFD966"/>'+
      '<path d="M84 70 H130 M84 90 H130 M84 110 H130" stroke="#FFE58A" stroke-width="3" stroke-dasharray="6 5"/>'+
      '<circle cx="210" cy="90" r="64" fill="#3D8BE0"/><path d="M180 60 q20 -14 40 4 q10 16 -8 26 M200 120 q16 -6 28 8" stroke="#47A86A" stroke-width="10" fill="none" stroke-linecap="round"/>'+
      '<path d="M210 26 A64 64 0 0 1 210 154Z" fill="#0B1020" opacity=".72"/>';
    var px = where==='night' ? 262 : 158;
    s += '<circle cx="'+px+'" cy="90" r="7" fill="#FF6B5E" stroke="#fff" stroke-width="2"/>';
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // the Sun's path across the sky. pos: rise | noon | set (no compass letters shown)
  function sunpath(pos){
    var s = '<rect width="320" height="180" fill="#DCEFFF"/><path d="M30 150 Q160 -10 290 150" fill="none" stroke="#F6B93B" stroke-width="2" stroke-dasharray="6 6"/>'+
      '<rect x="0" y="150" width="320" height="30" fill="#9AD27A"/><rect x="140" y="118" width="40" height="32" fill="#E0607E"/><path d="M134 120 L160 98 L186 120Z" fill="#8A3A52"/>';
    var at = {rise:[40,138], noon:[160,48], set:[280,138]}[pos] || [160,48];
    s += '<circle cx="'+at[0]+'" cy="'+at[1]+'" r="16" fill="#FFD966" stroke="#F6B93B" stroke-width="3"/>' + label(30, 172, 'East') + label(290, 172, 'West');
    return wrap(s, '#DCEFFF');
  }
  // a lever (seesaw). where: near | far (where you push, relative to the pivot)
  function lever(where){
    var px = where==='near' ? 190 : 70;
    var s = '<rect x="0" y="150" width="320" height="30" fill="#E9D3A1"/><path d="M200 150 L218 118 L236 150Z" fill="#4A5677"/>'+
      '<rect x="30" y="110" width="270" height="10" rx="4" fill="#B7834A"/><rect x="250" y="76" width="40" height="34" rx="4" fill="#9AA3AE"/>'+
      arrow(px, 60, px, 104);
    return wrap(s, '#F7F9FB');
  }
  // a pulley lifting a load
  function pulley(){
    return wrap('<rect x="80" y="10" width="160" height="10" fill="#4A5677"/><path d="M160 20 V40" stroke="#4A5677" stroke-width="5"/><circle cx="160" cy="54" r="16" fill="#9AA3AE" stroke="#4A5677" stroke-width="4"/>'+
      '<path d="M144 54 V130 M176 54 V100" stroke="#B7834A" stroke-width="3"/><rect x="126" y="130" width="36" height="30" rx="4" fill="#E0607E"/>'+arrow(176, 100, 176, 150)+
      '<rect x="0" y="160" width="320" height="20" fill="#E9D3A1"/>', '#F7F9FB');
  }
  // two meshing gears, big and small
  function gears(){
    function gear(cx, cy, r, n, col){ var s = '', i; for (i=0;i<n;i++){ var a = i*2*Math.PI/n; s += '<rect x="'+(cx-5)+'" y="'+(cy-r-8)+'" width="10" height="12" fill="'+col+'" transform="rotate('+(a*180/Math.PI)+' '+cx+' '+cy+')"/>'; } return s + '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+col+'"/><circle cx="'+cx+'" cy="'+cy+'" r="6" fill="#fff"/>'; }
    return wrap(gear(120, 90, 50, 20, '#3D8BE0') + gear(200, 90, 22, 9, '#F6B93B') + label(120, 170, 'A') + label(200, 170, 'B'), '#F7F9FB');
  }
  // forces on an object. kind: fall | parachute | boat | slide
  function forces(kind){
    var s = '';
    if (kind==='fall') s = icon('apple', 120, 20, .6) + arrow(160, 100, 160, 160) + '<rect x="0" y="166" width="320" height="14" fill="#9AD27A"/>';
    else if (kind==='parachute') s = '<path d="M100 60 Q160 -6 220 60Z" fill="#E0607E"/><path d="M100 60 L150 120 M220 60 L170 120 M160 60 V120" stroke="#4A5677" stroke-width="2"/><rect x="146" y="118" width="28" height="28" rx="6" fill="#3D8BE0"/>' + arrow(160, 146, 160, 176) + arrow(260, 110, 260, 60);
    else if (kind==='boat') s = '<rect x="0" y="100" width="320" height="80" fill="#5BA9D6"/><path d="M100 100 H230 L210 124 H120Z" fill="#E0607E"/><path d="M165 100 V40 L210 92Z" fill="#fff" stroke="#9AA3AE"/>' + arrow(120, 140, 240, 140) + arrow(300, 112, 250, 112);
    else s = '<rect x="0" y="130" width="320" height="50" fill="#B8536B"/><rect x="120" y="90" width="70" height="40" rx="6" fill="#F6B93B"/>' + arrow(200, 110, 280, 110) + arrow(110, 124, 60, 124);
    return wrap(s, '#F7F9FB');
  }
  // separating mixtures. kind: filter | sieve | evaporate
  function separate(kind){
    var s = '';
    if (kind==='filter') s = '<path d="M110 30 H210 L170 90 V110 H150 V90Z" fill="#fff" stroke="#9AA3AE" stroke-width="3"/><path d="M118 36 H202 L160 92Z" fill="#F7F1E3" stroke="#C9C1AE" stroke-width="2"/><path d="M130 42 H190 L160 80Z" fill="#B7834A" opacity=".7"/>'+
      '<path d="M130 112 V170 H190 V112" fill="none" stroke="#9AA3AE" stroke-width="3"/><rect x="132" y="146" width="56" height="22" fill="#8FC9E8"/>';
    else if (kind==='sieve') s = '<ellipse cx="160" cy="70" rx="80" ry="18" fill="#fff" stroke="#4A5677" stroke-width="3"/><path d="M80 70 Q160 140 240 70" fill="#D8DCE3" stroke="#4A5677" stroke-width="3"/><path d="M110 92 l100 0 M100 80 l120 0 M126 104 l70 0" stroke="#9AA3AE" stroke-width="1.5"/>'+
      [[120,64],[150,58],[176,66],[204,60]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="9" fill="#9AA3AE" stroke="#6B7591"/>'; }).join('')+'<path d="M140 130 v10 M160 134 v12 M180 128 v10" stroke="#E6CF96" stroke-width="4" stroke-dasharray="2 4"/><ellipse cx="160" cy="162" rx="50" ry="10" fill="#E6CF96"/>';
    else s = '<ellipse cx="160" cy="80" rx="70" ry="16" fill="#fff" stroke="#9AA3AE" stroke-width="3"/><path d="M90 80 Q160 120 230 80" fill="#8FC9E8" stroke="#9AA3AE" stroke-width="3"/>'+
      [[130,92],[150,96],[172,94],[190,90]].map(function(p){ return '<rect x="'+p[0]+'" y="'+p[1]+'" width="6" height="6" fill="#fff" stroke="#9AA3AE" transform="rotate(20 '+p[0]+' '+p[1]+')"/>'; }).join('')+
      '<path d="M140 70 q-6 -12 0 -24 t0 -24 M180 70 q-6 -12 0 -24 t0 -24" stroke="#8FC9E8" stroke-width="3" fill="none" stroke-dasharray="4 4"/><path d="M110 104 L120 150 M210 104 L200 150" stroke="#4A5677" stroke-width="4"/><path d="M148 160 q6 -16 12 -4 q6 -16 12 0 q-6 8 -24 4Z" fill="#E2873A"/>';
    return wrap(s, '#F7F9FB');
  }


  /* ---------- Year 6 diagrams ---------- */
  // circulation: heart in the middle, lungs above, body below. part: heart | lungs | artery | vein | none
  function heart(part){
    var s = '<ellipse cx="160" cy="40" rx="70" ry="24" fill="#F2A0A8"/>'+label(160, 44, '')+
      '<rect x="110" y="140" width="100" height="30" rx="12" fill="#F4D6B8"/>'+
      '<path d="M150 64 V82 M170 82 V64" stroke="#3D8BE0" stroke-width="7"/><path d="M178 64 V82" stroke="#E2453A" stroke-width="7"/>'+
      '<path d="M140 92 C120 70 96 98 140 130 L160 144 L180 130 C224 98 200 70 180 92 C172 84 148 84 140 92Z" fill="#D93A4A"/>'+
      '<path d="M104 112 C80 120 80 150 110 156" stroke="#3D8BE0" stroke-width="7" fill="none"/><path d="M216 112 C240 120 240 150 210 156" stroke="#E2453A" stroke-width="7" fill="none"/>'+
      arrow(240, 140, 236, 128) + arrow(80, 128, 84, 140);
    var at = {heart:[160,112,[270,96]], lungs:[160,40,[270,30]], artery:[228,134,[290,160]], vein:[92,134,[30,160]]}[part];
    if (at) s += point(at[0], at[1], at[2]);
    return wrap(s, '#FFF5E3');
  }
  // light through holes in cards. kind: line (holes lined up) | offset (one card moved)
  function holes(kind){
    var s = '<rect width="320" height="180" fill="#1F2438"/>'+art('torch', 6, 64, .45);
    [[110,90],[170,kind==='offset'?60:90],[230,90]].forEach(function(c){ s += '<rect x="'+(c[0]-6)+'" y="30" width="12" height="120" fill="#E8E1D0"/><rect x="'+(c[0]-6)+'" y="'+(c[1]-5)+'" width="12" height="10" fill="#1F2438"/>'; });
    s += '<path d="M60 90 H'+(kind==='offset'?'164':'290')+'" stroke="#FFE58A" stroke-width="4"/>' + '<g transform="translate(272 70) scale(.33)">'+EXTRA.eye+'</g>';
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // a torch beam bouncing off a mirror into an eye
  function reflect(){
    var s = '<rect width="320" height="180" fill="#1F2438"/>'+art('torch', 10, 18, .4)+'<rect x="150" y="150" width="70" height="10" fill="#BFE7FF" stroke="#E8E1D0" stroke-width="2"/>'+
      '<path d="M58 44 L185 150 L292 56" stroke="#FFE58A" stroke-width="4" fill="none"/>'+arrow(150, 121, 160, 129)+arrow(232, 109, 250, 93)+'<g transform="translate(268 22) scale(.33)">'+EXTRA.eye+'</g>';
    return '<svg viewBox="0 0 320 180" width="100%" role="img" aria-label="Question picture" style="display:block;max-width:440px;margin:0 auto;border-radius:16px">'+s+'</svg>';
  }
  // standard circuit symbols. name: cell | battery | bulb | switchopen | switchclosed | buzzer | motor | wire
  function symbol(name){
    var W = 'stroke="'+INK+'" stroke-width="4" fill="none" stroke-linecap="round"', s = '';
    if (name==='cell') s = '<path d="M60 90 H148 M172 90 H260" '+W+'/><path d="M148 60 V120" '+W+'/><path d="M172 74 V106" stroke="'+INK+'" stroke-width="8"/>';
    else if (name==='battery') s = '<path d="M50 90 H118 M202 90 H270 M142 90 H178" '+W+'/><path d="M118 60 V120 M178 60 V120" '+W+'/><path d="M142 74 V106 M202 74 V106" stroke="'+INK+'" stroke-width="8"/>';
    else if (name==='bulb') s = '<path d="M60 90 H130 M190 90 H260" '+W+'/><circle cx="160" cy="90" r="30" '+W+'/><path d="M139 69 L181 111 M181 69 L139 111" '+W+'/>';
    else if (name==='switchopen') s = '<path d="M60 90 H130 M190 90 H260 M130 90 L184 62" '+W+'/><circle cx="130" cy="90" r="5" fill="'+INK+'"/><circle cx="190" cy="90" r="5" fill="'+INK+'"/>';
    else if (name==='switchclosed') s = '<path d="M60 90 H260" '+W+'/><circle cx="130" cy="90" r="5" fill="'+INK+'"/><circle cx="190" cy="90" r="5" fill="'+INK+'"/>';
    else if (name==='buzzer') s = '<path d="M60 90 H140 V60 M180 60 V90 H260" '+W+'/><path d="M126 60 H194 V60 A34 34 0 0 1 126 60Z" '+W+'/>';
    else if (name==='motor') s = '<path d="M60 90 H130 M190 90 H260" '+W+'/><circle cx="160" cy="90" r="30" '+W+'/><text x="160" y="100" font-family="Nunito,Arial" font-weight="900" font-size="28" text-anchor="middle" fill="'+INK+'">M</text>';
    else s = '<path d="M60 90 H260" '+W+'/>';
    return wrap(s, '#FFFFFF');
  }
  // a circuit diagram drawn with symbols. kind: basic | open | buzzer | twocell | twobulb
  function symcircuit(kind){
    var W = 'stroke="'+INK+'" stroke-width="3.5" fill="none" stroke-linecap="round"';
    var s = '<path d="M60 40 H140 M180 40 H260 V140 H180 M140 140 H60 V40" '+W+'/>';
    // cell(s) on the bottom
    if (kind==='twocell') s += '<path d="M140 140 H140 M150 140 H160 M170 140 H180" '+W+'/><path d="M140 120 V160 M160 120 V160" '+W+'/><path d="M150 128 V152 M170 128 V152" stroke="'+INK+'" stroke-width="7"/><path d="M60 140 H140" '+W+'/>';
    else s += '<path d="M150 120 V160" '+W+'/><path d="M170 128 V152" stroke="'+INK+'" stroke-width="7"/><path d="M140 140 H150 M170 140 H180" '+W+'/>';
    // component on top
    if (kind==='buzzer') s += '<path d="M140 40 V24 M180 24 V40" '+W+'/><path d="M140 24 H180 A20 20 0 0 1 140 24Z" '+W+'/>';
    else s += '<circle cx="160" cy="40" r="20" '+W+'/><path d="M146 26 L174 54 M174 26 L146 54" '+W+'/>';
    if (kind==='twobulb') s = s.replace('M180 40 H260 V140', 'M180 40 H260 V70 M260 110 V140') + '<circle cx="260" cy="90" r="20" '+W+'/><path d="M246 76 L274 104 M274 76 L246 104" '+W+'/>';
    // left side: switch
    if (kind==='open') s = s.replace('V40" ', 'V110 M60 70 V40" ') + '<path d="M60 110 L40 76" '+W+'/><circle cx="60" cy="110" r="4" fill="'+INK+'"/><circle cx="60" cy="70" r="4" fill="'+INK+'"/>';
    return wrap(s, '#FFFFFF');
  }

  window.SQ_VIS = function(spec){
    if (!spec) return '';
    var p = spec.split(':'), k = p[0], a = p[1] || '';
    switch(k){
      case 'i': return row(a.split(','));
      case 'plant': return plant(a); case 'tree': return tree(a); case 'body': return body(a); case 'skel': return skeleton(a);
      case 'chain': return chain(a.split(',')); case 'cycle': return cycle(a.split(',')); case 'season': return season(a);
      case 'shadow': return shadow(a); case 'magnets': return magnets(a); case 'soil': return soil(a); case 'flower': return flower(a);
      case 'circuit': return circuit(a); case 'gut': return gut(a); case 'jaw': return jaw(a); case 'thermo': return thermo(a); case 'wcycle': return wcycle(a);
      case 'particles': return particles(a); case 'bottles': return bottles(); case 'drums': return drums(); case 'soundpath': return soundpath(a);
      case 'planets': return planets(a); case 'orbit': return orbit(a); case 'daynight': return daynight(a); case 'sunpath': return sunpath(a); case 'lever': return lever(a);
      case 'pulley': return pulley(); case 'gears': return gears(); case 'forces': return forces(a); case 'separate': return separate(a);
      case 'heart': return heart(a); case 'holes': return holes(a); case 'reflect': return reflect(); case 'symbol': return symbol(a); case 'symcircuit': return symcircuit(a);
      case 'celery': return celery(a); case 'bars': return bars(a.split(',')); case 'see': return see(a); case 'ramp': return ramp(a); case 'scene': return scene(a);
    }
    return '';
  };
  /* a single picture for a picture answer button */
  window.SQ_EXTRA = EXTRA;
  window.SQ_PIC = function(k){ return '<svg viewBox="0 0 120 120" width="72" height="72" style="display:block;margin:0 auto">'+(EXTRA[k] || (window.SQ_ART ? window.SQ_ART.icon(k) : ''))+'</svg>'; };
})();
