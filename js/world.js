/* Science Quest: Science Around the World. True, real-life science texts (news reports and diaries).
   Facts checked in November 2026. Diaries are imagined, but every fact in them is real.
   Questions: first option is always correct (shuffled on screen). */
window.SQ_WORLD = [
/* =========================== KG2 (Year 1): short, simple true stories, 5 questions =========================== */
{id:'w-penguin', grade:'kg2', topic:'animals', type:'news', art:['egg','snow','chick'],
 title:'The Penguin Dads Who Keep Eggs Warm',
 place:'Antarctica', continent:'Antarctica', lat:-70, lon:110, when:'Every winter',
 sum:'In icy Antarctica, emperor penguin dads hold an egg on their feet for about two months.',
 photo:{src:'img/world/w-penguin.webp', caption:'An emperor penguin dad holds the egg on his feet, under a warm flap of feathery skin.'},
 sections:[
  {h:'A cold, cold home', t:'Emperor penguins live in Antarctica. It is the coldest place on Earth. There is ice and snow everywhere, and strong winds blow. Penguins are [[birds]]. They have feathers and a beak, and they lay eggs. But penguins cannot fly. They swim in the sea to catch fish.'},
  {h:'Dad looks after the egg', t:'The mum penguin lays one egg. She gently passes it to the dad. Then she goes back to the sea to eat. The dad keeps the egg on his feet, under a warm flap of feathery skin. He waits there for about 65 days! He does not eat at all.'},
  {h:'Snuggle up!', t:'To keep warm, the dads stand close together in a big group called a [[huddle]]. They take turns to stand in the warm middle. At last, the egg cracks and a fluffy grey [[chick]] comes out. Then mum comes back with food.'}
 ],
 fact:[['Animal group','Bird'],['Where','Antarctica'],['Food','Fish and squid'],['Eggs','One egg each year'],['Dad keeps the egg warm for','About 65 days']],
 chart:{title:'How many days until the egg hatches?', bars:[['Hen',21],['Emperor penguin',65]], unit:'days'},
 glossary:{'birds':'Animals with feathers, a beak and wings that lay eggs.','huddle':'A big group standing close together to keep warm.','chick':'A baby bird.'},
 q:[
  {type:'Find the fact', q:'Who keeps the penguin egg warm?', o:['The dad','The mum','A seal'], why:'The dad holds the egg on his feet.'},
  {type:'Word power', q:'What is a huddle?', o:['A big group standing close to keep warm','A kind of fish','A nest of sticks'], why:'Penguins huddle together in the cold.'},
  {type:'Read the chart', q:'Which egg takes longer to hatch?', o:['The emperor penguin egg','The hen egg','They are the same'], why:'65 days is longer than 21 days.'},
  {type:'Caption', q:'Look at the photo words. Where does the dad keep the egg?', o:['On his feet','In a tree','In the sea'], why:'The caption says on his feet, under a flap of skin.'},
  {type:'Summarise', q:'What is this story about?', o:['Penguin dads keeping their eggs warm','Penguins flying','A hot desert'], why:'That is the big idea.'}
 ],
 around:'Which birds can you see near your home or school? What do they look like?'},

{id:'w-sequoia', grade:'kg2', topic:'plants', type:'news', art:['pine','pinecone','leaf'],
 title:'The Biggest Tree in the World',
 place:'Sequoia National Park, USA', continent:'North America', lat:36.58, lon:-118.75, when:'About 2,200 years old',
 sum:'A giant tree in California is taller than a 20-storey building and older than almost anything alive.',
 photo:{src:'img/world/w-sequoia.webp', caption:'The General Sherman Tree, from its roots all the way up to its top. It is so tall that this photo was made by joining lots of photos together!', credit:'Wikimedia Commons', fit:'contain'},
 sections:[
  {h:'Meet General Sherman', t:'In a forest in California, in the USA, there is a giant tree. Its name is General Sherman. It is a [[giant sequoia]] tree. It is the biggest tree in the world! It is about 84 metres tall. That is as tall as about 17 giraffes standing on top of each other.'},
  {h:'Parts of a tree', t:'Like all trees, General Sherman has roots, a [[trunk]], branches and leaves. The roots hold it in the ground and drink up water. The trunk is very, very wide. It would take more than 20 children holding hands to go all the way around it. Its leaves are small and look like tiny green scales.'},
  {h:'A very old tree', t:'General Sherman is about 2,200 years old. It is an [[evergreen]] tree, so it keeps its leaves all year. It grew from a tiny seed inside a small cone, about as big as a hen’s egg. Now people come from all over the world to look up at it.'}
 ],
 fact:[['Name','General Sherman'],['Kind of tree','Giant sequoia (evergreen)'],['Height','About 84 metres'],['Age','About 2,200 years'],['Where','California, USA']],
 chart:{title:'How tall? (metres)', bars:[['Giraffe',5],['School',10],['General Sherman',84]], unit:'metres'},
 glossary:{'giant sequoia':'A kind of very big tree that grows in California.','trunk':'The thick, strong stem of a tree.','evergreen':'A tree that keeps its leaves all year.'},
 q:[
  {type:'Find the fact', q:'How old is General Sherman?', o:['About 2,200 years','About 10 years','About 100 years'], why:'The story says about 2,200 years.'},
  {type:'Word power', q:'What is an evergreen tree?', o:['A tree that keeps its leaves all year','A tree with no leaves','A tree made of plastic'], why:'Evergreen trees keep their leaves.'},
  {type:'Read the chart', q:'Which is the tallest?', o:['General Sherman','The school','The giraffe'], why:'Its bar is the longest: 84 metres.'},
  {type:'Caption', q:'What does the photo show?', o:['A huge tree, from its roots to its top','A tiny plant in a pot','A tree with no trunk'], why:'The caption says the photo shows the tree from its roots to its top.'},
  {type:'Summarise', q:'What is this story about?', o:['The biggest tree in the world','A small flower','A giraffe'], why:'That is the big idea.'}
 ],
 around:'Find a tree near you. Can you see its trunk, branches and leaves? Is it evergreen?'},

{id:'w-icehotel', grade:'kg2', topic:'materials', type:'news', art:['icecube','snow','water'],
 title:'A Hotel Made of Ice',
 place:'Jukkasjärvi, Sweden', continent:'Europe', lat:67.85, lon:20.6, when:'Built every winter since 1990',
 sum:'In the north of Sweden, people build a whole hotel out of ice and snow. In spring, it melts away!',
 photo:{src:'img/world/w-icehotel.webp', caption:'Inside the Icehotel, the walls, the bed and even the lamps are made of ice and snow.'},
 sections:[
  {h:'Ice from the river', t:'In the far north of Sweden, a river called the Torne River freezes in winter. The water turns into hard, clear ice. Workers cut big blocks of ice out of the frozen river and keep them cold in a big store.'},
  {h:'Building with ice', t:'When winter comes again, builders and artists make a hotel out of the ice and snow. The walls, the beds, the chairs and even the lamps are made of ice! Ice is a good [[material]] here because it is hard and strong, and it is [[transparent]], so light shines through it. Guests sleep on ice beds covered with warm reindeer skins and sleeping bags.'},
  {h:'Goodbye, hotel!', t:'In spring the sun gets warmer. The ice hotel [[melts]] and the water flows back into the river. Then, the next winter, a brand new ice hotel is built, with new shapes and new art.'}
 ],
 fact:[['Where','Jukkasjärvi, Sweden'],['Made of','Ice and snow from the Torne River'],['Open','About December to April'],['First built','1990'],['What happens in spring','It melts back into the river']],
 timeline:[['March','Cut ice from the frozen river'],['Summer','Keep the ice blocks cold in a store'],['Winter','Build the new hotel'],['Spring','The hotel melts back into the river']],
 glossary:{'material':'What something is made of, like wood, metal, plastic or ice.','transparent':'See-through. Light can pass through it.','melts':'Turns from solid into liquid when it gets warm.'},
 q:[
  {type:'Find the fact', q:'Where does the ice come from?', o:['A frozen river','A freezer at home','The sea in summer'], why:'The ice comes from the Torne River.'},
  {type:'Word power', q:'What does transparent mean?', o:['See-through','Very soft','Very hot'], why:'Light can shine through transparent things.'},
  {type:'Read the timeline', q:'Look at the timeline. When does the hotel melt?', o:['Spring','Winter','March, when they cut the ice'], why:'The timeline says it melts in spring.'},
  {type:'Caption', q:'What does the caption say is made of ice?', o:['The walls, the bed and the lamps','Only the door','The guests’ coats'], why:'The caption lists the walls, bed and lamps.'},
  {type:'Summarise', q:'What is this story about?', o:['A hotel built from ice that melts each spring','A hot sandy beach','A wooden house'], why:'That is the big idea.'}
 ],
 around:'Look around your classroom. What materials can you find? Which ones are transparent?'},

{id:'w-turtles', grade:'kg2', topic:'animals', type:'diary', art:['tortoise','egg','sun'],
 title:'A Night with the Baby Turtles',
 place:'Ras Al Jinz, Oman', continent:'Asia', lat:22.42, lon:59.83, when:'Diary based on real nights at the reserve',
 sum:'On a beach in Oman, a ranger watches mother turtles lay eggs, and tiny baby turtles race to the sea.',
 photo:{src:'img/world/w-turtles.webp', caption:'A baby green turtle at Ras Al Jinz crawls across the sand towards the sea.', credit:'Wikimedia Commons'},
 sections:[
  {h:'9 o’clock at night', t:'I am a ranger at Ras Al Jinz, a beach in Oman. Every night, I watch the sea turtles. Tonight is dark and quiet. A big green turtle comes out of the waves. She pulls herself slowly up the sand with her strong [[flippers]].'},
  {h:'Laying eggs', t:'The mother turtle digs a deep hole in the sand. She lays about 100 round, white eggs in it. They look like ping-pong balls! Then she covers them with sand and goes back to the sea. Turtles are [[reptiles]]. They have scaly skin and they lay eggs.'},
  {h:'Hatching day', t:'About 55 days later, the eggs [[hatch]]. Tiny baby turtles wriggle up out of the sand. They are as small as my hand. They scurry down the beach to the sea as fast as they can. Goodbye, little turtles! One day, the girls will come back to this beach to lay their own eggs.'}
 ],
 fact:[['Where','Ras Al Jinz, Oman'],['Animal','Green turtle'],['Animal group','Reptile'],['Eggs in one nest','About 100'],['Days until they hatch','About 55']],
 chart:{title:'How many days until the eggs hatch?', bars:[['Hen',21],['Green turtle',55],['Emperor penguin',65]], unit:'days'},
 glossary:{'flippers':'Flat, wide legs that are good for swimming.','reptiles':'Animals with dry, scaly skin that lay eggs, like turtles, lizards and snakes.','hatch':'When a baby animal breaks out of its egg.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'About how many eggs does the turtle lay?', o:['About 100','One','Five'], why:'The diary says about 100 eggs.'},
  {type:'Word power', q:'What are flippers?', o:['Flat legs for swimming','A kind of egg','Sharp teeth'], why:'Turtles use flippers to swim and crawl.'},
  {type:'Read the chart', q:'How many days until turtle eggs hatch?', o:['55','21','65'], why:'The green turtle bar shows 55.'},
  {type:'Caption', q:'Where is the baby turtle going in the photo?', o:['To the sea','Up a tree','Into a house'], why:'The caption says it crawls towards the sea.'},
  {type:'Summarise', q:'What is this diary about?', o:['Turtles laying eggs and babies going to the sea','A turtle that can fly','A ranger’s lunch'], why:'That is the big idea.'}
 ],
 around:'Which animals have you seen that lay eggs?'},

{id:'w-sakura', grade:'kg2', topic:'seasons', type:'news', art:['bud','tulip','sun'],
 title:'Pink Flowers Say Spring Is Here!',
 place:'Tokyo, Japan', continent:'Asia', lat:35.68, lon:139.7, when:'Every spring, January to May',
 sum:'In Japan, people watch the news to find out when the cherry trees will burst into pink flowers.',
 photo:{src:'img/world/w-sakura.webp', caption:'Cherry trees in full bloom beside a river in Tokyo in spring. The branches are covered with pale pink flowers, and families have picnics underneath.', credit:'Wikimedia Commons'},
 sections:[
  {h:'Waiting for the flowers', t:'In Japan, there are lots of cherry trees. In winter, the branches are bare. There are no leaves and no flowers. But in spring, the weather gets warmer and the days get longer. Little [[buds]] on the branches start to open.'},
  {h:'A blossom weather report', t:'The flowers are called cherry [[blossom]]. In Japan, the weather news makes a special report. It tells people when the blossom will open in each town! It opens first in the warm south of Japan, and last in the cold north.'},
  {h:'Pink everywhere', t:'When the blossom opens, the trees are covered in pink and white flowers. Families have picnics under the trees to enjoy them. The flowers last for only about one or two weeks. Then the petals fall like pink snow, and green leaves grow. Summer is on its way.'}
 ],
 fact:[['Where','Japan'],['Season','Spring'],['How long the flowers last','About 1 to 2 weeks'],['Opens first','The warm south (Okinawa)'],['Opens last','The cold north (Hokkaido)']],
 timeline:[['January','Blossom opens in Okinawa, in the warm south'],['Late March','Blossom opens in Tokyo'],['April','Blossom opens in northern Japan'],['May','Blossom opens in Hokkaido, in the cold north']],
 glossary:{'buds':'Small round parts of a plant that open into leaves or flowers.','blossom':'Flowers on a tree.'},
 q:[
  {type:'Find the fact', q:'In which season does cherry blossom open?', o:['Spring','Winter','Autumn'], why:'The story says spring.'},
  {type:'Word power', q:'What is blossom?', o:['Flowers on a tree','A kind of snow','A bird'], why:'Blossom means tree flowers.'},
  {type:'Read the timeline', q:'Where does the blossom open last?', o:['Hokkaido, in the cold north','Okinawa, in the warm south','Tokyo'], why:'The timeline shows May in Hokkaido.'},
  {type:'Caption', q:'What colour are the flowers in the photo?', o:['Pale pink','Bright blue','Black'], why:'The caption says pale pink.'},
  {type:'Summarise', q:'What is this story about?', o:['Cherry trees flowering in spring in Japan','Snow in summer','A picnic in winter'], why:'That is the big idea.'}
 ],
 around:'Look at a tree near you. What does it look like in this season?'},

/* =========================== GRADE 1 (Year 2): 6 questions =========================== */
{id:'w-reef', grade:'g1', topic:'living', type:'diary', art:['trout','shark','tortoise'],
 title:'Diving on the Great Barrier Reef',
 place:'Great Barrier Reef, Australia', continent:'Australia', lat:-18.3, lon:147.7, when:'Diary based on real reef science',
 sum:'A marine scientist dives on the world’s biggest coral reef, a busy underwater habitat full of living things.',
 photo:{src:'img/world/w-reef.webp', caption:'Corals of many shapes on the Great Barrier Reef: round brain coral, bushy branching coral and flat plate coral. The corals are alive!', credit:'Wikimedia Commons'},
 sections:[
  {h:'Monday · Into the blue', t:'Splash! I rolled backwards off the boat and sank into the warm, clear water. I am a marine scientist, which means I study living things in the sea. Today I am diving on the Great Barrier Reef, off the coast of Australia. It is the biggest coral reef in the world. It stretches for about 2,300 kilometres and it is so big that astronauts can see it from space!'},
  {h:'Is coral a rock?', t:'Many people think coral is a rock or a plant. But coral is made of tiny animals! Each one is soft, with a ring of little arms around its mouth. They build hard skeletons around themselves, and millions of them together make a reef. So the reef is [[alive]]. The empty shells I found on the sand were once alive too, but now they are dead. The sand and the water have never been alive at all.'},
  {h:'Wednesday · A busy habitat', t:'A reef is a [[habitat]], a home where living things find everything they need: food, shelter and space. Today I counted parrotfish, clownfish hiding in a wiggly sea anemone, a sea turtle munching seagrass and a reef shark gliding past. More than 1,500 kinds of fish live here.'},
  {h:'Friday · Who eats who?', t:'I watched a little food chain. Tiny plant-like algae grow in the sunlight. A small fish nibbled the algae. Then a bigger fish gobbled up the small fish! Algae → small fish → big fish. Every living thing on the reef [[depends]] on others. If the water gets too warm, the coral can turn white and get sick, so scientists like me keep checking on it.'}
 ],
 fact:[['Where','Off the coast of Queensland, Australia'],['Length','About 2,300 km'],['Kinds of fish','More than 1,500'],['Kinds of coral','More than 400'],['Sea turtles','6 of the world’s 7 kinds']],
 chart:{title:'How many different kinds live on the reef?', bars:[['Sea turtles',6],['Corals',400],['Fish',1500]], unit:'kinds'},
 glossary:{'alive':'Living: it grows, needs food and makes new living things.','habitat':'The natural home of a plant or animal.','depends':'Needs something else to live.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'What is coral made of?', o:['Tiny animals','Rocks','Plastic'], why:'Coral is made of tiny animals with hard skeletons.'},
  {type:'Word power', q:'What is a habitat?', o:['The natural home of a plant or animal','A kind of fish','A boat'], why:'A habitat gives living things what they need.'},
  {type:'Read the chart', q:'Which group has the most kinds on the reef?', o:['Fish','Corals','Sea turtles'], why:'The fish bar is longest: more than 1,500.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Clownfish are the prettiest fish in the sea.','The reef is about 2,300 km long.','Coral is made of tiny animals.'], why:'"Prettiest" is a feeling.'},
  {type:'Caption', q:'What does the caption tell you about the corals?', o:['They are alive','They are made of glass','They are dead'], why:'The caption says the corals are alive.'},
  {type:'Summarise', q:'Which sentence sums up the diary?', o:['A coral reef is a living habitat where many animals find food and shelter','Scientists like boats','Sharks are big'], why:'That is the main idea.'}
 ],
 around:'Choose a small habitat near you, like a tree, a patch of grass or under a stone. What lives there?'},

{id:'w-maathai', grade:'g1', topic:'plants', type:'news', art:['cress','pine','water'],
 title:'The Woman Who Planted Millions of Trees',
 place:'Nyeri, Kenya', continent:'Africa', lat:-0.42, lon:36.95, when:'1977 to today',
 sum:'Wangari Maathai helped people in Kenya grow tree seedlings from seeds, and more than 51 million trees were planted.',
 photo:{src:'img/world/w-maathai.webp', caption:'Wangari Maathai planting a tree. She showed that one small seedling can make a big difference.'},
 sections:[
  {h:'A girl who loved trees', t:'Wangari Maathai was born in 1940 in Nyeri, a village in Kenya, in Africa. As a child, she fetched water from a stream near a big fig tree. The water was clean and the land was green. But when she grew up, many trees had been cut down. Without trees, the soil was washed away by rain, streams dried up, and people could not find wood to cook with.'},
  {h:'From seed to tree', t:'In 1977, Wangari started the Green Belt Movement. She showed women how to collect seeds from trees in nearby forests. They planted the seeds in pots of soil. With water, warmth and sunlight, each seed [[germinated]] and grew into a small [[seedling]]. When the seedlings were strong, the women planted them in the ground near their homes, schools and farms.'},
  {h:'What do plants need?', t:'The women learned that young trees need water to drink, light to make their food, and the right temperature to grow. If a seedling is kept in the dark, it grows pale and weak. If it gets no water, it [[wilts]] and dies. So they watered their seedlings carefully and kept them in the sun.'},
  {h:'A forest of hope', t:'Little by little, the trees grew. By today, more than 51 million trees have been planted. In 2004, Wangari won the Nobel Peace Prize, a very special world prize. She was the first African woman ever to win it. She liked to say that everyone can do something, even a small thing, like planting one tree.'}
 ],
 fact:[['Who','Wangari Maathai (1940–2011)'],['Where','Kenya, in Africa'],['Started the Green Belt Movement','1977'],['Trees planted','More than 51 million'],['Famous prize','Nobel Peace Prize, 2004']],
 chart:{title:'Trees planted by the Green Belt Movement (millions)', bars:[['1977',0],['2004',30],['Today',51]], unit:'million trees'},
 glossary:{'germinated':'Started to grow: the seed sent out a root and a shoot.','seedling':'A very young plant grown from a seed.','wilts':'Goes floppy and droopy because it needs water.'},
 q:[
  {type:'Find the fact', q:'When did Wangari start the Green Belt Movement?', o:['1977','1940','2004'], why:'The article says 1977.'},
  {type:'Word power', q:'What is a seedling?', o:['A very young plant grown from a seed','A kind of forest animal','A watering can'], why:'Seeds grow into seedlings.'},
  {type:'Read the chart', q:'About how many million trees had been planted by 2004?', o:['30 million','51 million','0'], why:'The 2004 bar shows 30.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Planting trees is the most fun job in the world.','Wangari won the Nobel Peace Prize in 2004.','Seedlings need water to grow.'], why:'"Most fun" is a feeling.'},
  {type:'Caption', q:'What is Wangari doing in the photo?', o:['Planting a tree','Swimming','Cooking'], why:'The caption says she is planting a tree.'},
  {type:'Why it matters', q:'Why did the seedlings need to be kept in the sun?', o:['Plants need light to grow strong','The sun keeps animals away','Sunlight turns seeds into stones'], why:'Without light, plants grow pale and weak.'}
 ],
 around:'Have you ever grown a plant? What did you give it to help it grow?'},

{id:'w-elephants', grade:'g1', topic:'animals', type:'diary', art:['milk','baby','water'],
 title:'Night Shift at the Elephant Nursery',
 place:'Nairobi, Kenya', continent:'Africa', lat:-1.37, lon:36.77, when:'Diary based on real nursery days',
 sum:'At an elephant nursery in Kenya, keepers look after orphan baby elephants day and night until they can return to the wild.',
 photo:{src:'img/world/w-elephants.webp', caption:'A keeper feeds a baby elephant from a big bottle of special milk.'},
 sections:[
  {h:'6:00 am · Breakfast bottles', t:'I am a keeper at an elephant nursery in Nairobi, Kenya. The baby elephants here are [[orphans]]: they have lost their mothers. So we become their family. Every three hours, day and night, each baby has a big bottle of special milk. Baby elephants need milk, just like human babies do. They drink it until they are about three years old.'},
  {h:'11:00 am · Mud bath!', t:'Splat! It is mud bath time. The babies roll and splash in the mud and throw dust over their backs. The mud keeps their skin cool and stops it burning in the hot sun. We also give them blankets on cold nights and raincoats when it rains, because young elephants can get poorly very easily.'},
  {h:'Growing up', t:'Animals have babies, called [[offspring]], that grow into adults. A baby elephant is called a calf. When a calf is born, it is already heavier than a grown-up person! It will keep growing for many years until it is a huge adult elephant. As the calves get older, they learn to eat leaves and grass, and they walk in the forest with us every day to get [[exercise]] and practise living in the wild.'},
  {h:'10:00 pm · Sleepy time', t:'At night, the youngest calves sleep in their own stable, and a keeper sleeps on a bunk bed right above them. Tonight it is my turn. When a little trunk wiggles in the dark, I know someone is hungry, so down I climb with a bottle. When the calves are grown up, they will return to the wild. That is the best day of all!'}
 ],
 fact:[['Where','An elephant nursery in Nairobi, Kenya'],['Babies drink','Special milk every 3 hours, day and night'],['Drink milk until','About 3 years old'],['Baby elephant','Called a calf'],['Goal','Return the elephants to the wild']],
 timeline:[['6:00 am','Morning milk'],['Morning','Walk in the forest to eat leaves and get exercise'],['11:00 am','Milk and mud bath'],['Evening','Back to the stables'],['All night','Milk every 3 hours']],
 glossary:{'orphans':'Young animals or children who have lost their parents.','offspring':'The babies of an animal or person.','exercise':'Moving your body to keep it fit and healthy.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'How often do the baby elephants drink milk?', o:['Every three hours','Once a week','Never'], why:'They have milk every three hours, day and night.'},
  {type:'Word power', q:'What are offspring?', o:['The babies of an animal or person','A kind of tree','A bath'], why:'Offspring grow into adults.'},
  {type:'Read the timeline', q:'What happens at 11:00 am?', o:['Milk and a mud bath','Going to sleep','Morning milk'], why:'The timeline shows 11:00 am is milk and mud bath.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Baby elephants are the cutest animals in Africa.','A baby elephant is called a calf.','Calves drink milk until about three years old.'], why:'"Cutest" is a feeling.'},
  {type:'Caption', q:'What is the keeper doing in the photo?', o:['Feeding a baby elephant','Washing a car','Planting a tree'], why:'The caption says the keeper feeds the elephant.'},
  {type:'Why it matters', q:'Why do the calves walk in the forest every day?', o:['To get exercise and learn to live in the wild','To find their milk bottles','To go to school'], why:'Exercise keeps them healthy, and they practise wild life.'}
 ],
 around:'Which baby animals have you seen? What did they need from the grown-ups?'},

{id:'w-dunlop', grade:'g1', topic:'materials', type:'news', art:['tyre','wheel','elastic'],
 title:'The Bumpy Ride That Changed the World',
 place:'Belfast, Northern Ireland, UK', continent:'Europe', lat:54.6, lon:-5.93, when:'1887 to 1888',
 sum:'A dad in Belfast wanted to make his son’s bumpy tricycle ride smoother, and invented the air-filled rubber tyre.',
 photo:{src:'img/world/w-dunlop.webp', caption:'John Boyd Dunlop as an old man, standing with a bicycle that has air-filled rubber tyres.'},
 sections:[
  {h:'Ouch, that’s bumpy!', t:'In 1887, a boy called Johnnie lived in Belfast. He loved riding his tricycle. But the streets were made of bumpy cobblestones, and his tricycle had hard, solid tyres. Bump, bump, bump! The ride was so shaky that it gave him a headache.'},
  {h:'Dad has an idea', t:'Johnnie’s dad, John Boyd Dunlop, was an animal doctor. He knew a lot about [[rubber]], a material that can be squashed, bent, twisted and stretched, and then springs back into shape. He made a tube out of thin sheets of rubber, glued the ends together and filled it with air using a football pump. Then he fixed the tube around a wheel.'},
  {h:'The test', t:'Dunlop rolled his new air-filled wheel and an old solid wheel across his yard. The air-filled wheel rolled much further! When he put the new [[tyres]] on Johnnie’s tricycle, the ride was smooth and fast. The air inside the rubber tube could squash and spring back, so it soaked up the bumps. In December 1888, Dunlop was given a [[patent]] for his idea.'},
  {h:'Tyres today', t:'Soon, bicycles everywhere had air-filled tyres. Later, cars did too. Today, tyres are still made of rubber, because it is strong, bendy and waterproof, and it grips the road. Next time you ride your bike, think of Johnnie and his bumpy ride!'}
 ],
 fact:[['Inventor','John Boyd Dunlop'],['Where','Belfast'],['When','1887 to 1888'],['Material','Rubber, filled with air'],['Why rubber?','It squashes, bends and stretches, then springs back']],
 timeline:[['1887','Johnnie’s tricycle ride is bumpy; Dunlop makes an air-filled tyre'],['1888','Johnnie rides on the new tyres; patent in December'],['1890','Factories begin making the tyres'],['Today','Bikes, cars and planes all use rubber tyres']],
 glossary:{'rubber':'A bendy, stretchy, waterproof material.','tyres':'Rubber covers that go around wheels.','patent':'An official paper that says an invention belongs to the person who made it.'},
 q:[
  {type:'Find the fact', q:'Why did Johnnie get a headache?', o:['His tricycle ride was very bumpy','He ate too many sweets','He fell off a horse'], why:'Solid tyres on cobblestones made the ride shaky.'},
  {type:'Word power', q:'What is rubber like?', o:['Bendy, stretchy and waterproof','Hard and see-through','Soft and fluffy'], why:'Rubber can squash and stretch, then spring back.'},
  {type:'Read the timeline', q:'When did factories begin making the tyres?', o:['1890','1887','Today'], why:'The timeline says 1890.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Riding a bike is better than riding a car.','Dunlop got a patent in 1888.','Tyres are made of rubber.'], why:'"Better" is a feeling.'},
  {type:'Caption', q:'What does the photo show?', o:['Dunlop standing with a bicycle with air-filled tyres','A car with no wheels','A cobblestone street'], why:'The caption describes Dunlop with a bicycle.'},
  {type:'Why it matters', q:'Why are tyres made of rubber?', o:['It is bendy, strong, waterproof and grips the road','It is see-through','It is very heavy and hard'], why:'Rubber’s properties make it good for tyres.'}
 ],
 around:'Find three things made of rubber at home or school. What job does the rubber do?'},

{id:'w-space', grade:'g1', topic:'animals', type:'diary', art:['trainer','toothbrush','apple'],
 title:'How Astronauts Stay Healthy in Space',
 place:'International Space Station', continent:'Space', lat:null, lon:null, when:'Diary based on real life on the space station',
 sum:'On the International Space Station, astronauts must exercise, eat well and keep clean, just like us, but in a very floaty way!',
 photo:{src:'img/world/w-space.webp', caption:'An astronaut runs on the space station’s treadmill. Straps hold her down so she does not float away.', credit:'NASA (public domain)'},
 sections:[
  {h:'Morning · Floating out of bed', t:'Good morning from space! I live on the International Space Station, high above the Earth. There is almost no [[gravity]] pulling on us here, so everything floats: pencils, crumbs and even me! I sleep in a sleeping bag tied to the wall, so I do not drift around in the night.'},
  {h:'Exercise time', t:'On Earth, your muscles and bones work hard all day just to hold you up against gravity. Up here, they hardly have to work, so they can get weak. That is why astronauts exercise for about two hours every day! I run on a treadmill with straps over my shoulders to hold me down, ride an exercise bike and lift weights on a special machine. [[Exercise]] keeps my heart, muscles and bones strong.'},
  {h:'Lunch · Eating well', t:'Food comes in packets. I add water to some of them. My favourites are fruit and vegetables when a supply rocket brings them fresh. Astronauts need a [[balanced diet]], with the right amounts of different foods, to stay healthy. We have to eat carefully, though. A floating crumb could get into the machines!'},
  {h:'Bedtime · Keeping clean', t:'There is no shower here. I wash with a damp cloth and use shampoo that does not need rinsing. To brush my teeth, I use toothpaste as normal, but I have to swallow it or spit it into a tissue, because there is no sink! Keeping clean, or good [[hygiene]], stops germs from spreading. Goodnight from space!'}
 ],
 fact:[['Where','International Space Station, high above the Earth'],['Exercise each day','About 2 hours'],['Exercise machines','Treadmill, exercise bike, weights machine'],['Washing','Damp cloth and no-rinse shampoo'],['Why exercise?','To keep muscles, bones and heart strong']],
 chart:{title:'Minutes of exercise each day', bars:[['Child on Earth (at least)',60],['Astronaut in space',120]], unit:'minutes'},
 chartNote:'Health experts say children should be active for at least 60 minutes every day.',
 glossary:{'gravity':'The pull that keeps us on the ground and makes things fall.','Exercise':'Moving your body to keep it fit and healthy.','balanced diet':'Eating the right amounts of different kinds of food.','hygiene':'Keeping yourself clean to stay healthy.'},
 diaryNote:true,
 q:[
  {type:'Find the fact', q:'How long do astronauts exercise each day?', o:['About two hours','About two minutes','They never exercise'], why:'The diary says about two hours.'},
  {type:'Word power', q:'What does hygiene mean?', o:['Keeping yourself clean to stay healthy','Running fast','Eating sweets'], why:'Good hygiene stops germs spreading.'},
  {type:'Read the chart', q:'Who exercises more each day?', o:['The astronaut','The child','They are the same'], why:'120 minutes is more than 60 minutes.'},
  {type:'Fact or opinion', q:'Which sentence is an OPINION?', o:['Living in space is more fun than living on Earth.','Astronauts sleep in sleeping bags tied to the wall.','There is no shower on the space station.'], why:'"More fun" is a feeling.'},
  {type:'Caption', q:'Why does the astronaut wear straps on the treadmill?', o:['So she does not float away','To keep warm','To look smart'], why:'The caption says the straps hold her down.'},
  {type:'Why it matters', q:'Why do astronauts need to exercise so much?', o:['Without gravity, their muscles and bones can get weak','They are late for work','Running makes the rocket go faster'], why:'Exercise keeps muscles and bones strong.'}
 ],
 around:'What exercise did you do today? How did your body feel afterwards?'},

/* =========================== GRADE 2 (Year 3) =========================== */
{id:'w-seedvault', grade:'g2', topic:'plants', type:'news', art:['acorn','sunflower','snow'],
 title:'A Treasure Chest of Seeds Inside an Arctic Mountain',
 place:'Svalbard, Norway', continent:'Europe', lat:78.2, lon:15.5, when:'Opened in 2008 · still growing in 2026',
 sum:'Deep inside a frozen mountain, more than a million seeds from around the world are kept safe.',
 photo:{src:'img/world/w-seedvault.webp', caption:'The entrance to the Svalbard Global Seed Vault sticks out of a snowy mountainside, lit up during the dark Arctic winter. The seeds are stored deep inside the rock.', credit:'Wikimedia Commons, 2008'},
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
 photo:{src:'img/world/w-gorilla.webp', caption:'A female mountain gorilla rests among the leaves of the forest. When gorillas walk, they go on all fours, leaning on the knuckles of their hands.', credit:'Wikimedia Commons'},
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
 photo:{src:'img/world/w-anning.webp', caption:'A painting of Mary Anning with her dog and her fossil-hunting hammer, on the beach at Lyme Regis.', credit:'Painted around 1842, Natural History Museum, London (public domain)', fit:'contain'},
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
 photo:{src:'img/world/w-polarnight.webp', caption:'Tromsø in the afternoon during the polar night. Snowy houses and street lamps glow under a purple-blue sky. There is no sun, but a soft twilight lasts for a few hours around midday.', credit:'Wikimedia Commons'},
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
 photo:{src:'img/world/w-maglev.webp', caption:'A maglev train leaves Pudong International Airport in Shanghai on its raised track. There are no wheels touching the rails.', credit:'Wikimedia Commons'},
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
 photo:{src:'img/world/w-antarctica.webp', caption:'Halley VI is made of eight modules on hydraulic legs with skis, so it can rise above the snow and even be towed to a new place.', credit:'Wikimedia Commons'},
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
 photo:{src:'img/world/w-whales.webp', caption:'A humpback whale leaps out of the ocean. Under the water, male humpbacks sing songs that can travel for many kilometres.', credit:'NOAA, Hawaiian Islands Humpback Whale National Marine Sanctuary (public domain)'},
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
 photo:{src:'img/world/w-noor.webp', caption:'The Noor Ouarzazate solar complex seen from space. At the top, thousands of mirrors circle the Noor III tower. Below are long rows of curved mirrors. Each mirror focuses sunlight to heat a liquid that helps make electricity.', credit:'Satellite image, Wikimedia Commons', fit:'contain'},
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
 photo:{src:'img/world/w-oryx.webp', caption:'An Arabian oryx in the desert. Its white coat reflects the sun’s heat, and its wide hooves help it walk on soft sand.', credit:'Wikimedia Commons'},
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
 photo:{src:'img/world/w-zookeeper.webp', caption:'An old drawing of a lion’s skull. Look at the long, pointed canine teeth for gripping and the sharp back teeth for slicing meat.', credit:'Old scientific drawing (public domain), Wikimedia Commons', fit:'contain'},
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
