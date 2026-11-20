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

  {id:'kg2-plants-2', topic:'plants', title:'Tariq’s Plant Hunt',
   cast:'Tariq and Bea the bumblebee', cover:['dandelion','tulip','appletree'], badge:'Plant Hunter',
   img:'img/stories/kg2-plants-2/', coverImg:'cover.webp',
   vocab:{
     'nature trail':'A walk where you look for things in nature and tick them off.',
     'wild plants':'Plants that grow by themselves. Nobody planted them.',
     'garden plants':'Plants that people plant and look after.',
     'roots':'The part of a plant under the soil. Roots hold the plant in place and take in water.',
     'stem':'The part that holds a plant up.',
     'leaves':'The parts of a plant that use sunlight to make food.',
     'petals':'The coloured parts of a flower.',
     'bulb':'A round store of food under the soil. Some plants, like tulips, grow from a bulb.',
     'trunk':'The thick, woody stem of a tree.',
     'branches':'The arms of a tree that grow out from the trunk.',
     'blossom':'The flowers on a tree.',
     'deciduous':'A tree that drops its leaves in autumn and grows new ones in spring.',
     'evergreen':'A tree or plant that keeps its leaves all year round.',
     'shoot':'A new, young plant just starting to grow.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Tariq’s Plant Hunt'},
    {pic:'p1.webp', text:'Tariq had a [[nature trail]] card. "Find ten plants," it said. "That’s easy!" said Tariq. Bzzz! A little bumblebee landed on his card. "I’m Bea," she said. "I know every plant in this park. Let’s hunt together!"'},
    {pic:'p2.webp', text:'In the long grass, they found yellow dandelions, white daisies and pink clover. "These are [[wild plants]]," said Bea. "Nobody planted them. Look! Their seeds blow here on the wind." Tick, tick, tick!'},
    {pic:'p3.webp', text:'In the flower beds, there were red roses, tall sunflowers and pink tulips. "These are [[garden plants]]," said Tariq. "A gardener planted them and waters them." Tick, tick, tick!'},
    {pic:'p4.webp', text:'Bea flew into a tulip. "Every flowering plant has the same parts," she buzzed. "The [[roots]] hold it in the soil and drink water. This tulip grew from a [[bulb]]. The [[stem]] holds it up. The [[leaves]] make food from sunlight. And the [[petals]] are the bright part that bees like me can spot!"'},
    {pic:'p5.webp', text:'Next, they came to an apple tree covered in [[blossom]]. "Is a tree a plant too?" asked Tariq. "Yes!" said Bea. "A tree has roots, a [[trunk]], [[branches]] and leaves. The blossom is its flowers. Later, the flowers will grow into apples, with seeds inside!"'},
    {pic:'p6.webp', text:'In the meadow, they found two trees. One was a horse chestnut with big, wide leaves. The other was a fir tree with thin, sharp needles. Tariq held up a leaf from each. "In autumn, the horse chestnut will drop its leaves. It is [[deciduous]]," said Bea. "The fir tree will stay green all year. It is [[evergreen]]."'},
    {pic:'p7.webp', text:'Tariq counted his ticks. "Nine plants! I need one more." He looked all around. Then he spotted something by his boots. A tiny green [[shoot]] was growing between the paving stones! "A wild plant!" laughed Tariq. "Plants can grow almost anywhere!"'},
    {pic:'p8.webp', text:'"Ten plants!" cheered Tariq, holding up his card. "Thank you, Bea. You are the best plant hunter!" Bea did a happy loop in the air. "Now you know the names of plants and all their parts. You are a plant hunter too!"'}
   ],
   understand:[
    {q:'Who helped Tariq on his plant hunt?', o:['Bea the bumblebee','A gardener','A squirrel'], a:0, type:'Find it', why:'Bea the bumblebee landed on his card and helped him hunt.'},
    {q:'What does wild plant mean?', o:['A plant that grows by itself','A plant that is very big','A plant a gardener looks after'], a:0, type:'Word power', why:'Nobody plants wild plants. They grow by themselves.'},
    {q:'Which job do the roots do?', o:['Hold the plant in the soil and drink water','Make food from sunlight','Bring the bees'], a:0, type:'Find it', why:'Roots hold the plant in the soil and take in water.'},
    {q:'Why was the tiny shoot a wild plant?', o:['Nobody planted it between the stones','It was very small','Bea planted it'], a:0, type:'Think about it', why:'Nobody planted it there. It grew by itself, so it is a wild plant.'},
    {q:'Where did Tariq and Bea find plants first?', o:['In the long grass','In the flower beds','Under the fir tree'], a:0, type:'Order it', why:'First the long grass, then the flower beds, then the trees.'}
   ],
   predict:{q:'Bea says the apple blossom will change later. What do you think the blossom flowers will grow into?',
    o:['Apples with seeds inside','Pinecones','More leaves'], a:0,
    discover:'After a bee visits, a blossom flower can grow into a fruit. On an apple tree, the fruit is an apple, and the seeds are inside. A seed can grow into a new apple tree!'},
   sort:{title:'Wild plant or garden plant?', bins:['Wild plant','Garden plant'],
    items:[['Dandelion',0,'dandelion'],['Daisy',0,'daisy'],['Clover',0,'clover'],['Rose',1,'rose'],['Sunflower',1,'sunflower'],['Tulip',1,'tulip']]},
   tryit:{title:'Your own plant hunt', need:['An adult to come with you','Paper, a pencil and a clipboard or book to lean on'],
    steps:['Draw ten boxes on your paper.','Go to a park, garden or school field with your adult.','Look for plants. Draw each one you find in a box.','Is it a wild plant or a garden plant? Write W or G.','Look closely at one flower. Can you find its stem, leaves and petals?'],
    notice:'How many wild plants did you find? Did you find any plants growing in surprising places?'}
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

  {id:'kg2-animals-2', topic:'animals', title:'Nova Meets the Five Senses',
   cast:'Nova from a faraway planet and Amira', cover:['feather','lemon','bell'], badge:'Super Senses',
   img:'img/stories/kg2-animals-2/', coverImg:'cover.webp',
   vocab:{
     'senses':'The ways our bodies find out about the world: sight, hearing, smell, taste and touch.',
     'sight':'The sense of seeing. We see with our eyes.',
     'hearing':'The sense of hearing sounds. We hear with our ears.',
     'smell':'The sense of smelling. We smell with our nose.',
     'taste':'The sense of tasting. We taste with our tongue.',
     'touch':'The sense of feeling. We feel with our skin.',
     'tongue':'The part inside your mouth that tastes food.',
     'sour':'A sharp taste, like a lemon.',
     'skin':'The soft covering over your whole body. It feels things.',
     'fingertips':'The very ends of your fingers. They are great at feeling.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Nova Meets the Five Senses'},
    {pic:'p1.webp', text:'One sunny morning, something round and shiny landed in the school garden. Out jumped Nova, a little visitor from a faraway planet. Nova had two big eyes, but no ears and no nose! "Hello," said Nova. "I want to learn how humans find out about the world."'},
    {pic:'p2.webp', text:'Amira sat down on the grass and held up five fingers. "We use our [[senses]]! We have five senses: [[sight]], [[hearing]], [[smell]], [[taste]] and [[touch]]. Each sense uses a different part of the body."'},
    {pic:'p3.webp', text:'"I see with my eyes," said Amira. She pointed to a red ladybird on a leaf. "My eyes tell me its colour and its shape." Nova blinked its big eyes. "I can see it too! Seeing is called sight."'},
    {pic:'p4.webp', text:'Ring-a-ling! The school bell rang. Amira cupped her hand by her ear. "I hear with my ears," she said. "My ears hear loud sounds, like the bell, and quiet sounds, like a whisper." Nova scratched its head. "I have no ears! I wish I could hear the bell."'},
    {pic:'p5.webp', text:'Amira sniffed a rose. "I smell with my nose. This rose smells sweet!" Then they walked past the compost bin. "Phew!" said Amira, holding her nose. "My nose tells me that smell is not nice!" Nova giggled.'},
    {pic:'p6.webp', text:'At snack time, Ms Lee gave everyone some fruit. "We only taste food that a grown-up says is safe," said Amira. She tasted a slice of lemon. "I taste with my [[tongue]]. Lemon is [[sour]]!" Then she picked a strawberry. "Strawberries are sweet!"'},
    {pic:'p7.webp', text:'"I feel with my [[skin]]," said Amira. She stroked a feather. "This is soft and smooth." Nova picked up a pinecone. "Ooh! This is rough and prickly!" "Skin covers my whole body," said Amira, "but my [[fingertips]] are the best at feeling."'},
    {pic:'p8.webp', text:'"Please tell me the names of your body parts," said Nova. "I want to draw a human for my planet!" Amira said them all: "Head, neck, shoulders, arms, elbows, hands, legs, knees and feet." She pointed to her knee. Nova held up a drawing with every part labelled. "Thank you, Amira! Now I know how humans find out about the world: with five senses!"'}
   ],
   understand:[
    {q:'Who is Nova?', o:['A visitor from a faraway planet','A new girl in Class 1','A robot from the science corner'], a:0, type:'Find it', why:'Nova landed in the school garden from a faraway planet.'},
    {q:'Which body part do we use to hear?', o:['Our ears','Our eyes','Our tongue'], a:0, type:'Find it', why:'Amira says, "I hear with my ears."'},
    {q:'What does sour mean?', o:['A sharp taste, like a lemon','A soft feeling, like a feather','A loud sound, like a bell'], a:0, type:'Word power', why:'Lemon tastes sour. Sour is a sharp taste.'},
    {q:'Why could Nova not hear the bell?', o:['Nova has no ears','The bell was too quiet','Nova was asleep'], a:0, type:'Think about it', why:'We hear with our ears, and Nova has no ears!'},
    {q:'Which sense did Amira show Nova first?', o:['Sight, with the ladybird','Taste, with the lemon','Touch, with the feather'], a:0, type:'Order it', why:'First sight, then hearing, smell, taste and last of all touch.'}
   ],
   predict:{q:'Nova has no nose. Do you think Nova can smell the sweet rose like Amira does?',
    o:['No, because Nova has no nose','Yes, with its big eyes','Yes, with its star antennae'], a:0,
    discover:'Humans smell with their nose. Without a nose, Nova cannot smell the rose the way Amira does. Each sense needs its own body part: eyes to see, ears to hear, nose to smell, tongue to taste and skin to feel.'},
   sort:{title:'Which sense would you use?', bins:['Sight (eyes)','Hearing (ears)','Smell (nose)','Taste (tongue)','Touch (skin)'],
    items:[['The colour of a ladybird',0,'ladybird'],['The colour of an autumn leaf',0,'leaf'],['The school bell',1,'bell'],['A bird singing',1,'kiki'],['A flower',2,'tulip'],['A sour lemon',3,'lemon'],['A sweet strawberry',3,'strawberry'],['A soft feather',4,'feather'],['A prickly pinecone',4,'pinecone']]},
   tryit:{title:'The mystery feely bag', need:['An adult to help','A cloth bag or pillowcase','Safe objects to feel, like a sponge, a spoon, a pinecone and a soft toy'],
    steps:['Ask your adult to put one object in the bag without you seeing.','Put your hand in the bag. No peeking!','Feel the object with your fingertips. Is it rough or smooth? Hard or soft?','Guess what it is, then take it out to check.','Now use your eyes, ears and nose. What else can you find out about it?'],
    notice:'Which sense helped you most to guess? Can you name the body part for each sense?'}
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

  {id:'kg2-materials-2', topic:'materials', title:'Pip and the Lost Property Box',
   cast:'Hana and Pip the parrot', cover:['spoon','hat','marble'], badge:'Material Detective',
   img:'img/stories/kg2-materials-2/', coverImg:'cover.webp',
   vocab:{
     'lost property':'Things people have lost and left behind, kept safe until someone collects them.',
     'object':'A thing you can see and touch, like a spoon or a hat.',
     'materials':'What objects are made from, like wood, metal or plastic.',
     'fabric':'Cloth, like wool or cotton. Clothes are made of fabric.',
     'see-through':'You can see through it, like a window.',
     'squashy':'Soft and easy to squeeze.',
     'bendy':'Easy to bend without breaking.',
     'waterproof':'Does not let water through.',
     'soaked':'Took in lots of water, like a sponge.',
     'graphite':'The grey part in the middle of a pencil that makes marks.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Pip and the Lost Property Box'},
    {pic:'p1.webp', text:'The [[lost property]] box was full to the top. "What a muddle!" said Mr Oduya, scratching his head. "Could someone sort it out?" "I will!" said Hana. "Squawk! Me too!" said Pip the parrot, flapping down from his perch.'},
    {pic:'p2.webp', text:'Hana found three spoons. One was wood, one was metal and one was plastic. "Squawk! Three spoons!" said Pip. "They are the same [[object]], but they are made from different [[materials]]!"'},
    {pic:'p3.webp', text:'"Let’s sort everything by material," said Hana. She made four groups on the rug: wood, metal, plastic and [[fabric]]. The wooden ruler went in the wood group. The metal keys went in the metal group. The plastic lunchbox went in the plastic group. The woolly hat went in the fabric group.'},
    {pic:'p4.webp', text:'Pip found a pebble. "Squawk! Where does this go?" Then Hana held a glass marble up to the light. "Glass is hard, smooth and [[see-through]]. It needs a new group!" Pip held up his pebble. "And this is rock. It is hard and heavy. That’s another new group!"'},
    {pic:'p5.webp', text:'"Now let’s sort a different way," said Pip. "Squawk! By how things feel!" Hana squeezed a sponge. "This is soft and [[squashy]]." The key, the pebble and the wooden block went in the hard tray. The feather and the woolly hat went in the soft tray. And the straw? "It is [[bendy]]!" said Hana.'},
    {pic:'p6.webp', text:'Next, they tested which things were [[waterproof]]. Hana dripped water on a woolly glove. The water [[soaked]] right in. Then she dripped water on a plastic raincoat. The drops sat on top and rolled off. "The raincoat is waterproof," said Hana. "That is why it is made of plastic!"'},
    {pic:'p7.webp', text:'"Some objects are made from more than one material," said Hana. She held up a pencil. "The outside is wood. The middle is [[graphite]], which makes the marks." Pip hopped onto a backpack. "Squawk! Fabric, with a metal zip and plastic buckles!"'},
    {pic:'p8.webp', text:'At last, the lost property was sorted into six neat baskets: fabric, glass, rock, wood, metal and plastic. "Wonderful!" said Mr Oduya. "How did you do it?" "We looked at what each object was made from," said Hana, "and how each material feels." "Squawk!" said Pip. "Material detectives!"'}
   ],
   understand:[
    {q:'Who asked for help with the lost property box?', o:['Mr Oduya','Hana’s teacher','Pip the parrot'], a:0, type:'Find it', why:'Mr Oduya said, "Could someone sort it out?"'},
    {q:'The three spoons were the same object. What was different?', o:['The materials they were made from','Their names','Who lost them'], a:0, type:'Think about it', why:'One spoon was wood, one was metal and one was plastic. Same object, different materials.'},
    {q:'What does waterproof mean?', o:['It does not let water through','It soaks up water','It is see-through'], a:0, type:'Word power', why:'Water rolled off the plastic raincoat. It is waterproof.'},
    {q:'Which material is see-through?', o:['Glass','Rock','Wood'], a:0, type:'Find it', why:'Hana held the glass marble up to the light. Glass is see-through.'},
    {q:'How did Hana sort the things first?', o:['By material','By how they feel','By colour'], a:0, type:'Order it', why:'First by material, then by how things feel, then by testing for waterproof.'}
   ],
   predict:{q:'Hana drips water on a woolly glove and on a plastic raincoat. Which one do you think will stay dry underneath?',
    o:['The plastic raincoat','The woolly glove','Both of them'], a:0,
    discover:'Plastic is waterproof, so the water sits on top and rolls off. Wool is a fabric that soaks up water, so the glove gets wet. To keep a test fair, use the same amount of water on each material.'},
   sort:{title:'What is it made from?', bins:['Wood','Metal','Plastic','Fabric','Glass','Rock'],
    items:[['Ruler',0,'ruler'],['Wooden block',0,'wood'],['Key',1,'key'],['Spoon',1,'spoon'],['Lunchbox',2,'lunchbox'],['Raincoat',2,'raincoat'],['Woolly hat',3,'hat'],['Glove',3,'glove'],['Marble',4,'marble'],['Pebble',5,'rock']]},
   tryit:{title:'Sort your own lost property', need:['An adult to help','About ten safe objects from around your home, like a spoon, a sock, a toy and a cup'],
    steps:['Put all your objects in a pile.','Pick up each object. What material is it made from?','Sort them into groups by material.','Now mix them up and sort them again by how they feel: hard or soft, rough or smooth, bendy or stiff.','Can you find an object made from more than one material?'],
    notice:'Which material did you find the most of? Which objects were hard to sort, and why?'}
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
  ,
  {id:'kg2-seasons-2', topic:'seasons', title:'Mila’s Weather Station',
   cast:'Mila, Grandpa Joe and Skip the dog', cover:['raingauge','windsock','thermometer'], badge:'Weather Scientist',
   img:'img/stories/kg2-seasons-2/', coverImg:'cover.webp',
   vocab:{
     'weather station':'A place with tools for measuring the weather.',
     'measure':'To find out how much, how big or how hot something is.',
     'rain gauge':'A see-through tube with lines on it. It collects rain so you can measure how much fell.',
     'windsock':'A fabric tube on a pole. It fills with air and shows how strong the wind is.',
     'thermometer':'A tool that shows how hot or cold it is.',
     'mild':'Not too hot and not too cold.',
     'showery':'With short bursts of rain.',
     'frost':'Tiny ice crystals that cover things on very cold mornings.',
     'chart':'A big sheet that shows information so we can compare it.'
   },
   pages:[
    {pic:'cover.webp', title:true, text:'Mila’s Weather Station'},
    {pic:'p1.webp', text:'Mila loved staying with Grandpa Joe. One day, he carried a box out into the garden. Inside were a jar, a ruler, some bright fabric, string and a thermometer. "Let’s build a [[weather station]]," he said. "Then we can [[measure]] the weather all year long!" Skip the dog sniffed the box.'},
    {pic:'p2.webp', text:'They made a [[rain gauge]] with lines like a ruler, so they could measure the rain. They made a [[windsock]] from bright fabric, so they could see the wind. And they hung a [[thermometer]] on the fence to show how hot or cold it was. Grandpa Joe fixed the rain gauge in place. Woof! said Skip.'},
    {pic:'p3.webp', text:'In spring, it was [[mild]] and [[showery]]. The rain gauge filled up a little each day. "Look, Grandpa! Blossom on the apple tree!" said Mila. Grandpa Joe checked his watch. "And the sun is setting a bit later every evening. The days are getting longer." Skip splashed in the puddles.'},
    {pic:'p4.webp', text:'In summer, the thermometer showed the highest number of the year. Mila put on her sunhat and checked the rain gauge. It was nearly empty! Grandpa Joe rested on the bench, and Skip lay by his water bowl. "The sun sets so late now," said Mila. "It’s still light at bedtime!"'},
    {pic:'p5.webp', text:'In autumn, the windsock stood straight out in the strong wind. "Very windy today!" laughed Mila, as leaves whirled around the garden. Grandpa Joe held on to his hat, and Skip chased the leaves. The thermometer showed a cooler number. "It’s getting dark before teatime now," said Grandpa Joe.'},
    {pic:'p6.webp', text:'In winter, the thermometer showed the lowest number of the year. One morning, [[frost]] covered the whole garden! Mila wore her coat, hat, scarf and gloves, and Skip wore his woolly jumper. "It’s dark when I wake up and dark at teatime," said Mila. "The days are so short."'},
    {pic:'p7.webp', text:'Mila and Grandpa Joe looked at their weather [[chart]]. "Summer was the hottest," said Mila. "Winter was the coldest. Autumn was the windiest." She pointed to the yellow bars. "These show the light part of each day. The days were longest in summer and shortest in winter."'},
    {pic:'p8.webp', text:'Spring came back to the garden. "Now we can see the seasons change," said Grandpa Joe, "because we measured them!" Mila lifted the rain gauge and smiled. "Can we start our chart again?" Skip jumped up and wagged his tail. Woof!'}
   ],
   understand:[
    {q:'What did Mila and Grandpa Joe build?', o:['A weather station','A bird house','A garden shed'], a:0, type:'Find it', why:'They built a weather station to measure the weather all year.'},
    {q:'What does a thermometer show?', o:['How hot or cold it is','How much rain fell','How strong the wind is'], a:0, type:'Word power', why:'A thermometer shows how hot or cold it is.'},
    {q:'Which season had the highest number on the thermometer?', o:['Summer','Winter','Spring'], a:0, type:'Find it', why:'Summer was the hottest season.'},
    {q:'How did Mila know autumn was windy?', o:['The windsock stood straight out','The rain gauge was full','The thermometer was high'], a:0, type:'Think about it', why:'A strong wind fills the windsock and makes it stand straight out.'},
    {q:'Which season came after summer in the story?', o:['Autumn','Spring','Winter'], a:0, type:'Order it', why:'Spring, summer, autumn, winter, and then spring again!'}
   ],
   predict:{q:'Mila looks at the yellow day-length bars on her chart. Which season do you think has the shortest yellow bar?',
    o:['Winter','Summer','Spring'], a:0,
    discover:'Winter has the shortest days, so its yellow bar is the shortest. Summer has the longest days and the longest bar. When we measure the weather and record it on a chart, we can compare the seasons and spot patterns, just like real scientists.'},
   sort:{title:'Which tool would you use?', bins:['Thermometer','Rain gauge','Windsock'],
    items:[['Is it hot or cold?',0,'thermometer'],['Is it warmer than yesterday?',0,'sun'],['How much rain fell?',1,'raingauge'],['Was it a showery day?',1,'plastic'],['Is it windy?',2,'windsock'],['Is the wind strong?',2,'leaf']]},
   tryit:{title:'Build a mini weather station', need:['An adult to help','A clear plastic bottle or jar and a ruler','A strip of fabric or ribbon and a stick','A notebook'],
    steps:['Ask your adult to cut the top off a plastic bottle. Stand the bottle outside where rain can fall in.','Tape a ruler to the side so you can measure the rain.','Tie a ribbon to a stick and push it into the ground. Watch how it moves in the wind.','Each day at the same time, check your rain gauge and ribbon. Draw what you see.','Empty the bottle after each check, so every day is a fair test.'],
    notice:'Which day had the most rain? Which day was the windiest? Keep going all year to see the seasons change!'}
  }
  ]
};
