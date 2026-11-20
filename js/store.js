/* Science Quest: saving progress.
   Signed in with a student code -> saved in Supabase (teachers can see it).
   Not signed in -> saved on this device only (guest). */
(function(){
  var URL_ = 'https://xpbkdnkfufkahaszfycd.supabase.co';
  var KEY_ = 'sb_publishable_QIAV_9tLUBbDCu7FHqaTEw_zYQ0teEG';
  var LS = 'sq-me', LSG = 'sq-guest';
  function lget(k, d){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } }
  function lset(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
  function blank(){ return {badges:{}, stars:{}, hands:{}, journal:[]}; }
  function clean(c){ return String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,''); }

  async function rpc(fn, args){
    var r = await fetch(URL_ + '/rest/v1/rpc/' + fn, {method:'POST',
      headers:{'apikey':KEY_, 'Authorization':'Bearer '+KEY_, 'Content-Type':'application/json'},
      body: JSON.stringify(args)});
    if (!r.ok) throw new Error('rpc ' + fn + ' ' + r.status);
    var t = await r.text(); return t ? JSON.parse(t) : null;
  }

  // migrate the old badge store from the first version of the site
  (function(){ var old = lget('sq-badges', null); if (old) { var g = lget(LSG, blank()); for (var k in old) g.badges[k] = g.badges[k] || old[k]; lset(LSG, g); try{localStorage.removeItem('sq-badges');}catch(e){} } })();

  var me = lget(LS, null);           // {code, name, grade, class}
  var data = me ? (lget(LS+'-cache', null) || blank()) : lget(LSG, blank());

  function cache(){ if (me) lset(LS+'-cache', data); else lset(LSG, data); }
  function today(){ return new Date().toISOString().slice(0,10); }

  var S = window.SQ_STORE = {
    me: function(){ return me; },
    data: function(){ return data; },
    signedIn: function(){ return !!me; },
    login: async function(code){
      var c = clean(code); if (c.length < 6) return 'Type the 6 letters and numbers on your code card.';
      var d; try { d = await rpc('sq_login', {p_code:c}); } catch(e){ return 'We could not reach Science Quest. Check the internet and try again.'; }
      if (!d) return 'We could not find that code. Check it with your teacher.';
      if (d.error === 'wait') return 'Too many tries. Please wait 10 minutes, then try again.';
      me = {code:c, name:d.name, grade:d.grade, cls:d['class']}; lset(LS, me);
      data = {badges:d.badges||{}, stars:d.stars||{}, hands:d.hands||{}, journal:d.journal||[]}; cache();
      return null;
    },
    refresh: async function(){
      if (!me) return;
      try { var d = await rpc('sq_login', {p_code:me.code}); if (d && !d.error) { data = {badges:d.badges||{}, stars:d.stars||{}, hands:d.hands||{}, journal:d.journal||[]}; cache(); } } catch(e){}
    },
    logout: function(){ me = null; try{ localStorage.removeItem(LS); localStorage.removeItem(LS+'-cache'); }catch(e){} data = lget(LSG, blank()); },
    badge: function(id){ if (data.badges[id]) return; data.badges[id] = today(); cache(); if (me) rpc('sq_save',{p_code:me.code,p_part:'badges',p_key:id,p_val:today()}).catch(function(){}); },
    hand: function(id){ if (data.hands[id]) return; data.hands[id] = today(); cache(); if (me) rpc('sq_save',{p_code:me.code,p_part:'hands',p_key:id,p_val:today()}).catch(function(){}); },
    stars: function(id, n){ n = Math.max(0, Math.min(3, n|0)); if ((data.stars[id]||0) >= n) return; data.stars[id] = n; cache(); if (me) rpc('sq_save',{p_code:me.code,p_part:'stars',p_key:id,p_val:n}).catch(function(){}); },
    note: async function(entry){
      var e = {id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), at: today(),
               title: entry.title||'', q: entry.q||'', guess: entry.guess||'', found: entry.found||''};
      data.journal.unshift(e); data.journal = data.journal.slice(0,200); cache();
      if (me) { try { await rpc('sq_journal_add',{p_code:me.code,p_entry:e}); } catch(x){} }
      return e;
    },
    unnote: function(id){ data.journal = data.journal.filter(function(e){ return e.id !== id; }); cache(); if (me) rpc('sq_journal_del',{p_code:me.code,p_id:id}).catch(function(){}); }
  };

  /* small "who am I" chip + sign-in box, used on every page */
  S.chip = function(el, onChange){
    function draw(){
      var m = S.me();
      el.innerHTML = m
        ? '<span class="chipbtn" style="cursor:default">👋 '+String(m.name).replace(/</g,'&lt;')+'</span> <button class="chipbtn" id="sqOut">Sign out</button>'
        : '<button class="chipbtn" id="sqIn">🔑 Sign in with my code</button>';
      var o = el.querySelector('#sqOut'); if (o) o.onclick = function(){ S.logout(); draw(); onChange && onChange(); };
      var i = el.querySelector('#sqIn'); if (i) i.onclick = open;
    }
    function open(){
      var d = document.createElement('div'); d.className = 'sqmodal';
      d.innerHTML = '<div class="sqbox" role="dialog" aria-label="Sign in"><h3>Sign in</h3><p>Type the code from your code card.</p>'+
        '<input id="sqCode" maxlength="8" autocomplete="off" placeholder="ABC-123" aria-label="Your code">'+
        '<p class="sqerr" id="sqErr"></p><div class="sqrow"><button class="btn sec" id="sqX">Cancel</button><button class="btn pri" id="sqGo">Sign in</button></div>'+
        '<p class="sqsmall">No code? You can still play. Your badges will be saved on this device only.</p></div>';
      document.body.appendChild(d);
      var inp = d.querySelector('#sqCode'); inp.focus();
      inp.oninput = function(){ var c = clean(inp.value).slice(0,6); inp.value = c.length > 3 ? c.slice(0,3)+'-'+c.slice(3) : c; };
      d.querySelector('#sqX').onclick = function(){ d.remove(); };
      async function go(){ var b = d.querySelector('#sqGo'); b.disabled = true; var err = await S.login(inp.value); b.disabled = false;
        if (err) { d.querySelector('#sqErr').textContent = err; return; } d.remove(); draw(); onChange && onChange(); }
      d.querySelector('#sqGo').onclick = go; inp.onkeydown = function(e){ if (e.key === 'Enter') go(); };
    }
    draw(); S.refresh().then(function(){ onChange && onChange(); });
  };
})();
