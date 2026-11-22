/* Science Quest: Science Around the World. True, real-life science texts (news reports and diaries).
   Facts checked in November 2026. Diaries are imagined, but every fact in them is real.
   Questions: first option is always correct (shuffled on screen). */
window.SQ_WORLD = [
/* =========================== GRADE 2 (Year 3) =========================== */
{id:'w-seedvault', grade:'g2', topic:'plants', type:'news', art:['acorn','sunflower','snow'],
 title:'A Treasure Chest of Seeds Inside an Arctic Mountain',
 place:'Svalbard, Norway', continent:'Europe', lat:78.2, lon:15.5, when:'Opened in 2008 · still growing in 2026',
 sum:'Deep inside a frozen mountain, more than a million seeds from around the world are kept safe.',
 photo:{src:'img/world/w-seedvault.webp', caption:'The entrance to the Svalbard Global Seed Vault sticks out of a snowy mountainside. The seeds are stored deep inside the rock.'},
 sections:[
  {h:'A very special freezer', t:'Far in the north of Norway, on the frozen islands of Svalbard, a narrow concrete doorway pokes out of a snowy mountain. Behind it, a long tunnel leads deep into the rock. At the end are three huge rooms filled with shelves of boxes. Inside those boxes are seeds. Lots and lots of seeds. This is the Svalbard Global Seed Vault. It opened in February 2008, and it is the biggest store of crop seeds anywhere in the world. Scientists sometimes call it a [[back-up]] for the world’s food.'},
  {h:'Seeds from every corner of the Earth', t:'Countries from all over the world send boxes of seeds here: rice from Asia, beans and okra from Africa, chillies from South America, wheat from Europe and many, many more. In 2025, one delivery alone brought more than 3,000 kinds of seeds collected across 30 African countries. By 2026, the vault held more than 1.4 million seed samples. Each country still owns its own seeds. If its seeds are ever lost because of a flood, a fire or a war, it can come and take its spare seeds back.'},
  {h:'Why keep seeds frozen?', t:'A seed is a tiny plant waiting to grow, packed with its own food store. When a seed gets water and warmth, it [[germinates]]: a root pushes down and a shoot pushes up. But in the vault, the seeds are kept dry and very cold, at about minus 18 degrees Celsius. With no water and no warmth, they stay asleep, or [[dormant]], for many years. The rock of the mountain is frozen all year round, so even if the power ever failed, the seeds would stay cold.'},
  {h:'Why it matters', t:'Plants give us almost all our food, either directly or by feeding the animals we eat. Some old types of crops are better at growing in dry weather, salty soil or great heat. By keeping their seeds safe, scientists and farmers of the future will be able to grow them again when they need them most.'}
 ],
 fact:[['Where','Svalbard, Norway, about 1,300 km north of the Arctic Circle'],['Opened','February 2008'],['Seed samples stored','More than 1.4 million (2026)'],['Temperature inside','About –18°C'],['Rooms','3 large vaults deep in the rock']],
 chart:{title:'Seed samples stored in the vault (thousands)', bars:[['2008',237],['2024',1290],['2026',1400]], unit:'thousand samples'},
 glossary:{'back-up':'A spare copy kept safe in case the original is lost.','germinates':'Starts to grow: a seed sends out a root and a shoot.','dormant':'Alive but resting, not growing for now.'},
 q:[
  {type:'Find the fact', q:'When did the seed vault open?', o:['February 2008','June 1990','2026'], why:'The article says it opened in February 2008.'},
  {type:'Word power', q:'What does dormant mean?', o:['Alive but resting, not growing for now','Dead and dried up','Growing very fast'], why:'Cold, dry seeds stay dormant until they get water and warmth.'},
  {type:'Read the chart', q:'Look at the chart. About how many seed samples were stored in 2024?', o:['About 1,290 thousand (1.29 million)','About 237 thousand','About 3 thousand'], why:'The bar for 2024 shows 1,290 thousand.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['The seed vault is the most exciting place in the world.','The seed vault opened in 2008.','The seeds are kept at about –18°C.'], why:'"Most exciting" is what someone feels. The others can be checked, so they are facts.'},
  {type:'Caption', q:'What does the photo caption tell you?', o:['The seeds are stored deep inside the rock, behind the entrance','The vault is in a hot desert','The seeds are planted on the mountain'], why:'Captions explain what a picture shows.'},
  {type:'Summarise', q:'Which sentence best sums up the article?', o:['Seeds from around the world are kept frozen and safe inside an Arctic mountain','Norway is a cold country','Rice grows in Asia'], why:'A summary gives the main idea in one sentence.'},
  {type:'Why it matters', q:'Why are the seeds kept dry and very cold?', o:['So they stay dormant and do not start to grow','So they taste better','So they grow faster'], why:'Seeds need water and warmth to germinate, so cold and dry keeps them resting.'}
 ],
 around:'Have you ever seen a seed start to grow? What did it need?'},

{id:'w-gorilla', grade:'g2', topic:'animals', type:'diary', art:['leaf','rock','beanpod'],
 title:'A Day with the Gorilla Doctors',
 place:'Volcanoes National Park, Rwanda', continent:'Africa', lat:-1.47, lon:29.5, when:'Diary based on real work today',
 sum:'Vets climb misty volcanoes in Africa to keep the world’s mountain gorillas healthy.',
 photo:{src:'img/world/w-gorilla.webp', caption:'A mountain gorilla in the forest. Gorillas walk on all fours, leaning on the knuckles of their hands.'},
 sections:[
  {h:'6:00 am · Up the volcano', t:'The mist is still curled around the volcanoes when our team sets off. I am a vet with the Gorilla Doctors, and today we are hiking up through the bamboo forest to check on a family of mountain gorillas. The path is steep and muddy, so I am glad of my strong boots. A tracker walks ahead, looking for bent stems and fresh footprints. Mountain gorillas live in only two places in the whole world: here in the Virunga Mountains, shared by Rwanda, Uganda and the Democratic Republic of the Congo, and in the Bwindi forest in Uganda.'},
  {h:'9:30 am · Breakfast time', t:'We find the family eating. The huge [[silverback]], the father of the group, is sitting in a patch of wild celery, pulling up stems with his enormous hands. Mountain gorillas are [[herbivores]]. They eat leaves, stems, bamboo shoots, roots and a little fruit. They cannot make their own food like plants can, so they spend about half of every day eating. A youngster tumbles past me, walking on its knuckles. Gorillas have a strong skeleton and powerful muscles in their arms and shoulders, so they can lean their weight on their knuckles as they walk.'},
  {h:'11:00 am · A worried moment', t:'One young female is limping. Through my binoculars I see a wire [[snare]] wrapped around her wrist. Snares are traps set for other animals, but gorillas can get caught in them by mistake. We plan very carefully. Using a special dart, I give her medicine to make her sleep for a short time. Then, gently and quickly, we cut away the wire, clean the wound and check her heart and breathing. Within an hour she is awake, a little grumpy, and back with her family.'},
  {h:'4:00 pm · Good news', t:'Back at camp, I write my notes. In 1981, there were only about 242 mountain gorillas left in the Virunga Mountains. Now there are more than 600 there, and over 1,000 across the world. Rangers, scientists, vets and local people have all helped. Mountain gorillas are still endangered, but they are one of very few great apes whose numbers are going up.'}
 ],
 fact:[['Where','The Virunga Mountains (Rwanda, Uganda, DR Congo) and Bwindi forest, Uganda'],['Diet','Herbivores: leaves, stems, shoots, roots, some fruit'],['World population','More than 1,000 (census 2018–2019)'],['How they walk','On all fours, leaning on their knuckles'],['Biggest danger','Losing their forest, snares and disease']],
 chart:{title:'Mountain gorillas in the Virunga Mountains', bars:[['1981',242],['2010',480],['2016',604]], unit:'gorillas'},
 glossary:{'silverback':'An adult male gorilla, named after the silver hair on his back.','herbivores':'Animals that eat only plants.','snare':'A wire trap set to catch animals.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'What do mountain gorillas mostly eat?', o:['Leaves, stems, shoots and roots','Fish','Insects only'], why:'They are herbivores and eat plants.'},
  {type:'Word power', q:'What is a silverback?', o:['An adult male gorilla','A baby gorilla','A type of tree'], why:'He has silver hair on his back.'},
  {type:'Read the chart', q:'How many mountain gorillas lived in the Virunga Mountains in 2016?', o:['604','242','480'], why:'The 2016 bar shows 604.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Gorillas are the cutest animals in Africa.','Mountain gorillas eat bamboo shoots.','There were 242 gorillas in the Virungas in 1981.'], why:'"Cutest" is a feeling, not something you can check.'},
  {type:'Caption', q:'What does the photo caption tell you about how gorillas walk?', o:['They lean on the knuckles of their hands','They hop on two feet','They slide on their tummies'], why:'The caption explains knuckle-walking.'},
  {type:'Summarise', q:'Which sentence sums up the diary?', o:['Vets help keep mountain gorillas healthy, and their numbers are rising','Gorillas like to sleep in the rain','Rwanda has volcanoes'], why:'This gives the main idea.'},
  {type:'Why it matters', q:'Why do gorillas spend so much of the day eating?', o:['They cannot make their own food and need a lot of plants','They are bored','They are storing food for winter'], why:'Animals must eat to get nutrition, and leaves give less energy than other foods.'}
 ],
 around:'Have you watched an animal eating? What did it eat, and how did it use its body?'},

{id:'w-anning', grade:'g2', topic:'rocks', type:'diary', art:['ammonite','limestone','diary'],
 title:'The Girl Who Found a Sea Dragon',
 place:'Lyme Regis, England', continent:'Europe', lat:50.72, lon:-2.94, when:'1811 to 1823 · imagined diary of a real person',
 sum:'Over 200 years ago, a young fossil hunter named Mary Anning made discoveries that amazed scientists.',
 photo:{src:'img/world/w-anning.webp', caption:'A painting of Mary Anning with her dog and her fossil-hunting hammer, on the beach at Lyme Regis.'},
 sections:[
  {h:'Winter, 1811', t:'Last night a great storm crashed against the cliffs here in Lyme Regis. Storms are good news for us, because they wash away mud from the cliffs and uncover treasures. My brother Joseph and I hurried to the beach at dawn with our baskets and hammers. And there, poking out of the grey rock, Joseph found a long skull with rows of sharp teeth and an eye as big as a saucer! People in town whisper that it must be a crocodile, or even a monster.'},
  {h:'1812 · The rest of the skeleton', t:'I have been searching for a whole year, chipping carefully at the cliff whenever the tide was low. Today I found it: the rest of the creature, a backbone more than five metres long, with ribs and paddle-shaped flippers. It took many men to dig it out. Learned gentlemen say it is a kind of reptile that swam in the sea long ago. They have named it an [[ichthyosaur]], which means "fish lizard". I am twelve years old, and I think it is the most wonderful thing in the world.'},
  {h:'How did a sea creature get into a cliff?', t:'Papa taught me to read the rocks. These cliffs are made of [[layers]] of mud that settled at the bottom of an ancient sea, one on top of another. When a sea creature died, it sank and was quickly covered in mud. Its soft body rotted away, but its hard bones and teeth stayed. Over a very, very long time, more layers pressed down, the mud hardened into rock, and the bones became a [[fossil]]. Today, scientists know these rocks are about 200 million years old.'},
  {h:'1823 · Another first', t:'Today I uncovered the first complete skeleton of a creature with a tiny head on a long, long neck, like a snake threaded through a turtle. Scientists call it a plesiosaur. Some of them did not believe I could have found it, because I am a woman and I did not go to university. But the bones do not lie. Many people still visit Lyme Regis today to hunt for fossils, and some call this coast the Jurassic Coast.'}
 ],
 fact:[['Who','Mary Anning, fossil hunter (1799–1847)'],['Where','The cliffs and beaches of Lyme Regis, England'],['Famous finds','Ichthyosaur (1811–1812), plesiosaur (1823), a flying reptile (1828)'],['Age of the rocks','About 200 million years'],['Today','Her fossils are in museums, including the Natural History Museum in London']],
 timeline:[['1799','Mary is born in Lyme Regis'],['1811–1812','Joseph and Mary find the ichthyosaur'],['1823','First complete plesiosaur'],['1828','A flying reptile, a pterosaur'],['1847','Mary dies; she is remembered as a great fossil hunter']],
 glossary:{'ichthyosaur':'A sea reptile that lived millions of years ago. The name means "fish lizard".','layers':'Flat sheets of material lying on top of each other.','fossil':'The remains or shape of a living thing from long ago, kept in rock.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'Who found the skull of the ichthyosaur?', o:['Mary’s brother Joseph','A fisherman','A university professor'], why:'Joseph found the skull in 1811; Mary found the rest.'},
  {type:'Word power', q:'What does ichthyosaur mean?', o:['Fish lizard','Sea dragon king','Long neck'], why:'The name comes from words meaning fish and lizard.'},
  {type:'Read the timeline', q:'Look at the timeline. What happened in 1823?', o:['Mary found the first complete plesiosaur','Mary was born','Mary found a flying reptile'], why:'The 1823 entry is the plesiosaur.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['The ichthyosaur is the most wonderful thing in the world.','Mary Anning was born in 1799.','The cliffs are made of layers of rock.'], why:'Mary says this to show her feelings.'},
  {type:'Caption', q:'What does the caption tell you Mary used?', o:['A fossil-hunting hammer','A microscope','A fishing net'], why:'The caption mentions her hammer and her dog.'},
  {type:'Summarise', q:'Which sentence sums up the text?', o:['Mary Anning found amazing fossils that helped scientists learn about ancient life','Storms happen at Lyme Regis','Plesiosaurs had long necks'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why did the bones become fossils but the soft body did not?', o:['Soft parts rot away; hard bones and teeth last and turn to rock','The soft parts were eaten by Mary','Soft parts float to the top of the cliff'], why:'Hard parts are more likely to be preserved in rock.'}
 ],
 around:'Have you found an interesting rock, shell or pebble? What does it look like?'},

{id:'w-polarnight', grade:'g2', topic:'light', type:'news', art:['torch','reflector','sunglasses'],
 title:'The Town Where the Sun Takes a Holiday',
 place:'Tromsø, Norway', continent:'Europe', lat:69.65, lon:18.96, when:'Every year, late November to mid-January',
 sum:'In the far north of Norway, the sun does not rise for weeks in winter, and does not set for weeks in summer.',
 photo:{src:'img/world/w-polarnight.webp', caption:'Snowy houses glow under a deep blue sky during the polar night. There is no sun, but a soft twilight lasts for a few hours around midday.'},
 sections:[
  {h:'No sunrise for seven weeks', t:'In Tromsø, a city in the far north of Norway, something amazing happens every winter. From about 27 November to 15 January, the sun does not rise at all. This is called the [[polar night]]. It is not completely black all day: around lunchtime, the sky glows deep blue and pink for a few hours, a soft light called [[twilight]]. But the sun itself stays hidden below the horizon.'},
  {h:'Living without sunlight', t:'We need light to see. With so little daylight, people in Tromsø switch on street lamps, shop lights and candles, and children walk to school in the dark. Many children wear shiny [[reflectors]] on their coats and bags. When car headlights shine on them, the reflectors bounce the light straight back, so drivers can see the children. Snow helps too: white snow reflects light from the moon and the street lamps, making the streets much brighter than they would be without it.'},
  {h:'Then the sun never sets!', t:'Six months later, the opposite happens. From about 18 May until late July, the sun does not set at all. It circles around the sky, even at midnight. This is called the midnight sun. Children can play football outside at midnight in bright sunshine! Because the sun stays low in the sky, shadows are often very long. And when the spring sun shines on the snow, it can be so bright that people wear sunglasses to protect their eyes. Looking straight at the sun, anywhere in the world, can damage your eyes.'},
  {h:'Why does it happen?', t:'The Earth is tilted. In winter, the far north is tipped away from the sun, so the sun never climbs above the horizon. In summer, it is tipped towards the sun, so the sun never sinks below it. Places far from the poles, like the UAE, never have a polar night or a midnight sun.'}
 ],
 fact:[['Where','Tromsø, Norway, nearly 70° north'],['Polar night','About 27 November to 15 January'],['Midnight sun','About 18 May to late July'],['Why','The Earth is tilted as it travels around the sun'],['Safety','Reflectors in winter; sunglasses in bright snow']],
 chart:{title:'Hours of sunlight in Tromsø on four days of the year', bars:[['21 Dec',0],['21 Mar',12],['21 Jun',24],['21 Sep',12]], unit:'hours'},
 glossary:{'polar night':'A time in winter, near the North or South Pole, when the sun does not rise.','twilight':'The soft light in the sky when the sun is just below the horizon.','reflectors':'Shiny objects that bounce light back so people can be seen in the dark.'},
 q:[
  {type:'Find the fact', q:'When is the polar night in Tromsø?', o:['About 27 November to 15 January','All of June','Every Friday'], why:'The article gives these dates.'},
  {type:'Word power', q:'What is a reflector?', o:['A shiny object that bounces light back','A kind of torch','A warm coat'], why:'Reflectors help drivers see people in the dark.'},
  {type:'Read the chart', q:'On which day does Tromsø get 24 hours of sunlight?', o:['21 June','21 December','21 March'], why:'The tallest bar is 21 June.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['The polar night is the best time of year.','The sun does not rise in Tromsø for about seven weeks.','Tromsø is in Norway.'], why:'"The best" is a feeling.'},
  {type:'Caption', q:'According to the caption, when is there some light during the polar night?', o:['For a few hours around midday','At midnight','There is never any light'], why:'The caption mentions twilight around midday.'},
  {type:'Summarise', q:'Which sentence sums up the article?', o:['In Tromsø the sun does not rise in winter and does not set in summer','Norway has snow','Children like football'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why do children in Tromsø wear reflectors?', o:['So drivers can see them in the dark','To keep warm','To make their own light'], why:'Reflectors bounce headlights back; they do not make light.'}
 ],
 around:'Where do you see reflectors or reflections near your home or school?'},

{id:'w-maglev', grade:'g2', topic:'forces', type:'news', art:['magnet','wheel','gokart'],
 title:'Trains That Float on Magnets',
 place:'Shanghai, China', continent:'Asia', lat:31.2, lon:121.5, when:'Shanghai Maglev opened in 2004',
 sum:'Some of the fastest trains in the world never touch the track. They float, pushed and pulled by magnets.',
 photo:{src:'img/world/w-maglev.webp', caption:'A maglev train glides along its raised track. There are no wheels touching the rails.'},
 sections:[
  {h:'A train with no wheels on the track', t:'In Shanghai, China, a sleek white train races from the airport towards the city. It covers about 30 kilometres in around eight minutes. But look closely: it is not rolling on wheels. It is floating about one centimetre above its track! This is a [[maglev]] train, short for "magnetic levitation", which means floating using magnets.'},
  {h:'Pushing and pulling', t:'You already know that magnets have two poles, north and south. When two like poles face each other, they [[repel]], pushing apart. When opposite poles face each other, they [[attract]], pulling together. A maglev train and its track are fitted with very powerful magnets. Some magnets lift the train up so it hovers. Others are switched on and off in turn along the track, pulling the train forwards and pushing it from behind, again and again, very fast.'},
  {h:'Less friction, more speed', t:'Ordinary trains roll on metal wheels. Where the wheels touch the rails, there is friction, a force that slows things down. A maglev train does not touch the track at all, so there is no friction from wheels. The only thing slowing it is air resistance, the air pushing against the front of the train. That is why maglev trains have smooth, pointed noses. When it opened, the Shanghai Maglev could reach 431 kilometres per hour. In 2015, a test maglev train in Japan set a world record of 603 kilometres per hour.'},
  {h:'Quiet and smooth', t:'Because nothing rubs or rattles, passengers say a maglev ride feels very smooth and quiet. Building the special tracks costs a lot of money, so there are only a few maglev lines in the world. But engineers in several countries are working on new ones.'}
 ],
 fact:[['Where','Shanghai, China (and test tracks in Japan)'],['Opened','Shanghai Maglev, 2004'],['How it floats','Powerful magnets attract and repel'],['World record','603 km/h, Japan, 2015'],['Why so fast','No wheel friction on the track']],
 chart:{title:'Top speeds compared (km per hour)', bars:[['Car on motorway',120],['Fast train on wheels',320],['Shanghai Maglev',431],['Record maglev',603]], unit:'km/h'},
 glossary:{'maglev':'A train that floats above its track using magnets (magnetic levitation).','repel':'Push apart.','attract':'Pull together.'},
 q:[
  {type:'Find the fact', q:'How high does a maglev train float above its track?', o:['About one centimetre','About one metre','It does not float'], why:'The article says about one centimetre.'},
  {type:'Word power', q:'What does repel mean?', o:['Push apart','Pull together','Stick forever'], why:'Like poles repel.'},
  {type:'Read the chart', q:'Which is faster: a fast train on wheels or the Shanghai Maglev?', o:['The Shanghai Maglev','The fast train on wheels','They are the same'], why:'431 km/h is more than 320 km/h.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Maglev trains are the coolest way to travel.','A test maglev reached 603 km/h in 2015.','The Shanghai Maglev opened in 2004.'], why:'"Coolest" is someone’s feeling.'},
  {type:'Caption', q:'What does the caption tell you?', o:['No wheels touch the rails','The train is very old','The train runs underwater'], why:'The caption points out there are no wheels on the rails.'},
  {type:'Summarise', q:'Which sentence sums up the article?', o:['Maglev trains use magnets to float, so there is no wheel friction and they go very fast','Shanghai is a big city','Trains are long'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why can a maglev train go faster than a train on wheels?', o:['It does not touch the track, so there is no wheel friction','It is lighter than a feather','It has bigger wheels'], why:'Less friction means less slowing down.'}
 ],
 around:'Where have you seen magnets used at home or at school?'},

/* =========================== GRADE 3 (Year 4) =========================== */
{id:'w-antarctica', grade:'g3', topic:'states', type:'diary', art:['icecube','snow','steam'],
 title:'My Winter on a Moving Ice Shelf',
 place:'Halley VI Research Station, Antarctica', continent:'Antarctica', lat:-75.6, lon:-26.2, when:'Diary based on real life at the station',
 sum:'A scientist’s diary from a research station on legs and skis, where water, ice and snow rule every day.',
 photo:{src:'img/world/w-antarctica.webp', caption:'Halley VI is made of eight modules on hydraulic legs with skis, so it can rise above the snow and even be towed to a new place.'},
 sections:[
  {h:'Day 1 · A station on skis', t:'The plane bumped down onto the snow, and there it was: Halley VI, a row of bright blue and red modules standing on long legs, like a giant caterpillar on stilts. I am a scientist with the British Antarctic Survey, and this will be my home for the long Antarctic winter. Halley sits on the Brunt Ice Shelf, a sheet of ice about 150 metres thick floating on the sea. The ice shelf is slowly sliding towards the ocean, about 400 metres every year, so the whole station has skis on its feet. If the ice cracks dangerously, the modules can be unhooked and towed to a safer place. In fact, that has already happened.'},
  {h:'Day 30 · Where does our water come from?', t:'There are no rivers or taps here. Everything around us is frozen water. So every few days, the team digs fresh snow with a tractor and tips it into a big tank called a snow melter. Heaters warm the snow until it [[melts]] from a solid into liquid water. We use that water for drinking, cooking and showers. We have to be careful not to waste a drop, because melting snow takes a lot of energy.'},
  {h:'Day 95 · Minus 50!', t:'Today the thermometer showed –50°C. At Halley, the temperature can drop below –55°C in winter. My breath came out as a cloud and froze into tiny crystals on my scarf: the warm [[water vapour]] in my breath cooled so fast that it turned straight back into ice. One of the engineers showed us something amazing. He threw a mug of hot water up into the frozen air, and instead of splashing down, it turned into a cloud of tiny ice crystals with a whoosh! Water can be a solid, a liquid and a gas, and here we see all three changing in seconds.'},
  {h:'Day 160 · Snow that never melts', t:'Every year, about a metre of new snow piles up at Halley, and almost none of it melts, because the air almost never warms above freezing. Without its long legs, the station would be buried. Old Halley stations really were buried and crushed. Scientists here also study the air above Antarctica. In 1985, scientists working at Halley were the first to discover the hole in the ozone layer, a thin layer of gas high in the sky that protects Earth from harmful sunlight.'}
 ],
 fact:[['Where','Brunt Ice Shelf, Antarctica'],['Ice thickness','About 150 metres, floating on the sea'],['Coldest winter temperatures','Below –55°C'],['Water supply','Snow melted in a snow melter'],['Famous discovery','The ozone hole, first seen from Halley in 1985']],
 chart:{title:'How many degrees below zero? (°C)', bars:[['Ice melts',0],['Home freezer',18],['Halley in winter',56],['Coldest ever on Earth',89]], unit:'degrees below 0'},
 chartNote:'The coldest temperature ever measured on Earth was –89.2°C at Vostok Station, Antarctica, in 1983.',
 glossary:{'melts':'Changes from a solid to a liquid when it is heated.','water vapour':'Water in the form of an invisible gas.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'Where does the water at Halley come from?', o:['Snow melted in a snow melter','A river','Bottles flown in every day'], why:'The team melts snow for all their water.'},
  {type:'Word power', q:'What happens when ice melts?', o:['It changes from a solid to a liquid','It changes from a gas to a solid','It disappears for ever'], why:'Melting is solid to liquid.'},
  {type:'Read the chart', q:'How cold can Halley get in winter, according to the chart?', o:['About 56 degrees below zero','About 18 degrees below zero','Exactly 0°C'], why:'The Halley bar shows 56 degrees below zero.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Living in Antarctica is the best adventure anyone could have.','Halley sits on the Brunt Ice Shelf.','Snow is melted to make water.'], why:'"The best adventure" is a feeling.'},
  {type:'Caption', q:'Why does the station have legs and skis, according to the caption?', o:['To rise above the snow and be towed to a new place','To make it look like a caterpillar','To keep it warm'], why:'The caption explains both reasons.'},
  {type:'Summarise', q:'Which sentence sums up the diary?', o:['At a moving Antarctic station, scientists melt snow for water and see water change state in extreme cold','Antarctica has penguins','Scientists like tractors'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why did hot water thrown into the air turn into ice crystals?', o:['The air was so cold that the water froze almost instantly','It turned into steam and floated away','The water was magic'], why:'At –50°C, tiny droplets freeze in seconds.'}
 ],
 around:'Where have you seen water change state: melting, freezing, evaporating or condensing?'},

{id:'w-whales', grade:'g3', topic:'sound', type:'news', art:['shark','water','bell'],
 title:'Listening to the Songs of the Ocean',
 place:'Pacific Ocean, near Hawaii', continent:'Oceans', lat:20.8, lon:-156.9, when:'Studied since the 1960s and still today',
 sum:'Humpback whales sing long, beautiful songs under the sea, and scientists listen with underwater microphones.',
 photo:{src:'img/world/w-whales.webp', caption:'A humpback whale leaps out of the ocean. Under the water, male humpbacks sing songs that can travel for many kilometres.'},
 sections:[
  {h:'A song beneath the waves', t:'Imagine floating in a boat on a calm, blue sea and dropping a special microphone into the water. Through your headphones you hear moans, whoops, squeaks and long, deep rumbles, all in a pattern, again and again. You are listening to a humpback whale singing. Scientists use underwater microphones called [[hydrophones]] to record these songs.'},
  {h:'Who is singing?', t:'Only male humpback whales sing. Their songs are made of sounds repeated in patterns, a bit like verses in a song. One song can last up to 20 minutes, and a whale may sing it over and over for hours. All the males in one area sing the same song, but it slowly changes over time. Sometimes a brand-new song spreads from whale to whale across a whole ocean. In 1970, an album of humpback whale songs became famous around the world, and it helped people care about protecting whales.'},
  {h:'How does sound travel under water?', t:'Every sound is made by something [[vibrating]]. The whale makes the air inside its body vibrate, and those vibrations pass into the water. Water is a very good [[medium]] for sound. In air, sound travels at about 343 metres per second, but in sea water it travels at about 1,500 metres per second, more than four times faster. Low, deep sounds can travel a very long way in the ocean, so whales can hear each other from many kilometres away.'},
  {h:'Why it matters', t:'The ocean is getting noisier. Ships’ engines and propellers vibrate and make loud, low sounds that can drown out whale songs, like trying to chat to a friend at a noisy party. Scientists listen to the ocean to find out where whales go and how noise affects them. Some ports now ask ships to slow down, because slower ships are quieter, and that helps whales hear each other again.'}
 ],
 fact:[['Who sings','Male humpback whales'],['Song length','Up to about 20 minutes, repeated for hours'],['How scientists listen','Hydrophones (underwater microphones)'],['Speed of sound in sea water','About 1,500 m per second'],['Speed of sound in air','About 343 m per second']],
 chart:{title:'How fast sound travels through different materials (metres per second)', bars:[['Air',343],['Sea water',1500],['Steel',5900]], unit:'m/s'},
 glossary:{'hydrophones':'Microphones that work under water.','vibrating':'Moving backwards and forwards very quickly.','medium':'The material that sound travels through, such as air, water or metal.'},
 q:[
  {type:'Find the fact', q:'Which humpback whales sing?', o:['Only the males','Only the babies','All of them equally'], why:'The article says only male humpbacks sing.'},
  {type:'Word power', q:'What is a hydrophone?', o:['A microphone that works under water','A type of whale','A boat engine'], why:'Hydro means water.'},
  {type:'Read the chart', q:'In which material does sound travel fastest?', o:['Steel','Sea water','Air'], why:'The steel bar is tallest: about 5,900 m per second.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Whale songs are more beautiful than any human music.','Sound travels faster in water than in air.','A song can last up to 20 minutes.'], why:'Beauty is a matter of opinion.'},
  {type:'Caption', q:'What does the caption tell you about the whales’ songs?', o:['They can travel for many kilometres','They can only be heard above water','They are very short'], why:'The caption says the songs travel for many kilometres.'},
  {type:'Summarise', q:'Which sentence sums up the article?', o:['Humpback whales sing long songs that travel far through water, and scientists listen to help protect them','Whales are big','Ships have propellers'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why does ship noise cause problems for whales?', o:['It can drown out their songs so they cannot hear each other','It makes the water warmer','It makes whales sing faster'], why:'Loud vibrations from ships cover the whales’ sounds.'}
 ],
 around:'What sounds can you hear right now? What do you think is vibrating to make each one?'},

{id:'w-noor', grade:'g3', topic:'electricity', type:'news', art:['sun','lightbulb','battery'],
 title:'Light from the Desert: Morocco’s Giant Solar Power Station',
 place:'Ouarzazate, Morocco', continent:'Africa', lat:31.0, lon:-6.86, when:'Opened in stages from 2016 to 2018',
 sum:'At the edge of the Sahara, thousands of mirrors catch sunlight to make electricity, even after dark.',
 photo:{src:'img/world/w-noor.webp', caption:'Rows of curved mirrors at the Noor Ouarzazate solar complex. Each mirror focuses sunlight to heat a liquid that helps make electricity.'},
 sections:[
  {h:'A sea of mirrors', t:'At the edge of the Sahara Desert, at the foot of the Atlas Mountains in Morocco, there is a sight that looks like a shining silver sea. It is the Noor Ouarzazate solar complex, one of the biggest solar power stations of its kind in the world. "Noor" means "light" in Arabic. Altogether it covers about 3,000 hectares, as big as thousands of football pitches, and it can make up to about 580 megawatts of electricity.'},
  {h:'How do mirrors make electricity?', t:'Most of the station uses long rows of curved mirrors that follow the sun across the sky. The mirrors focus sunlight onto pipes filled with a special liquid, heating it until it is very hot. The heat boils water into steam, and the steam spins a [[turbine]], a machine like a giant fan that turns a [[generator]] to make electricity. In one part of the station, called Noor III, thousands of mirrors point sunlight at the top of a tower about 250 metres tall.'},
  {h:'Power after sunset', t:'Here is the clever part. Some of the heat is stored in huge tanks of hot, melted salt. Molten salt stays hot for many hours. After the sun goes down, the stored heat is used to keep making steam, so the station can make electricity into the night. Noor I can store heat for about three hours, and Noor III for about seven and a half hours.'},
  {h:'From the desert to your plug', t:'The electricity travels along thick cables made of metal [[conductors]], wrapped in insulators to keep everyone safe. The cables carry it to towns and cities, where it powers appliances such as lights, fridges, computers and kettles. Noor I alone can supply electricity to about 135,000 homes. Because it uses sunlight, it does not burn coal or oil, which means much less pollution.'}
 ],
 fact:[['Where','Near Ouarzazate, Morocco, at the edge of the Sahara'],['Size','About 3,000 hectares'],['Total power','About 580 megawatts (four parts: Noor I–IV)'],['Tallest part','Noor III solar tower, about 250 m'],['Clever trick','Heat stored in molten salt gives power after sunset']],
 chart:{title:'Power from each part of the Noor complex (megawatts)', bars:[['Noor I',160],['Noor II',200],['Noor III',150],['Noor IV',70]], unit:'MW'},
 glossary:{'turbine':'A machine with blades that spins when steam, wind or water pushes it.','generator':'A machine that turns spinning movement into electricity.','conductors':'Materials, like metals, that let electricity flow through them.'},
 q:[
  {type:'Find the fact', q:'What does the word "Noor" mean in Arabic?', o:['Light','Desert','Mirror'], why:'The article says Noor means light.'},
  {type:'Word power', q:'What does a generator do?', o:['Turns spinning movement into electricity','Stores salt','Cools the mirrors'], why:'The turbine spins the generator, which makes electricity.'},
  {type:'Read the chart', q:'Which part of the complex makes the most power?', o:['Noor II (200 MW)','Noor IV (70 MW)','Noor I (160 MW)'], why:'Noor II has the tallest bar.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Solar power stations are the most beautiful buildings ever made.','The Noor III tower is about 250 metres tall.','Noor I can store heat for about three hours.'], why:'"Most beautiful" is a feeling.'},
  {type:'Caption', q:'According to the caption, what do the mirrors do?', o:['Focus sunlight to heat a liquid','Make the sunlight colder','Store electricity in batteries'], why:'The caption explains the mirrors focus sunlight.'},
  {type:'Summarise', q:'Which sentence sums up the article?', o:['Mirrors in Morocco use sunlight to make electricity, even after dark, and send it along cables to homes','Morocco has mountains','Salt is used in cooking'], why:'That is the main idea.'},
  {type:'Why it matters', q:'Why are the cables wrapped in insulators?', o:['To keep the electricity inside and keep people safe','To make the electricity go faster','To keep the cables warm'], why:'Insulators stop electricity escaping.'}
 ],
 around:'Which appliances in your home use the most electricity, do you think? How could your family save some?'},

{id:'w-oryx', grade:'g3', topic:'living', type:'news', art:['giraffe','sun','leaf'],
 title:'Back from the Brink: The Return of the Arabian Oryx',
 place:'Jiddat al-Harasis, Oman', continent:'Asia', lat:19.9, lon:56.5, when:'1972 to today',
 sum:'This desert antelope disappeared from the wild in 1972. Thanks to people working together, herds roam again today.',
 photo:{src:'img/world/w-oryx.webp', caption:'An Arabian oryx in the desert. Its white coat reflects the sun’s heat, and its wide hooves help it walk on soft sand.'},
 sections:[
  {h:'Gone from the wild', t:'The Arabian oryx is a beautiful white antelope with long, straight horns. For thousands of years, herds wandered across the deserts of the Arabian Peninsula. But in the 1900s, people hunted them more and more, until very few were left. In 1972, the last wild Arabian oryx was shot in the desert of Oman. The species was declared [[extinct in the wild]]: the only ones left were in zoos and private collections.'},
  {h:'Operation Oryx', t:'Luckily, about ten years earlier, conservationists had worried that this might happen. In the early 1960s, they caught a few of the last wild oryx and took them to a zoo in Phoenix, in the USA, where the dry, hot weather was a little like their home. Other oryx were added from Saudi Arabia, Kuwait and the United Kingdom. This small group, called the World Herd, began to have calves. Slowly, the herd grew.'},
  {h:'Coming home', t:'On 31 January 1982, ten Arabian oryx were released into the desert of central Oman. Rangers watched them closely. The oryx found plants to eat and survived the heat. More oryx were later released in Saudi Arabia, the UAE, Jordan and Israel. In 2011, scientists moved the Arabian oryx from "Endangered" to "Vulnerable" on the world’s list of threatened animals. It was the first animal ever to recover all the way from "extinct in the wild" to "vulnerable". By 2011, around 1,000 Arabian oryx were living in the wild, with many more in protected reserves.'},
  {h:'Built for the desert', t:'The oryx is perfectly [[adapted]] to its habitat. Its white coat reflects the burning sun. Its wide hooves stop it sinking into soft sand. It can go for long periods without drinking, getting water from the plants it eats and from dew. It is a mammal and a herbivore. But its environment can still change: if hunting starts again, or if roads and buildings take over its desert, it could be in danger once more.'}
 ],
 fact:[['Scientific name','Oryx leucoryx'],['Group','Mammal; herbivore; antelope'],['Extinct in the wild','1972'],['First return to the wild','31 January 1982, Oman (10 animals)'],['Status since 2011','Vulnerable (about 1,000 in the wild in 2011)']],
 chart:{title:'Arabian oryx living in the wild', bars:[['1972',0],['1982',10],['2011',1000]], unit:'oryx (about)'},
 glossary:{'extinct in the wild':'No longer living in nature; only found in zoos or reserves.','adapted':'Having body parts or behaviours that suit a habitat.'},
 key:{title:'Use the key: which animal is the Arabian oryx?', steps:[['Does it have feathers?','Yes → bird. No → go on.'],['Does it have hooves?','No → not an antelope. Yes → go on.'],['Does it have long, straight horns and a white coat?','Yes → Arabian oryx!']]},
 q:[
  {type:'Find the fact', q:'When was the last wild Arabian oryx shot?', o:['1972','1982','2011'], why:'The article says 1972.'},
  {type:'Word power', q:'What does adapted mean?', o:['Having body parts or behaviours that suit a habitat','Living in a zoo','Very old'], why:'The oryx’s coat and hooves suit the desert.'},
  {type:'Read the chart', q:'About how many Arabian oryx lived in the wild in 2011?', o:['About 1,000','10','0'], why:'The 2011 bar shows about 1,000.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['The Arabian oryx is the most beautiful animal in the desert.','The oryx was released in Oman in 1982.','The oryx is a herbivore.'], why:'"Most beautiful" is a feeling.'},
  {type:'Caption', q:'According to the caption, how do its hooves help the oryx?', o:['They help it walk on soft sand','They help it swim','They keep it warm'], why:'Wide hooves stop it sinking into sand.'},
  {type:'Summarise', q:'Which sentence sums up the article?', o:['The Arabian oryx vanished from the wild but was bred in zoos and returned to the desert','Oman has deserts','Antelopes have horns'], why:'That is the main idea.'},
  {type:'Why it matters', q:'What change to the environment could put the oryx in danger again?', o:['Hunting starting again or buildings taking over the desert','More rain in winter','More visitors reading about it'], why:'Changes to habitats can pose dangers to living things.'}
 ],
 around:'Which wild animals live near your home or school? How are they suited to that place?'},

{id:'w-zookeeper', grade:'g3', topic:'animals', type:'diary', art:['lion','giraffe','apple'],
 title:'A Zookeeper’s Diary: Teeth, Tummies and Feeding Time',
 place:'A zoo in Singapore', continent:'Asia', lat:1.35, lon:103.8, when:'Diary based on real zookeeping',
 sum:'A zookeeper explains why lions, giraffes and humans have such different teeth, and what happens to food inside us.',
 photo:{src:'img/world/w-zookeeper.webp', caption:'A lion’s skull shows its long, pointed canine teeth for gripping and its sharp back teeth for slicing meat.'},
 sections:[
  {h:'7:00 am · The big cats', t:'Feeding time is my favourite part of being a zookeeper. I start with the lions. They are [[carnivores]], so their breakfast is meat. When the lion pulls at her food, I can see her teeth clearly. At the front are four long, pointed [[canines]] for gripping and holding. Further back are sharp, blade-like teeth that slide past each other like scissors to slice meat. Lions do not chew much at all; they gulp down big chunks. An adult lion has 30 teeth.'},
  {h:'9:30 am · The giraffes', t:'Next, I climb up to the giraffe platform with branches of fresh leaves. Giraffes are herbivores. A giraffe uses its long, purple tongue to wrap around leaves and strip them off the branch. Here is a surprise: giraffes have no top front teeth at all, just a hard pad of gum. They grip leaves between their bottom front teeth and that pad. At the back, they have wide, flat [[molars]] for grinding tough leaves into mush. Grinding is important, because plants are hard to break down.'},
  {h:'12:00 pm · My own lunch', t:'At lunchtime, I look at my sandwich and think about my own teeth. Humans are omnivores, so we have a mix of teeth. Our incisors at the front are flat and sharp for biting and cutting. Our canines are a little pointed, for tearing. Our molars at the back grind food. Children have 20 baby teeth, and adults have up to 32.'},
  {h:'3:00 pm · The journey of food', t:'Our visitors always ask what happens after you swallow. In your mouth, teeth chop and grind food, and saliva makes it soft. Then food slides down a tube called the [[oesophagus]] into the stomach, where it is churned and mixed with strong juices. Next it moves into the small intestine, about six metres long, coiled up inside you. Here the useful parts of food pass into your blood. Finally, the large intestine soaks up water, and what is left leaves your body as waste. Every animal at the zoo is part of a food chain too: grass is eaten by a zebra, and a zebra might be eaten by a lion. Grass is the producer; the lion is the predator; the zebra is the prey.'}
 ],
 fact:[['Lion teeth','30 (long canines, slicing back teeth)'],['Giraffe teeth','32 (no top front teeth, flat molars)'],['Human teeth','20 baby teeth, up to 32 adult teeth'],['Digestive system','Mouth → oesophagus → stomach → small intestine → large intestine'],['Small intestine','About 6 metres long in an adult']],
 chart:{title:'Number of teeth', bars:[['Child',20],['Lion',30],['Giraffe',32],['Adult human',32]], unit:'teeth'},
 glossary:{'carnivores':'Animals that eat other animals.','canines':'Long, pointed teeth for gripping and tearing.','molars':'Wide, flat teeth at the back for grinding.','oesophagus':'The tube that carries food from your mouth to your stomach.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'How many teeth does an adult lion have?', o:['30','20','32'], why:'The diary says 30.'},
  {type:'Word power', q:'What are molars for?', o:['Grinding food','Gripping prey','Cutting paper'], why:'Molars are wide, flat back teeth.'},
  {type:'Read the chart', q:'Who has the fewest teeth in the chart?', o:['A child','A lion','A giraffe'], why:'Children have 20 baby teeth.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Feeding time is the best part of being a zookeeper.','Giraffes have no top front teeth.','The small intestine is about six metres long.'], why:'The zookeeper is giving a personal feeling.'},
  {type:'Caption', q:'What does the caption say the lion’s canines are for?', o:['Gripping','Grinding leaves','Drinking'], why:'The caption explains canines grip and back teeth slice.'},
  {type:'Summarise', q:'Which sentence sums up the diary?', o:['Different animals have teeth suited to their food, and food travels through the digestive system','Zoos open at 7 am','Lions are big cats'], why:'That is the main idea.'},
  {type:'Why it matters', q:'In the food chain grass → zebra → lion, what is the zebra?', o:['Prey','Producer','Predator'], why:'The zebra is eaten by the lion, so it is prey.'}
 ],
 around:'Look in a mirror and count your teeth. Which ones do you use most when you bite an apple?'}
];
