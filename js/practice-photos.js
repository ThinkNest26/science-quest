/* Science Quest: real photos for Science Practice.
   Replaces the small drawings with photos wherever a photo exists (img/practice/<name>.webp).
   Labelled diagrams (arrows, charts, circuits and so on) stay as drawings. */
(function(){
  var HAVE = {}; ["acorn", "adult", "ammonite", "apple", "appletree", "arctic", "baby", "badger", "balloon", "battery", "bear", "bee", "beetle", "bell", "bigbell", "blackberry", "blackcard", "brake", "brick", "broccoli", "bucket", "bulb", "burr", "butterfly", "button", "can", "cardboard", "caterpillar", "chalk", "cheese", "chick", "child", "chocolate", "claysoil", "clover", "coconut", "coin", "compost", "cork", "cow", "cress", "cressdry", "cresspale", "daffodil", "daisy", "dandelion", "desert", "drum", "ear", "egg", "eggs", "elastic", "eye", "fizzy", "foil", "football", "frog", "giraffe", "glass", "granite", "hand", "hen", "hivis", "holly", "honey", "icecube", "juice", "key", "kiki", "ladybird", "lamb", "leaf", "lightbulb", "limestone", "lion", "lizard", "log", "magnet", "marble", "marblestone", "meat", "metal", "milk", "mirror", "moon", "moss", "mouse", "nail", "nose", "oak", "ocean", "otter", "paper", "paperclip", "pencil", "pine", "pipecleaner", "plastic", "playdough", "poppyhead", "rabbit", "raincoat", "raingauge", "reflector", "rice", "rock", "rose", "ruler", "run", "sandsoil", "sandstone", "sandwich", "scarf", "scene-arctic", "scene-dead", "scene-desert", "scene-log", "scene-ocean", "scene-pond", "scene-rockpool", "scene-woodland", "season-autumn", "season-spring", "season-summer", "season-winter", "seed", "seedling", "shark", "sheep", "slate", "sleep", "snow", "soap", "sock", "sponge", "spoon", "squirrel", "steam", "straw", "sun", "sunflower", "sunglasses", "sunhat", "sweets", "sycamore", "tadpole", "teeth", "thermometer", "tongue", "toothbrush", "torch", "tortoise", "trainer", "tree-autumn", "tree-winter", "trout", "tuba", "tulip", "tv", "tyre", "vane", "violin", "washhands", "water", "whistle", "window", "windsock", "wood", "woodlouse", "worm"].forEach(function(n){ HAVE[n] = 1; });
  function src(n){ return 'img/practice/' + n + '.webp'; }
  function img(n, cls){ return '<img class="'+cls+'" src="'+src(n)+'" alt="" loading="lazy">'; }
  var VIS = window.SQ_VIS, PIC = window.SQ_PIC;
  window.SQ_VIS = function(spec){
    var i = spec.indexOf(':'), k = spec.slice(0, i), a = spec.slice(i+1);
    if (k === 'i') { var list = a.split(',').map(function(x){ return x.trim(); });
      if (list.every(function(n){ return HAVE[n]; })) return '<div class="phrow n'+list.length+'">'+list.map(function(n){ return img(n, 'phobj'); }).join('')+'</div>'; }
    var sc = (k === 'scene' || k === 'season') ? k + '-' + a : (k === 'tree' && (a === 'winter' || a === 'autumn')) ? 'tree-' + a : null;
    if (sc && HAVE[sc]) return img(sc, 'phscene');
    return VIS(spec);
  };
  window.SQ_PIC = function(n){ return HAVE[n] ? img(n, 'phopt') : PIC(n); };
  var st = document.createElement('style');
  st.textContent = '.phrow{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}.phobj{width:220px;max-width:44%;aspect-ratio:1;object-fit:contain;background:#fff;border-radius:16px;border:1.5px solid #EEF1F5}'+
    '.phrow.n1 .phobj{width:260px;max-width:70%}.phscene{display:block;width:100%;max-width:560px;margin:0 auto;aspect-ratio:16/9;object-fit:cover;border-radius:16px}'+
    '.phopt{display:block;width:110px;height:110px;margin:0 auto;object-fit:contain;background:#fff;border-radius:12px}';
  document.head.appendChild(st);
})();
