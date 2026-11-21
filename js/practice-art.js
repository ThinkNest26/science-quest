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

  window.SQ_VIS = function(spec){
    if (!spec) return '';
    var p = spec.split(':'), k = p[0], a = p[1] || '';
    switch(k){
      case 'i': return row(a.split(','));
      case 'plant': return plant(a); case 'tree': return tree(a); case 'body': return body(a); case 'skel': return skeleton(a);
      case 'chain': return chain(a.split(',')); case 'cycle': return cycle(a.split(',')); case 'season': return season(a);
      case 'shadow': return shadow(a); case 'magnets': return magnets(a); case 'soil': return soil(a); case 'flower': return flower(a);
      case 'celery': return celery(a); case 'see': return see(a); case 'ramp': return ramp(a); case 'scene': return scene(a);
    }
    return '';
  };
  /* a single picture for a picture answer button */
  window.SQ_EXTRA = EXTRA;
  window.SQ_PIC = function(k){ return '<svg viewBox="0 0 120 120" width="72" height="72" style="display:block;margin:0 auto">'+(EXTRA[k] || (window.SQ_ART ? window.SQ_ART.icon(k) : ''))+'</svg>'; };
})();
