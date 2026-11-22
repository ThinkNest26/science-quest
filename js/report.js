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
  var LCOL = ['#DDE3EA','#E0607E','#F6B93B','#47A86A'];
  function acc(rec){ if (!rec || !rec.n) return null; var h = String(rec.h||''); return h.length ? h.split('').filter(function(c){return c==='1';}).length/h.length : rec.r/rec.n; }
  /* a ring chart of how many objectives are at each level */
  function donut(counts){
    var tot = counts.reduce(function(a,b){return a+b;},0) || 1, R = 52, C = 2*Math.PI*R, off = 0, s = '';
    [3,2,1,0].forEach(function(l){ var f = counts[l]/tot; if (!f) return;
      s += '<circle cx="70" cy="70" r="'+R+'" fill="none" stroke="'+LCOL[l]+'" stroke-width="22" stroke-dasharray="'+(f*C)+' '+C+'" stroke-dashoffset="'+(-off*C)+'" transform="rotate(-90 70 70)"/>'; off += f; });
    return '<svg viewBox="0 0 140 140" width="150" height="150" role="img" aria-label="'+counts[3]+' of '+tot+' objectives secure">'+s+
      '<text x="70" y="68" text-anchor="middle" font-size="28" font-weight="900" fill="#1F2A44" font-family="Nunito,sans-serif">'+Math.round(counts[3]/tot*100)+'%</text>'+
      '<text x="70" y="88" text-anchor="middle" font-size="12" font-weight="800" fill="#6B7591" font-family="Nunito,sans-serif">secure</text></svg>';
  }
  function legend(){ return '<div class="rleg">'+[3,2,1,0].map(function(l){ return '<span><i style="background:'+LCOL[l]+'"></i>'+LEVELS[l].n+'</span>'; }).join('')+'</div>'; }
  /* where to go next for a topic: a Library story, or a true story for grades without Library stories */
  function storyFor(grade, topic){
    var G = (window.SQ_GRADE||{})[grade], st = G ? G.stories.filter(function(s){ return s.topic===topic; })[0] : null;
    if (st) return {href:'story.html?s='+st.id, title:st.title};
    var w = (window.SQ_WORLD||[]).filter(function(x){ return x.grade===grade && x.topic===topic; })[0];
    return w ? {href:'world.html?a='+w.id, title:w.title} : null;
  }
  var RTIP = {'Find it':'Look back in the text for the key words from the question before answering.',
              'Word power':'Talk about new words together and check the glossary in each story.',
              'Think about it':'Ask “How do you know?” and find clues in the text and pictures.',
              'Order it':'Retell the story using first, next, then and finally.'};
  function bar(p, col){ return '<span class="rbar"><b style="width:'+Math.round(p*100)+'%;background:'+(col||'#16918C')+'"></b></span>'; }

  function summary(grade, data){
    var objs = (window.SQ_PRAC||{})[grade] || [], sk = data.skills || {}, counts = [0,0,0,0];
    objs.forEach(function(o){ counts[level(sk[o.id])]++; });
    var G = (window.SQ_GRADE||{})[grade], rd = data.reading || {}, read = 0, right = 0, asked = 0;
    if (G) G.stories.forEach(function(s){ var r = rd[s.id]; if (r || (data.badges||{})[s.id]) read++; if (r) { right += r.s; asked += r.of; } });
    var sup = objs.filter(function(o){ var x = sk['sup-'+o.id]; return x && x.ok; }).length;
    return {sup:sup, champ:!!sk['champ-'+grade], objs:objs.length, counts:counts, stories:G ? G.stories.length : 0, read:read, comp: asked ? right/asked : null};
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
      '<div class="rtile"><b>'+sm.sup+'</b><span>🌟 Super Scientist stars</span></div></div>';
    if (sm.champ) h += '<p class="rchamp">🏆 Grade Champion: every science objective for this grade is secure.</p>';
    // charts
    if (objs.length) {
      h += '<h3>Progress at a glance</h3><div class="rglance"><div class="rdonut">'+donut(sm.counts)+legend()+'</div><div class="rbars">';
      Object.keys(topics).forEach(function(t){
        var list = objs.filter(function(x){ return x.topic===t; }); if (!list.length) return;
        var c = [0,0,0,0], ra = 0, rn = 0; list.forEach(function(x){ var r = sk[x.id]; c[level(r)]++; var a = acc(r); if (a!=null){ ra += a; rn++; } });
        h += '<div class="rbrow"><span class="rbl">'+esc(topics[t])+'</span><span class="rstack">'+[3,2,1,0].map(function(l){ return c[l] ? '<b style="width:'+(c[l]/list.length*100)+'%;background:'+LCOL[l]+'" title="'+LEVELS[l].n+': '+c[l]+'"></b>' : ''; }).join('')+'</span>'+
          '<em>'+c[3]+'/'+list.length+' secure'+(rn ? ' · '+Math.round(ra/rn*100)+'% right' : '')+'</em></div>';
      });
      h += '</div></div>';
      var CH = (window.SQ_CHAL||{})[grade], TP = G ? G.topics : ((window.SQ_CHAL_TOPICS||{})[grade] || []);
      if (CH) {
        var st = data.stars || {}, hd = data.hands || {};
        h += '<table class="rtab rchal"><tr><th>Science Challenges</th><th>Topic quiz</th><th>Mystery pictures</th><th>Hands-on</th></tr>';
        TP.forEach(function(t){ var ch = CH[t.id]; if (!ch) return; var q = st['quiz-'+grade+'-'+t.id]||0, m = ch.mystery.filter(function(x){ return st['myst-'+x.id]; }).length;
          h += '<tr><td><b>'+esc(t.name)+'</b></td><td class="rstar">'+'★★★'.slice(0,q)+'<span>'+'☆☆☆'.slice(0,3-q)+'</span></td><td>'+m+' / '+ch.mystery.length+'</td><td>'+(hd[ch.hands.id]?'✅ Done':'Not yet')+'</td></tr>'; });
        h += '</table>';
      }
    }
    // strengths and areas to work on
    var secure = objs.filter(function(x){ return level(sk[x.id])===3; });
    var work = objs.filter(function(x){ var l = level(sk[x.id]); return l===1 || l===2; })
      .sort(function(a,b){ return (level(sk[a.id]) - level(sk[b.id])) || (acc(sk[a.id]) - acc(sk[b.id])); });
    var untried = Object.keys(topics).filter(function(t){ var list = objs.filter(function(x){ return x.topic===t; }); return list.length && list.every(function(x){ return !level(sk[x.id]); }); });
    h += '<h3>🎯 Areas to work on</h3>';
    if (!objs.length) h += '<p class="rnote">Science Practice for this grade is coming soon.</p>';
    else if (!work.length && !untried.length) h += '<p class="rnote">'+(sm.counts[0] ? 'Keep going! Try Science Practice for the objectives not started yet.' : 'Brilliant! Every objective tried so far is secure. Keep reading and exploring.')+'</p>';
    else {
      h += '<p class="rnote">These are the objectives that need the most support, starting with the hardest. Each one has ideas for what to do next.</p><div class="rareas">';
      work.slice(0,6).forEach(function(x){ var r = sk[x.id], l = level(r), a = acc(r), sf = storyFor(grade, x.topic);
        h += '<div class="rarea l'+l+'"><div class="rah"><b>'+esc(x.short)+'</b>'+chip(l)+'</div><small>'+esc(x.nc)+'</small>'+
          '<div class="ram">'+bar(a, LCOL[l])+'<em>'+Math.round(a*100)+'% right recently</em></div>'+
          '<p class="rtip">'+(l===1 ? 'Needs support: go back to the key ideas first, then practise a little each day.' : 'Nearly there: a few more practice sessions should make this secure.')+'</p>'+
          '<div class="rgo noprint"><a href="practice.html?o='+x.id+'">🧠 Practise this</a>'+(sf ? '<a href="'+sf.href+'">📖 '+esc(sf.title)+'</a>' : '')+'<a href="challenges.html?g='+grade+'">✋ Topic challenges</a></div></div>';
      });
      h += '</div>';
      if (untried.length) h += '<p class="runtried"><b>Not tried yet:</b> '+untried.map(function(t){ return esc(topics[t]); }).join(', ')+'. <a class="noprint" href="practice.html">Start practising →</a></p>';
    }
    // reading skill to work on
    if (G) {
      var agg2 = {}; TYPES.forEach(function(t){ agg2[t[0]] = [0,0]; });
      G.stories.forEach(function(s){ var r = rd[s.id]; if (r && r.t) for (var k in r.t) if (agg2[k]) { agg2[k][0] += r.t[k][0]; agg2[k][1] += r.t[k][1]; } });
      var weak = TYPES.filter(function(t){ var a2 = agg2[t[0]]; return a2[1] >= 2 && a2[0]/a2[1] < .7; }).sort(function(p,q){ return agg2[p[0]][0]/agg2[p[0]][1] - agg2[q[0]][0]/agg2[q[0]][1]; });
      if (weak.length) h += '<p class="runtried"><b>Reading skill to practise:</b> '+weak.slice(0,2).map(function(t){ return esc(t[1])+' ('+Math.round(agg2[t[0]][0]/agg2[t[0]][1]*100)+'%). '+esc(RTIP[t[0]]); }).join(' ')+'</p>';
    }
    if (secure.length) h += '<h3>⭐ Strengths</h3><div class="rstrong">'+secure.map(function(x){ return '<span>'+esc(x.short)+(sk['sup-'+x.id] && sk['sup-'+x.id].ok ? ' 🌟' : '')+'</span>'; }).join('')+'</div>';
    // science knowledge
    h += '<h3>Science knowledge</h3><p class="rnote">Each objective comes from the National Curriculum. The level is based on the child’s most recent answers in Science Practice.</p>';
    if (!objs.length) h += '<p class="rnote">Science Practice for this grade is coming soon.</p>';
    Object.keys(topics).forEach(function(t){
      var list = objs.filter(function(x){ return x.topic===t; }); if (!list.length) return;
      h += '<div class="rtopic"><h4>'+esc(topics[t])+'</h4><table class="rtab">';
      list.forEach(function(x){ var r = sk[x.id], l = level(r);
        var st = sk['sup-'+x.id];
        h += '<tr><td><b>'+esc(x.short)+(st && st.ok ? ' 🌟' : '')+'</b><small>'+esc(x.nc)+'</small></td><td class="rc">'+chip(l)+'</td><td class="rn">'+(r && r.n ? r.r+' of '+r.n+' right' : '')+'</td></tr>'; });
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
    // true stories (Science Around the World)
    var WL = (window.SQ_WORLD||[]).filter(function(x){ return x.grade===grade; });
    if (WL.length) {
      var wr = WL.filter(function(x){ return rd[x.id] || (data.badges||{})[x.id]; });
      h += '<h3>Science Around the World</h3><p class="rnote">True news reports and diaries about real science, with non-fiction questions (finding facts, word meanings, reading charts, fact or opinion, captions, summarising). '+wr.length+' of '+WL.length+' read.</p>';
      h += '<table class="rtab rstories"><tr><th>True story</th><th>Place</th><th>First-time score</th><th>Times read</th></tr>';
      WL.forEach(function(x){ var r = rd[x.id], b = (data.badges||{})[x.id];
        h += '<tr><td><b>'+esc(x.title)+'</b></td><td>'+esc(x.place)+'</td><td>'+(r ? r.s+' / '+r.of : (b?'Read':'Not read yet'))+'</td><td>'+(r ? r.n : (b?1:'–'))+'</td></tr>'; });
      h += '</table>';
    }
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
    '.rchamp{background:#FFF5E3;border:2px solid #F6B93B;border-radius:14px;padding:10px 14px;font-weight:900;color:#5C3D00}'+
    '.rglance{display:grid;grid-template-columns:190px 1fr;gap:18px;align-items:center;background:#F7F9FB;border-radius:16px;padding:14px 16px}.rdonut{text-align:center}'+
    '.rleg{display:flex;flex-wrap:wrap;gap:4px 10px;justify-content:center;font-size:11px;font-weight:800;color:#4A5677}.rleg i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:4px;vertical-align:-1px}'+
    '.rbrow{display:grid;grid-template-columns:200px 1fr 150px;gap:10px;align-items:center;margin:7px 0;font-weight:800;font-size:14px}.rbrow em{font-style:normal;font-size:12px;color:#4A5677}'+
    '.rstack{display:flex;height:18px;border-radius:99px;overflow:hidden;background:#DDE3EA}.rstack b{display:block;height:100%}'+
    '.rchal{margin-top:12px}.rstar{color:#E09E1A;font-size:16px;letter-spacing:2px}.rstar span{color:#C9D1DC}'+
    '.rareas{display:grid;grid-template-columns:1fr 1fr;gap:12px}.rarea{border:1.5px solid #EEF1F5;border-left:6px solid #F6B93B;border-radius:14px;padding:10px 14px;break-inside:avoid}.rarea.l1{border-left-color:#E0607E}'+
    '.rah{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}.rarea small{display:block;color:#6B7591;font-weight:600;font-size:12px;margin:3px 0 6px}'+
    '.ram{display:grid;grid-template-columns:1fr 130px;gap:8px;align-items:center}.ram em{font-style:normal;font-size:12px;font-weight:800;color:#4A5677}.rtip{margin:6px 0 4px;font-size:13px;font-weight:700;color:#4A5677}'+
    '.rgo{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.rgo a{background:#E6F5F3;color:#0F6E6A;border-radius:99px;padding:5px 10px;font-size:12px;font-weight:900;text-decoration:none}'+
    '.runtried{background:#F7F9FB;border-radius:12px;padding:10px 14px;font-weight:700;font-size:14px;margin:10px 0 0}.runtried a{color:#16918C;font-weight:900}'+
    '.rstrong{display:flex;flex-wrap:wrap;gap:6px}.rstrong span{background:#DDF3E4;color:#2F7A4C;border-radius:99px;padding:5px 11px;font-weight:900;font-size:13px}'+
    '.rep{-webkit-print-color-adjust:exact;print-color-adjust:exact}'+
    '.rfoot{margin-top:18px;color:#9AA3AE;font-size:12px;font-weight:800;text-align:center}'+
    '@media (max-width:700px){.rglance,.rareas{grid-template-columns:1fr}.rbrow{grid-template-columns:1fr;gap:3px}.rtiles{grid-template-columns:1fr 1fr}.rskills,.rnext{grid-template-columns:1fr}.rskill{grid-template-columns:130px 1fr 50px}}'+
    '@media print{header.top,footer.foot,.noprint{display:none!important}.rep{border:0;padding:0;margin:0}body{background:#fff}.rtopic{break-inside:avoid}.rep h3{break-after:avoid}}';
  if (typeof document !== 'undefined') { var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); }

  window.SQ_REPORT = {html:html, summary:summary, LEVELS:LEVELS, level:level, chip:chip, acc:acc};
})();
