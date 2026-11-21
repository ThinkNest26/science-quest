/* Science Quest: one menu bar for every children's page (shown under the header, scrolls sideways on small screens) */
(function(){
  var ITEMS = [['learn.html','📚','Library'],['practice.html','🧠','Practice'],['challenges.html','🧪','Challenges'],['lab.html','🥼','My Scientist'],['mylab.html','🏗️','My Lab'],['progress.html','📈','My Progress'],['discoveries.html','⭐','Discoveries']];
  var here = (location.pathname.split('/').pop() || 'index.html'), hdr = document.querySelector('header.top');
  if (here === 'story.html') here = 'learn.html';
  if (!hdr) return;
  var nav = document.createElement('nav'); nav.className = 'sqnav noprint'; nav.setAttribute('aria-label','Science Quest');
  nav.innerHTML = '<div class="wrap">' + ITEMS.map(function(i){ return '<a href="'+i[0]+'"'+(i[0]===here?' class="on" aria-current="page"':'')+'><span>'+i[1]+'</span>'+i[2]+'</a>'; }).join('') + '</div>';
  hdr.appendChild(nav);
  // the old buttons in the header are no longer needed
  var who = hdr.querySelector('.who'); if (who) who.querySelectorAll('a.chipbtn').forEach(function(a){ a.remove(); });
})();
