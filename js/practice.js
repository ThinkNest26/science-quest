/* Science Quest: Science Practice questions, organised by National Curriculum objective.
   Each question: {q, o:[correct, wrong, wrong...], why, v (picture), pic (true = answers are pictures, written "Label|picture")}
   The first option is always the correct one; options are shuffled on screen. */
window.SQ_PRAC = {
/* ===================== KG2 = Year 1 ===================== */
kg2: [
 {id:'y1-pl-1', topic:'plants', short:'Name wild and garden plants and trees',
  nc:'Identify and name a variety of common wild and garden plants, including deciduous and evergreen trees',
  qs:[
   {q:'Which of these is a daisy?', o:['Daisy|daisy','Sunflower|sunflower','Tulip|tulip'], pic:true, why:'A daisy has white petals around a yellow middle.'},
   {q:'This tree keeps its green leaves all year round. What kind of tree is it?', v:'i:pine,holly', o:['Evergreen','Deciduous','Dead'], why:'Evergreen trees, like pine and holly, stay green even in winter.'},
   {q:'This tree has lost all its leaves in winter. What kind of tree is it?', v:'tree:winter', o:['Deciduous','Evergreen','A cactus'], why:'Deciduous trees drop their leaves in autumn and grow new ones in spring.'},
   {q:'Which plant grows wild, without anyone planting it?', o:['Dandelion|dandelion','Tulip in a pot|tulip','Rose in a garden|rose'], pic:true, why:'Dandelions grow by themselves in fields and cracks in the pavement, so they are wild plants.'},
   {q:'Which tree grows acorns?', v:'i:acorn', o:['Oak|oak','Pine|pine','Holly|holly'], pic:true, why:'Acorns are the seeds of oak trees.'},
   {q:'Which of these is a tree?', o:['Apple tree|appletree','Daisy|daisy','Clover|clover'], pic:true, why:'Trees are big plants with a woody trunk.'}
  ]},
 {id:'y1-pl-2', topic:'plants', short:'Parts of flowering plants and trees',
  nc:'Identify and describe the basic structure of a variety of common flowering plants, including trees',
  qs:[
   {q:'Which part of the plant is the arrow pointing to?', v:'plant:roots', o:['Roots','Stem','Petals'], why:'Roots grow under the soil. They hold the plant still and take in water.'},
   {q:'Which part of the plant is the arrow pointing to?', v:'plant:leaf', o:['Leaf','Root','Flower'], why:'Leaves are flat and green. They use sunlight to make food for the plant.'},
   {q:'Which part of the plant is the arrow pointing to?', v:'plant:stem', o:['Stem','Roots','Petal'], why:'The stem holds the plant up and carries water from the roots to the leaves.'},
   {q:'Which part of the plant is the arrow pointing to?', v:'plant:flower', o:['Flower','Leaf','Root'], why:'The flower is often brightly coloured to attract insects.'},
   {q:'What is the thick, woody stem of a tree called?', v:'tree:trunk', o:['Trunk','Petal','Bud'], why:'A tree’s stem is called its trunk. It is covered in bark.'},
   {q:'Which part of a plant is usually underground?', o:['Roots','Flowers','Leaves'], why:'Roots grow down into the soil.'}
  ]},
 {id:'y1-an-1', topic:'animals', short:'Fish, amphibians, reptiles, birds and mammals',
  nc:'Identify and name a variety of common animals including fish, amphibians, reptiles, birds and mammals',
  qs:[
   {q:'Which animal is a fish?', o:['Trout|trout','Frog|frog','Rabbit|rabbit'], pic:true, why:'Fish live in water, have fins and breathe with gills.'},
   {q:'Which animal is a bird?', o:['Parrot|kiki','Lizard|lizard','Cow|cow'], pic:true, why:'Birds have feathers, wings and a beak, and they lay eggs.'},
   {q:'A frog lives in water and on land. What kind of animal is it?', v:'i:frog', o:['An amphibian','A bird','A fish'], why:'Amphibians, like frogs, start life in water and can live on land when they grow up.'},
   {q:'Which animal is a reptile?', o:['Lizard|lizard','Sheep|sheep','Parrot|kiki'], pic:true, why:'Reptiles have dry, scaly skin. Lizards, snakes and tortoises are reptiles.'},
   {q:'Which animal is a mammal?', o:['Rabbit|rabbit','Trout|trout','Frog|frog'], pic:true, why:'Mammals have hair or fur and feed their babies milk. Humans are mammals too!'},
   {q:'What do all birds have?', v:'i:kiki,chick', o:['Feathers','Fur','Scales'], why:'Every bird has feathers.'}
  ]},
 {id:'y1-an-2', topic:'animals', short:'Carnivores, herbivores and omnivores',
  nc:'Identify and name a variety of common animals that are carnivores, herbivores and omnivores',
  qs:[
   {q:'A cow only eats grass and plants. What is it?', v:'i:cow', o:['A herbivore','A carnivore','An omnivore'], why:'Herbivores eat only plants.'},
   {q:'A lion eats other animals. What is it?', v:'i:lion,meat', o:['A carnivore','A herbivore','An omnivore'], why:'Carnivores eat other animals.'},
   {q:'A bear eats berries, fish and honey. What is it?', v:'i:bear,blackberry,trout', o:['An omnivore','A herbivore','A carnivore'], why:'Omnivores eat both plants and animals.'},
   {q:'Which animal is a herbivore?', o:['Rabbit|rabbit','Shark|shark','Lion|lion'], pic:true, why:'Rabbits eat grass, leaves and vegetables.'},
   {q:'Humans eat fruit, vegetables, eggs and fish. What are we?', v:'i:apple,broccoli,egg', o:['Omnivores','Herbivores','Carnivores'], why:'Most people eat both plants and animals, so humans are omnivores.'},
   {q:'Which animal is a carnivore?', o:['Shark|shark','Sheep|sheep','Giraffe|giraffe'], pic:true, why:'Sharks hunt and eat fish and other sea animals.'}
  ]},
 {id:'y1-an-3', topic:'animals', short:'Compare the bodies of animals',
  nc:'Describe and compare the structure of a variety of common animals (fish, amphibians, reptiles, birds and mammals, including pets)',
  qs:[
   {q:'What does a fish use to swim?', v:'i:trout', o:['Fins and a tail','Wings','Legs'], why:'Fish move their tail and fins to push through the water.'},
   {q:'Which animal has a hard shell on its back?', o:['Tortoise|tortoise','Rabbit|rabbit','Frog|frog'], pic:true, why:'A tortoise has a hard shell that protects its body.'},
   {q:'How many legs does a bird have?', v:'i:chick', o:['2','4','6'], why:'Birds walk on two legs and have two wings.'},
   {q:'What covers a sheep’s body?', v:'i:sheep', o:['Wool (fur)','Feathers','Scales'], why:'Sheep are mammals. Their thick, woolly fur keeps them warm.'},
   {q:'How many legs does an insect, like a ladybird, have?', v:'i:ladybird', o:['6','4','8'], why:'All insects have six legs.'},
   {q:'Which animal has a beak?', o:['Parrot|kiki','Cow|cow','Lizard|lizard'], pic:true, why:'Birds use their beaks to eat, because they have no teeth.'}
  ]},
 {id:'y1-an-4', topic:'animals', short:'Parts of the human body and the senses',
  nc:'Identify, name, draw and label the basic parts of the human body and say which part of the body is associated with each sense',
  qs:[
   {q:'Which part of the body is the arrow pointing to?', v:'body:knee', o:['Knee','Elbow','Neck'], why:'Your knee is the joint in the middle of your leg.'},
   {q:'Which part of the body is the arrow pointing to?', v:'body:elbow', o:['Elbow','Knee','Shoulder'], why:'Your elbow is the joint in the middle of your arm.'},
   {q:'Which part of the body do you use to hear?', o:['Ear|ear','Nose|nose','Eye|eye'], pic:true, why:'We hear with our ears.'},
   {q:'Which sense do you use with your nose?', v:'i:nose', o:['Smell','Taste','Touch'], why:'Your nose lets you smell, like the smell of fresh bread.'},
   {q:'Which part of the body helps you taste food?', o:['Tongue|tongue','Hand|hand','Ear|ear'], pic:true, why:'Your tongue has taste buds that sense sweet, salty, sour and bitter.'},
   {q:'Which sense do you use to feel if something is soft or rough?', v:'i:hand', o:['Touch','Sight','Hearing'], why:'We feel with our skin, especially our fingers.'},
   {q:'Which part of the body is the arrow pointing to?', v:'body:neck', o:['Neck','Foot','Hand'], why:'Your neck joins your head to your body.'}
  ]},
 {id:'y1-ma-1', topic:'materials', short:'Objects and the materials they are made from',
  nc:'Distinguish between an object and the material from which it is made',
  qs:[
   {q:'What material is this spoon made from?', v:'i:spoon', o:['Metal','Paper','Wool'], why:'Spoons are often made of metal, which is strong and easy to clean.'},
   {q:'What material is this window made from?', v:'i:window', o:['Glass','Wood','Fabric'], why:'Windows are made of glass because we can see through it.'},
   {q:'Which of these is a material, not an object?', o:['Wood','Chair','Table'], why:'Wood is a material. Chairs and tables are objects that can be made from wood.'},
   {q:'What is this bucket made from?', v:'i:bucket', o:['Plastic','Glass','Paper'], why:'Many buckets are made of plastic: it is light and waterproof.'},
   {q:'A house is an object. Which material could it be made from?', v:'i:brick', o:['Brick','Paper','Jelly'], why:'Bricks are strong and hard, so they are good for building houses.'}
  ]},
 {id:'y1-ma-2', topic:'materials', short:'Name everyday materials',
  nc:'Identify and name a variety of everyday materials, including wood, plastic, glass, metal, water, and rock',
  qs:[
   {q:'What material is this?', v:'i:wood', o:['Wood','Glass','Plastic'], why:'Wood comes from trees.'},
   {q:'What material is this?', v:'i:rock', o:['Rock','Metal','Paper'], why:'Rock is hard and comes from the ground.'},
   {q:'Which of these is made of metal?', o:['Key|key','Paper|paper','Sponge|sponge'], pic:true, why:'Keys are made of metal so they are strong and do not bend.'},
   {q:'Which of these is made of glass?', o:['Marble|marble','Sponge|sponge','Cardboard box|cardboard'], pic:true, why:'A glass marble is hard, smooth and see-through.'},
   {q:'Which material is a liquid?', o:['Water','Wood','Rock'], why:'Water is a liquid: it can be poured and takes the shape of its container.'}
  ]},
 {id:'y1-ma-3', topic:'materials', short:'Describe properties of materials',
  nc:'Describe the simple physical properties of a variety of everyday materials',
  qs:[
   {q:'What is a sponge like?', v:'i:sponge', o:['Soft and squashy','Hard and stiff','See-through'], why:'A sponge is soft and squashy, and it soaks up water.'},
   {q:'What does see-through mean?', v:'i:window', o:['You can see through it, like glass','It is very heavy','It is soft'], why:'Glass is see-through (transparent). Light passes through it.'},
   {q:'Which word describes a rock?', v:'i:rock', o:['Hard','Stretchy','Bendy'], why:'Rock is hard. It does not squash or stretch.'},
   {q:'An elastic band can be pulled longer, then goes back. What is it?', v:'i:elastic', o:['Stretchy','Waterproof','See-through'], why:'Stretchy materials can be pulled and then spring back to their shape.'},
   {q:'A raincoat keeps you dry. What property does it have?', v:'i:raincoat', o:['Waterproof','Absorbent','Fluffy'], why:'Waterproof materials do not let water through.'}
  ]},
 {id:'y1-ma-4', topic:'materials', short:'Compare and group materials',
  nc:'Compare and group together a variety of everyday materials on the basis of their simple physical properties',
  qs:[
   {q:'Which material would soak up spilled water best?', o:['Sponge|sponge','Plastic|plastic','Foil|foil'], pic:true, why:'A sponge is absorbent: it soaks up water.'},
   {q:'Which one is the odd one out? (Hint: which is not hard?)', o:['Sponge|sponge','Rock|rock','Brick|brick'], pic:true, why:'Rock and brick are hard. The sponge is soft.'},
   {q:'Which would be best for an umbrella?', o:['Plastic','Paper','Cotton wool'], why:'Plastic is waterproof, so it keeps the rain off.'},
   {q:'Which group are all hard?', o:['Rock, metal, wood','Sponge, wool, cotton','Water, juice, milk'], why:'Rock, metal and wood are all hard materials.'},
   {q:'Which material could you see through?', o:['Glass','Wood','Brick'], why:'Glass is transparent. Wood and brick are not.'}
  ]},
 {id:'y1-se-1', topic:'seasons', short:'Changes across the four seasons',
  nc:'Observe changes across the four seasons',
  qs:[
   {q:'Which season does this picture show?', v:'season:autumn', o:['Autumn','Spring','Summer'], why:'In autumn, leaves turn orange, red and brown and fall from trees.'},
   {q:'Which season does this picture show?', v:'season:winter', o:['Winter','Summer','Autumn'], why:'In winter, it is cold, trees can be bare and it might snow.'},
   {q:'Which season does this picture show?', v:'season:spring', o:['Spring','Autumn','Winter'], why:'In spring, blossom and new flowers appear and baby animals are born.'},
   {q:'Which season comes after spring?', o:['Summer','Winter','Autumn'], why:'The seasons go: spring, summer, autumn, winter.'},
   {q:'How many seasons are there in a year?', o:['4','2','12'], why:'There are four seasons: spring, summer, autumn and winter.'}
  ]},
 {id:'y1-se-2', topic:'seasons', short:'Weather and day length',
  nc:'Observe and describe weather associated with the seasons and how day length varies',
  qs:[
   {q:'Which season has the longest days?', v:'season:summer', o:['Summer','Winter','Autumn'], why:'In summer, it gets light early and dark late, so the days are long.'},
   {q:'In winter, when do we usually have darker evenings?', o:['Earlier than in summer','Later than in summer','Never'], why:'In winter, the days are shorter, so it gets dark earlier.'},
   {q:'What does a rain gauge measure?', v:'i:raingauge', o:['How much rain falls','How hot it is','How fast the wind blows'], why:'A rain gauge collects rain so we can measure how much has fallen.'},
   {q:'What does a windsock show?', v:'i:windsock', o:['Which way the wind blows','How much it rained','How cold it is'], why:'A windsock fills with wind and points the way the wind is blowing.'},
   {q:'What do you need on a hot, sunny day?', o:['Sun hat|sunhat','Scarf|scarf','Snow|snow'], pic:true, why:'A sun hat protects you from the sun. Don’t forget sun cream and water too!'}
  ]}
],

/* ===================== Grade 1 = Year 2 ===================== */
g1: [
 {id:'y2-lh-1', topic:'living', short:'Alive, dead or never alive',
  nc:'Explore and compare the differences between things that are living, dead, and things that have never been alive',
  qs:[
   {q:'Is this rabbit living, dead or never alive?', v:'i:rabbit', o:['Living','Dead','Never alive'], why:'A rabbit moves, breathes, eats and grows, so it is living.'},
   {q:'Is a rock living, dead or never alive?', v:'i:rock', o:['Never alive','Living','Dead'], why:'A rock has never moved, eaten or grown by itself. It has never been alive.'},
   {q:'This plant has dried up and died. What is it now?', v:'scene:dead', o:['Dead','Living','Never alive'], why:'It was once alive, but now it has died.'},
   {q:'Which of these was once alive?', o:['Wooden pencil|pencil','Plastic button|button','Metal key|key'], pic:true, why:'Wood comes from trees, which were once alive.'},
   {q:'Which of these is something every living thing does?', o:['Grows','Melts','Shines'], why:'All living things grow, feed, move, breathe and reproduce.'}
  ]},
 {id:'y2-lh-2', topic:'living', short:'Habitats provide what living things need',
  nc:'Identify that most living things live in habitats to which they are suited and describe how different habitats provide for the basic needs of different kinds of animals and plants, and how they depend on each other',
  qs:[
   {q:'Which habitat is this?', v:'scene:desert', o:['Desert','Ocean','Arctic'], why:'Deserts are very dry and hot in the day.'},
   {q:'Which animal is suited to living in the ocean?', o:['Shark|shark','Squirrel|squirrel','Cow|cow'], pic:true, why:'Sharks have fins and gills, so they can live in the sea.'},
   {q:'Why do squirrels live in woodlands?', v:'scene:woodland', o:['Trees give them food and shelter','It is very salty','There is no food there'], why:'Squirrels eat nuts and seeds from trees and build nests in branches.'},
   {q:'What do plants give animals in a habitat?', o:['Food and shelter','Electricity','Plastic'], why:'Animals eat plants and hide in them. Living things depend on each other.'},
   {q:'Which habitat is very cold and icy?', v:'scene:arctic', o:['Arctic','Desert','Rainforest'], why:'The Arctic is covered in ice and snow. Animals there have thick fur or fat.'}
  ]},
 {id:'y2-lh-3', topic:'living', short:'Habitats and micro-habitats',
  nc:'Identify and name a variety of plants and animals in their habitats, including micro-habitats',
  qs:[
   {q:'Which animal might you find under this log?', v:'scene:log', o:['Woodlouse|woodlouse','Shark|shark','Giraffe|giraffe'], pic:true, why:'Woodlice like dark, damp places like under logs and stones. A log is a micro-habitat.'},
   {q:'What is a micro-habitat?', o:['A very small habitat, like under a stone','A huge ocean','A kind of food'], why:'Micro-habitats are tiny places where minibeasts live.'},
   {q:'Which animal lives in a pond?', v:'scene:pond', o:['Frog|frog','Lion|lion','Sheep|sheep'], pic:true, why:'Frogs lay their eggs in ponds and tadpoles grow there.'},
   {q:'Why do woodlice live in damp places?', v:'i:woodlouse', o:['They dry out easily in the sun','They like to swim','They eat sand'], why:'Woodlice need damp places so their bodies do not dry out.'},
   {q:'Where would you find a crab and seaweed?', v:'scene:rockpool', o:['In a rock pool','In a desert','In a tree'], why:'Rock pools at the beach are home to crabs, shrimps, seaweed and snails.'}
  ]},
 {id:'y2-lh-4', topic:'living', short:'Simple food chains',
  nc:'Describe how animals obtain their food from plants and other animals, using the idea of a simple food chain, and identify and name different sources of food',
  qs:[
   {q:'What comes at the start of this food chain?', v:'chain:leaf,caterpillar,kiki', o:['A plant','A bird','A caterpillar'], why:'Food chains start with a plant, which makes its own food using sunlight.'},
   {q:'In this food chain, what does the caterpillar eat?', v:'chain:leaf,caterpillar,kiki', o:['The leaf','The bird','Nothing'], why:'The arrow shows the leaf is eaten by the caterpillar.'},
   {q:'What do the arrows in a food chain mean?', v:'chain:clover,rabbit,lion', o:['“is eaten by”','“is bigger than”','“lives with”'], why:'Each arrow points from the food to the animal that eats it.'},
   {q:'Which is a correct food chain?', o:['Grass → cow','Cow → grass','Lion → grass'], why:'The grass is eaten by the cow, so the arrow goes from grass to cow.'},
   {q:'Where does all the energy in a food chain start?', o:['The sun','The lion','The rain'], why:'Plants use energy from sunlight to make food. Animals get energy by eating.'}
  ]},
 {id:'y2-pl-1', topic:'plants', short:'Seeds and bulbs grow into plants',
  nc:'Observe and describe how seeds and bulbs grow into mature plants',
  qs:[
   {q:'What will this seed grow into?', v:'i:seed,seedling', o:['A plant','A rock','An animal'], why:'A seed has a tiny plant inside. With water and warmth, it grows.'},
   {q:'What grows from this bulb?', v:'i:bulb', o:['A flower, like a daffodil','A tree','A bean'], why:'Bulbs store food under the ground. Daffodils and tulips grow from bulbs.'},
   {q:'What grows first when a seed starts to grow?', o:['A root','A flower','A fruit'], why:'The root grows first, down into the soil, then a shoot grows up.'},
   {q:'Put the bean plant in order. What comes first?', o:['Seed','Shoot','Plant with flowers'], why:'Seed, then shoot, then young plant, then a plant with flowers.'},
   {q:'What is a young plant just poking out of the soil called?', v:'i:seedling', o:['A seedling','A trunk','A bulb'], why:'A seedling is a baby plant.'}
  ]},
 {id:'y2-pl-2', topic:'plants', short:'What plants need to grow',
  nc:'Find out and describe how plants need water, light and a suitable temperature to grow and stay healthy',
  qs:[
   {q:'This cress was kept in the dark. What happened to it?', v:'i:cresspale', o:['It grew pale and weak','It grew green and strong','It turned into a tree'], why:'Plants need light to grow green and healthy.'},
   {q:'This cress was not given any water. What happened?', v:'i:cressdry', o:['It dried up and died','It grew taller','Nothing changed'], why:'Plants need water. Without it they wilt and die.'},
   {q:'Which three things do plants need to grow well?', o:['Water, light and warmth','Sweets, darkness and ice','Noise, sand and plastic'], why:'Plants need water, light and a suitable temperature.'},
   {q:'Where would a plant grow best?', o:['On a sunny windowsill, watered','In a dark cupboard','In the freezer'], why:'A sunny windowsill gives light and warmth, and watering gives water.'},
   {q:'Which cress plant had everything it needed?', o:['Green cress|cress','Pale cress|cresspale','Dry cress|cressdry'], pic:true, why:'The green, healthy cress had water, light and warmth.'}
  ]},
 {id:'y2-an-1', topic:'animals', short:'Animals have young that grow into adults',
  nc:'Notice that animals, including humans, have offspring which grow into adults',
  qs:[
   {q:'What does a chick grow into?', v:'i:chick', o:['A hen|hen','A frog|frog','A sheep|sheep'], pic:true, why:'A chick hatches from an egg and grows into a hen or cockerel.'},
   {q:'What is the order of a frog’s life cycle?', v:'cycle:frogspawn,tadpole,frog', o:['Frogspawn, tadpole, frog','Frog, frogspawn, tadpole','Tadpole, frog, frogspawn'], why:'Frogs lay frogspawn, which hatches into tadpoles, which grow into frogs.'},
   {q:'What does a caterpillar turn into?', v:'cycle:caterpillar,chrysalis,butterfly', o:['A butterfly|butterfly','A bee|bee','A ladybird|ladybird'], pic:true, why:'A caterpillar makes a chrysalis and changes into a butterfly.'},
   {q:'What do we call a baby sheep?', v:'i:lamb', o:['A lamb','A calf','A chick'], why:'Baby sheep are called lambs.'},
   {q:'What are the young of animals called?', o:['Offspring','Habitats','Seeds'], why:'Offspring means the babies or young of a living thing.'},
   {q:'Put a human’s life in order. What comes after child?', v:'i:baby,child,adult', o:['Adult','Baby','Egg'], why:'Baby, child, teenager, then adult.'}
  ]},
 {id:'y2-an-2', topic:'animals', short:'What animals need to survive',
  nc:'Find out about and describe the basic needs of animals, including humans, for survival (water, food and air)',
  qs:[
   {q:'Which three things do all animals need to survive?', o:['Water, food and air','Toys, sweets and TV','Sand, rocks and glass'], why:'All animals, including humans, need water, food and air.'},
   {q:'Why does a pet rabbit need fresh water every day?', v:'i:rabbit,water', o:['Animals need water to survive','Water makes fur blue','It is just for fun'], why:'Without water, animals cannot stay alive.'},
   {q:'Fish breathe under water. What do they use?', v:'i:trout', o:['Gills','Lungs only','Their tail'], why:'Fish take oxygen from the water using their gills.'},
   {q:'What do animals get from food?', o:['Energy to move and grow','Light','Rain'], why:'Food gives animals energy and helps them grow.'},
   {q:'Which of these is NOT something an animal needs to survive?', o:['A television|tv','Food|apple','Water|water'], pic:true, why:'Animals need food, water and air. A television is not a need!'}
  ]},
 {id:'y2-an-3', topic:'animals', short:'Exercise, healthy food and hygiene',
  nc:'Describe the importance for humans of exercise, eating the right amounts of different types of food, and hygiene',
  qs:[
   {q:'Why is exercise good for you?', v:'i:run', o:['It keeps your heart and muscles strong','It makes you sleepy forever','It stops you growing'], why:'Exercise makes your heart, lungs and muscles strong.'},
   {q:'Which snack is the healthiest?', o:['Apple|apple','Sweets|sweets','Chocolate|chocolate'], pic:true, why:'Fruit has vitamins and is good for you. Sweets are an occasional treat.'},
   {q:'Why should you wash your hands before eating?', v:'i:washhands,soap', o:['To wash away germs','To make them cold','To change their colour'], why:'Washing with soap removes germs that could make you ill.'},
   {q:'How often should you brush your teeth?', v:'i:toothbrush,teeth', o:['Twice a day','Once a month','Never'], why:'Brushing twice a day keeps your teeth and gums healthy.'},
   {q:'What does a balanced diet mean?', o:['Eating different kinds of food in the right amounts','Eating only sweets','Eating one food all day'], why:'A balanced diet has fruit, vegetables, protein and carbohydrates, with only a little sugar and fat.'},
   {q:'Why is sleep important?', v:'i:sleep', o:['It helps your body rest and grow','It is not important','It makes you hungry'], why:'Your body and brain rest and repair while you sleep.'}
  ]},
 {id:'y2-ma-1', topic:'materials', short:'Choosing the right material',
  nc:'Identify and compare the suitability of a variety of everyday materials, including wood, metal, plastic, glass, brick, rock, paper and cardboard for particular uses',
  qs:[
   {q:'Which material is best for a window?', o:['Glass','Brick','Cardboard'], why:'Glass is transparent, so light comes in and we can see out.'},
   {q:'Why are houses made of brick?', v:'i:brick', o:['Brick is strong and hard','Brick is see-through','Brick is soft'], why:'Bricks are strong and last a long time.'},
   {q:'Why is a teapot not made of chocolate?', v:'i:chocolate', o:['Chocolate would melt','Chocolate is see-through','Chocolate is too strong'], why:'Hot tea would melt chocolate. Teapots are made of china or metal.'},
   {q:'Which material would make the best raincoat?', o:['Plastic','Paper','Wool'], why:'Plastic is waterproof. Paper would get soggy and tear.'},
   {q:'Why are spoons often made of metal?', v:'i:spoon', o:['Metal is strong and easy to clean','Metal is soft and squashy','Metal is see-through'], why:'Metal spoons do not bend or break easily and can be washed.'}
  ]},
 {id:'y2-ma-2', topic:'materials', short:'Squash, bend, twist and stretch',
  nc:'Find out how the shapes of solid objects made from some materials can be changed by squashing, bending, twisting and stretching',
  qs:[
   {q:'What can you do to change the shape of playdough?', v:'i:playdough', o:['Squash it','Melt it in water','Nothing'], why:'Playdough can be squashed, rolled and twisted into new shapes.'},
   {q:'What happens when you stretch an elastic band and let go?', v:'i:elastic', o:['It goes back to its shape','It stays long','It turns into water'], why:'Elastic bands are stretchy and spring back.'},
   {q:'Which of these can you bend easily?', o:['Pipe cleaner|pipecleaner','Rock|rock','Brick|brick'], pic:true, why:'A pipe cleaner has bendy wire inside, so it keeps its new shape.'},
   {q:'Which material can be twisted?', o:['A pipe cleaner','A glass marble','A brick'], why:'Pipe cleaners can be twisted into shapes.'},
   {q:'What happens when you squash a sponge and let go?', v:'i:sponge', o:['It springs back','It stays flat for ever','It breaks into pieces'], why:'A sponge can be squashed but springs back when you let go.'}
  ]}
],

/* ===================== Grade 2 = Year 3 ===================== */
g2: [
 {id:'y3-pl-1', topic:'plants', short:'Jobs of roots, stem, leaves and flowers',
  nc:'Identify and describe the functions of different parts of flowering plants: roots, stem/trunk, leaves and flowers',
  qs:[
   {q:'What is the job of the part the arrow points to?', v:'plant:roots', o:['Taking in water and holding the plant in place','Making seeds','Attracting insects'], why:'Roots anchor the plant and absorb water and nutrients from the soil.'},
   {q:'What is the job of the leaves?', v:'plant:leaf', o:['Making food using sunlight','Holding the plant in the soil','Making the plant smell nice'], why:'Leaves use sunlight, air and water to make the plant’s food.'},
   {q:'What does the stem do?', v:'plant:stem', o:['Supports the plant and carries water','Makes food at night','Catches insects'], why:'The stem holds the plant up and carries water from the roots to the leaves.'},
   {q:'Why are many flowers brightly coloured?', v:'plant:flower', o:['To attract insects for pollination','To keep warm','To scare animals'], why:'Bright colours and sweet smells attract insects, which carry pollen.'},
   {q:'What does the trunk of a tree do?', v:'tree:trunk', o:['Supports the tree and carries water','Makes seeds','Catches rain'], why:'A trunk is a thick, woody stem.'}
  ]},
 {id:'y3-pl-2', topic:'plants', short:'What plants need, and how it varies',
  nc:'Explore the requirements of plants for life and growth (air, light, water, nutrients from soil, and room to grow) and how they vary from plant to plant',
  qs:[
   {q:'Which of these do plants NOT need to grow?', o:['Sugar sprinkled on them','Light','Water'], why:'Plants need air, light, water, nutrients from soil and room to grow. They make their own sugar.'},
   {q:'Seedlings planted too close together grow thin and weak. What are they missing?', o:['Room to grow','Darkness','Salt'], why:'Crowded plants compete for light, water and nutrients.'},
   {q:'A cactus grows in the desert. How is it different from other plants?', v:'scene:desert', o:['It needs very little water','It needs no light','It grows in snow'], why:'Different plants have different needs. A cactus stores water and needs very little.'},
   {q:'Where do plants get nutrients from?', v:'soil:topsoil', o:['The soil','The sky','Their flowers'], why:'Roots take in nutrients and water from the soil.'},
   {q:'A plant kept in the dark grows pale and thin. Why?', v:'i:cresspale', o:['It cannot make food without light','It has too much light','It is too cold to be green'], why:'Leaves need light to make food and to stay green.'}
  ]},
 {id:'y3-pl-3', topic:'plants', short:'How water travels in plants',
  nc:'Investigate the way in which water is transported within plants',
  qs:[
   {q:'Celery is stood in blue water. After a day, what will the leaves look like?', v:'celery:#3D8BE0', o:['They turn blue at the edges','They stay exactly the same','They fall off'], why:'Water travels up tiny tubes in the stem to the leaves, carrying the colour with it.'},
   {q:'Which part of a plant carries water up to the leaves?', o:['The stem','The petals','The seeds'], why:'The stem has tiny tubes that carry water up from the roots.'},
   {q:'Which part takes in water first?', v:'plant:roots', o:['The roots','The leaves','The flower'], why:'Roots take in water from the soil, then it travels up the stem.'},
   {q:'Why does a plant droop when it is not watered?', o:['The stem and leaves lose water and go floppy','It is tired','It is too cold'], why:'Water keeps plant cells firm. Without it, plants wilt.'}
  ]},
 {id:'y3-pl-4', topic:'plants', short:'Flowers, pollination and seeds',
  nc:'Explore the part that flowers play in the life cycle of flowering plants, including pollination, seed formation and seed dispersal',
  qs:[
   {q:'What is the bee doing?', v:'flower:bee', o:['Carrying pollen from flower to flower','Eating the petals','Planting seeds'], why:'Bees collect nectar and carry pollen between flowers. This is pollination.'},
   {q:'What happens after a flower is pollinated?', o:['It makes seeds','It turns into a leaf','It becomes a root'], why:'After pollination, seeds start to form, often inside a fruit.'},
   {q:'How is a sycamore seed spread?', v:'i:sycamore', o:['It spins on the wind','Animals eat it','It explodes'], why:'Sycamore seeds have wings and spin like helicopters.'},
   {q:'How do burrs travel to new places?', v:'i:burr', o:['They hook onto animal fur','They float on rivers','They are blown far away'], why:'Burrs have tiny hooks that stick to fur and clothes.'},
   {q:'How does a coconut travel?', v:'i:coconut', o:['It floats on the sea','It hooks onto fur','It spins'], why:'Coconuts float and can travel across the ocean to new beaches.'},
   {q:'Why is it good for seeds to be spread far away?', o:['So they have space, light and water to grow','So the parent plant can rest','So they stay dark'], why:'Seeds that land far away do not compete with the parent plant.'}
  ]},
 {id:'y3-an-1', topic:'animals', short:'Nutrition: the right food',
  nc:'Identify that animals, including humans, need the right types and amount of nutrition, and that they cannot make their own food; they get nutrition from what they eat',
  qs:[
   {q:'Why do animals need to eat?', o:['They cannot make their own food','They like to be busy','To keep their fur clean'], why:'Plants make their own food. Animals must eat to get nutrition.'},
   {q:'Which food gives you lots of energy?', o:['Rice|rice','Water|water','Broccoli|broccoli'], pic:true, why:'Carbohydrates like rice, bread and pasta give us energy.'},
   {q:'Which food helps your body grow and repair?', o:['Egg|egg','Sweets|sweets','Lemonade|fizzy'], pic:true, why:'Protein, found in eggs, fish, meat, beans and cheese, helps your body grow.'},
   {q:'Which food gives you vitamins to stay healthy?', o:['Broccoli|broccoli','Sweets|sweets','Chocolate|chocolate'], pic:true, why:'Fruit and vegetables are full of vitamins and fibre.'},
   {q:'Why should we eat only a little sugar and fat?', o:['Too much can be unhealthy','They have no taste','They make you taller'], why:'Too much sugar and fat can harm your teeth and heart.'}
  ]},
 {id:'y3-an-2', topic:'animals', short:'Skeletons and muscles',
  nc:'Identify that humans and some other animals have skeletons and muscles for support, protection and movement',
  qs:[
   {q:'Which bones is the arrow pointing to?', v:'skel:skull', o:['The skull','The ribs','The spine'], why:'The skull protects your brain.'},
   {q:'What do the ribs protect?', v:'skel:ribs', o:['Your heart and lungs','Your feet','Your teeth'], why:'The rib cage wraps around and protects your heart and lungs.'},
   {q:'Which bone is the arrow pointing to?', v:'skel:spine', o:['The spine (backbone)','The skull','A leg bone'], why:'The spine holds you up and protects the nerves running down your back.'},
   {q:'How do muscles move bones?', o:['They pull on them','They push them from inside','They melt them'], why:'Muscles can only pull. They work in pairs to bend and straighten joints.'},
   {q:'Which animal has its skeleton on the outside?', o:['Beetle|beetle','Rabbit|rabbit','Fish|trout'], pic:true, why:'Insects like beetles have an exoskeleton: a hard outer case.'},
   {q:'Which animal has no skeleton at all?', o:['Worm|worm','Frog|frog','Bird|kiki'], pic:true, why:'Worms have no bones. They use muscles to move.'}
  ]},
 {id:'y3-ro-1', topic:'rocks', short:'Compare and group rocks',
  nc:'Compare and group together different kinds of rocks on the basis of their appearance and simple physical properties',
  qs:[
   {q:'This rock is speckled and very hard. What is it?', v:'i:granite', o:['Granite','Chalk','Sandstone'], why:'Granite is hard and speckled with crystals.'},
   {q:'Which rock soaks up water?', o:['Chalk|chalk','Granite|granite','Slate|slate'], pic:true, why:'Chalk is soft and full of tiny holes, so water soaks in. It is permeable.'},
   {q:'Which rock splits into thin, flat sheets for roofs?', v:'i:slate', o:['Slate','Chalk','Sandstone'], why:'Slate splits into flat sheets and does not let water through.'},
   {q:'What does permeable mean?', o:['It lets water soak through','It is very shiny','It is magnetic'], why:'Permeable rocks, like chalk and sandstone, let water soak in.'},
   {q:'How could you test which rock is hardest?', o:['Scratch each one with a coin','Smell them','Paint them'], why:'Harder rocks are more difficult to scratch.'}
  ]},
 {id:'y3-ro-2', topic:'rocks', short:'How fossils form',
  nc:'Describe in simple terms how fossils are formed when things that have lived are trapped within rock',
  qs:[
   {q:'What is this fossil?', v:'i:ammonite', o:['An ammonite, a sea creature from long ago','A modern snail','A plant'], why:'Ammonites lived in the sea millions of years ago.'},
   {q:'What happens first when a fossil forms?', o:['A living thing dies and is buried in mud','The rock is painted','The animal climbs into a rock'], why:'It is quickly covered in mud or sand at the bottom of the sea or a lake.'},
   {q:'How long does it take for a fossil to form?', o:['Millions of years','A few days','One year'], why:'Layers of mud slowly turn to rock over millions of years.'},
   {q:'Which parts of an animal usually become fossils?', o:['Hard parts, like bones and shells','Soft fur','Eyes'], why:'Soft parts rot away. Hard bones, teeth and shells are left.'},
   {q:'Which rock often contains shell fossils?', v:'i:limestone', o:['Limestone','Granite','Slate'], why:'Limestone forms from the shells of sea creatures.'}
  ]},
 {id:'y3-ro-3', topic:'rocks', short:'Soils come from rocks and organic matter',
  nc:'Recognise that soils are made from rocks and organic matter',
  qs:[
   {q:'Which layer is the arrow pointing to?', v:'soil:topsoil', o:['Topsoil','Bedrock','Subsoil'], why:'Topsoil is the dark top layer, full of rotted plants and tiny creatures.'},
   {q:'Which layer is the arrow pointing to?', v:'soil:bedrock', o:['Bedrock','Topsoil','Compost'], why:'Bedrock is the solid rock deep under the soil.'},
   {q:'What is soil made from?', o:['Tiny bits of rock and organic matter','Melted ice','Plastic'], why:'Soil is crumbled rock mixed with rotted plants and animals, air and water.'},
   {q:'What is organic matter?', o:['Things that were once alive, like rotted leaves','Bits of glass','Metal'], why:'Rotting leaves, twigs and dead creatures become organic matter.'},
   {q:'Which soil lets water drain through fastest?', o:['Sandy soil|sandsoil','Clay soil|claysoil','Compost|compost'], pic:true, why:'Sandy soil has big grains with gaps, so water rushes through.'}
  ]},
 {id:'y3-li-1', topic:'light', short:'We need light to see',
  nc:'Recognise that they need light in order to see things and that dark is the absence of light',
  qs:[
   {q:'How can we see the teddy?', v:'see:light', o:['Light bounces off it into our eyes','Our eyes shine light at it','The teddy glows'], why:'Light from a source reflects off objects and travels into our eyes.'},
   {q:'Why can’t we see anything in a completely dark room?', v:'see:dark', o:['There is no light','Our eyes are closed','Things disappear'], why:'Dark is the absence of light. Without light, we cannot see.'},
   {q:'Which of these is a light source?', o:['Sun|sun','Mirror|mirror','Moon|moon'], pic:true, why:'The sun makes its own light. A mirror and the moon only reflect light.'},
   {q:'Which of these is NOT a light source?', o:['A mirror','A torch','A candle flame'], why:'A mirror reflects light but does not make its own.'}
  ]},
 {id:'y3-li-2', topic:'light', short:'Light reflects from surfaces',
  nc:'Notice that light is reflected from surfaces',
  qs:[
   {q:'Which surface reflects the most light?', o:['Mirror|mirror','Woolly sock|sock','Black card|blackcard'], pic:true, why:'Smooth, shiny surfaces like mirrors reflect the most light.'},
   {q:'Why do cyclists wear high-vis vests at night?', v:'i:hivis', o:['The strips reflect car headlights','They glow on their own','They keep cyclists warm'], why:'Reflective strips bounce light back to drivers.'},
   {q:'What does reflect mean?', o:['Light bounces off a surface','Light is made','Light disappears'], why:'When light hits a surface and bounces off, it is reflected.'},
   {q:'Which would be hardest to see in torch light?', o:['Black card','Foil','A mirror'], why:'Dark, dull surfaces reflect very little light.'}
  ]},
 {id:'y3-li-3', topic:'light', short:'Sunlight can be dangerous',
  nc:'Recognise that light from the sun can be dangerous and that there are ways to protect their eyes',
  qs:[
   {q:'What should you never do?', o:['Look straight at the sun','Wear a sun hat','Sit in the shade'], why:'The sun’s light is so strong it can damage your eyes forever.'},
   {q:'How can you protect your eyes on a sunny day?', o:['Sunglasses|sunglasses','Scarf|scarf','Mirror|mirror'], pic:true, why:'Sunglasses that block harmful light protect your eyes.'},
   {q:'Is it safe to look at the sun through sunglasses?', o:['No, never look at the sun','Yes, always','Only on Mondays'], why:'Even with sunglasses, looking at the sun can hurt your eyes.'},
   {q:'Which is a good way to stay safe in strong sunshine?', v:'i:sunhat', o:['Wear a hat and sit in the shade','Stare at the sky','Use a mirror to look at the sun'], why:'Hats, shade, sunglasses and sun cream all help.'}
  ]},
 {id:'y3-li-4', topic:'light', short:'How shadows form',
  nc:'Recognise that shadows are formed when the light from a light source is blocked by an opaque object',
  qs:[
   {q:'Why is there a shadow on the wall?', v:'shadow:far', o:['The object blocks the light','The torch makes dark light','The wall is dirty'], why:'An opaque object blocks light, leaving a dark shape called a shadow.'},
   {q:'What does opaque mean?', o:['Light cannot pass through it','It is see-through','It glows'], why:'Opaque materials, like wood and card, block light completely.'},
   {q:'Which material makes the darkest shadow?', o:['Cardboard','Clear glass','Clear plastic'], why:'Cardboard is opaque, so it blocks all the light.'},
   {q:'What shape is a shadow?', o:['The same shape as the object’s outline','Always a circle','Always a square'], why:'The shadow has the outline of the object that blocks the light.'}
  ]},
 {id:'y3-li-5', topic:'light', short:'Patterns in shadow size',
  nc:'Find patterns in the way that the size of shadows change',
  qs:[
   {q:'The object is close to the torch. What size is the shadow?', v:'shadow:near', o:['Big','Small','There is no shadow'], why:'The closer an object is to the light, the bigger its shadow.'},
   {q:'The object moves away from the torch, nearer the wall. What happens to the shadow?', v:'shadow:far', o:['It gets smaller','It gets bigger','It disappears'], why:'Moving the object away from the light makes the shadow smaller.'},
   {q:'When are shadows shortest on a sunny day?', o:['Around midday','Early morning','Late evening'], why:'At midday the sun is high, so shadows are short.'},
   {q:'Why are shadows long in the evening?', o:['The sun is low in the sky','The sun is very hot','It is raining'], why:'When the sun is low, light hits objects at a low angle and makes long shadows.'}
  ]},
 {id:'y3-fo-1', topic:'forces', short:'Moving on different surfaces',
  nc:'Compare how things move on different surfaces',
  qs:[
   {q:'The car rolls onto smooth wood. Will it go far?', v:'ramp:wood', o:['Yes, smooth surfaces have little friction','No, it stops at once','It goes backwards'], why:'Smooth surfaces have less friction, so the car keeps rolling.'},
   {q:'Which surface would stop the car quickest?', o:['Carpet','Ice','Smooth wood'], why:'Rough, soft surfaces like carpet create the most friction.'},
   {q:'What is friction?', o:['A force that slows things when surfaces rub','A type of magnet','A kind of light'], why:'Friction acts between surfaces that rub together.'},
   {q:'Why do trainers have bumpy soles?', v:'i:trainer', o:['To grip the ground with friction','To look nice only','To make you slide'], why:'Bumpy soles increase friction so you do not slip.'},
   {q:'Why is it easy to slip on ice?', v:'ramp:ice', o:['Ice is smooth, so there is little friction','Ice is sticky','Ice is magnetic'], why:'Ice is very smooth, so there is very little friction to grip.'}
  ]},
 {id:'y3-fo-2', topic:'forces', short:'Contact forces and magnetic forces',
  nc:'Notice that some forces need contact between two objects, but magnetic forces can act at a distance',
  qs:[
   {q:'Which force can work without touching?', o:['Magnetic force','Friction','A push with your hand'], why:'A magnet can pull a paperclip from a distance.'},
   {q:'Kicking a ball is a…', v:'i:football', o:['Contact force (a push)','Magnetic force','Force at a distance'], why:'Your foot touches the ball and pushes it.'},
   {q:'A magnet pulls a paperclip across the table without touching it. Why?', v:'i:magnet,paperclip', o:['Magnetic force acts at a distance','The table is pushing it','The paperclip is alive'], why:'Magnetic forces can act across a gap.'},
   {q:'Which of these needs contact to work?', o:['Friction','Magnetism','Neither'], why:'Friction only happens when two surfaces touch.'}
  ]},
 {id:'y3-fo-3', topic:'forces', short:'Magnetic and non-magnetic materials',
  nc:'Observe how magnets attract or repel each other and attract some materials and not others',
  qs:[
   {q:'Which will a magnet attract?', o:['Paperclip|paperclip','Pencil|pencil','Button|button'], pic:true, why:'Steel paperclips contain iron, so magnets attract them.'},
   {q:'Which of these is NOT magnetic?', o:['Foil|foil','Nail|nail','Paperclip|paperclip'], pic:true, why:'Foil is aluminium. It is a metal, but it is not magnetic.'},
   {q:'Which statement is true?', o:['Only some metals are magnetic','All metals are magnetic','Wood is magnetic'], why:'Iron and steel are magnetic. Aluminium, copper and gold are not.'},
   {q:'What does attract mean?', o:['Pull towards','Push away','Change colour'], why:'Magnets attract (pull) iron and steel towards them.'}
  ]},
 {id:'y3-fo-4', topic:'forces', short:'Magnets have two poles',
  nc:'Describe magnets as having two poles',
  qs:[
   {q:'What are the two ends of a magnet called?', v:'magnets:NS', o:['North and south poles','Top and bottom','Hot and cold ends'], why:'Every magnet has a north pole and a south pole.'},
   {q:'Where is a magnet’s pull strongest?', o:['At its poles (the ends)','In the middle','It is the same everywhere'], why:'Magnetic force is strongest at the poles.'},
   {q:'If you cut a bar magnet in half, what do you get?', o:['Two magnets, each with a north and south pole','Two non-magnets','A north magnet and a south magnet'], why:'Every magnet always has two poles.'}
  ]},
 {id:'y3-fo-5', topic:'forces', short:'Predict attract or repel',
  nc:'Predict whether two magnets will attract or repel each other, depending on which poles are facing',
  qs:[
   {q:'A north pole faces a north pole. What will happen?', v:'magnets:NN', o:['They repel (push apart)','They attract (pull together)','Nothing'], why:'Like poles repel each other.'},
   {q:'A north pole faces a south pole. What will happen?', v:'magnets:NS', o:['They attract (pull together)','They repel (push apart)','They spin'], why:'Opposite poles attract.'},
   {q:'A south pole faces a south pole. What will happen?', v:'magnets:SS', o:['They repel','They attract','They stick forever'], why:'Two south poles are alike, so they push apart.'},
   {q:'Which rule is correct?', o:['Opposite poles attract, like poles repel','Like poles attract, opposite poles repel','All poles attract'], why:'This rule works for every pair of magnets.'}
  ]}
],
/* ===================== Grade 3 = Year 4 ===================== */
g3: [
 /* ---------- Living things and their habitats ---------- */
 {id:'y4-lv-1', topic:'living', short:'Group living things in different ways',
  nc:'Recognise that living things can be grouped in a variety of ways',
  qs:[
   {q:'Which group could these animals go in?', v:'i:trout,shark', o:['Animals that live in water','Animals that fly','Animals with fur'], why:'Trout and sharks are fish, and both live in water.'},
   {q:'Which animal has a backbone?', o:['Frog|frog','Worm|worm','Ladybird|ladybird'], pic:true, why:'Frogs are vertebrates: they have a backbone. Worms and insects are invertebrates.'},
   {q:'An animal with no backbone is called…', o:['An invertebrate','A vertebrate','A mammal'], why:'Invertebrates, like insects, snails and worms, have no backbone.'},
   {q:'Which of these is a flowering plant?', o:['Daisy|daisy','Moss|moss','Pine tree|pine'], pic:true, why:'Daisies make flowers. Moss does not flower, and pine trees make cones instead of flowers.'},
   {q:'Sara sorts animals into “has legs” and “no legs”. Where does a snake go?', o:['No legs','Has legs','It cannot be sorted'], why:'Snakes have no legs, so they go in the “no legs” group.'},
   {q:'Which question would sort a cow, a parrot and a frog into two groups?', o:['Does it have feathers?','Is it alive?','Does it need food?'], why:'Only the parrot has feathers. All three are alive and need food, so those questions would not split them.'}
  ]},
 {id:'y4-lv-2', topic:'living', short:'Use classification keys',
  nc:'Explore and use classification keys to help group, identify and name a variety of living things in their local and wider environment',
  qs:[
   {q:'A key asks: “Does it have six legs?” Yes → insect. No → go on. Which animal is an insect?', o:['Ladybird|ladybird','Woodlouse|woodlouse','Worm|worm'], pic:true, why:'A ladybird has six legs, so it is an insect. A woodlouse has 14 legs.'},
   {q:'What is a classification key?', o:['A set of questions that helps you identify a living thing','A key that opens a science lab','A list of animals in alphabetical order'], why:'A key asks questions, usually yes or no, to lead you to the name of a living thing.'},
   {q:'Which is the best question to use in a key?', o:['Does it have wings?','Is it pretty?','Do I like it?'], why:'Good key questions can be answered the same way by everyone. “Pretty” is an opinion.'},
   {q:'Key: 1. Does it have a shell? Yes → snail. No → go to 2. 2. Does it have legs? Yes → beetle. No → worm. What is an animal with no shell and no legs?', o:['Worm','Snail','Beetle'], why:'No shell takes you to question 2; no legs leads to worm.'},
   {q:'Key: Does the leaf have prickly edges? Yes → holly. No → oak. Which tree has a leaf with smooth, wavy edges?', v:'i:leaf', o:['Oak','Holly','You cannot tell'], why:'Smooth edges mean “No”, which leads to oak.'},
   {q:'Why do scientists use classification keys?', o:['To identify and name living things they find','To make animals move','To count how old a tree is'], why:'Keys help scientists put a name to living things.'}
  ]},
 {id:'y4-lv-3', topic:'living', short:'Changing environments can be dangerous',
  nc:'Recognise that environments can change and that this can sometimes pose dangers to living things',
  qs:[
   {q:'A forest is cut down to build houses. What happens to the animals that lived there?', v:'i:squirrel,kiki', o:['They lose their homes and food','Nothing happens','They get more food'], why:'Animals that lived in the forest lose their habitat.'},
   {q:'Which change could harm fish in a river?', v:'i:trout', o:['Pollution from a factory','Planting trees by the bank','Cleaning litter from the water'], why:'Pollution can poison the water fish need to live.'},
   {q:'Which change is good for wildlife?', o:['Making a nature reserve','Building a car park on a meadow','Dropping litter'], why:'Nature reserves protect habitats for plants and animals.'},
   {q:'Why is plastic in the sea dangerous for sea turtles?', v:'i:tortoise', o:['They can eat it or get tangled in it','It makes the water warmer','It helps them float'], why:'Turtles can mistake plastic bags for jellyfish and swallow them.'},
   {q:'A pond dries up in a very hot summer. Which animal is in most danger?', v:'scene:pond', o:['Frog','Squirrel','Pigeon'], why:'Frogs need water to breed and keep their skin moist.'},
   {q:'Which is a natural change to an environment?', o:['A storm knocking down trees','A new road','A factory'], why:'Storms, floods and droughts are natural changes. Roads and factories are made by people.'}
  ]},
 /* ---------- Animals, including humans ---------- */
 {id:'y4-an-1', topic:'animals', short:'The digestive system',
  nc:'Describe the simple functions of the basic parts of the digestive system in humans',
  qs:[
   {q:'Which part is the arrow pointing to?', v:'gut:stomach', o:['Stomach','Oesophagus','Small intestine'], why:'The stomach is a stretchy bag that churns food and mixes it with digestive juices.'},
   {q:'Which part is the arrow pointing to?', v:'gut:oesophagus', o:['Oesophagus','Large intestine','Stomach'], why:'The oesophagus is the tube that carries food from the mouth to the stomach.'},
   {q:'Where does digestion begin?', v:'gut:mouth', o:['In the mouth','In the stomach','In the large intestine'], why:'Teeth break food up and saliva starts to soften it.'},
   {q:'Which part is the arrow pointing to?', v:'gut:small', o:['Small intestine','Stomach','Oesophagus'], why:'The small intestine is a long, coiled tube.'},
   {q:'Where do useful nutrients from food pass into the blood?', o:['Small intestine','Oesophagus','Mouth'], why:'Nutrients pass through the walls of the small intestine into the blood.'},
   {q:'What does the large intestine mainly do?', v:'gut:large', o:['Takes water back into the body','Chews food','Makes saliva'], why:'The large intestine absorbs water from what is left of the food.'}
  ]},
 {id:'y4-an-2', topic:'animals', short:'Types of teeth',
  nc:'Identify the different types of teeth in humans and their simple functions',
  qs:[
   {q:'What type of tooth is the arrow pointing to?', v:'jaw:incisor', o:['Incisor','Canine','Molar'], why:'Incisors are the flat, sharp teeth at the front.'},
   {q:'What type of tooth is the arrow pointing to?', v:'jaw:canine', o:['Canine','Incisor','Molar'], why:'Canines are the pointed teeth next to the incisors.'},
   {q:'What type of tooth is the arrow pointing to?', v:'jaw:molar', o:['Molar','Canine','Incisor'], why:'Molars are the wide, bumpy teeth at the back.'},
   {q:'Which teeth grind and chew food?', o:['Molars','Incisors','Canines'], why:'Molars have wide, flat tops for grinding.'},
   {q:'Which teeth do you use to bite into an apple?', v:'i:apple', o:['Incisors','Molars','Canines'], why:'Incisors cut and bite.'},
   {q:'Which teeth are pointed for tearing and gripping food?', o:['Canines','Molars','Incisors'], why:'Canines are pointed. Lions have very long canines for gripping meat.'}
  ]},
 {id:'y4-an-3', topic:'animals', short:'Food chains: producers, predators and prey',
  nc:'Construct and interpret a variety of food chains, identifying producers, predators and prey',
  qs:[
   {q:'Look at the food chain. What is the producer?', v:'chain:leaf,caterpillar,kiki', o:['The leaf','The caterpillar','The bird'], why:'A food chain always starts with a plant, the producer, which makes its own food using sunlight.'},
   {q:'In this food chain, which animal is the predator?', v:'chain:leaf,caterpillar,kiki', o:['The bird','The caterpillar','The leaf'], why:'The bird hunts and eats the caterpillar, so it is a predator.'},
   {q:'In this food chain, which animal is the prey?', v:'chain:clover,rabbit,badger', o:['The rabbit','The badger','The clover'], why:'The rabbit is eaten by the badger, so it is prey.'},
   {q:'What does the arrow in a food chain mean?', o:['“is eaten by”','“eats”','“lives next to”'], why:'Arrows point from the food to the animal that eats it. They show which way energy moves.'},
   {q:'Which food chain is in the right order?', o:['Grass → rabbit → fox','Fox → rabbit → grass','Rabbit → grass → fox'], why:'Chains start with the producer (grass) and end with the top predator.'},
   {q:'Why does every food chain start with a plant?', o:['Plants make their own food using sunlight','Plants are the biggest living things','Plants can move'], why:'Plants are producers. Animals cannot make their own food.'}
  ]},
 /* ---------- States of matter ---------- */
 {id:'y4-st-1', topic:'states', short:'Solids, liquids and gases',
  nc:'Compare and group materials together, according to whether they are solids, liquids or gases',
  qs:[
   {q:'Which is a solid?', o:['Ice cube|icecube','Juice|juice','Steam|steam'], pic:true, why:'An ice cube keeps its own shape, so it is a solid.'},
   {q:'Which is a liquid?', o:['Honey|honey','Brick|brick','Air in a balloon|balloon'], pic:true, why:'Honey flows and takes the shape of its container, so it is a liquid.'},
   {q:'Which is a gas?', o:['The air inside a balloon|balloon','Milk|milk','Chocolate bar|chocolate'], pic:true, why:'Air is a gas. It spreads out to fill its container.'},
   {q:'Look at the particles in the box. What state is this?', v:'particles:solid', o:['Solid','Liquid','Gas'], why:'In a solid, particles are packed tightly in rows and only wobble in place.'},
   {q:'Look at the particles in the box. What state is this?', v:'particles:gas', o:['Gas','Solid','Liquid'], why:'Gas particles are spread far apart and move quickly in all directions.'},
   {q:'Which is true of all liquids?', o:['They flow and take the shape of their container','They keep their own shape','They can be squashed easily'], why:'Liquids flow and fill the bottom of their container.'}
  ]},
 {id:'y4-st-2', topic:'states', short:'Changing state when heated or cooled',
  nc:'Observe that some materials change state when they are heated or cooled, and measure or research the temperature at which this happens in degrees Celsius (°C)',
  qs:[
   {q:'What temperature does this thermometer show?', v:'thermo:40', o:['40 °C','20 °C','60 °C'], why:'The red line stops at 40.'},
   {q:'At what temperature does pure water freeze?', o:['0 °C','100 °C','10 °C'], why:'Water freezes into ice at 0 °C.'},
   {q:'At what temperature does pure water boil?', o:['100 °C','0 °C','50 °C'], why:'Water boils at 100 °C (at sea level).'},
   {q:'An ice lolly is left in the sun. What happens?', v:'i:icecube,sun', o:['It melts from solid to liquid','It freezes','It turns into a gas straight away'], why:'Heating makes the solid ice melt into liquid.'},
   {q:'What is it called when a liquid turns into a solid?', o:['Freezing','Melting','Evaporating'], why:'Liquid water freezes into solid ice when it is cooled.'},
   {q:'Chocolate melts in your hand. What does that tell you about its melting point?', v:'i:chocolate', o:['It is lower than the temperature of your hand','It is higher than 100 °C','It is below 0 °C'], why:'Your hand is warm enough to melt chocolate, so its melting point must be lower than hand temperature.'}
  ]},
 {id:'y4-st-3', topic:'states', short:'Evaporation, condensation and the water cycle',
  nc:'Identify the part played by evaporation and condensation in the water cycle and associate the rate of evaporation with temperature',
  qs:[
   {q:'What is happening where the arrow points?', v:'wcycle:evaporation', o:['Evaporation','Condensation','Precipitation'], why:'The Sun heats the sea and water evaporates into water vapour.'},
   {q:'What is happening where the arrow points?', v:'wcycle:condensation', o:['Condensation','Evaporation','Collection'], why:'Water vapour cools high in the sky and condenses into tiny droplets that make clouds.'},
   {q:'What is happening where the arrow points?', v:'wcycle:precipitation', o:['Precipitation','Evaporation','Condensation'], why:'Precipitation is water falling from clouds as rain, snow, sleet or hail.'},
   {q:'Two puddles are the same size. On which day will a puddle dry up fastest?', o:['A hot, sunny day','A cold day','A cloudy, cold night'], why:'Water evaporates faster when it is warmer.'},
   {q:'Why do drops of water appear on a cold can taken out of the fridge?', v:'i:can', o:['Water vapour in the air condenses on the cold can','The can is leaking','Ice is melting inside the can'], why:'Water vapour cools when it touches the cold can and condenses into liquid.'},
   {q:'What is evaporation?', o:['A liquid changing into a gas','A gas changing into a liquid','A solid changing into a liquid'], why:'When water evaporates, it turns into water vapour, a gas.'}
  ]},
 /* ---------- Sound ---------- */
 {id:'y4-sd-1', topic:'sound', short:'Sounds are made by vibrations',
  nc:'Identify how sounds are made, associating some of them with something vibrating',
  qs:[
   {q:'What makes a sound when you hit a drum?', v:'i:drum', o:['The drum skin vibrates','The drum gets hot','The drum changes colour'], why:'All sounds are made by something vibrating.'},
   {q:'What vibrates when you pluck a guitar or violin?', v:'i:violin', o:['The strings','The wooden pegs only','Nothing'], why:'The strings vibrate backwards and forwards.'},
   {q:'What vibrates when you speak?', o:['Your vocal cords in your throat','Your teeth','Your hair'], why:'Air from your lungs makes your vocal cords vibrate.'},
   {q:'What does vibrate mean?', o:['Move backwards and forwards very quickly','Stay completely still','Get bigger'], why:'Vibrations are tiny, fast movements.'},
   {q:'Rice grains on a drum jump when you bang it. Why?', o:['The drum skin is vibrating','The rice is alive','The air is hot'], why:'The vibrating drum skin makes the rice bounce.'},
   {q:'You blow into a whistle. What vibrates?', v:'i:whistle', o:['The air inside it','The metal melts','Your feet'], why:'In wind instruments and whistles, the air inside vibrates.'}
  ]},
 {id:'y4-sd-2', topic:'sound', short:'Sound travels through a medium to the ear',
  nc:'Recognise that vibrations from sounds travel through a medium to the ear',
  qs:[
   {q:'How does the sound of the drum reach the ear?', v:'soundpath:near', o:['Vibrations travel through the air','Light carries it','It jumps straight into the ear without travelling'], why:'The drum makes the air vibrate, and the vibrations travel to your ear.'},
   {q:'Can sound travel through water?', o:['Yes','No','Only in the dark'], why:'Sound travels through liquids. Whales hear each other under water.'},
   {q:'Can sound travel through solids, such as a wooden table?', o:['Yes','No','Only if the table is wet'], why:'Put your ear on a table and tap it: the sound travels through the wood.'},
   {q:'Why can’t astronauts hear each other talk in space without radios?', o:['There is no air for the sound to travel through','Space is too cold','Space is too bright'], why:'Sound needs a medium. Space is almost empty, a vacuum.'},
   {q:'A string telephone works best when the string is…', o:['Pulled tight','Loose and floppy','Cut in half'], why:'The vibrations travel along a tight string to the other cup.'},
   {q:'What do we call the material that sound travels through?', o:['A medium','A magnet','A vacuum'], why:'Air, water and solids are all mediums for sound.'}
  ]},
 {id:'y4-sd-3', topic:'sound', short:'Pitch',
  nc:'Find patterns between the pitch of a sound and features of the object that produced it',
  qs:[
   {q:'Which drum makes the highest-pitched sound?', v:'drums', o:['C, the smallest','A, the biggest','They all sound the same'], why:'Smaller drums make higher-pitched sounds.'},
   {q:'Which makes a lower pitch on a guitar?', o:['A thicker, looser string','A thinner, tighter string','A shorter string'], why:'Thick, loose and long strings vibrate more slowly, making low notes.'},
   {q:'What does pitch mean?', o:['How high or low a sound is','How loud a sound is','How far a sound travels'], why:'A mouse squeak is high-pitched; a tuba note is low-pitched.'},
   {q:'Which makes a higher-pitched sound?', o:['Mouse|mouse','Tuba|tuba','Big bell|bigbell'], pic:true, why:'A mouse’s squeak is very high-pitched.'},
   {q:'You blow across the tops of these bottles. Which makes the highest note?', v:'bottles', o:['C, the bottle with the most water','A, the bottle with the least water','B'], why:'Bottle C has the shortest column of air above the water, which vibrates fastest and makes the highest note.'},
   {q:'Faster vibrations make a…', o:['Higher pitch','Lower pitch','Quieter sound'], why:'The faster something vibrates, the higher the pitch.'}
  ]},
 {id:'y4-sd-4', topic:'sound', short:'Volume',
  nc:'Find patterns between the volume of a sound and the strength of the vibrations that produced it',
  qs:[
   {q:'How can you make a drum sound louder?', v:'i:drum', o:['Hit it harder','Hit it more gently','Hold it upside down'], why:'Hitting harder makes bigger vibrations, which make a louder sound.'},
   {q:'Bigger, stronger vibrations make a sound…', o:['Louder','Quieter','Higher'], why:'Volume depends on the strength of the vibrations.'},
   {q:'What does volume mean?', o:['How loud or quiet a sound is','How high or low a sound is','How long a sound lasts'], why:'A whisper has a low volume; a shout has a high volume.'},
   {q:'Which would make the quietest sound?', o:['Tapping a triangle gently','Hitting a cymbal hard','Banging a drum hard'], why:'Gentle taps make small vibrations and quiet sounds.'},
   {q:'Which instrument measures volume in decibels?', o:['A sound meter (data logger)','A thermometer','A ruler'], why:'Sound meters measure volume in decibels (dB).'},
   {q:'You pluck a guitar string very gently. How will it sound?', v:'i:violin', o:['Quiet','Very loud','Silent forever'], why:'A gentle pluck makes small vibrations.'}
  ]},
 {id:'y4-sd-5', topic:'sound', short:'Sounds get fainter with distance',
  nc:'Recognise that sounds get fainter as the distance from the sound source increases',
  qs:[
   {q:'The ear moves further from the drum. What happens to the sound?', v:'soundpath:far', o:['It gets fainter','It gets louder','It gets higher'], why:'Sound spreads out and loses energy as it travels, so it is fainter further away.'},
   {q:'Where would a school bell sound loudest?', v:'i:bell', o:['Standing right next to it','At the far end of the field','Inside your house down the road'], why:'The closer you are to the source, the louder the sound.'},
   {q:'Why do ear defenders help workers near loud machines?', o:['They stop some vibrations reaching the ears','They make sounds higher','They make the machine quieter'], why:'Ear defenders are made of materials that absorb sound vibrations.'},
   {q:'A sound meter reads 80 dB near a speaker and 60 dB further away. What does this show?', v:'bars:Near=80,Far=60', o:['Sound gets fainter with distance','Sound gets louder with distance','Distance makes no difference'], why:'The reading is lower further away.'},
   {q:'What is the sound source?', o:['The object that makes the sound','The ear that hears it','The air between them'], why:'The source is where the vibrations start.'},
   {q:'Your friend shouts from very far away. Why is it hard to hear?', o:['The sound has spread out and become faint','Sound cannot travel through air','Your friend is whispering'], why:'Sound gets fainter the further it travels.'}
  ]},
 /* ---------- Electricity ---------- */
 {id:'y4-el-1', topic:'electricity', short:'Appliances that use electricity',
  nc:'Identify common appliances that run on electricity',
  qs:[
   {q:'Which of these needs electricity to work?', o:['Torch|torch','Spoon|spoon','Ruler|ruler'], pic:true, why:'A torch uses electricity from batteries to light its bulb.'},
   {q:'Which appliance plugs into the mains?', o:['Fridge','Bicycle','Pencil'], why:'A fridge uses mains electricity from a socket.'},
   {q:'Which uses batteries?', o:['A TV remote control','A kettle','A washing machine'], why:'Remote controls are portable, so they use batteries.'},
   {q:'Which does NOT need electricity?', o:['A skipping rope','A laptop','A hair dryer'], why:'A skipping rope works by your own movement.'},
   {q:'Why is mains electricity dangerous?', o:['It is very powerful and can kill','It is quiet','It is invisible so it cannot hurt'], why:'Mains electricity is much more powerful than batteries. Never touch sockets or wires.'},
   {q:'A lamp (light bulb) changes electricity into…', v:'i:lightbulb', o:['Light','Sound','Movement'], why:'Bulbs turn electrical energy into light.'}
  ]},
 {id:'y4-el-2', topic:'electricity', short:'Build a series circuit and name its parts',
  nc:'Construct a simple series electrical circuit, identifying and naming its basic parts, including cells, wires, bulbs, switches and buzzers',
  qs:[
   {q:'What is the part at the bottom of this circuit called?', v:'circuit:complete', o:['A cell (battery)','A switch','A buzzer'], why:'The cell pushes electricity around the circuit.'},
   {q:'What is the black part at the top of this circuit?', v:'circuit:buzzer', o:['A buzzer','A bulb','A cell'], why:'A buzzer makes a sound when electricity flows through it.'},
   {q:'Which part can turn a circuit on and off?', o:['A switch','A wire','A bulb'], why:'A switch opens and closes the circuit.'},
   {q:'What connects all the parts of a circuit together?', o:['Wires','String','Paper'], why:'Metal wires carry electricity between the parts.'},
   {q:'What is the job of the cell in a circuit?', v:'i:battery', o:['To push electricity around the circuit','To make light','To break the circuit'], why:'The cell (battery) is the energy source.'},
   {q:'What part is at the top of this circuit?', v:'circuit:complete', o:['A bulb (lamp)','A buzzer','A switch'], why:'A bulb lights up when electricity flows through it.'}
  ]},
 {id:'y4-el-3', topic:'electricity', short:'Will the bulb light? Complete circuits',
  nc:'Identify whether or not a lamp will light in a simple series circuit, based on whether or not the lamp is part of a complete loop with a battery',
  qs:[
   {q:'Will the bulb light?', v:'circuit:complete', o:['Yes, the circuit is a complete loop','No, there is a gap','No, there is no cell'], why:'Electricity can flow all the way round a complete loop.'},
   {q:'Will the bulb light?', v:'circuit:gap', o:['No, there is a gap in the circuit','Yes','Yes, but only dimly'], why:'Electricity cannot jump across a gap, so the loop is broken.'},
   {q:'Will the bulb light?', v:'circuit:nocell', o:['No, there is no cell','Yes','Yes, very brightly'], why:'Without a cell, nothing pushes electricity around the circuit.'},
   {q:'What must a circuit be for a bulb to light?', o:['A complete loop with a cell','A straight line','Very long'], why:'Electricity needs a complete path from the cell, through the bulb and back.'},
   {q:'A wire has come loose from the bulb. What happens?', o:['The bulb goes out','The bulb gets brighter','The cell gets bigger'], why:'A loose wire breaks the loop.'},
   {q:'Will the buzzer sound?', v:'circuit:buzzer', o:['Yes, it is a complete loop','No, buzzers never work','No, there is a gap'], why:'The buzzer is part of a complete loop with a cell.'}
  ]},
 {id:'y4-el-4', topic:'electricity', short:'Switches open and close a circuit',
  nc:'Recognise that a switch opens and closes a circuit and associate this with whether or not a lamp lights in a simple series circuit',
  qs:[
   {q:'The switch is open. Will the bulb light?', v:'circuit:open', o:['No, the circuit is broken','Yes','Yes, but it will buzz'], why:'An open switch makes a gap, so electricity cannot flow.'},
   {q:'The switch is closed. Will the bulb light?', v:'circuit:closed', o:['Yes, the circuit is complete','No','Only at night'], why:'A closed switch completes the loop.'},
   {q:'What does a switch do?', o:['Opens or closes a gap in a circuit','Makes the cell stronger','Changes the colour of the light'], why:'Switches let us turn things on and off safely.'},
   {q:'When you turn a light “off”, the switch is…', o:['Open','Closed','Melted'], why:'Turning off opens the switch and breaks the circuit.'},
   {q:'Why are switches useful?', o:['We can turn things on and off without taking the circuit apart','They make batteries last forever','They make wires longer'], why:'Switches control whether electricity flows.'},
   {q:'Which material should the moving part of a switch be made of?', o:['Metal','Plastic','Wood'], why:'The part that touches to close the circuit must conduct electricity, so it is metal.'}
  ]},
 {id:'y4-el-5', topic:'electricity', short:'Conductors and insulators',
  nc:'Recognise some common conductors and insulators, and associate metals with being good conductors',
  qs:[
   {q:'A coin is put in the gap. Will the bulb light?', v:'circuit:test-coin', o:['Yes, metal is a conductor','No, it is an insulator','No, coins block light'], why:'Metal coins let electricity flow through them.'},
   {q:'An eraser is put in the gap. Will the bulb light?', v:'circuit:test-eraser', o:['No, rubber is an insulator','Yes, rubber is a conductor','Yes, very brightly'], why:'Rubber does not let electricity pass through.'},
   {q:'Which material is a good electrical conductor?', o:['Metal paper clip|paperclip','Wooden block|wood','Plastic|plastic'], pic:true, why:'Metals are good conductors.'},
   {q:'Which material is an electrical insulator?', o:['Plastic','Copper','Steel'], why:'Plastic does not let electricity flow through it.'},
   {q:'Why are electric wires covered in plastic?', o:['Plastic is an insulator, which keeps us safe','Plastic makes electricity flow faster','Plastic is a conductor'], why:'The plastic coating stops electricity reaching our hands.'},
   {q:'What is an electrical conductor?', o:['A material that lets electricity flow through it','A material that stops electricity','A kind of battery'], why:'Metals such as copper, iron and aluminium are good conductors.'}
  ]}
],
/* ===================== Grade 4 = Year 5 ===================== */
g4: [
 /* ---------- Living things and their habitats ---------- */
 {id:'y5-lv-1', topic:'living', short:'Life cycles of mammals, amphibians, insects and birds',
  nc:'Describe the differences in the life cycles of a mammal, an amphibian, an insect and a bird',
  qs:[
   {q:'Which animal’s life cycle is shown?', v:'cycle:frogspawn,tadpole,frog', o:['An amphibian (frog)','A bird','A mammal'], why:'Frogs hatch from spawn as tadpoles, then change into frogs.'},
   {q:'Which animal’s life cycle is shown?', v:'cycle:eggs,caterpillar,chrysalis,butterfly', o:['An insect (butterfly)','An amphibian','A mammal'], why:'Butterflies go egg → caterpillar → chrysalis → adult.'},
   {q:'How are most mammal babies born?', o:['Born alive, then fed milk by their mother','Hatched from eggs in water','From a chrysalis'], why:'Most mammals give birth to live young and feed them milk.'},
   {q:'Which animal hatches from an egg with a hard shell?', o:['Bird|hen','Frog|frog','Rabbit|rabbit'], pic:true, why:'Birds lay eggs with hard shells, usually in a nest.'},
   {q:'What is metamorphosis?', o:['A big change in body shape during the life cycle','Laying eggs','Feeding a baby milk'], why:'Tadpoles and caterpillars go through metamorphosis.'},
   {q:'Which stage comes between a caterpillar and a butterfly?', o:['Chrysalis (pupa)','Egg','Tadpole'], why:'Inside the chrysalis, the caterpillar’s body is rebuilt into a butterfly.'}
  ]},
 {id:'y5-lv-2', topic:'living', short:'Reproduction in plants and animals',
  nc:'Describe the life process of reproduction in some plants and animals',
  qs:[
   {q:'What do bees carry from flower to flower?', v:'i:sunflower', o:['Pollen','Seeds','Water'], why:'Moving pollen between flowers is called pollination.'},
   {q:'Which part of a flowering plant becomes the seeds and fruit?', o:['The ovary, after fertilisation','The roots','The leaves'], why:'After pollination, the ovary grows into a fruit with seeds inside.'},
   {q:'A strawberry plant sends out long stems called runners that grow into new plants. This is…', o:['Asexual reproduction','Sexual reproduction','Pollination'], why:'Only one parent plant is needed, so it is asexual reproduction.'},
   {q:'How many parents are needed for sexual reproduction?', o:['Two','One','Three'], why:'Sexual reproduction joins cells from two parents.'},
   {q:'Which of these grows a new plant from a bulb?', v:'i:bulb', o:['Daffodil','Oak','Sunflower'], why:'Daffodils and tulips grow from bulbs.'},
   {q:'Why do living things reproduce?', o:['To make new living things so the species continues','To get bigger','To keep warm'], why:'Without reproduction, a species would die out.'}
  ]},
 /* ---------- Animals, including humans ---------- */
 {id:'y5-an-1', topic:'animals', short:'Changes as humans grow to old age',
  nc:'Describe the changes as humans develop to old age',
  qs:[
   {q:'Put these stages in order:', v:'cycle:baby,child,adult', o:['Baby → child → teenager → adult → old age','Child → baby → adult','Adult → teenager → baby'], why:'Humans develop through these stages in this order.'},
   {q:'About how long does a human baby grow inside its mother before birth?', o:['About 9 months','About 9 days','About 9 years'], why:'Human pregnancy (gestation) lasts about 40 weeks.'},
   {q:'At which stage do the body’s biggest changes towards being an adult happen?', o:['Puberty, during the teenage years','Old age','The first week of life'], why:'Puberty is when the body changes from a child’s to an adult’s.'},
   {q:'Which change often happens in old age?', o:['Hair may turn grey and skin gets wrinkles','Milk teeth grow','People start to crawl'], why:'Older people’s skin becomes less stretchy and hair loses colour.'},
   {q:'What can a baby NOT do yet?', v:'i:baby', o:['Walk and talk','Cry','Drink milk'], why:'Babies learn to walk and talk in their first years.'},
   {q:'Which helps people stay healthy as they get older?', o:['Exercise and a balanced diet','Eating only sweets','Never moving'], why:'Healthy habits help bones and muscles stay strong.'}
  ]},
 /* ---------- Properties and changes of materials ---------- */
 {id:'y5-mt-1', topic:'materials', short:'Compare materials by their properties',
  nc:'Compare and group together everyday materials on the basis of their properties, including their hardness, solubility, transparency, conductivity (electrical and thermal), and response to magnets',
  qs:[
   {q:'Which material is transparent?', o:['Glass|glass','Wood|wood','Brick|brick'], pic:true, why:'You can see clearly through transparent glass.'},
   {q:'Which material is attracted to a magnet?', v:'i:magnet', o:['An iron nail|nail','A copper coin|coin','A plastic button|button'], pic:true, why:'Iron and steel are magnetic. Most other metals, like copper and aluminium, are not.'},
   {q:'Which material is soluble in water?', o:['Sugar','Sand','Wood'], why:'Sugar dissolves in water; sand does not.'},
   {q:'Which is a good thermal insulator for a winter coat?', o:['Wool','Aluminium foil','Steel'], why:'Wool traps air and keeps heat in.'},
   {q:'Why are saucepans usually made of metal?', o:['Metal is a good thermal conductor','Metal is transparent','Metal is soft'], why:'Heat travels quickly through metal to cook the food.'},
   {q:'Which is the hardest material?', o:['Diamond','Chalk','Butter'], why:'Diamond is the hardest natural material.'}
  ]},
 {id:'y5-mt-2', topic:'materials', short:'Dissolving and recovering substances',
  nc:'Know that some materials will dissolve in liquid to form a solution, and describe how to recover a substance from a solution',
  qs:[
   {q:'Salt is stirred into water until it disappears. What has it made?', o:['A solution','A solid','A gas'], why:'A solution is a liquid with something dissolved in it.'},
   {q:'How can you get the salt back from salty water?', v:'separate:evaporate', o:['Evaporate the water','Use a sieve','Use a magnet'], why:'Heat makes the water evaporate, leaving the salt behind.'},
   {q:'Which will dissolve in warm water?', o:['Sugar','Sand','Gravel'], why:'Sugar is soluble.'},
   {q:'Which word describes sand in water?', o:['Insoluble','Soluble','Transparent'], why:'Sand does not dissolve, so it is insoluble.'},
   {q:'How can you make sugar dissolve faster?', o:['Use warmer water and stir','Use colder water','Leave it in big lumps'], why:'Warm water and stirring speed up dissolving.'},
   {q:'Where does the salt go when it dissolves?', o:['It breaks into pieces too tiny to see, spread through the water','It disappears forever','It sinks to the bottom as a lump'], why:'The salt is still there. You can taste it.'}
  ]},
 {id:'y5-mt-3', topic:'materials', short:'Separating mixtures',
  nc:'Use knowledge of solids, liquids and gases to decide how mixtures might be separated, including through filtering, sieving and evaporating',
  qs:[
   {q:'Which method is shown?', v:'separate:filter', o:['Filtering','Sieving','Evaporating'], why:'Filter paper lets water through but traps solid bits.'},
   {q:'Which method is shown?', v:'separate:sieve', o:['Sieving','Filtering','Evaporating'], why:'A sieve keeps the big pieces and lets small grains fall through.'},
   {q:'How would you separate marbles from sand?', o:['Use a sieve','Use a magnet','Evaporate it'], why:'The marbles are too big to pass through the holes.'},
   {q:'How would you separate sand from water?', o:['Filter it','Use a sieve with big holes','Use a magnet'], why:'Filter paper catches the sand and lets the water through.'},
   {q:'How would you separate iron filings from sand?', v:'i:magnet', o:['Use a magnet','Filter it','Evaporate it'], why:'Iron is magnetic; sand is not.'},
   {q:'Which mixture needs evaporating to separate?', o:['Salt dissolved in water','Rice and peas','Paper clips and sand'], why:'Dissolved salt passes through filters, so the water must be evaporated.'}
  ]},
 {id:'y5-mt-4', topic:'materials', short:'Choosing materials using fair tests',
  nc:'Give reasons, based on evidence from comparative and fair tests, for the particular uses of everyday materials, including metals, wood and plastic',
  qs:[
   {q:'Why is a window made of glass?', o:['It is transparent and waterproof','It is soft and bendy','It is magnetic'], why:'We need to see through windows and keep the rain out.'},
   {q:'Why are pan handles often made of plastic or wood?', o:['They are thermal insulators, so they stay cool','They conduct heat well','They are transparent'], why:'Insulating handles protect your hand from heat.'},
   {q:'In a fair test of which fabric is most waterproof, what should change?', o:['Only the type of fabric','The amount of water each time','The size of each fabric'], why:'Change one thing; keep everything else the same.'},
   {q:'Why are wires made of copper inside and plastic outside?', o:['Copper conducts electricity; plastic insulates','Copper is cheap; plastic is heavy','Both conduct'], why:'Each material is chosen for its property.'},
   {q:'Why is wood used for many chairs and tables?', o:['It is strong and hard','It is transparent','It dissolves'], why:'Wood is strong enough to hold weight.'},
   {q:'Results: cup A kept tea hot longest. What should the class conclude?', o:['Cup A’s material is the best thermal insulator they tested','Cup A is the biggest','All cups are the same'], why:'Evidence from the test supports the conclusion.'}
  ]},
 {id:'y5-mt-5', topic:'materials', short:'Reversible changes',
  nc:'Demonstrate that dissolving, mixing and changes of state are reversible changes',
  qs:[
   {q:'Which is a reversible change?', v:'i:icecube', o:['Ice melting into water','Burning paper','Baking a cake'], why:'Water can be frozen back into ice.'},
   {q:'Is dissolving salt in water reversible?', o:['Yes, by evaporating the water','No, never','Only with a magnet'], why:'Evaporation gets the salt back.'},
   {q:'Sand and water are mixed. How can you reverse this?', o:['Filter the mixture','Burn it','You cannot'], why:'Mixing is reversible; filtering separates them.'},
   {q:'Chocolate melts and then sets hard again in the fridge. This is…', v:'i:chocolate', o:['A reversible change','An irreversible change','Burning'], why:'Melting and freezing can be undone.'},
   {q:'Which is NOT a reversible change?', o:['Frying an egg','Freezing juice','Melting butter'], why:'A cooked egg cannot be uncooked.'},
   {q:'What does reversible mean?', o:['It can be changed back','It makes a new material','It cannot be undone'], why:'Reversible changes can be undone.'}
  ]},
 {id:'y5-mt-6', topic:'materials', short:'Irreversible changes make new materials',
  nc:'Explain that some changes result in the formation of new materials, and that this kind of change is not usually reversible, including changes associated with burning and the action of acid on bicarbonate of soda',
  qs:[
   {q:'Vinegar is mixed with bicarbonate of soda. It fizzes. What is made?', o:['A new gas, carbon dioxide','Nothing new','Salt water'], why:'The bubbles are a new material, carbon dioxide gas.'},
   {q:'Wood is burnt on a fire. Can you get the wood back?', o:['No, it has become ash, smoke and gases','Yes, by cooling it','Yes, by adding water'], why:'Burning makes new materials. It is irreversible.'},
   {q:'Which is an irreversible change?', o:['Baking bread','Melting ice','Dissolving sugar'], why:'Baking changes the dough into new materials.'},
   {q:'What happens to iron left outside in the rain?', o:['It rusts, making a new material','It melts','It dissolves'], why:'Rust forms when iron reacts with water and oxygen.'},
   {q:'Which sign tells you a new material might have formed?', o:['Fizzing, a colour change or a smell','The material gets wet','It stays exactly the same'], why:'These are clues that a chemical change has happened.'},
   {q:'Why must burning only be done with an adult?', o:['Fire is dangerous and can spread','Fire is cold','Burning is reversible'], why:'Always stay safe with heat and flames.'}
  ]},
 /* ---------- Earth and space ---------- */
 {id:'y5-es-1', topic:'space', short:'The Earth and planets orbit the Sun',
  nc:'Describe the movement of the Earth, and other planets, relative to the Sun in the solar system',
  qs:[
   {q:'What is at the centre of our solar system?', v:'orbit:earth', o:['The Sun','The Earth','The Moon'], why:'All the planets orbit the Sun.'},
   {q:'How long does it take the Earth to orbit the Sun once?', o:['About 365 days (one year)','24 hours','About 1 month'], why:'One orbit of the Sun takes a year.'},
   {q:'Which planet is ringed in the picture?', v:'planets:3', o:['Earth, the third planet from the Sun','Mars','Mercury'], why:'Mercury, Venus, then Earth.'},
   {q:'Which planet is the biggest?', v:'planets:5', o:['Jupiter','Mercury','Earth'], why:'Jupiter is the largest planet in our solar system.'},
   {q:'How many planets orbit our Sun?', o:['8','9','12'], why:'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.'},
   {q:'Which planet is closest to the Sun?', o:['Mercury','Neptune','Earth'], why:'Mercury is the closest and smallest planet.'}
  ]},
 {id:'y5-es-2', topic:'space', short:'The Moon orbits the Earth',
  nc:'Describe the movement of the Moon relative to the Earth',
  qs:[
   {q:'What does the Moon orbit?', v:'orbit:moon', o:['The Earth','The Sun only','Mars'], why:'The Moon travels around the Earth.'},
   {q:'About how long does the Moon take to orbit the Earth?', o:['About a month (about 27 days)','About a day','About a year'], why:'The Moon takes about 27 days to go round the Earth.'},
   {q:'Why can we see the Moon?', o:['It reflects light from the Sun','It makes its own light','It is on fire'], why:'The Moon is not a light source.'},
   {q:'Why does the Moon seem to change shape during the month?', o:['We see different amounts of its sunlit side as it orbits','It really changes shape','Clouds cover parts of it'], why:'These changing shapes are called phases.'},
   {q:'What is a natural satellite?', o:['A moon orbiting a planet','A planet orbiting a star','A spacecraft'], why:'The Moon is Earth’s natural satellite.'},
   {q:'Does the Moon always show the same face to Earth?', o:['Yes','No, it shows every side each night','Only in winter'], why:'The Moon spins once for each orbit, so we always see the same side.'}
  ]},
 {id:'y5-es-3', topic:'space', short:'The Sun, Earth and Moon are spheres',
  nc:'Describe the Sun, Earth and Moon as approximately spherical bodies',
  qs:[
   {q:'What shape is the Earth (approximately)?', o:['A sphere','A flat disc','A cube'], why:'Photos from space show the Earth is round like a ball.'},
   {q:'Which is the biggest?', o:['The Sun','The Earth','The Moon'], why:'The Sun is far bigger than the Earth; the Moon is smaller than the Earth.'},
   {q:'What is the Sun?', o:['A star','A planet','A moon'], why:'The Sun is our nearest star.'},
   {q:'What evidence shows the Earth is round?', o:['Photos from space and ships disappearing over the horizon','The ground looks flat','Clouds'], why:'Ships sink out of sight hull-first because the Earth curves.'},
   {q:'Which shape is the Moon?', o:['Approximately a sphere','A crescent shape all the time','A flat circle'], why:'We see crescents, but the Moon itself is round like a ball.'},
   {q:'Order from smallest to largest:', o:['Moon, Earth, Sun','Sun, Earth, Moon','Earth, Moon, Sun'], why:'The Moon is smallest; the Sun is largest.'}
  ]},
 {id:'y5-es-4', topic:'space', short:'Day, night and the Sun’s path',
  nc:'Use the idea of the Earth’s rotation to explain day and night and the apparent movement of the sun across the sky',
  qs:[
   {q:'Is it day or night for the person at the red dot?', v:'daynight:day', o:['Day','Night','Neither'], why:'The red dot is on the side facing the Sun.'},
   {q:'Is it day or night for the person at the red dot?', v:'daynight:night', o:['Night','Day','Midday'], why:'The red dot is on the side facing away from the Sun.'},
   {q:'Why do we have day and night?', o:['The Earth spins on its axis','The Sun goes around the Earth every day','The Moon blocks the Sun at night'], why:'As the Earth rotates, places turn towards and away from the Sun.'},
   {q:'How long does the Earth take to spin once?', o:['About 24 hours','About 365 days','About a month'], why:'One full spin is one day.'},
   {q:'Where does the Sun appear to rise?', v:'sunpath:rise', o:['In the east','In the west','In the north'], why:'The Sun appears to rise in the east and set in the west.'},
   {q:'Does the Sun really move across the sky?', o:['No, it seems to move because the Earth spins','Yes, it goes round the Earth','Yes, it bounces'], why:'The Sun’s movement is only apparent.'}
  ]},
 /* ---------- Forces ---------- */
 {id:'y5-fo-1', topic:'forces', short:'Gravity',
  nc:'Explain that unsupported objects fall towards the Earth because of the force of gravity acting between the Earth and the falling object',
  qs:[
   {q:'What force pulls the apple to the ground?', v:'forces:fall', o:['Gravity','Friction','Magnetism'], why:'Gravity pulls objects towards the centre of the Earth.'},
   {q:'Which scientist is famous for explaining gravity?', o:['Isaac Newton','Charles Darwin','Mary Anning'], why:'Newton described gravity in the 1600s.'},
   {q:'Forces are measured in…', o:['Newtons (N)','Kilograms (kg)','Metres (m)'], why:'The unit of force is named after Isaac Newton.'},
   {q:'What is weight?', o:['The force of gravity pulling on an object','How big an object is','How long an object is'], why:'Weight is a force, measured in newtons.'},
   {q:'In which direction does gravity pull on Earth?', o:['Down, towards the centre of the Earth','Up into the sky','Sideways'], why:'Everywhere on Earth, gravity pulls towards the centre.'},
   {q:'Why would you weigh less on the Moon?', o:['The Moon’s gravity is weaker','You would be smaller','There is no air'], why:'The Moon’s gravity is about one sixth of Earth’s.'}
  ]},
 {id:'y5-fo-2', topic:'forces', short:'Air resistance, water resistance and friction',
  nc:'Identify the effects of air resistance, water resistance and friction, that act between moving surfaces',
  qs:[
   {q:'Which force does the parachute use to slow down?', v:'forces:parachute', o:['Air resistance','Magnetism','Gravity'], why:'The big canopy catches lots of air.'},
   {q:'Which force acts against the boat as it moves?', v:'forces:boat', o:['Water resistance','Air resistance only','Magnetism'], why:'Water pushes against objects moving through it.'},
   {q:'Which force slows the box sliding across the carpet?', v:'forces:slide', o:['Friction','Gravity','Upthrust'], why:'Friction acts between two surfaces rubbing together.'},
   {q:'Which shape moves through water most easily?', o:['A streamlined, pointed shape','A flat square','A wide cube'], why:'Streamlined shapes reduce water resistance.'},
   {q:'Which surface has the most friction?', o:['Rough sandpaper','Smooth ice','Polished glass'], why:'Rough surfaces grip more.'},
   {q:'Why do trainers have patterned soles?', v:'i:trainer', o:['To increase friction so you do not slip','To make you faster through the air','To make them lighter'], why:'Grip comes from friction.'}
  ]},
 {id:'y5-fo-3', topic:'forces', short:'Levers, pulleys and gears',
  nc:'Recognise that some mechanisms, including levers, pulleys and gears, allow a smaller force to have a greater effect',
  qs:[
   {q:'Where should you push down to lift the box with the least force?', v:'lever:far', o:['Far from the pivot, as shown','Right next to the pivot','On the box'], why:'Pushing far from the pivot needs less force.'},
   {q:'What is the pivot of a lever?', o:['The point it turns around','The heavy load','The handle'], why:'The pivot is also called the fulcrum.'},
   {q:'What is this machine?', v:'pulley', o:['A pulley','A lever','A gear'], why:'A pulley is a wheel with a rope running around it.'},
   {q:'What is this mechanism?', v:'gears', o:['Gears','Pulleys','Levers'], why:'Gears are wheels with teeth that fit together.'},
   {q:'Which gear turns faster?', v:'gears', o:['B, the small gear','A, the big gear','Both the same'], why:'The small gear has fewer teeth, so it turns more times for each turn of the big gear.'},
   {q:'Which of these is a lever?', o:['Scissors','A ball','A bowl'], why:'Scissors are two levers joined at a pivot.'}
  ]}
],
/* ===================== Grade 5 = Year 6 ===================== */
g5: [
 /* ---------- Living things and their habitats ---------- */
 {id:'y6-lv-1', topic:'living', short:'Classifying living things into groups',
  nc:'Describe how living things are classified into broad groups according to common observable characteristics and based on similarities and differences, including micro-organisms, plants and animals',
  qs:[
   {q:'Which group has a backbone?', o:['Vertebrates','Invertebrates','Micro-organisms'], why:'Fish, amphibians, reptiles, birds and mammals are vertebrates.'},
   {q:'Which is a micro-organism?', o:['Bacteria','A mushroom on a tree','An ant'], why:'Micro-organisms are too small to see without a microscope.'},
   {q:'Which vertebrate group has dry, scaly skin and lays eggs on land?', v:'i:lizard', o:['Reptiles','Amphibians','Fish'], why:'Lizards, snakes, turtles and crocodiles are reptiles.'},
   {q:'Which animal is an arachnid?', o:['Spider (8 legs)','Ant (6 legs)','Snail'], why:'Arachnids, like spiders and scorpions, have eight legs.'},
   {q:'Who created the system of giving every living thing a two-part scientific name?', o:['Carl Linnaeus','Isaac Newton','Mary Anning'], why:'Linnaeus published his system in the 1700s. Humans are Homo sapiens.'},
   {q:'Mushrooms are not plants. Which group do they belong to?', o:['Fungi','Animals','Bacteria'], why:'Fungi cannot make their own food using sunlight.'}
  ]},
 {id:'y6-lv-2', topic:'living', short:'Reasons for classifying living things',
  nc:'Give reasons for classifying plants and animals based on specific characteristics',
  qs:[
   {q:'Why is a bat classified as a mammal, not a bird?', o:['It has fur and feeds its young milk','It can fly','It eats insects'], why:'Flying is not what decides the group; fur and milk do.'},
   {q:'Why is a whale a mammal, not a fish?', v:'i:shark', o:['It breathes air with lungs and feeds its young milk','It lives in water','It has fins'], why:'Fish breathe with gills; whales breathe air.'},
   {q:'Why is a frog an amphibian?', v:'i:frog', o:['It lives part of its life in water and part on land, and has moist skin','It has feathers','It has scales and lays eggs on land'], why:'Amphibians start life in water with gills.'},
   {q:'Ferns do not have flowers. How do they reproduce?', o:['With spores','With seeds in fruit','With pollen from bees'], why:'Ferns and mosses use spores.'},
   {q:'A penguin cannot fly. Why is it still a bird?', o:['It has feathers and lays eggs with hard shells','It swims','It is black and white'], why:'Feathers are a key characteristic of birds.'},
   {q:'Why do scientists classify living things?', o:['To organise them, study them and see how they are related','To make them grow','To give them colours'], why:'Classification helps scientists communicate clearly.'}
  ]},
 /* ---------- Animals, including humans ---------- */
 {id:'y6-an-1', topic:'animals', short:'The circulatory system',
  nc:'Identify and name the main parts of the human circulatory system, and describe the functions of the heart, blood vessels and blood',
  qs:[
   {q:'Which organ is the arrow pointing to?', v:'heart:heart', o:['Heart','Lungs','Stomach'], why:'The heart is a muscle that pumps blood around the body.'},
   {q:'Which organs is the arrow pointing to?', v:'heart:lungs', o:['Lungs','Heart','Kidneys'], why:'Blood picks up oxygen in the lungs.'},
   {q:'What do arteries do?', o:['Carry blood away from the heart','Carry blood back to the heart','Digest food'], why:'Arteries carry blood from the heart to the body.'},
   {q:'What do veins do?', o:['Carry blood back to the heart','Carry blood away from the heart','Make blood'], why:'Veins return blood to the heart.'},
   {q:'What does blood carry around the body?', o:['Oxygen, water and nutrients','Only air','Only food lumps'], why:'Blood also carries waste, like carbon dioxide, away.'},
   {q:'What are the tiny blood vessels that reach every cell called?', o:['Capillaries','Arteries','Lungs'], why:'Capillary walls are so thin that oxygen and nutrients pass through them.'}
  ]},
 {id:'y6-an-2', topic:'animals', short:'Diet, exercise, drugs and lifestyle',
  nc:'Recognise the impact of diet, exercise, drugs and lifestyle on the way their bodies function',
  qs:[
   {q:'What happens to your heart rate when you exercise?', o:['It goes up','It goes down','It stops'], why:'Muscles need more oxygen, so the heart pumps faster.'},
   {q:'Which food group mainly gives us energy?', v:'i:rice', o:['Carbohydrates','Vitamins','Water'], why:'Bread, rice and pasta are carbohydrates.'},
   {q:'Which food group helps the body grow and repair?', v:'i:egg', o:['Protein','Fat','Sugar'], why:'Eggs, fish, meat, beans and lentils contain protein.'},
   {q:'What is a balanced diet?', o:['Eating the right amounts of different food groups','Eating only fruit','Eating as much as possible'], why:'The body needs a mix of nutrients.'},
   {q:'How does smoking harm the body?', o:['It damages the lungs and heart','It makes muscles stronger','It improves breathing'], why:'Smoking is very harmful to health.'},
   {q:'Medicines are drugs that can help us. How should they be used?', o:['Only as a doctor or the label says, given by a trusted adult','As much as you like','By sharing a friend’s'], why:'Used wrongly, even medicines can be harmful.'}
  ]},
 {id:'y6-an-3', topic:'animals', short:'How nutrients and water are transported',
  nc:'Describe the ways in which nutrients and water are transported within animals, including humans',
  qs:[
   {q:'Where do nutrients from food pass into the blood?', o:['The small intestine','The lungs','The heart'], why:'Digested food passes through the walls of the small intestine.'},
   {q:'How do nutrients reach the cells in your toes?', o:['They are carried by the blood','They walk there','Through the bones'], why:'The circulatory system carries nutrients everywhere.'},
   {q:'Why do we need to drink water?', v:'i:water', o:['Our bodies use and lose water all the time','Water gives us protein','Water makes bones'], why:'We lose water when we breathe, sweat and go to the toilet.'},
   {q:'Which organ pumps blood, carrying nutrients and water, around the body?', o:['The heart','The stomach','The brain'], why:'The heart is a powerful muscle.'},
   {q:'What is the liquid part of blood called, which carries dissolved nutrients?', o:['Plasma','Saliva','Bile'], why:'Plasma is mostly water.'},
   {q:'Which organs clean the blood and remove extra water as urine?', o:['Kidneys','Lungs','Heart'], why:'Your two kidneys filter your blood.'}
  ]},
 /* ---------- Evolution and inheritance ---------- */
 {id:'y6-ev-1', topic:'evolution', short:'Fossils show how life has changed',
  nc:'Recognise that living things have changed over time and that fossils provide information about living things that inhabited the Earth millions of years ago',
  qs:[
   {q:'What is this?', v:'i:ammonite', o:['A fossil of an ammonite','A living snail','A seed'], why:'Ammonites lived in ancient seas millions of years ago.'},
   {q:'What can fossils tell us?', o:['What living things were like millions of years ago','What will happen tomorrow','The weather today'], why:'Fossils are evidence of past life.'},
   {q:'In which type of rock are fossils usually found?', v:'i:limestone', o:['Sedimentary rock','Volcanic glass','Melted lava rock'], why:'Layers of sediment bury and preserve remains.'},
   {q:'About how long ago did the last of the giant dinosaurs die out?', o:['About 66 million years ago','About 6,600 years ago','Last century'], why:'Scientists think a huge asteroid impact was a major cause.'},
   {q:'Which fossil hunter found the first complete plesiosaur in 1823?', o:['Mary Anning','Jane Goodall','Charles Darwin'], why:'Mary Anning worked on the Jurassic Coast in England.'},
   {q:'Fossils show that many species living long ago no longer exist. What is this called?', o:['Extinction','Adaptation','Pollination'], why:'An extinct species has no living members.'}
  ]},
 {id:'y6-ev-2', topic:'evolution', short:'Offspring vary and are not identical',
  nc:'Recognise that living things produce offspring of the same kind, but normally offspring vary and are not identical to their parents',
  qs:[
   {q:'What do cats produce?', o:['Kittens, which grow into cats','Puppies','Chicks'], why:'Living things produce offspring of the same kind.'},
   {q:'Why do puppies in the same litter look different from each other?', o:['They inherit different mixes of characteristics from their parents','They eat different food','They live in different houses'], why:'This natural difference is called variation.'},
   {q:'What does inherit mean?', o:['Get characteristics passed on from parents','Learn a skill at school','Buy something'], why:'Eye colour is an inherited characteristic.'},
   {q:'Which is an inherited characteristic?', o:['Natural eye colour','A scar from a fall','Speaking English'], why:'Scars and languages are not passed on through genes.'},
   {q:'What is variation?', o:['Differences between living things of the same kind','Animals moving to new homes','A type of fossil'], why:'No two people are exactly the same.'},
   {q:'Are offspring usually exactly the same as their parents?', o:['No, they are similar but not identical','Yes, always','They are a different kind of animal'], why:'Offspring vary.'}
  ]},
 {id:'y6-ev-3', topic:'evolution', short:'Adaptation and evolution',
  nc:'Identify how animals and plants are adapted to suit their environment in different ways and that adaptation may lead to evolution',
  qs:[
   {q:'How is a cactus adapted to the desert?', v:'scene:desert', o:['It stores water in its thick stem and has spines instead of leaves','It has huge thin leaves','It needs lots of rain'], why:'Spines lose less water and protect the plant.'},
   {q:'How is a polar bear adapted to the Arctic?', v:'scene:arctic', o:['Thick fur and fat keep it warm','It has thin skin','It sweats a lot'], why:'Insulation helps it survive the cold.'},
   {q:'Who wrote “On the Origin of Species” (1859), explaining evolution by natural selection?', o:['Charles Darwin','Carl Linnaeus','Galileo'], why:'Alfred Russel Wallace had similar ideas at the same time.'},
   {q:'What is natural selection?', o:['Living things best suited to their environment survive and pass on their characteristics','Choosing pets','Animals picking their food'], why:'Over many generations, this can lead to evolution.'},
   {q:'Why do many animals in snowy places have white fur?', o:['It helps them hide (camouflage)','It keeps them cool','White is heavier'], why:'Camouflage helps them hunt or avoid predators.'},
   {q:'What is evolution?', o:['The gradual change of living things over many generations','A change in one animal’s lifetime','A type of rock'], why:'Evolution happens over very long periods.'}
  ]},
 /* ---------- Light ---------- */
 {id:'y6-lt-1', topic:'light', short:'Light travels in straight lines',
  nc:'Recognise that light appears to travel in straight lines',
  qs:[
   {q:'Can the eye see the torch light?', v:'holes:line', o:['Yes, the holes are in a straight line','No','Only if the torch is red'], why:'Light travels in straight lines through the lined-up holes.'},
   {q:'One card has moved. Can the eye see the light now?', v:'holes:offset', o:['No, light cannot bend around the card','Yes','Yes, it is brighter'], why:'Light cannot go round corners on its own.'},
   {q:'How does light usually travel?', o:['In straight lines','In curves','In circles'], why:'Rays of light are drawn as straight lines with arrows.'},
   {q:'Why can’t you see around a corner?', o:['Light travels in straight lines','It is too dark','Walls make light'], why:'Light from objects round the corner cannot reach your eyes.'},
   {q:'A beam of sunlight through a window has straight edges. What does this show?', o:['Light travels in straight lines','Light is a liquid','Sunlight is solid'], why:'The edges of beams and shadows are straight.'},
   {q:'How do scientists draw light in diagrams?', o:['Straight lines with arrows (rays)','Wiggly lines','Dots only'], why:'Arrows show the direction the light travels.'}
  ]},
 {id:'y6-lt-2', topic:'light', short:'We see objects that give out or reflect light',
  nc:'Use the idea that light travels in straight lines to explain that objects are seen because they give out or reflect light into the eye',
  qs:[
   {q:'How can the eye see the teddy?', v:'see:lamp', o:['Light from the lamp reflects off the teddy into the eye','Light goes from the eye to the teddy','The teddy makes its own light'], why:'Light travels from the source, to the object, then to the eye.'},
   {q:'Which is a light source?', o:['A candle flame','A mirror','The Moon'], why:'Light sources give out their own light. Mirrors and the Moon reflect light.'},
   {q:'What does a mirror do to light?', v:'reflect', o:['Reflects it','Absorbs all of it','Makes it'], why:'Smooth, shiny surfaces reflect light well.'},
   {q:'Why can’t you see anything in a completely dark room?', o:['There is no light to reflect into your eyes','Your eyes stop working','Objects disappear'], why:'We need light to see.'},
   {q:'Which surface reflects light best?', o:['A smooth, shiny mirror','A black carpet','Rough wood'], why:'Shiny smooth surfaces reflect light clearly.'},
   {q:'Which way does light travel when you see a lit lamp?', o:['From the lamp into your eyes','From your eyes to the lamp','In both directions at once'], why:'Light enters our eyes; eyes do not send out light.'}
  ]},
 {id:'y6-lt-3', topic:'light', short:'How light travels to our eyes',
  nc:'Explain that we see things because light travels from light sources to our eyes or from light sources to objects and then to our eyes',
  qs:[
   {q:'Look at the diagram. Where does the light start?', v:'reflect', o:['At the torch','At the eye','At the mirror'], why:'The torch is the light source.'},
   {q:'Which is the correct order for seeing a book in a lit room?', o:['Lamp → book → eye','Eye → book → lamp','Book → lamp → eye'], why:'Light goes from the source to the object, then to the eye.'},
   {q:'How do we see the Moon?', o:['Sunlight reflects off the Moon into our eyes','The Moon makes light','Our eyes light it up'], why:'The Moon is not a light source.'},
   {q:'What is a periscope used for?', o:['Seeing over or around things using mirrors','Making light','Hearing sounds'], why:'Two mirrors reflect light into your eye.'},
   {q:'Which part of the eye lets light in?', v:'i:eye', o:['The pupil','The eyelash','The eyebrow'], why:'The pupil is the black hole in the middle of the eye.'},
   {q:'Light hits a mirror at an angle. How does it leave the mirror?', v:'reflect', o:['At the same angle, on the other side','Straight back the way it came','It stops'], why:'The angle of reflection equals the angle of incidence.'}
  ]},
 {id:'y6-lt-4', topic:'light', short:'Shadows have the same shape as the object',
  nc:'Use the idea that light travels in straight lines to explain why shadows have the same shape as the objects that cast them',
  qs:[
   {q:'Why does the shadow form?', v:'shadow:near', o:['The object blocks the light travelling in straight lines','The object makes darkness','The screen is dark'], why:'Light cannot bend around opaque objects.'},
   {q:'What shape is the shadow of a round plate?', o:['Round','Square','Triangular'], why:'Shadows are the same shape as the objects that cast them.'},
   {q:'Which material makes the darkest shadow?', o:['Opaque cardboard','Clear glass','Clear plastic wrap'], why:'Opaque materials block all light.'},
   {q:'The object moves closer to the torch. What happens to the shadow?', v:'shadow:near', o:['It gets bigger','It gets smaller','It disappears'], why:'Closer to the light, the object blocks more of the beam.'},
   {q:'Why can’t you see details like eyes in your shadow?', o:['A shadow is just the shape where light is blocked','Shadows are too small','Eyes do not block light'], why:'Shadows show outline, not colour or detail.'},
   {q:'Do transparent objects make shadows?', o:['Hardly any, because light passes through','Yes, very dark ones','Only at night'], why:'Transparent materials let light through.'}
  ]},
 /* ---------- Electricity ---------- */
 {id:'y6-el-1', topic:'electricity', short:'Cells, voltage, brightness and volume',
  nc:'Associate the brightness of a lamp or the volume of a buzzer with the number and voltage of cells used in the circuit',
  qs:[
   {q:'This circuit has two cells. Compared with one cell, the bulb will be…', v:'circuit:two', o:['Brighter','Dimmer','Off'], why:'More cells give a higher voltage, pushing more electricity through the bulb.'},
   {q:'What does voltage measure?', o:['The “push” of a cell or battery','The length of a wire','The colour of a bulb'], why:'Voltage is measured in volts (V).'},
   {q:'A buzzer gets a higher voltage. What happens?', o:['It gets louder','It gets quieter','It stops'], why:'More push makes the buzzer vibrate more strongly.'},
   {q:'A 1.5 V cell is replaced by a 3 V battery. The bulb will be…', o:['Brighter','Dimmer','The same'], why:'Higher voltage, brighter bulb (if the bulb can handle it).'},
   {q:'What could happen if the voltage is far too high for a bulb?', o:['The bulb could blow (break)','It glows blue','Nothing'], why:'Components have a safe voltage.'},
   {q:'What unit is voltage measured in?', o:['Volts','Newtons','Metres'], why:'Named after Alessandro Volta.'}
  ]},
 {id:'y6-el-2', topic:'electricity', short:'How components work: bulbs, buzzers and switches',
  nc:'Compare and give reasons for variations in how components function, including the brightness of bulbs, the loudness of buzzers and the on/off position of switches',
  qs:[
   {q:'Two bulbs are in a series circuit with one cell. Compared with one bulb, each bulb will be…', v:'symcircuit:twobulb', o:['Dimmer','Brighter','The same'], why:'The cell’s push is shared between two bulbs.'},
   {q:'The switch in this circuit diagram is…', v:'symcircuit:open', o:['Open, so the bulb is off','Closed, so the bulb is on','Missing'], why:'A gap in the switch symbol means it is open.'},
   {q:'How could you make a buzzer quieter?', o:['Use fewer cells','Add more cells','Close the switch'], why:'Less voltage makes a quieter sound.'},
   {q:'A bulb is dim. Which change would make it brighter?', o:['Add another cell','Add another bulb','Use a longer wire'], why:'More voltage makes bulbs brighter.'},
   {q:'Why does a bulb not light when the switch is open?', o:['The circuit is broken, so no electricity flows','The bulb is too hot','The cell is too strong'], why:'An open switch makes a gap.'},
   {q:'Which would make a motor spin faster?', o:['More cells','Fewer cells','An open switch'], why:'More voltage makes motors spin faster.'}
  ]},
 {id:'y6-el-3', topic:'electricity', short:'Circuit symbols and diagrams',
  nc:'Use recognised symbols when representing a simple circuit in a diagram',
  qs:[
   {q:'What does this symbol show?', v:'symbol:cell', o:['A cell','A bulb','A switch'], why:'A long and a short line show a cell.'},
   {q:'What does this symbol show?', v:'symbol:bulb', o:['A bulb (lamp)','A motor','A buzzer'], why:'A circle with a cross is a bulb.'},
   {q:'What does this symbol show?', v:'symbol:switchopen', o:['An open switch','A closed switch','A cell'], why:'The line is lifted, making a gap.'},
   {q:'What does this symbol show?', v:'symbol:motor', o:['A motor','A bulb','A battery'], why:'A circle with an M is a motor.'},
   {q:'Why do scientists use symbols for circuits?', o:['They are quick to draw and understood everywhere','They look prettier than pictures','They make circuits work'], why:'Symbols are the same all over the world.'},
   {q:'What does this circuit diagram show?', v:'symcircuit:basic', o:['A cell and a bulb in a complete circuit','A switch and a buzzer','Two cells and no bulb'], why:'The circuit has a cell symbol and a bulb symbol.'}
  ]}
]
};
/* topic names for each grade (practice uses the same topics as the story library where they exist) */
window.SQ_PRAC_TOPICS = {
  kg2: {plants:'Plants', animals:'Animals, including humans', materials:'Everyday materials', seasons:'Seasonal changes'},
  g1:  {living:'Living things and their habitats', plants:'Plants', animals:'Animals, including humans', materials:'Uses of everyday materials'},
  g2:  {plants:'Plants', animals:'Animals, including humans', rocks:'Rocks', light:'Light', forces:'Forces and magnets'},
  g3:  {living:'Living things and their habitats', animals:'Animals, including humans', states:'States of matter', sound:'Sound', electricity:'Electricity'},
  g4:  {living:'Living things and their habitats', animals:'Animals, including humans', materials:'Properties and changes of materials', space:'Earth and space', forces:'Forces'},
  g5:  {living:'Living things and their habitats', animals:'Animals, including humans', evolution:'Evolution and inheritance', light:'Light', electricity:'Electricity'}
};
