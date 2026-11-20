/* Science Quest by Curious Nest: Grade 1 (National Curriculum Year 2) stories. */
window.SQ_GRADE = window.SQ_GRADE || {};
window.SQ_GRADE.g1 = {
  name: 'Grade 1', year: 'Year 2',
  topics: [
    {id:'living', name:'Living things and their habitats', portal:'Our Amazing Planet', color:'teal',
     nc:['Explore and compare the differences between things that are living, dead, and things that have never been alive','Identify that most living things live in habitats to which they are suited','Identify and name a variety of plants and animals in their habitats, including micro-habitats','Describe how animals obtain their food from plants and other animals, using the idea of a simple food chain']},
    {id:'plants', name:'Plants', portal:'Living Wonders', color:'leaf',
     nc:['Observe and describe how seeds and bulbs grow into mature plants','Find out and describe how plants need water, light and a suitable temperature to grow and stay healthy']},
    {id:'animals', name:'Animals, including humans', portal:'Living Wonders', color:'rose',
     nc:['Notice that animals, including humans, have offspring which grow into adults','Find out about the basic needs of animals, including humans, for survival (water, food and air)','Describe the importance for humans of exercise, eating the right amounts of different types of food, and hygiene']},
    {id:'materials', name:'Uses of everyday materials', portal:'Matter & Magic', color:'sun',
     nc:['Identify and compare the suitability of a variety of everyday materials for particular uses','Find out how the shapes of solid objects can be changed by squashing, bending, twisting and stretching']}
  ],
  stories: [
  {id:'g1-living-1', topic:'living', title:'Noah’s Three Boxes',
   cast:'Noah, Grandma Ruth and Shelly the hermit crab', cover:['rock','feather','leaf'], badge:'Life Sorter',
   img:'img/stories/g1-living-1/', coverImg:'cover.webp',
   vocab:{
     'beachcombing':'Walking along a beach to look for interesting things.',
     'alive':'Living now. Living things move, grow, need food and breathe.',
     'once alive':'Was living before, but is dead now, like a fallen leaf or a feather.',
     'never been alive':'Has never moved, grown, eaten or breathed, like a pebble or plastic.',
     'hermit crab':'A crab with a soft body that lives inside an empty shell to stay safe.',
     'driftwood':'Wood that has floated in the sea and washed up on the beach.',
     'factory':'A building where people use machines to make things.',
     'limpets':'Small sea animals with cone-shaped shells that cling tightly to rocks.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Noah’s Three Boxes'},
    {pic:'p1.webp', text:'Noah and Grandma Ruth went [[beachcombing]]. Noah filled his bucket with treasures: a shell, a pebble, some dry seaweed, a feather, a bottle top and a piece of [[driftwood]]. He tipped them out onto the sand. "Let’s sort them," said Grandma Ruth. She took a stick and drew three boxes in the sand.'},
    {pic:'p2.webp', text:'"This box is for things that are [[alive]]," said Grandma Ruth, pointing. "This one is for things that were [[once alive]], but are now dead. And this one is for things that have [[never been alive]]." Noah scratched his head. "How can I tell?"'},
    {pic:'p3.webp', text:'"Living things move, grow, eat and breathe," said Grandma Ruth. "They can also make new living things, like babies or seeds." Just then, Noah’s shell began to wobble. Two little claws poked out! "This one is alive!" gasped Noah. "It’s a [[hermit crab]]!"'},
    {pic:'p4.webp', text:'Noah named the crab Shelly. Then he looked at the seaweed. It was dry and crunchy. "This seaweed grew in the sea once," he said. "But it can’t grow now. It was once alive." He put the feather and the driftwood in the same box. "They were part of a bird and a tree."'},
    {pic:'p5.webp', text:'Next, Noah picked up the pebble. "A pebble never moves, grows, eats or breathes. It has never been alive!" The plastic bottle top went in that box too. "People made this in a [[factory]]. It has never been alive either."'},
    {pic:'p6.webp', text:'"What about the shell Shelly lived in?" asked Grandma Ruth. Just then, Shelly crawled out of her shell and into a bigger one nearby. Noah thought hard. "The shell was made by a sea snail," he said slowly. "So the shell was once alive. But Shelly is alive. She just lives in it!"'},
    {pic:'p7.webp', text:'Noah looked around the beach. Gulls flew overhead. [[Limpets]] clung to the rocks. Little crabs scuttled through the seaweed in a rock pool. "There are living things everywhere!" he said. Grandma Ruth smiled. "And the sun, the sea and the sand have never been alive."'},
    {pic:'p8.webp', text:'Noah gently put Shelly back in the rock pool. "Goodbye, Shelly!" he said. "Now I can sort anything: alive, once alive, or never alive." Shelly waved her little claw.'}
   ],
   understand:[
    {q:'Who drew the three boxes in the sand?', o:['Grandma Ruth','Noah','Shelly'], a:0, type:'Find it', why:'Grandma Ruth took a stick and drew three boxes in the sand.'},
    {q:'What does once alive mean?', o:['It was living before, but is dead now','It is living now','It has never been alive'], a:0, type:'Word power', why:'Things that were once alive, like dry seaweed or a feather, were living before but are dead now.'},
    {q:'How did Noah know the shell had something alive in it?', o:['It wobbled and claws poked out','It was very shiny','Grandma Ruth told him'], a:0, type:'Think about it', why:'Living things move. The shell wobbled because Shelly was moving inside it.'},
    {q:'Which box did the pebble go in?', o:['Never been alive','Once alive','Alive'], a:0, type:'Find it', why:'A pebble never moves, grows, eats or breathes. It has never been alive.'},
    {q:'What did Noah sort straight after naming the crab?', o:['The dry seaweed','The pebble','The bottle top'], a:0, type:'Order it', why:'First the seaweed, feather and driftwood, then the pebble and bottle top.'}
   ],
   predict:{q:'Noah finds a wooden lolly stick on the sand. Which box do you think it belongs in?',
    o:['Once alive','Alive','Never been alive'], a:0,
    discover:'Wood comes from trees, and trees are living things. A lolly stick was cut from a tree, so it was once alive. Paper and cotton were once alive too! Metal, glass, rock and plastic have never been alive.'},
   sort:{title:'Alive, once alive or never alive?', bins:['Alive','Once alive','Never been alive'],
    items:[['Frog',0,'frog'],['Daisy',0,'daisy'],['Fish',0,'trout'],['Feather',1,'feather'],['Fallen leaf',1,'leaf'],['Wooden block',1,'wood'],['Pebble',2,'rock'],['Key',2,'key'],['Marble',2,'marble']]},
   tryit:{title:'Three boxes at home', need:['An adult to help','Three pieces of paper or three boxes','Safe things from home or the garden, like a leaf, a stone, a spoon, an apple, a sock and a pencil'],
    steps:['Label your papers: alive, once alive, never been alive.','Pick up each thing. Ask: does it move, grow, eat or breathe now?','If not, ask: was it ever part of a living thing, like a plant or an animal?','Put each thing on the right paper.','Look outside with your adult for something that is alive. Watch it, but do not touch it.'],
    notice:'Which things were tricky to sort? Why? Can you think of something made from a material that was once alive?'}
  }
  ,
  {id:'g1-living-2', topic:'living', title:'Ruby and the Hidden Homes',
   cast:'Ruby and Sid the hedgehog', cover:['frog','woodlouse','kiki'], badge:'Habitat Explorer',
   img:'img/stories/g1-living-2/', coverImg:'cover.webp',
   vocab:{
     'minibeasts':'Small creatures, like woodlice, slugs, beetles and spiders.',
     'habitat':'The place where a living thing lives. It gives it food, water and shelter.',
     'shelter':'A safe place to hide, rest and keep out of bad weather.',
     'micro-habitat':'A very small habitat, like the space under a log or a stone.',
     'damp':'A little bit wet.',
     'frogspawn':'A clump of frog eggs, wrapped in clear jelly, floating in a pond.',
     'food chain':'A list that shows what eats what. It always starts with a plant.',
     'suit':'To be just right for something.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Ruby and the Hidden Homes'},
    {pic:'p1.webp', text:'Ruby’s school had a new wildlife garden. Ruby was looking for [[minibeasts]] with her magnifying glass when she heard a snuffle. A hedgehog poked his nose out of the leaves. "I’m Sid," he said. "Every animal here has a home. Do you want to see them?"'},
    {pic:'p2.webp', text:'"A [[habitat]] is the place where a living thing lives," said Sid. "It gives it food, water and [[shelter]]. My habitat is this hedge. I sleep in a cosy nest of leaves, and I find beetles and slugs to eat." A slug slid past, just in time for lunch!'},
    {pic:'p3.webp', text:'Ruby lifted the end of a log. Underneath, it was dark and [[damp]]. Woodlice scurried about. "This is a [[micro-habitat]]," said Sid. "It’s a tiny habitat. Woodlice like dark, damp places. If it gets too dry, they hide."'},
    {pic:'p4.webp', text:'At the pond, a frog swam under the water and a pond skater zoomed across the top. Ruby spotted a clump of [[frogspawn]]. "Frogs need water to lay their eggs," said Sid. "And the water plants give the pond animals food and places to hide." Ruby smiled. "So plants and animals need each other!"'},
    {pic:'p5.webp', text:'On the hedge, a caterpillar munched holes in a leaf. A blue tit watched it from a branch. "That’s a [[food chain]]!" whispered Sid. "The leaf is food for the caterpillar. The caterpillar is food for the blue tit. Every food chain starts with a plant."'},
    {pic:'p6.webp', text:'Ruby sat down and drew the food chain in her notebook: leaf, then caterpillar, then blue tit, with arrows in between. She added a sun at the top. "The arrow means ‘is eaten by’," said Sid. "Plants make their own food using sunlight. Animals have to eat to get their food."'},
    {pic:'p7.webp', text:'"Why don’t fish live in the hedge?" giggled Ruby, as Sid snuggled up to her. "Because a habitat must [[suit]] the animal," said Sid. "Fish need water to breathe. Woodlice need damp. I need leaves to hide in. Each animal lives where it can get what it needs."'},
    {pic:'p8.webp', text:'The bell rang. "Thank you, Sid," said Ruby. "I’ll ask my class to keep the log pile damp and the pond clean, so everyone keeps their home." She waved goodbye. But Sid was already fast asleep in his nest of leaves.'}
   ],
   understand:[
    {q:'Where is Sid’s habitat?', o:['The hedge','The pond','Under a log'], a:0, type:'Find it', why:'Sid says, "My habitat is this hedge." He sleeps in a nest of leaves.'},
    {q:'What does micro-habitat mean?', o:['A very small habitat','A habitat in the sea','A habitat with no animals'], a:0, type:'Word power', why:'A micro-habitat is a tiny habitat, like the dark, damp space under a log.'},
    {q:'In the food chain, what eats the caterpillar?', o:['The blue tit','The leaf','The hedgehog'], a:0, type:'Find it', why:'Leaf, then caterpillar, then blue tit. The caterpillar is food for the blue tit.'},
    {q:'Why don’t fish live in the hedge?', o:['Fish need water to breathe','Fish do not like leaves','The hedge is too small'], a:0, type:'Think about it', why:'A habitat must suit the animal. Fish need water, so they live in the pond.'},
    {q:'Where did Ruby look straight after the log?', o:['The pond','The hedge','The school'], a:0, type:'Order it', why:'First the log, then the pond, then the hedge with the caterpillar.'}
   ],
   predict:{q:'Ruby leaves the log lifted up all afternoon, so the ground under it dries out in the sun. What do you think the woodlice will do?',
    o:['Move away to find a dark, damp place','Stay and sunbathe','Turn into butterflies'], a:0,
    discover:'Woodlice dry out easily, so they need dark, damp places. If their micro-habitat dries out, they move away to find a new one. That is why scientists always put logs and stones back gently after looking underneath!'},
   sort:{title:'Which habitat suits each animal?', bins:['Pond','Under a log (dark and damp)','Tree or hedge'],
    items:[['Frog',0,'frog'],['Fish',0,'trout'],['Woodlouse',1,'woodlouse'],['Snail',1,'moss'],['Blue tit',2,'kiki'],['Squirrel',2,'squirrel'],['Caterpillar on a leaf',2,'leaf']]},
   tryit:{title:'Micro-habitat hunt', need:['An adult to come with you','A magnifying glass, if you have one','A notebook and pencil'],
    steps:['Go into a garden, park or school field with your adult.','Gently lift a log or a large stone. Never pick up the animals.','Look closely. What minibeasts can you see? Is it dark? Is it damp?','Draw what you find in your notebook.','Put the log or stone back gently, exactly where it was, so the animals keep their home.'],
    notice:'Were there more minibeasts in damp, dark places or dry, sunny places? Can you draw a food chain for one animal you saw?'}
  }
  ,
  {id:'g1-plants-1', topic:'plants', title:'Priya’s Seed and Bulb Race',
   cast:'Priya and Mr Fenwick', cover:['beanpod','daffodil','bulb'], badge:'Super Grower',
   img:'img/stories/g1-plants-1/', coverImg:'cover.webp',
   vocab:{
     'seed':'A small part of a plant that can grow into a new plant.',
     'bulb':'A round store of food under the soil. Some plants, like daffodils, grow from a bulb.',
     'germination':'When a seed starts to grow. A root grows down and a shoot grows up.',
     'shoot':'A new, young part of a plant that grows up towards the light.',
     'cane':'A long, thin stick that helps a climbing plant grow tall.',
     'mature':'Fully grown up.',
     'pods':'Long cases that grow on bean and pea plants. They hold the seeds.',
     'faded':'Lost its bright colour and started to wither.',
     'cycle':'Something that happens again and again, in the same order.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Priya’s Seed and Bulb Race'},
    {pic:'p1.webp', text:'Mr Fenwick held out two things. In one hand was a small bean [[seed]]. In the other hand was a round, papery daffodil [[bulb]]. "Let’s have a race," he said. "Which one will grow into a big plant first?" Priya thought hard. Then she grinned. "Ready, steady, grow!"'},
    {pic:'p2.webp', text:'In autumn, when the leaves were turning golden, they planted the bulb deep in the soil. "A bulb is like a lunchbox," said Mr Fenwick. "It is full of food for the new plant. Its roots will grow, and it will rest underground all winter." Priya patted the soil. "Sleep well, bulb!"'},
    {pic:'p3.webp', text:'In spring, Priya planted the bean seed in a pot in the greenhouse and watered it. A few days later, the seed cracked open. A tiny root grew down. Then a little green [[shoot]] pushed up! "That’s called [[germination]]," said Mr Fenwick, pointing. "It’s when a seed starts to grow."'},
    {pic:'p4.webp', text:'Out in the garden, green leaves poked up where the bulb was buried. Soon, there was a bright yellow daffodil! "Look! The bulb woke up!" said Priya, clasping her hands. "Plants that grow from bulbs often flower in spring," said Mr Fenwick.'},
    {pic:'p5.webp', text:'Priya planted her bean in the garden. It grew taller and taller. Mr Fenwick gave it a [[cane]] to climb and tied it on gently. It grew big leaves, and then little white flowers. "Now it is a [[mature]] plant," said Mr Fenwick. "Mature means grown-up."'},
    {pic:'p6.webp', text:'In summer, the bean flowers turned into long green [[pods]]. Priya opened one. Inside were plump new beans! "These are seeds," said Mr Fenwick. "Each one can grow into a new bean plant."'},
    {pic:'p7.webp', text:'Soon, the daffodil flowers [[faded]], and the leaves turned yellow. Priya rested her chin on her hand. "Is it dying?" she asked sadly. "No," said Mr Fenwick kindly. "It’s storing food in the bulb again. Next spring, it will flower again."'},
    {pic:'p8.webp', text:'"So who won the race?" asked Priya. Mr Fenwick laughed. "They both did! A seed and a bulb both grow into mature plants. Then the [[cycle]] starts again." Priya planted her new beans in a long row. Mr Fenwick cheered. "Ready, steady, grow!"'}
   ],
   understand:[
    {q:'What did Mr Fenwick hold in his hands?', o:['A bean seed and a daffodil bulb','Two bean seeds','A daffodil and a watering can'], a:0, type:'Find it', why:'He held a small bean seed in one hand and a daffodil bulb in the other.'},
    {q:'What does germination mean?', o:['When a seed starts to grow','When a flower fades','When a plant is fully grown'], a:0, type:'Word power', why:'Germination is when a seed cracks open, a root grows down and a shoot grows up.'},
    {q:'Why did Mr Fenwick say a bulb is like a lunchbox?', o:['It is full of food for the new plant','You can eat it at lunch','It has a lid'], a:0, type:'Think about it', why:'A bulb stores food that the new plant uses to grow.'},
    {q:'What was inside the bean pod?', o:['New bean seeds','A daffodil bulb','Water'], a:0, type:'Find it', why:'Priya opened a pod and found new beans. They are seeds!'},
    {q:'What did Priya and Mr Fenwick plant first?', o:['The daffodil bulb, in autumn','The bean seed, in spring','The new beans, in summer'], a:0, type:'Order it', why:'The bulb went in first, in autumn. The bean seed was planted in spring.'}
   ],
   predict:{q:'Priya plants one of her new beans and waters it. What do you think will grow first?',
    o:['A root, growing down','A flower','A pod'], a:0,
    discover:'When a seed germinates, a root grows down first to find water and hold the plant in the soil. Then a shoot grows up towards the light. Leaves come next, then flowers, and then pods full of new seeds. Round and round goes the cycle!'},
   sort:{title:'Does it grow from a seed or a bulb?', bins:['Seed','Bulb'],
    items:[['Bean plant',0,'beanpod'],['Sunflower',0,'sunflower'],['Apple tree',0,'appletree'],['Daffodil',1,'daffodil'],['Tulip',1,'tulip'],['Onion',1,'bulb']]},
   tryit:{title:'Grow a bean in a jar', need:['An adult to help','A clear jar','Paper towels','A dried bean, like a broad bean or runner bean','Water'],
    steps:['Fold some paper towels and line the inside of the jar.','Push the bean between the paper and the glass, so you can see it.','Add a little water to the bottom of the jar to keep the paper damp.','Put the jar somewhere warm and light. Keep the paper damp.','Look every day and draw what you see.'],
    notice:'Which grew first, the root or the shoot? How many days did it take to germinate?'}
  }
  ,
  {id:'g1-plants-2', topic:'plants', title:'Kofi’s Cress Experiment',
   cast:'Kofi, his sister Ama and Pepper the cat', cover:['cress','cresspale','cressdry'], badge:'Fair Tester',
   img:'img/stories/g1-plants-2/', coverImg:'cover.webp',
   vocab:{
     'cress':'A small plant with tiny green leaves that grows very quickly. You can eat it.',
     'fair test':'An experiment where you change only one thing, so you know what made the difference.',
     'experiment':'A test that scientists do to find something out.',
     'prediction':'A good guess about what will happen.',
     'results':'What you find out at the end of an experiment.',
     'healthy':'Strong and growing well.',
     'temperature':'How hot or cold something is.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Kofi’s Cress Experiment'},
    {pic:'p1.webp', text:'Kofi wanted to grow [[cress]] for his sandwiches. He held up a packet of seeds. "What do plants need to grow?" he asked. His big sister Ama pushed up her sleeves. "Let’s find out like real scientists," she said. "We’ll do a [[fair test]]!"'},
    {pic:'p2.webp', text:'They took four pots and put the same amount of cotton wool in each one. Kofi sprinkled the same number of seeds into every pot. "To make it fair, we only change one thing for each pot," said Ama. The pots were labelled A, B, C and D. Pepper the cat came to watch.'},
    {pic:'p3.webp', text:'Pot A went on the sunny windowsill, with water every day. Pot B went on the windowsill too, but with no water at all. Pot C got water every day, but it went inside a dark cupboard. Pot D got water every day, but it went in the cold fridge. Pepper followed them everywhere!'},
    {pic:'p4.webp', text:'Kofi wrote a [[prediction]] in his notebook. "I think pot A will grow best," he said. "It has water, light and warmth." Then he looked up. Pepper was sniffing pot A on the windowsill! "No, Pepper!" laughed Ama. "Don’t touch our [[experiment]]!"'},
    {pic:'p5.webp', text:'After one week, they looked at the pots. Pot A was full of tall, green cress. Kofi pointed at pot B. It had no shoots at all. The seeds were dry and had not grown. "Plants need water!" said Kofi.'},
    {pic:'p6.webp', text:'Ama took pot C out of the dark cupboard. The cress had grown tall and thin, but it was pale yellow, not green! "It grew, but it isn’t [[healthy]]," said Ama. "Plants need light to stay green and strong." Pot D from the fridge had only a few tiny shoots. "It was too cold," said Kofi.'},
    {pic:'p7.webp', text:'Kofi drew their [[results]] in his notebook. "Plants need water, light and the right [[temperature]] to grow and stay healthy," he read out. "My prediction was right!" Ama gave him a high five. Pepper meowed, as if she agreed.'},
    {pic:'p8.webp', text:'Kofi snipped some cress from pot A and made a sandwich. "Delicious!" he said. Then they gave all the pots water, light and warmth. Soon pots B and D were growing well too. Kofi put pot C on the sunny windowsill. "Don’t worry," he told it. "With some light, you’ll soon be green." Pepper curled up in the sunshine.'}
   ],
   understand:[
    {q:'Why did Kofi want to grow cress?', o:['To put in his sandwiches','To give to Pepper','To sell at school'], a:0, type:'Find it', why:'Kofi wanted to grow cress for his sandwiches.'},
    {q:'What does fair test mean?', o:['You change only one thing','You change everything','Everyone gets a turn'], a:0, type:'Word power', why:'In a fair test you change just one thing, so you know what made the difference.'},
    {q:'Where did pot C go?', o:['In a dark cupboard','In the fridge','On the sunny windowsill'], a:0, type:'Find it', why:'Pot C got water, but it went inside a dark cupboard.'},
    {q:'Why was the cress in pot C pale yellow?', o:['It had no light','It had no water','It was too hot'], a:0, type:'Think about it', why:'Plants need light to stay green and healthy. Pot C was in the dark.'},
    {q:'What did Kofi do straight after setting up the pots?', o:['Wrote a prediction','Ate a sandwich','Gave Ama a high five'], a:0, type:'Order it', why:'First he made a prediction. The results and the high five came a week later.'}
   ],
   predict:{q:'Kofi puts a fifth pot on the windowsill. It gets light and warmth, but he forgets to water it for a week. What do you think will happen?',
    o:['The seeds will not grow','The cress will grow tall and green','The cress will turn yellow'], a:0,
    discover:'Without water, seeds cannot germinate, just like pot B. Plants need water, light and the right temperature. Take one away and the plant cannot grow well or stay healthy. That is what Kofi’s fair test showed!'},
   sort:{title:'Will the cress grow well?', bins:['Grows well and stays healthy','Does not grow well'],
    items:[['Water, light and warmth',0,'cress'],['Watered on a warm, sunny windowsill',0,'sun'],['No water at all',1,'cressdry'],['Watered, but in a dark cupboard',1,'cresspale'],['Watered, but in the cold fridge',1,'snow']]},
   tryit:{title:'Your own cress fair test', need:['An adult to help','Two small pots or yoghurt pots','Cotton wool and cress seeds','Water'],
    steps:['Put the same amount of cotton wool in each pot.','Sprinkle the same number of seeds on each one.','Water both pots the same amount.','Put one pot on a sunny windowsill and one in a dark cupboard.','Check them every day for a week and draw what you see.'],
    notice:'Which pot grew green, healthy cress? What was the one thing you changed? Why does that make it a fair test?'}
  }
  ,
  {id:'g1-animals-1', topic:'animals', title:'Lina’s Growing-Up Book',
   cast:'Lina, Baby Yusuf and Aunt Mariam', cover:['baby','chick','sheep'], badge:'Life Cycle Spotter',
   img:'img/stories/g1-animals-1/', coverImg:'cover.webp',
   vocab:{
     'toddler':'A young child who is just learning to walk.',
     'teenager':'A young person aged between 13 and 19.',
     'adult':'A fully grown-up person or animal.',
     'offspring':'The babies or young of an animal or person.',
     'hatches':'Breaks out of an egg.',
     'ducklings':'Baby ducks.',
     'tadpoles':'Baby frogs. They live in water and have tails.',
     'chrysalis':'A hard case a caterpillar makes around itself while it changes into a butterfly.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Lina’s Growing-Up Book'},
    {pic:'p1.webp', text:'Lina had a new baby brother called Yusuf. He was tiny! He slept, drank milk and cried. Lina leaned over his cot. "Will he always be this small?" she asked. Mum smiled and held up a scrapbook. "No. He will grow, just like you did. Let’s make a growing-up book."'},
    {pic:'p2.webp', text:'Lina stuck in some photos. There she was as a sleepy baby, then as a [[toddler]] learning to walk, then on her first day at school. Mum pointed to the last photo. "Next, you’ll be a [[teenager]], and then an [[adult]]," she said. "Humans grow and change all through their lives."'},
    {pic:'p3.webp', text:'On Saturday, they visited Aunt Mariam’s farm. "Animals have babies too," said Aunt Mariam. "We call them [[offspring]]. Some offspring look like their parents." In the field, a lamb jumped beside its mother. "The lamb will grow into a sheep!" said Lina, clapping her hands.'},
    {pic:'p4.webp', text:'In the hen house, they crouched down quietly. Crack! A fluffy yellow chick wriggled out of a brown egg. "A chick [[hatches]] from an egg," whispered Aunt Mariam. "It will grow feathers and turn into a hen or a cockerel, just like its mother." Lina watched, amazed.'},
    {pic:'p5.webp', text:'At the pond, Lina saw [[ducklings]] paddling behind their mother. Then she pointed at the water. Tiny black [[tadpoles]] were wriggling about! "Will they turn into fish?" she asked. "No!" laughed Aunt Mariam. "Tadpoles grow legs and lose their tails. They turn into frogs!"'},
    {pic:'p6.webp', text:'Lina spotted a tiny caterpillar munching on a cabbage leaf. "Look, Aunt Mariam!" Aunt Mariam smiled. "Some offspring look very different from their parents. It will grow, build a cosy [[chrysalis]], and one day it will flutter away as a butterfly." "Wow!" said Lina. "What a magical change!"'},
    {pic:'p7.webp', text:'At home, Lina drew in her book: lamb to sheep, chick to hen, tadpole to frog, and caterpillar to chrysalis to butterfly. On the last line, she drew Baby Yusuf. Then she drew him as a boy, a teenager, and a grown-up man.'},
    {pic:'p8.webp', text:'Baby Yusuf gave a gurgle and grabbed Lina’s finger. "You’ll grow big and strong," Lina whispered. "And I’ll be here to watch." Beside them lay her finished book. Lina smiled. Every living thing grows up!'}
   ],
   understand:[
    {q:'Who is Yusuf?', o:['Lina’s baby brother','Aunt Mariam’s lamb','Lina’s friend from school'], a:0, type:'Find it', why:'Yusuf is Lina’s new baby brother.'},
    {q:'What does offspring mean?', o:['The babies or young of an animal','A kind of farm','A fully grown animal'], a:0, type:'Word power', why:'Offspring are the babies or young of an animal or person, like a lamb or a chick.'},
    {q:'What do tadpoles grow into?', o:['Frogs','Fish','Ducks'], a:0, type:'Find it', why:'Tadpoles grow legs, lose their tails and turn into frogs.'},
    {q:'Why does a caterpillar not look like its parent?', o:['It changes inside a chrysalis to become a butterfly','It is a different animal','It will never grow up'], a:0, type:'Think about it', why:'A caterpillar changes completely inside its chrysalis and comes out as a butterfly, like its parent.'},
    {q:'Where did Lina go straight after the field with the lamb?', o:['The hen house','The pond','The cabbage patch'], a:0, type:'Order it', why:'First the field, then the hen house, then the pond, then the cabbages.'}
   ],
   predict:{q:'A duckling is paddling behind its mother on the pond. What do you think it will grow into?',
    o:['A duck','A frog','A hen'], a:0,
    discover:'A duckling grows into a duck, just like its mother. Some offspring, like lambs, chicks and ducklings, look a lot like their parents. Others, like tadpoles and caterpillars, change a lot as they grow. But all animals, including humans, have offspring that grow into adults.'},
   sort:{title:'Match the baby to the adult', bins:['Grows into a sheep','Grows into a hen','Grows into a frog','Grows into a butterfly','Grows into an adult human'],
    items:[['Lamb',0,'sheep'],['Chick',1,'chick'],['Tadpole',2,'tadpole'],['Caterpillar',3,'caterpillar'],['Chrysalis',3,'chrysalis'],['Baby',4,'baby'],['Teenager',4,'leo']]},
   tryit:{title:'Make your own growing-up book', need:['An adult to help','Photos or drawings of you at different ages','Paper, glue and pencils'],
    steps:['Ask your family for photos of you as a baby, a toddler and now.','Stick them in order on your paper.','Ask: what could you do at each age? Write or draw it.','Draw what you think you will look like as a teenager and an adult.','Add one animal too, like a chick and a hen.'],
    notice:'How have you changed since you were a baby? Does your animal baby look like its parent, or very different?'}
  }
  ,
  {id:'g1-animals-2', topic:'animals', title:'Sami and Biscuit’s Healthy Week',
   cast:'Sami and Biscuit the puppy', cover:['water','apple' ,'football'], badge:'Healthy Hero',
   img:'img/stories/g1-animals-2/', coverImg:'cover.webp',
   vocab:{
     'survive':'To stay alive.',
     'energy':'The power your body needs to move, think and play.',
     'healthy':'Well and strong, not ill.',
     'exercise':'Moving your body to keep it fit and strong, like running or swimming.',
     'muscles':'The parts of your body that pull on your bones to make you move.',
     'germs':'Tiny living things, too small to see, that can make you ill.',
     'hygiene':'Keeping yourself clean to stay healthy.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Sami and Biscuit’s Healthy Week'},
    {pic:'p1.webp', text:'Monday morning: Sami and his puppy, Biscuit, are feeling very sleepy after the weekend. Biscuit snoozes on a cushion, and Sami flops on the sofa. Mum smiles. "Let’s get a fresh start!" she says. "This week, let’s find out what bodies need."'},
    {pic:'p2.webp', text:'"Every animal needs water, food and air to [[survive]]," says Mum, holding up one finger. Biscuit laps water from his bowl. Sami drinks a big glass of water. "Our bodies are mostly made of water," says Mum. "We need to drink it every day."'},
    {pic:'p3.webp', text:'Tuesday: Sami is packing a healthy lunch with Mum’s help. A sandwich, an apple, carrot sticks and a yoghurt give him [[energy]] to learn and play. "We need the right food in the right amounts," says Mum. "Sweets are a treat, just sometimes." Biscuit has his own [[healthy]] food too.'},
    {pic:'p4.webp', text:'Wednesday: at football club, Sami runs, dribbles and kicks the ball. Biscuit runs alongside, his floppy ears flying. Coach Nia cheers. "[[Exercise]] makes your heart and [[muscles]] strong!" she says. Sami can feel his heart beating fast. "That means it’s working hard!" says Coach Nia.'},
    {pic:'p5.webp', text:'Thursday: Sami laughs as he throws a ball for Biscuit in the park. Biscuit races after it, splashing through a muddy puddle! "Dogs need exercise too," says Sami. When they get home, Biscuit needs a bath.'},
    {pic:'p6.webp', text:'Friday: before lunch, Sami washes his hands with soap and water. "Washing gets rid of [[germs]]," says Mum. "Germs are tiny. You can’t see them, but they can make you ill." That night, Sami brushes his teeth for two whole minutes. Biscuit watches the sand timer with his head on one side.'},
    {pic:'p7.webp', text:'Saturday: Sami makes a poster for the fridge. He draws water, a healthy meal, fresh air, running, fruit and vegetables, and soap and a toothbrush. At the bottom, he draws himself and Biscuit. "Water, food and air keep us alive," he says, pointing. "Exercise, healthy food and good [[hygiene]] keep us healthy!"'},
    {pic:'p8.webp', text:'Sunday: Sami and Biscuit race joyfully around their sunny garden. Fresh air, tasty food, clean water, exercise and good hygiene help them grow strong, healthy and happy! "Healthy week complete!" cheers Sami. "Let’s do it every week!"'}
   ],
   understand:[
    {q:'How did Sami and Biscuit feel on Monday morning?', o:['Very sleepy','Very excited','Very hungry'], a:0, type:'Find it', why:'On Monday morning, Sami and Biscuit were feeling very sleepy after the weekend.'},
    {q:'What three things does every animal need to survive?', o:['Water, food and air','Toys, sweets and a bed','Shoes, a ball and a coat'], a:0, type:'Find it', why:'Mum says every animal needs water, food and air to survive.'},
    {q:'What does germs mean?', o:['Tiny living things that can make you ill','Little pieces of food','Muddy paw prints'], a:0, type:'Word power', why:'Germs are too small to see, but they can make you ill. Washing with soap gets rid of them.'},
    {q:'Why did Sami’s heart beat fast at football club?', o:['Exercise made it work hard','He was scared of the ball','He was sleepy'], a:0, type:'Think about it', why:'When you exercise, your heart works hard to pump blood around your body. That makes it stronger.'},
    {q:'What did Sami do on Friday?', o:['Washed his hands and brushed his teeth','Played football','Made a poster'], a:0, type:'Order it', why:'Monday water, Tuesday lunch, Wednesday football, Thursday the park, Friday keeping clean, Saturday the poster.'}
   ],
   predict:{q:'Sami plays football on a hot day but forgets his water bottle. What do you think will happen?',
    o:['He will feel thirsty and tired','He will feel full of energy','Nothing will change'], a:0,
    discover:'Our bodies lose water when we exercise and get hot, especially through sweat. Without a drink, we feel thirsty, tired and wobbly. That is why water is one of the things every animal needs to survive. Always take a drink when you exercise!'},
   sort:{title:'What does a body need?', bins:['Needs to stay alive','Helps to stay healthy','Just a treat, sometimes'],
    items:[['Water',0,'water'],['Air',0,'sun'],['Food',0,'sandwich'],['Exercise',1,'football'],['Washing with soap',1,'soap'],['Brushing teeth',1,'toothbrush'],['Fruit and vegetables',1,'apple'],['Sweets',2,'sweets']]},
   tryit:{title:'My healthy week chart', need:['An adult to help','Paper, a ruler and pencils'],
    steps:['Draw a chart with seven rows, one for each day of the week.','Make columns for: drank water, ate fruit or vegetables, exercised, washed hands, brushed teeth.','Each day, tick each thing you did.','At the end of the week, count your ticks.','Talk to your adult: which healthy habit was easiest? Which was hardest?'],
    notice:'Did you do all five every day? Which one will you try to do more of next week?'}
  }
  ]
};
