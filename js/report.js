/* Science Quest: progress report, shared by My Progress (children), the teacher area and the printed parent report.
   SQ_REPORT.html({name, cls, grade, data:{skills, reading, badges, stars, hands}, forParents}) */
(function(){
  var LEVELS = [
    {n:'Not started',     c:'#EEF1F5', t:'#6B7591'},
    {n:'Working towards', c:'#FCE3EA', t:'#9B2C4A'},
    {n:'Developing',      c:'#FFF0CC', t:'#8A5A00'},
    {n:'Secure',          c:'#DDF3E4', t:'#2F7A4C'}
  ];
  var TYPES = [['Find it','Finding information'],['Word power','Understanding words'],['Think about it','Thinking and inferring'],['Order it','Putting events in order']];
  var GR = {kg2:'KG2 (Year 1)', g1:'Grade 1 (Year 2)', g2:'Grade 2 (Year 3)', g3:'Grade 3 (Year 4)', g4:'Grade 4 (Year 5)', g5:'Grade 5 (Year 6)'};
  function esc(t){ return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function level(rec){   // same rule as SQ_STORE.level, so the teacher page can use it without signing a child in
    if (!rec || !rec.n) return 0;
    var h = String(rec.h||''), right = h.split('').filter(function(c){return c==='1';}).length, acc = h.length ? right/h.length : rec.r/rec.n;
    if (acc < .5) return 1; if (acc >= .8 && rec.n >= 5) return 3; return 2;
  }
  function chip(l){ var L = LEVELS[l]; return '<span class="lvl" style="background:'+L.c+';color:'+L.t+'">'+L.n+'</span>'; }
  function bar(p, col){ return '<span class="rbar"><b style="width:'+Math.round(p*100)+'%;background:'+(col||'#16918C')+'"></b></span>'; }

  function summary(grade, data){
    var objs = (window.SQ_PRAC||{})[grade] || [], sk = data.skills || {}, counts = [0,0,0,0];
    objs.forEach(function(o){ counts[level(sk[o.id])]++; });
    var G = (window.SQ_GRADE||{})[grade], rd = data.reading || {}, read = 0, right = 0, asked = 0;
    if (G) G.stories.forEach(function(s){ var r = rd[s.id]; if (r || (data.badges||{})[s.id]) read++; if (r) { right += r.s; asked += r.of; } });
    return {objs:objs.length, counts:counts, stories:G ? G.stories.length : 0, read:read, comp: asked ? right/asked : null};
  }

  function html(o){
    var grade = o.grade, data = o.data || {}, sk = data.skills || {}, rd = data.reading || {};
    var objs = (window.SQ_PRAC||{})[grade] || [], topics = (window.SQ_PRAC_TOPICS||{})[grade] || {}, G = (window.SQ_GRADE||{})[grade];
    var sm = summary(grade, data), h = '';
    h += '<div class="rep">';
    h += '<div class="rhead"><img src="img/sq-bird.png" alt="" width="54" height="54"><div><h2>'+esc(o.name || 'My')+(o.name?'’s':'')+' science progress</h2><p>'+esc(GR[grade]||'')+(o.cls?' · Class '+esc(o.cls):'')+' · '+new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})+'</p></div></div>';
    // headline numbers
    h += '<div class="rtiles">'+
      '<div class="rtile"><b>'+sm.counts[3]+' / '+sm.objs+'</b><span>science objectives secure</span></div>'+
      '<div class="rtile"><b>'+sm.read+' / '+sm.stories+'</b><span>science stories read</span></div>'+
      '<div class="rtile"><b>'+(sm.comp==null?'–':Math.round(sm.comp*100)+'%')+'</b><span>reading questions right first time</span></div>'+
      '<div class="rtile"><b>'+Object.keys(data.hands||{}).length+'</b><span>hands-on investigations</span></div></div>';
    // science knowledge
    h += '<h3>Science knowledge</h3><p class="rnote">Each objective comes from the National Curriculum. The level is based on the child’s most recent answers in Science Practice.</p>';
    if (!objs.length) h += '<p class="rnote">Science Practice for this grade is coming soon.</p>';
    Object.keys(topics).forEach(function(t){
      var list = objs.filter(function(x){ return x.topic===t; }); if (!list.length) return;
      h += '<div class="rtopic"><h4>'+esc(topics[t])+'</h4><table class="rtab">';
      list.forEach(function(x){ var r = sk[x.id], l = level(r);
        h += '<tr><td><b>'+esc(x.short)+'</b><small>'+esc(x.nc)+'</small></td><td class="rc">'+chip(l)+'</td><td class="rn">'+(r && r.n ? r.r+' of '+r.n+' right' : '')+'</td></tr>'; });
      h += '</table></div>';
    });
    // reading
    h += '<h3>Reading</h3>';
    if (G) {
      var agg = {}; TYPES.forEach(function(t){ agg[t[0]] = [0,0]; });
      G.stories.forEach(function(s){ var r = rd[s.id]; if (r && r.t) for (var k in r.t) if (agg[k]) { agg[k][0] += r.t[k][0]; agg[k][1] += r.t[k][1]; } });
      h += '<div class="rskills">'+TYPES.map(function(t){ var a = agg[t[0]], p = a[1] ? a[0]/a[1] : 0;
        return '<div class="rskill"><span>'+t[1]+'</span>'+bar(p, p>=.8?'#47A86A':p>=.5?'#F6B93B':'#E0607E')+'<em>'+(a[1] ? Math.round(p*100)+'%' : 'Not yet')+'</em></div>'; }).join('')+'</div>';
      h += '<table class="rtab rstories"><tr><th>Story</th><th>Topic</th><th>First-time score</th><th>Times read</th></tr>';
      G.stories.forEach(function(s){ var r = rd[s.id], b = (data.badges||{})[s.id], tp = (G.topics.filter(function(t){return t.id===s.topic;})[0]||{}).name || '';
        h += '<tr><td><b>'+esc(s.title)+'</b>'+(b?' <span class="rbadge">★ '+esc(s.badge)+'</span>':'')+'</td><td>'+esc(tp)+'</td><td>'+(r ? r.s+' / '+r.of : (b?'Read':'Not read yet'))+'</td><td>'+(r ? r.n : (b?1:'–'))+'</td></tr>'; });
      h += '</table>';
    }
    // strengths and next steps
    var secure = objs.filter(function(x){ return level(sk[x.id])===3; }), next = objs.filter(function(x){ var l = level(sk[x.id]); return l===1 || l===2; });
    h += '<h3>Strengths and next steps</h3><div class="rnext"><div><h4>⭐ Strengths</h4>'+(secure.length ? '<ul>'+secure.slice(0,5).map(function(x){ return '<li>'+esc(x.short)+'</li>'; }).join('')+'</ul>' : '<p>Keep practising to build secure knowledge.</p>')+'</div>'+
      '<div><h4>🎯 Next steps</h4>'+(next.length ? '<ul>'+next.slice(0,5).map(function(x){ return '<li>'+esc(x.short)+'</li>'; }).join('')+'</ul>' : (sm.counts[0] ? '<p>Try Science Practice for the objectives not started yet.</p>' : '<p>Brilliant! Keep reading and exploring.</p>'))+'</div></div>';
    if (o.forParents) h += '<p class="rnote" style="margin-top:14px">Ideas for home: read a Science Quest story together, ask your child to explain what they found out, and try a hands-on challenge from the Science Challenges page.</p>';
    h += '<p class="rfoot">Science Quest by Curious Nest · Powered by ThinkNest Education</p></div>';
    return h;
  }

  var CSS = '.rep{background:#fff;border:1.5px solid var(--line,#E8ECEF);border-radius:22px;padding:22px 24px;margin-top:16px}'+
    '.rhead{display:flex;gap:14px;align-items:center;margin-bottom:12px}.rhead h2{font-size:24px}.rhead p{margin:4px 0 0;color:#6B7591;font-weight:700}'+
    '.rtiles{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:8px 0 6px}.rtile{background:#F7F9FB;border-radius:14px;padding:12px}.rtile b{display:block;font-size:24px;font-weight:900;color:#16918C}.rtile span{font-size:13px;font-weight:700;color:#4A5677}'+
    '.rep h3{font-size:20px;margin:22px 0 6px}.rep h4{font-size:16px;margin:10px 0 6px}.rnote{color:#6B7591;font-weight:700;font-size:13px;margin:0 0 8px}'+
    '.rtab{width:100%;border-collapse:collapse;font-size:14px}.rtab td,.rtab th{border-bottom:1px solid #EEF1F5;padding:8px 6px;text-align:left;vertical-align:top}.rtab th{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#6B7591}'+
    '.rtab small{display:block;color:#6B7591;font-weight:600;margin-top:2px;font-size:12px}.rc{width:140px}.rn{width:110px;color:#4A5677;font-weight:700;font-size:13px}'+
    '.lvl{display:inline-block;border-radius:99px;padding:4px 10px;font-weight:900;font-size:12px;white-space:nowrap}'+
    '.rskills{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;margin:6px 0 12px}.rskill{display:grid;grid-template-columns:170px 1fr 60px;align-items:center;gap:8px;font-weight:800;font-size:14px}.rskill em{font-style:normal;color:#4A5677;font-size:13px}'+
    '.rbar{display:block;height:12px;background:#EEF1F5;border-radius:99px;overflow:hidden}.rbar b{display:block;height:100%;border-radius:99px}'+
    '.rbadge{display:inline-block;background:#EAF7EF;color:#2F7A4C;border-radius:99px;padding:2px 8px;font-size:12px;font-weight:900}'+
    '.rnext{display:grid;grid-template-columns:1fr 1fr;gap:16px}.rnext>div{background:#F7F9FB;border-radius:14px;padding:4px 14px 10px}.rnext ul{margin:4px 0 0;padding-left:18px;font-weight:700}'+
    '.rfoot{margin-top:18px;color:#9AA3AE;font-size:12px;font-weight:800;text-align:center}'+
    '@media (max-width:700px){.rtiles{grid-template-columns:1fr 1fr}.rskills,.rnext{grid-template-columns:1fr}.rskill{grid-template-columns:130px 1fr 50px}}'+
    '@media print{header.top,footer.foot,.noprint{display:none!important}.rep{border:0;padding:0;margin:0}body{background:#fff}.rtopic{break-inside:avoid}.rep h3{break-after:avoid}}';
  if (typeof document !== 'undefined') { var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); }

  window.SQ_REPORT = {html:html, summary:summary, LEVELS:LEVELS, level:level, chip:chip};
})();
