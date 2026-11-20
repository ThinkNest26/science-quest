/* Science Quest by Curious Nest: KG2 (National Curriculum Year 1) stories.
   Original stories and characters. Words in [[double brackets]] are vocabulary words
   and must match a key in the story's vocab list. */
window.SQ_GRADE = window.SQ_GRADE || {};
window.SQ_GRADE.kg2 = {
  name: 'KG2', year: 'Year 1',
  topics: [
    {id:'plants', name:'Plants', portal:'Living Wonders', color:'leaf',
     nc:['Identify and name common wild and garden plants, including deciduous and evergreen trees','Identify and describe the basic structure of common flowering plants, including trees']},
    {id:'animals', name:'Animals, including humans', portal:'Living Wonders', color:'teal',
     nc:['Identify and name common fish, amphibians, reptiles, birds and mammals','Identify and name carnivores, herbivores and omnivores','Describe and compare the structure of common animals']},
    {id:'materials', name:'Everyday materials', portal:'Matter & Magic', color:'sun',
     nc:['Tell the difference between an object and the material it is made from','Name wood, plastic, glass, metal, water and rock','Describe simple properties of materials','Compare and group materials']},
    {id:'seasons', name:'Seasonal changes', portal:'Our Amazing Planet', color:'sky',
     nc:['Observe changes across the four seasons','Describe the weather in each season and how day length changes']}
  ],
  stories: [

  /* ---------------- PLANTS ---------------- */
  {id:'kg2-plants-1', topic:'plants', title:'The Tree That Keeps Its Coat',
   cast:'Hazel and Moss the snail', cover:['hazel','moss','pine'], badge:'Leaf Detective',
   img:'img/stories/kg2-plants-1/', coverImg:'cover.webp',
   vocab:{
     'curious':'Strange and interesting. It makes you want to find out more.',
     'evergreen':'A tree or plant that keeps its leaves all year round.',
     'deciduous':'A tree that drops its leaves in autumn and grows new ones in spring.',
     'needles':'The thin, pointed leaves of a pine tree.',
     'wild flowers':'Flowers that grow by themselves. Nobody planted them.',
     'garden flowers':'Flowers that people plant and look after.',
     'roots':'The part of a plant under the soil. Roots hold the plant in place and take in water.',
     'stem':'The part that holds a plant up and carries water to the leaves.',
     'leaves':'The parts of a plant that use sunlight to make food.',
     'petals':'The coloured parts of a flower. They help bring bees and other insects.',
     'berries':'Small, round fruits. Holly berries hold the holly tree’s seeds.',
     'seeds':'Tiny parts of a plant that can grow into new plants.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'The Tree That Keeps Its Coat'},
    {pic:'p1.webp', text:'Moss told Hazel a [[curious]] thing. "I live under a tree that keeps its coat all year!" Hazel’s eyes grew wide. "A tree… with a coat?" She giggled. "I have to see it to believe it!"'},
    {pic:'p2.webp', text:'Hazel and Moss found the oldest oak in the park. It wears its golden coat so proudly, for now.'},
    {pic:'p3.webp', text:'Hazel and Moss discover a tall [[evergreen]] pine tree. "Evergreen trees keep their [[needles]] all year," says Moss. "[[Deciduous]] trees let their leaves fall in autumn." Hazel looks closer. "So this tree keeps its coat, no matter the season!" Moss nods. "Exactly! Its needles have a waxy coat that helps keep water in." Hazel smiles. "What a clever tree!"'},
    {pic:'p4.webp', text:'Hazel loves exploring every corner of the park with her best friend, Moss. [[Wild flowers]] grow wherever they choose, while [[garden flowers]] grow where someone cares for them. Both make the park beautiful.'},
    {pic:'p5.webp', text:'Hazel and Moss love to explore. Today, they’re learning how a sunflower grows strong. [[Roots]] drink. [[Stem]] lifts. [[Leaves]] make food. [[Petals]] call the bees. Every part has a job!'},
    {pic:'p6.webp', text:'Moss finds his home beneath a beautiful holly tree. Its red [[berries]] hold tiny [[seeds]], the start of something new! Hazel cheers for her clever friend. What a perfect place to call home.'},
    {pic:'p7.webp', text:'Hazel waved goodbye as the sun nestled down. Moss waved back from his cosy leaf. All winter long, the holly tree kept its coat. And the old oak? When spring returned, it grew new green leaves. Goodbye, until our next adventure!'}
   ],
   understand:[
    {q:'Where does Moss live?', o:['Under a holly tree','Under the old oak','Inside a sunflower'], a:0, type:'Find it', why:'Moss finds his home beneath a beautiful holly tree.'},
    {q:'What does evergreen mean?', o:['It keeps its leaves all year','It drops its leaves in autumn','It has golden leaves'], a:0, type:'Word power', why:'Evergreen trees, like the pine and the holly, keep their leaves all year round.'},
    {q:'The oak wears its golden coat "for now". Why only for now?', o:['It is deciduous, so its leaves will fall','Hazel will take its coat home','It will turn into a pine tree'], a:0, type:'Think about it', why:'The oak is deciduous. Its golden leaves fall in autumn, and new green leaves grow in spring.'},
    {q:'What job do the roots do?', o:['They drink water from the soil','They call the bees','They hold the berries'], a:0, type:'Find it', why:'Roots drink! They take in water from the soil and hold the plant in place.'},
    {q:'Which tree did Hazel and Moss find first?', o:['The old oak','The pine tree','The holly tree'], a:0, type:'Order it', why:'First the oak, then the pine, and at last the holly.'}
   ],
   predict:{q:'The oak wears its golden coat "for now". What do you think the oak will look like in winter?',
    o:['Bare branches with no leaves','Full of green leaves','Covered in red berries'], a:0,
    discover:'In winter, a deciduous tree like the oak has bare branches. It is resting. In spring, little buds open and new green leaves grow. Evergreen trees, like the pine and the holly, stay green all winter.'},
   sort:{title:'Deciduous or evergreen?', bins:['Deciduous','Evergreen'],
    items:[['Oak tree',0,'oak'],['Pine tree',1,'pine'],['Holly tree',1,'holly'],['Apple tree',0,'appletree'],['Fir tree',1,'pine'],['Cherry tree',0,'appletree']]},
   tryit:{title:'Be a leaf detective', need:['An adult to come with you','Paper and crayons'],
    steps:['Go outside with an adult and find three different trees.','Look at the leaves. Are they flat, or thin like needles?','Gently rub a crayon over paper on a fallen leaf to make a leaf rubbing.','Find the trunk, branches and leaves on each tree.','Ask your adult: does this tree lose its leaves in autumn?'],
    notice:'Is each tree deciduous or evergreen? Draw your favourite tree and label its trunk, branches and leaves.'}
  },

  /* ---------------- ANIMALS ---------------- */
  {id:'kg2-animals-1', topic:'animals', title:'Kiki’s Riverbank Roll Call',
   cast:'Kiki the kingfisher and friends', cover:['kiki','frog','otter'], badge:'Animal Expert',
   img:'img/stories/kg2-animals-1/', coverImg:'cover.webp',
   vocab:{
     'fins':'Flat parts that help a fish swim and steer.',
     'scales':'Small, hard plates that cover the skin of fish and reptiles.',
     'gills':'The parts a fish uses to breathe under water.',
     'amphibians':'Animals that start life in water and can later live on land too, like frogs.',
     'reptiles':'Animals with dry, scaly skin, like lizards and snakes.',
     'feathers':'The soft covering on a bird.',
     'mammals':'Animals with hair or fur. Mammal babies drink milk from their mothers.',
     'herbivore':'An animal that eats only plants.',
     'carnivore':'An animal that eats other animals.',
     'omnivore':'An animal that eats plants and animals.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Kiki’s Riverbank Roll Call'},
    {pic:'p1.webp', text:'Kiki the kingfisher was the bossiest bird on the riverbank. Every morning, she did the roll call. "Time to check that everyone is here!" she called, flashing her bright blue feathers.'},
    {pic:'p2.webp', text:'"First, the fish!" Splash! Finn the trout leapt out of the water. "Here!" he bubbled. "I have [[fins]] to swim and [[scales]] on my skin. I breathe under water with my [[gills]]."'},
    {pic:'p3.webp', text:'"Next, the [[amphibians]]!" Fern the frog hopped onto a lily pad. "Here! I have smooth, damp skin. I began life as a tadpole in the water. Now I can live in the water and on land too."'},
    {pic:'p4.webp', text:'"Now, the [[reptiles]]!" Sunny the lizard was lying on a warm rock. "Here!" she yawned. "I have dry, scaly skin. I hatched from an egg, and I love to warm up in the sun."'},
    {pic:'p5.webp', text:'"Birds!" Kiki puffed out her chest and spread her wings. "That’s me! I have [[feathers]], two wings and a long beak. I hatched from an egg too."'},
    {pic:'p6.webp', text:'"And last, the [[mammals]]!" Ollie the otter rolled over in the water. "Here! I have thick fur to keep me warm. When I was a baby, I drank milk from my mum." Rosie the rabbit twitched her nose. "Me too! I am a mammal as well."'},
    {pic:'p7.webp', text:'Then it was lunchtime. Rosie munched clover and grass. "I only eat plants. I am a [[herbivore]]." Ollie crunched a fish. "I eat other animals. I am a [[carnivore]]." Bramble the badger sat by the bushes with worms and blackberries. "I eat plants AND animals. I am an [[omnivore]]!"'},
    {pic:'p8.webp', text:'Kiki counted everyone. "Fish, amphibian, reptile, bird and mammal. Everyone is here!" Then a small voice said, "What about me?" It was Leo, who had been watching from the riverbank all morning. He was eating his sandwich. Kiki laughed. "You are a mammal too! And with cheese and tomato in your sandwich, you are an omnivore!"'}
   ],
   understand:[
    {q:'Which animal has fins and breathes with gills?', o:['Finn the trout','Fern the frog','Sunny the lizard'], a:0, type:'Find it', why:'Finn is a fish. Fish have fins and breathe with gills.'},
    {q:'What does herbivore mean?', o:['It eats only plants','It eats only animals','It eats plants and animals'], a:0, type:'Word power', why:'Rosie the rabbit is a herbivore. She eats only plants.'},
    {q:'Why is Leo an omnivore?', o:['Cheese comes from animals and tomato from plants','He lives by the river','He has fur and feathers'], a:0, type:'Think about it', why:'Cheese is made from milk, which comes from animals. Tomatoes come from plants. Leo eats both!'},
    {q:'Which animal began life as a tadpole?', o:['Fern the frog','Ollie the otter','Kiki the kingfisher'], a:0, type:'Find it', why:'Frogs are amphibians. They start life as tadpoles in the water.'},
    {q:'Which group did Kiki call first?', o:['The fish','The birds','The mammals'], a:0, type:'Order it', why:'Kiki called the fish first, and the mammals last.'}
   ],
   predict:{q:'A new animal flies onto the riverbank. It has feathers, two wings and a beak. Which group will Kiki put it in?',
    o:['Birds','Mammals','Reptiles'], a:0,
    discover:'All birds have feathers, two wings and a beak, and they hatch from eggs. So the new animal is a bird! Scientists group animals by looking closely at their bodies: fur, feathers, scales or smooth, damp skin.'},
   sort:{title:'What does each animal eat?', bins:['Herbivore','Carnivore','Omnivore'],
    items:[['Cow',0,'cow'],['Giraffe',0,'giraffe'],['Lion',1,'lion'],['Shark',1,'shark'],['Bear',2,'bear'],['Human',2,'leo']]},
   tryit:{title:'Animal detective', need:['Pictures of animals, or a pet you know','Paper and a pencil'],
    steps:['Choose four animals.','Look at what covers their body: fur, feathers, scales or smooth skin?','Count their legs. Do they have wings, fins or a tail?','Find out what each animal eats.','Draw each animal in a group: fish, amphibian, reptile, bird or mammal.'],
    notice:'Which of your animals are herbivores, carnivores or omnivores? How did you know?'}
  },

  /* ---------------- MATERIALS ---------------- */
  {id:'kg2-materials-1', topic:'materials', title:'Bolt and Maya Build a Den',
   cast:'Bolt the robot and Maya', cover:['bolt','maya','den'], badge:'Material Tester',
   img:'img/stories/kg2-materials-1/', coverImg:'cover.webp',
   vocab:{
     'object':'A thing you can see and touch, like a cup or a den.',
     'material':'What an object is made from, like wood, metal or plastic.',
     'materials':'What objects are made from, like wood, metal or plastic.',
     'absorbs':'Soaks up, like a sponge soaks up water.',
     'waterproof':'Does not let water through.',
     'bendy':'Easy to bend without breaking.',
     'rough':'Bumpy, not smooth, when you touch it.',
     'see-through':'You can see through it, like a window.',
     'heavy':'Hard to lift.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Bolt and Maya Build a Den'},
    {pic:'p1.webp', text:'Bolt was a little robot with one wobbly wheel. He lived in the science corner of Class 1. One day, the sky turned grey. Maya pointed out of the window. "Rain is coming," she said. "Let’s build a den to keep us dry!"'},
    {pic:'p2.webp', text:'"A den is an [[object]]," beeped Bolt. "An object is a thing. A [[material]] is what the thing is made from." He showed Maya a big box. Inside, there was paper, plastic, wood, metal, glass and rocks. "To build the best den, we need the best [[materials]]!"'},
    {pic:'p3.webp', text:'Maya and Bolt tested a paper bag. Bolt added water. The bag went soggy and soft. It tore and dripped! "Oh no!" said Bolt. "Paper [[absorbs]] water. Paper is not [[waterproof]]. It will not keep us dry."'},
    {pic:'p4.webp', text:'Next, Bolt tested a sheet of plastic. He dripped water on it. The water ran off. Drip, drip, drip! "Plastic is waterproof," said Bolt. "It is smooth and [[bendy]] too. It is perfect for the roof!"'},
    {pic:'p5.webp', text:'"What about the walls?" asked Maya. She held up a wooden plank. Bolt knocked on it. Knock, knock! "Wood is hard and strong," he said. "It feels [[rough]] too. It is great for walls!"'},
    {pic:'p6.webp', text:'Maya found a metal tray. "Metal is shiny and hard," said Bolt. Then he looked closely at a glass jar. "Glass is smooth and [[see-through]]. But glass can break. We will not use glass for our den."'},
    {pic:'p7.webp', text:'Outside, they put rocks around the bottom of the den, so the wind could not blow it over. "Rock is hard and [[heavy]]," beeped Bolt. "It will hold everything still."'},
    {pic:'p8.webp', text:'Pitter-patter went the rain. Maya and Bolt sat inside the den, cosy and dry. "Wood for the walls, plastic for the roof, and rocks to hold it down," said Maya. "The right material for the right job!" Bolt’s wobbly wheel spun with joy.'}
   ],
   understand:[
    {q:'Is a den an object or a material?', o:['An object','A material','A robot'], a:0, type:'Word power', why:'A den is a thing, so it is an object. It is made from materials.'},
    {q:'Why was paper no good for the roof?', o:['It absorbs water and went soggy','It was too heavy','It was see-through'], a:0, type:'Find it', why:'Paper absorbs water, so it went soft and soggy. It is not waterproof.'},
    {q:'Which material did they use for the walls?', o:['Wood','Glass','Paper'], a:0, type:'Find it', why:'Wood is hard and strong, so it is great for walls.'},
    {q:'Why did Bolt NOT use glass?', o:['Glass can break','Glass is soft','Glass is not shiny'], a:0, type:'Think about it', why:'Glass can break, so it would not be safe for a den.'},
    {q:'What did Maya and Bolt test first?', o:['A paper bag','A metal tray','A sheet of plastic'], a:0, type:'Order it', why:'They tested the paper first, then the plastic.'}
   ],
   predict:{q:'Bolt wants to make an umbrella. Which material do you think will keep the rain off best?',
    o:['Plastic','Paper','A sponge'], a:0,
    discover:'Plastic is waterproof, so the water runs off it. Paper and sponges soak up water, so you would get wet! Scientists test materials to find the best one for each job.'},
   sort:{title:'What is it made from?', bins:['Wood','Metal','Plastic','Glass'],
    items:[['Pencil',0,'pencil'],['Key',1,'key'],['Bucket',2,'bucket'],['Window',3,'window'],['Spoon',1,'spoon'],['Drinking straw',2,'straw'],['Jar',3,'glass'],['Wooden block',0,'wood']]},
   tryit:{title:'The great waterproof test', need:['An adult to help','A cup of water and a spoon','Paper towel, kitchen foil, a plastic bag and a piece of cloth','A tray'],
    steps:['Lay each material over the tray.','Put one spoonful of water on each material. Use the same amount each time to keep it fair.','Wait and count to 20.','Lift each material. Is the tray underneath wet or dry?'],
    notice:'Which materials are waterproof? Which would you use to make a raincoat for a teddy?'}
  },

  /* ---------------- SEASONS ---------------- */
  {id:'kg2-seasons-1', topic:'seasons', title:'Pebble and Whirl’s Weather Year',
   cast:'Pebble the squirrel and Whirl the weathervane', cover:['squirrel','vane','sun'], badge:'Weather Watcher',
   img:'img/stories/kg2-seasons-1/', coverImg:'cover.webp',
   vocab:{
     'weathervane':'A pointer on a roof that turns to show which way the wind is blowing.',
     'seasons':'The four parts of the year: spring, summer, autumn and winter.',
     'buds':'Tiny bumps on a plant that open into new leaves or flowers.',
     'showers':'Short bursts of rain.',
     'day length':'How many hours it is light each day.',
     'cosy':'Warm and comfortable.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Pebble and Whirl’s Weather Year'},
    {pic:'p1.webp', text:'Pebble the squirrel lived in a tall tree beside a school. Every morning, he waved to Whirl, the [[weathervane]] on the school roof. Whirl spun around in the wind. "I know all about the weather and the [[seasons]]," said Whirl proudly.'},
    {pic:'p2.webp', text:'"Spring is here!" said Whirl. "The days are getting longer. There are sunny days and [[showers]]." Pebble saw [[buds]] on the branches and new green leaves. Baby birds cheeped in their nest.'},
    {pic:'p3.webp', text:'"Summer!" said Whirl. "This is the warmest season. The days are long, and the sun sets late in the evening." The children played outside in sunhats and drank lots of water. Pebble lay back on his branch in the shade.'},
    {pic:'p4.webp', text:'"Autumn!" said Whirl. "It is getting cooler, and it is often windy." Whoosh! Whirl spun fast. The leaves turned orange and fell. Pebble was busy burying nuts. "The days are getting shorter," said Whirl. "It gets dark earlier now."'},
    {pic:'p5.webp', text:'"Winter!" said Whirl. "This is the coldest season. The days are short and the nights are long." In some places, snowflakes fall, just like here. The branches were bare. Pebble curled up in his [[cosy]] nest and went to sleep.'},
    {pic:'p6.webp', text:'Pebble peeped out of his tree. "Whirl, the sun is setting already! Why are some days long and some days short?" "[[Day length]] changes with the seasons," said Whirl. "The days are longest in summer and shortest in winter."'},
    {pic:'p7.webp', text:'"Will spring come back?" asked Pebble. "Always!" said Whirl. "Spring, summer, autumn, winter, and then spring again. The seasons go round and round, just like me!"'},
    {pic:'p8.webp', text:'"Then I will keep a weather diary," said Pebble. "Every day, I will draw the weather: sunny, rainy or windy. Then I can see the seasons change for myself!" Whirl spun with delight. "Spoken like a true scientist!"'}
   ],
   understand:[
    {q:'Who is Whirl?', o:['A weathervane on the school roof','A bird in a nest','A cloud in the sky'], a:0, type:'Find it', why:'Whirl is the weathervane on the school roof. It turns in the wind.'},
    {q:'Which season is the warmest?', o:['Summer','Winter','Autumn'], a:0, type:'Find it', why:'Whirl says summer is the warmest season.'},
    {q:'What does day length mean?', o:['How many hours it is light each day','How long a day at school is','How tall a tree is'], a:0, type:'Word power', why:'Day length is how many hours of light there are in a day.'},
    {q:'Why was Pebble burying nuts in autumn?', o:['To have food for the cold winter','To play a game with Whirl','Because nuts do not like the rain'], a:0, type:'Think about it', why:'Winter is cold and there is less food, so squirrels save nuts in autumn.'},
    {q:'Which season comes after winter?', o:['Spring','Summer','Autumn'], a:0, type:'Order it', why:'Spring, summer, autumn, winter, and then spring again!'}
   ],
   predict:{q:'Pebble writes down when it gets dark each evening. In winter, do you think it will get dark earlier or later than in summer?',
    o:['Earlier','Later','At the same time'], a:0,
    discover:'In winter, the sun sets earlier, so it gets dark earlier. In summer, the sun sets later, so the days are longer. You can check this yourself by noting when it gets dark through the year.'},
   sort:{title:'Which season is it?', bins:['Spring','Summer','Autumn','Winter'],
    items:[['New buds open',0,'bud'],['Baby birds in nests',0,'nest'],['Long, warm days',1,'sun'],['Sunhats on',1,'sunhat'],['Leaves turn orange and fall',2,'leaf'],['Squirrels hide nuts',2,'acorn'],['Coldest days',3,'snow'],['Coats, hats and gloves',3,'scarf']]},
   tryit:{title:'Keep a weather diary', need:['A notebook','Crayons','An adult to help with the time'],
    steps:['Each day, look out of the window at the same time.','Draw the weather: sunny, cloudy, rainy or windy.','Is it hot, warm, cool or cold?','Once a week, ask an adult what time it gets dark.','After a few weeks, look back at your diary.'],
    notice:'What changed? Is it getting dark earlier or later than when you started?'}
  }
  ]
};
