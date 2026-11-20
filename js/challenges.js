/* Science Quest: Science Challenges.
   quiz:    the first option is always the correct one (options are shuffled on screen)
   mystery: pictures live in img/mystery/<id>.webp (shown as "coming soon" until added)
   hands:   one practical challenge per topic */
window.SQ_CHAL = {
kg2: {
 plants: {
  quiz: [
   ['Which part of a plant holds it in the soil and takes in water?', ['The roots','The petals','The leaves'], 'Roots grow down into the soil. They hold the plant still and drink up water.'],
   ['Which tree keeps its leaves all year round?', ['A holly tree','An oak tree','A horse chestnut tree'], 'Holly is evergreen. It stays green even in winter.'],
   ['What does a deciduous tree do in autumn?', ['It drops its leaves','It grows new leaves','It turns into a pine tree'], 'Deciduous trees let their leaves fall in autumn and grow new ones in spring.'],
   ['What is the thick, woody stem of a tree called?', ['The trunk','The petal','The bud'], 'A tree’s stem is called its trunk.'],
   ['Which of these is a wild plant?', ['A dandelion growing in a field','A rose a gardener planted','A tulip in a flower bed'], 'Nobody plants dandelions. They grow by themselves, so they are wild plants.'],
   ['What are the coloured parts of a flower called?', ['Petals','Roots','Seeds'], 'Petals are the bright, coloured parts. Bees and other insects can spot them.'],
   ['Where are a plant’s seeds usually found?', ['Inside its fruit','Inside its roots','Inside its stem'], 'A fruit, like an apple or a holly berry, holds the seeds.'],
   ['Which part of a plant holds it up?', ['The stem','The petals','The seeds'], 'The stem holds the plant up, like a strong back.'],
   ['What are the thin, sharp leaves of a pine tree called?', ['Needles','Petals','Buds'], 'Pine trees have thin, pointed leaves called needles.'],
   ['Which of these trees is evergreen?', ['A pine tree','An oak tree','An apple tree'], 'Pine trees keep their needles all year, so they are evergreen.'],
   ['What do leaves use to make food for the plant?', ['Sunlight','Stones','Petals'], 'Leaves use energy from sunlight to make food for the plant.'],
   ['Which of these is a garden plant?', ['A sunflower someone planted and waters','Daisies growing in a field','A shoot growing between paving stones'], 'Garden plants are chosen, planted and looked after by people.']
  ],
  mystery: [
   {id:'kg2-plants-m1', brief:'A snowy park. A bare oak tree with no leaves stands beside a green pine tree covered in snow.', q:'It is winter. Why does one tree still have its leaves?', o:['It is an evergreen tree','Someone glued the leaves on','It is a much younger tree'], why:'Evergreen trees, like pines, keep their leaves all year. The oak is deciduous, so its branches are bare in winter.'},
   {id:'kg2-plants-m2', brief:'A child blowing a fluffy white dandelion clock. Tiny seeds with parachutes float away on the wind.', q:'What will the floating seeds do?', o:['Land and grow into new plants','Turn into butterflies','Fly back to the stem'], why:'Each tiny parachute carries a seed. When it lands on soil, it can grow into a new dandelion.'}
  ],
  hands: {id:'kg2-plants-h', title:'Plant part treasure hunt', need:['An adult to come with you','A bag or a tray','Paper and crayons'],
   steps:['Go into a garden or park with your adult.','Find a fallen leaf, a fallen twig (a little stem) and a fallen petal. Only collect things that have already fallen.','Look closely at a whole plant. Can you point to its roots, stem, leaves and flower?','Lay your treasures on paper and draw them.','Label each one: leaf, stem or petal.'],
   ask:'Which plant part was easiest to find? Which was hardest? Why do you think that was?'}
 },
 animals: {
  quiz: [
   ['Which group of animals has feathers?', ['Birds','Fish','Mammals'], 'All birds have feathers, two wings and a beak.'],
   ['Which animal has fins and breathes with gills?', ['A fish','A frog','A rabbit'], 'Fish use fins to swim and gills to breathe under water.'],
   ['Which of these is an amphibian?', ['A frog','A lizard','An otter'], 'Frogs are amphibians. They start life in water as tadpoles.'],
   ['Which of these is a reptile?', ['A lizard','A frog','A trout'], 'Lizards are reptiles. They have dry, scaly skin.'],
   ['What covers a mammal’s body?', ['Hair or fur','Feathers','Scales'], 'Mammals have hair or fur, and their babies drink milk.'],
   ['What does a herbivore eat?', ['Only plants','Only other animals','Plants and animals'], 'Herbivores, like rabbits and cows, eat only plants.'],
   ['Which animal is a carnivore?', ['A lion','A cow','A rabbit'], 'A lion eats other animals, so it is a carnivore.'],
   ['Most people eat plants and meat. What does that make them?', ['Omnivores','Herbivores','Carnivores'], 'An omnivore eats both plants and animals.'],
   ['Which sense do we use our ears for?', ['Hearing','Sight','Taste'], 'We hear sounds with our ears.'],
   ['Which body part do we taste with?', ['Our tongue','Our nose','Our elbow'], 'Our tongue tastes sweet, sour, salty and bitter food.'],
   ['Which body part joins your head to your shoulders?', ['Your neck','Your knee','Your elbow'], 'Your neck joins your head to your body.'],
   ['Which animal has smooth, damp skin?', ['A frog','A lizard','A snake'], 'Amphibians like frogs have smooth, damp skin. Reptiles have dry, scaly skin.']
  ],
  mystery: [
   {id:'kg2-animals-m1', brief:'A riverbank with a duck, a goldfish in the water, a snake on a sunny rock and a cat by a tree.', q:'Which animal in the picture is a reptile?', o:['The snake','The duck','The cat'], why:'Snakes have dry, scaly skin and hatch from eggs. They are reptiles.'},
   {id:'kg2-animals-m2', brief:'A child at the kitchen table, eyes closed, holding a slice of lemon and making a sour face.', q:'Which sense is the child using?', o:['Taste','Hearing','Sight'], why:'The child is tasting the lemon with their tongue. Lemon tastes sour!'}
  ],
  hands: {id:'kg2-animals-h', title:'Senses walk', need:['An adult to come with you','Paper and a pencil'],
   steps:['Go for a short walk with your adult.','Stop and close your eyes. What can you hear? Write or draw two sounds.','Open your eyes. Find two things that are a colour you like.','Gently touch two safe things, like a leaf and a wall. How do they feel?','Sniff a flower or a herb. Does it smell nice?'],
   ask:'Which sense told you the most on your walk? Which body part did you use for each sense?'}
 },
 materials: {
  quiz: [
   ['Which of these is a material?', ['Wood','A chair','A spoon'], 'Wood is a material. Chairs and spoons are objects made from materials.'],
   ['Which material is see-through?', ['Glass','Wood','Rock'], 'You can see through glass. That is why windows are made of glass.'],
   ['Which material is waterproof?', ['Plastic','Paper','Cotton wool'], 'Water runs off plastic. It does not soak in.'],
   ['What happens to paper when it gets wet?', ['It goes soft and soggy','It turns hard','It turns into plastic'], 'Paper soaks up water, so it goes soggy and tears easily.'],
   ['Which material is hard and heavy?', ['Rock','A sponge','Paper'], 'Rock is hard and heavy. It is hard to lift.'],
   ['Which object feels soft?', ['A sponge','A brick','A metal spoon'], 'A sponge is soft and squashy.'],
   ['Which object is bendy?', ['A plastic straw','A glass jar','A brick'], 'A plastic straw bends easily without breaking.'],
   ['Which material is often shiny?', ['Metal','Wood','Paper'], 'Metal, like a spoon or a tray, is usually shiny.'],
   ['Which of these is an object?', ['A cup','Plastic','Glass'], 'A cup is an object. It can be made from plastic, glass or another material.'],
   ['Why are raincoats made of plastic?', ['Plastic is waterproof','Plastic is see-through','Plastic is heavy'], 'Plastic keeps the rain out because it is waterproof.'],
   ['Why should we not build a den out of glass?', ['Glass can break','Glass is soft','Glass is bendy'], 'Glass is hard but it can break, which is not safe for a den.'],
   ['Which material is a wooden spoon made from?', ['Wood','Metal','Plastic'], 'A wooden spoon is made from wood.']
  ],
  mystery: [
   {id:'kg2-materials-m1', brief:'A child standing in the rain under an umbrella made from newspaper. The umbrella is soggy and torn, and the child is getting wet.', q:'Why is the child getting wet?', o:['Paper is not waterproof','The umbrella is too big','It is not raining'], why:'Paper soaks up water and tears. A good umbrella needs a waterproof material, like plastic or special fabric.'},
   {id:'kg2-materials-m2', brief:'A teapot made of chocolate, melting and drooping as hot tea is poured into it.', q:'Why is chocolate a bad material for a teapot?', o:['It melts when it gets hot','It is too heavy','It is see-through'], why:'A teapot must hold hot water. Chocolate melts, so it is the wrong material for the job.'}
  ],
  hands: {id:'kg2-materials-h', title:'Build a toy umbrella', need:['An adult to help','Small squares of paper, foil, plastic bag and fabric','A small toy, a cup of water and a spoon'],
   steps:['Hold one square of material over your toy like an umbrella.','Ask your adult to drip one spoonful of water on top.','Is your toy wet or dry? Write it down.','Dry the toy and try the next material. Use the same amount of water each time.','Choose the best material and make a proper umbrella for your toy.'],
   ask:'Which materials kept your toy dry? Which material did you choose for your umbrella, and why?'}
 },
 seasons: {
  quiz: [
   ['How many seasons are there in a year?', ['Four','Two','Seven'], 'Spring, summer, autumn and winter.'],
   ['Which season is usually the warmest?', ['Summer','Winter','Autumn'], 'Summer is the warmest season, with long, sunny days.'],
   ['Which season is usually the coldest?', ['Winter','Summer','Spring'], 'Winter is the coldest season. In some places it snows.'],
   ['In which season do many leaves turn orange and fall?', ['Autumn','Spring','Summer'], 'In autumn, deciduous trees drop their leaves.'],
   ['In which season do buds open and baby birds hatch?', ['Spring','Autumn','Winter'], 'Spring is when new leaves, flowers and baby animals appear.'],
   ['When are the days longest?', ['In summer','In winter','In autumn'], 'Summer has the longest days. It is still light at bedtime!'],
   ['When are the days shortest?', ['In winter','In summer','In spring'], 'Winter has the shortest days and the longest nights.'],
   ['Which season comes after winter?', ['Spring','Summer','Autumn'], 'Spring, summer, autumn, winter, and then spring again.'],
   ['In winter, does it get dark earlier or later than in summer?', ['Earlier','Later','At the same time'], 'In winter the sun sets earlier, so it gets dark earlier.'],
   ['What does a weathervane show?', ['Which way the wind is blowing','How hot it is','How much it rained'], 'A weathervane turns to point in the direction of the wind.'],
   ['What does a thermometer measure?', ['How hot or cold it is','How windy it is','How long the day is'], 'A thermometer shows the temperature.'],
   ['What does a rain gauge measure?', ['How much rain has fallen','How strong the wind is','How hot it is'], 'A rain gauge collects rain so you can measure how much fell.']
  ],
  mystery: [
   {id:'kg2-seasons-m1', brief:'A child in a coat and scarf kicking through orange and brown leaves under a tree that is losing its leaves.', q:'Which season is it?', o:['Autumn','Summer','Spring'], why:'Falling orange leaves and cooler weather tell us it is autumn.'},
   {id:'kg2-seasons-m2', brief:'A child in pyjamas going to bed, looking out of the window. Outside it is still bright and sunny.', q:'Which season is it most likely to be?', o:['Summer','Winter','Autumn'], why:'In summer the days are long, so it can still be light at bedtime.'}
  ],
  hands: {id:'kg2-seasons-h', title:'Make a windsock', need:['An adult to help','A paper cup or card tube','Strips of ribbon or crepe paper','Tape and string'],
   steps:['Ask your adult to cut the bottom out of the cup, so it is a tube.','Tape ribbon strips around one end.','Tie string to the other end so you can hang it up.','Hang your windsock outside where the wind can catch it.','Look at it every day for a week. Does it hang down, flap gently or stand straight out?'],
   ask:'Which day was the windiest? How could you tell by looking at your windsock?'}
 }
},
g1: {
 living: {
  quiz: [
   ['Which of these is alive?', ['A frog','A pebble','A plastic bottle'], 'A frog moves, grows, eats and breathes. It is alive.'],
   ['Which of these was once alive?', ['A fallen leaf','A metal key','A glass marble'], 'A fallen leaf was part of a living tree, but it is not alive now.'],
   ['Which of these has never been alive?', ['A pebble','A feather','A wooden spoon'], 'A pebble has never moved, grown, eaten or breathed.'],
   ['What is a habitat?', ['The place where a living thing lives','A kind of food','A baby animal'], 'A habitat gives a living thing food, water and shelter.'],
   ['Which is a micro-habitat?', ['The space under a log','The whole ocean','A big forest'], 'A micro-habitat is a very small habitat, like under a log or stone.'],
   ['What kind of place do woodlice like?', ['Dark and damp','Hot and sunny','Dry and windy'], 'Woodlice dry out easily, so they hide in dark, damp places.'],
   ['What does every food chain start with?', ['A plant','A bird','A fox'], 'Plants make their own food using sunlight, so every food chain starts with a plant.'],
   ['In "leaf → caterpillar → blue tit", what does the arrow mean?', ['Is eaten by','Is bigger than','Lives next to'], 'The leaf is eaten by the caterpillar. The caterpillar is eaten by the blue tit.'],
   ['Why do fish live in water?', ['They need water to breathe','They do not like grass','The water is warm'], 'Fish breathe with gills, which take in oxygen from water.'],
   ['Which of these do all living things do?', ['Grow','Fly','Swim'], 'All living things grow. Not all of them can fly or swim!'],
   ['A wooden table was once alive. Why?', ['Wood comes from trees','Tables can move','It is very old'], 'Wood comes from trees, and trees are living things.'],
   ['Which animal is suited to a pond habitat?', ['A frog','A squirrel','A hedgehog'], 'Frogs need water to lay their eggs, so a pond suits them.']
  ],
  mystery: [
   {id:'g1-living-m1', brief:'A rock pool with a crab, a seashell, some seaweed and a plastic bottle floating in it.', q:'Which thing in the rock pool has never been alive?', o:['The plastic bottle','The seashell','The seaweed'], why:'Plastic is made in factories and has never been alive. The shell and seaweed were made by living things.'},
   {id:'g1-living-m2', brief:'A child has lifted a stone in a garden. Woodlice are scurrying away from the bright sunlight towards the shade.', q:'Why are the woodlice moving away?', o:['They want a dark, damp place','They are chasing food','They want to sunbathe'], why:'Woodlice need dark, damp micro-habitats. Bright sun dries them out, so they hurry to the shade.'}
  ],
  hands: {id:'g1-living-h', title:'Build a minibeast hotel', need:['An adult to help','Sticks, bark, dry leaves, pine cones and stones','A shady corner of a garden or school field'],
   steps:['Choose a shady, damp spot with your adult.','Make a small pile of sticks and stones.','Tuck dry leaves, bark and pine cones into the gaps.','Leave it alone for one week.','Gently lift one piece and look. Who has moved in? Put it back gently.'],
   ask:'Which minibeasts did you find? Why do you think they chose your hotel as their habitat?'}
 },
 plants: {
  quiz: [
   ['When a seed germinates, what grows first?', ['A root, growing down','A flower','A pod'], 'The root grows first to find water and hold the plant in the soil.'],
   ['What is germination?', ['When a seed starts to grow','When a flower fades','When a plant is fully grown'], 'Germination is when a seed cracks open and starts to grow.'],
   ['What is inside a bulb?', ['Food for the new plant','Water only','Tiny animals'], 'A bulb is like a lunchbox full of food for the new plant.'],
   ['Which plant grows from a bulb?', ['A daffodil','A bean','An apple tree'], 'Daffodils, tulips and onions grow from bulbs.'],
   ['What does mature mean?', ['Fully grown','Very small','Just planted'], 'A mature plant is fully grown and can make flowers and seeds.'],
   ['What do plants need to grow and stay healthy?', ['Water, light and the right temperature','Only sweets and toys','Only darkness'], 'Take one of these away and the plant cannot grow well.'],
   ['Cress grown in a dark cupboard grows tall but...', ['Pale and yellow','Bright red','Blue'], 'Without light, plants cannot stay green and healthy.'],
   ['Cress seeds with no water at all...', ['Do not grow','Grow very fast','Turn into beans'], 'Seeds need water to germinate.'],
   ['What is inside a bean pod?', ['Seeds','Bulbs','Leaves'], 'The beans inside the pod are seeds that can grow into new plants.'],
   ['In a fair test, how many things do you change?', ['Just one','All of them','None'], 'Change just one thing, so you know what made the difference.'],
   ['Cress kept in a cold fridge...', ['Grows very little','Grows faster','Turns into ice'], 'Most plants need warmth to grow well. The fridge is too cold.'],
   ['What do bean flowers turn into?', ['Pods with seeds','Bulbs','Roots'], 'After the flowers, long green pods grow with seeds inside.']
  ],
  mystery: [
   {id:'g1-plants-m1', brief:'Two pots of cress side by side. One is bright green and bushy. The other is tall, thin and pale yellow, next to an open cupboard door.', q:'Why is the cress in one pot pale yellow?', o:['It was kept in the dark','It had too much water','It was too green'], why:'Plants need light to make food and stay green. The pale cress grew in a dark cupboard.'},
   {id:'g1-plants-m2', brief:'A droopy, wilting plant in a pot with dry, cracked soil on a sunny windowsill, next to a full watering can.', q:'What does this plant need most?', o:['Water','More darkness','A bigger pot of stones'], why:'Dry, cracked soil and drooping leaves show the plant is thirsty. It needs water.'}
  ],
  hands: {id:'g1-plants-h', title:'Grow your initial in cress', need:['An adult to help','A shallow tray or plate','Cotton wool or kitchen paper','Cress seeds and water'],
   steps:['Lay damp cotton wool or kitchen paper on the tray.','Sprinkle cress seeds in the shape of the first letter of your name.','Put the tray on a light, warm windowsill.','Keep the cotton wool damp every day.','Draw your letter each day to show how it grows.'],
   ask:'How many days until the seeds germinated? What would happen if you put the tray in a dark cupboard?'}
 },
 animals: {
  quiz: [
   ['What does offspring mean?', ['The babies or young of an animal','A kind of food','A fully grown animal'], 'Lambs, chicks and babies are all offspring.'],
   ['What does a tadpole grow into?', ['A frog','A fish','A duck'], 'Tadpoles grow legs, lose their tails and become frogs.'],
   ['What does a caterpillar grow into?', ['A butterfly','A spider','A bird'], 'A caterpillar makes a chrysalis and comes out as a butterfly.'],
   ['What does a lamb grow into?', ['A sheep','A goat','A cow'], 'A lamb is a baby sheep.'],
   ['Which three things do all animals need to survive?', ['Water, food and air','Toys, sweets and a bed','Shoes, coats and hats'], 'Every animal, including humans, needs water, food and air.'],
   ['What does exercise make strong?', ['Your heart and muscles','Your hair','Your clothes'], 'Exercise makes your heart and muscles work hard and grow strong.'],
   ['Why do we wash our hands with soap?', ['To get rid of germs','To make them smell sweet','To make them grow'], 'Soap washes away germs that could make us ill.'],
   ['How long should you brush your teeth?', ['About two minutes','Two seconds','Two hours'], 'Brushing for two minutes helps keep teeth clean and healthy.'],
   ['Which is the healthiest snack?', ['An apple','A bag of sweets','A fizzy drink'], 'Fruit and vegetables help us stay healthy. Sweets are a treat, just sometimes.'],
   ['Baby, toddler, child... what comes next?', ['Teenager','Baby','Toddler'], 'Humans grow from baby to toddler to child to teenager to adult.'],
   ['What does a chick hatch from?', ['An egg','A seed','A pod'], 'A chick hatches out of an egg.'],
   ['Why should you drink water when you exercise?', ['Your body loses water when you get hot','Water makes you run faster','So you can float'], 'We lose water when we get hot and sweat, so we need to drink more.']
  ],
  mystery: [
   {id:'g1-animals-m1', brief:'A pond with tadpoles in the water. Some tadpoles have little back legs, and one young frog with a short tail is climbing onto a lily pad.', q:'What is happening to the tadpoles?', o:['They are growing into frogs','They are turning into fish','They are getting smaller'], why:'As tadpoles grow, they grow legs and lose their tails. They become adult frogs.'},
   {id:'g1-animals-m2', brief:'A child at the finish line of a race with a red face, sweaty forehead and hand on chest, drinking from a water bottle.', q:'Why is the child’s heart beating fast?', o:['Exercise makes the heart work hard','The water is too cold','The child is asleep'], why:'When we exercise, our heart pumps faster to send blood around the body. That makes it stronger.'}
  ],
  hands: {id:'g1-animals-h', title:'The heartbeat challenge', need:['An adult to help','A timer or clock','Paper and a pencil'],
   steps:['Sit still for one minute. Put your hand on your chest. Does your heart feel fast or slow?','Now do star jumps for 30 seconds.','Put your hand on your chest again. What do you notice?','Rest for two minutes, then check again.','Have a drink of water when you finish.'],
   ask:'What happened to your heartbeat after exercise? What happened after you rested? Why do you think that is?'}
 },
 materials: {
  quiz: [
   ['Which material is best for a window?', ['Glass','Wood','Cardboard'], 'Glass is see-through, so light can come in and we can see out.'],
   ['What happens to cardboard left out in the rain?', ['It goes soggy','It goes shiny','It turns into brick'], 'Cardboard soaks up water, so it is not good for outdoor walls.'],
   ['What are bricks made from?', ['Clay that is baked hard','Paper','Plastic'], 'Bricks are made from clay, baked until it is hard and strong.'],
   ['Which material are door hinges usually made from?', ['Metal','Paper','Jelly'], 'Metal is strong and hard, so hinges can open and close many times.'],
   ['Jay squashes a ball of playdough flat. What is it now?', ['Still playdough, in a new shape','Plastic','Metal'], 'Squashing changes the shape, not the material.'],
   ['What happens when you stretch an elastic band and let go?', ['It springs back','It stays long','It snaps into two'], 'Elastic bands are stretchy and go back to their shape.'],
   ['Which can you bend easily with your hands?', ['A pipe cleaner','A metal spoon','A brick'], 'Pipe cleaners bend easily. Metal spoons and bricks are too stiff.'],
   ['What did Charles Macintosh help to invent?', ['Waterproof coats','Bicycles','Telephones'], 'He put rubber between two pieces of cloth to make waterproof coats.'],
   ['What does twisting mean?', ['Turning the ends in opposite directions','Pressing flat','Pulling longer'], 'You twist two pipe cleaners by turning them round each other.'],
   ['Why is plastic good for a gutter?', ['It is waterproof and light','It is see-through','It soaks up water'], 'A gutter carries rainwater, so it must be waterproof.'],
   ['Why should a paper sign go inside, not outside?', ['Rain would make it soggy','Paper is too heavy','Paper is see-through'], 'Paper soaks up water, so outside it would be ruined.'],
   ['What does a sponge do after you squeeze it?', ['Springs back to its shape','Stays flat for ever','Turns into water'], 'A sponge is squashy, but it springs back when you let go.']
  ],
  mystery: [
   {id:'g1-materials-m1', brief:'A child trying to sit on a chair made of wobbly green jelly. The jelly chair is collapsing.', q:'Why is jelly a bad material for a chair?', o:['It is not strong or stiff enough','It is too heavy','It is see-through'], why:'A chair must hold your weight. Jelly squashes too easily. Wood, metal or plastic would work much better.'},
   {id:'g1-materials-m2', brief:'Two children at a table. One has squashed a ball of playdough flat. The other has stretched an elastic band, which has sprung back to a circle.', q:'Which object kept its new shape?', o:['The playdough','The elastic band','Neither of them'], why:'Playdough stays in its new shape. The elastic band springs back. Different materials behave in different ways.'}
  ],
  hands: {id:'g1-materials-h', title:'Fold it strong!', need:['An adult to help','Sheets of paper','Two piles of books the same height','Coins'],
   steps:['Make a bridge by laying a flat sheet of paper across the two piles of books.','Put coins on it, one at a time. How many before it falls?','Now fold a new sheet into a zigzag, like a fan.','Make the bridge again and add coins. How many this time?','Keep everything else the same so it is a fair test.'],
   ask:'Which bridge held more coins? How did bending the paper into a new shape change how strong it was?'}
 }
}
};
