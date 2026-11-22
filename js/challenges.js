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
,
g2: {
 plants: {
  quiz: [
   ['Which part of a flowering plant takes in water from the soil?', ['The roots','The petals','The leaves'], 'Roots soak up water and nutrients from the soil and hold the plant firmly in the ground.'],
   ['What job does the stem do?', ['Holds the plant up and carries water to the leaves','Makes the seeds','Attracts bees'], 'The stem is like a support and a set of tiny pipes, carrying water up from the roots.'],
   ['Where does a plant make its food?', ['In its leaves','In its roots','In its petals'], 'Leaves use sunlight, air and water to make food for the plant.'],
   ['Which of these do plants need to grow well?', ['Light, water, air, nutrients and room to grow','Only water','Darkness and sugar'], 'Plants need all of these. If one is missing, the plant will not grow well.'],
   ['A plant is left in a dark cupboard. What will happen?', ['It will turn pale and weak','It will grow faster','It will grow flowers'], 'Without light, leaves cannot make food. The plant grows thin, pale and weak.'],
   ['What does pollination mean?', ['Moving pollen from one flower to another','Watering a plant','Cutting off dead leaves'], 'Insects and the wind carry pollen between flowers. This helps flowers make seeds.'],
   ['Why do many flowers have bright petals and a sweet smell?', ['To attract insects like bees','To scare away birds','To keep the rain off'], 'Bright colours and nectar invite insects, which carry pollen as they visit.'],
   ['What grows from a pollinated flower?', ['Seeds, often inside a fruit','More roots','A new stem'], 'After pollination, the flower makes seeds. A fruit often grows around them.'],
   ['How is a sycamore seed spread?', ['It spins away on the wind','A squirrel buries it','It floats on the sea'], 'Its wing-shaped seed spins like a helicopter, carrying it away from the parent tree.'],
   ['How do burrs get spread to new places?', ['Their hooks stick to animal fur','They explode','They are blown by the wind'], 'Burrs hook onto fur or clothes and drop off somewhere new.'],
   ['Why is it good for seeds to travel away from the parent plant?', ['So they have enough light, water and space','So the parent can rest','So they stay cold'], 'Seeds that land far away do not have to compete with the parent plant.'],
   ['Celery is stood in coloured water. What happens to its leaves?', ['They change colour','They fall off','Nothing at all'], 'The stem carries the coloured water up to the leaves, showing how water travels in a plant.']
  ],
  mystery: [
   {id:'g2-plants-m1', brief:'Two pots of the same kind of bean plant on a windowsill. One is tall, green and healthy. The other, which has a label saying "no water", is drooping and brown.', q:'Why is one plant drooping?', o:['It has not had any water','It has had too much light','It is a different plant'], why:'Plants need water to stay firm and healthy. Without it, the leaves droop and dry out. It is a fair test because only the water was changed.'},
   {id:'g2-plants-m2', brief:'A white flower in a glass of blue water. The petals have blue streaks in them. A child is looking closely with a magnifying glass.', q:'How did the blue get into the petals?', o:['The stem carried the coloured water up','Someone painted the petals','The flower was blue all along'], why:'Water travels up the stem through tiny tubes to every part of the plant, including the petals.'}
  ],
  hands: {id:'g2-plants-h', title:'Watch water travel', need:['An adult to help','A stick of celery with leaves, or a white flower','A glass of water','Food colouring'],
   steps:['Put a few drops of food colouring into a glass of water.','Ask your adult to trim the bottom of the celery stalk.','Stand the celery in the coloured water.','Check it after 1 hour, 1 day and 2 days. Draw what you see.','Ask your adult to cut across the stalk. Look for coloured dots.'],
   ask:'Where did the colour go? What does this tell you about how water moves through a plant?'}
 },
 animals: {
  quiz: [
   ['Why must animals eat food?', ['They cannot make their own food','They like being full','To stay quiet'], 'Plants make their own food, but animals cannot. They must eat to get nutrition.'],
   ['What is a herbivore?', ['An animal that eats only plants','An animal that eats only meat','An animal that eats nothing'], 'Cows, giraffes and tortoises are herbivores.'],
   ['What is a carnivore?', ['An animal that eats other animals','An animal that eats only plants','An animal with no bones'], 'Lions and sharks are carnivores.'],
   ['Humans eat plants and animals. What are we?', ['Omnivores','Herbivores','Carnivores'], 'Omnivores eat both plants and animals.'],
   ['Which foods give us lots of energy?', ['Bread, rice and pasta','Sweets only','Water'], 'Carbohydrates like bread and rice give us energy.'],
   ['What does a balanced diet mean?', ['Eating the right types of food in the right amounts','Eating only fruit','Eating as much as possible'], 'A balanced diet has a mix of foods, with only a little fat and sugar.'],
   ['What are three jobs of a skeleton?', ['Support, protection and movement','Breathing, eating and sleeping','Seeing, hearing and smelling'], 'Bones hold us up, protect our insides and work with muscles to help us move.'],
   ['Which bone protects your brain?', ['The skull','The ribs','The spine'], 'The skull is a hard case around your brain.'],
   ['What do your ribs protect?', ['Your heart and lungs','Your feet','Your teeth'], 'The rib cage wraps around your heart and lungs.'],
   ['How do muscles move bones?', ['They pull on them','They push them from inside','They melt them'], 'Muscles can only pull. They work in pairs to move bones back and forth.'],
   ['What is an exoskeleton?', ['A hard skeleton on the outside of an animal','A skeleton made of jelly','A broken bone'], 'Beetles and crabs have an exoskeleton, like armour on the outside.'],
   ['Which animal has no skeleton at all?', ['A worm','A frog','A fish'], 'Worms have no bones. Their muscles and the fluid inside them help them move.']
  ],
  mystery: [
   {id:'g2-animals-m1', brief:'A picnic blanket in a park with two lunchboxes. One is full of crisps, sweets and fizzy drinks. The other has a sandwich, an apple, carrot sticks, cheese and water.', q:'Which lunchbox is more balanced?', o:['The one with the sandwich, fruit and vegetables','The one with crisps and sweets','They are both the same'], why:'A balanced lunch has foods for energy, foods for growing, and fruit and vegetables. Sweets and crisps are fine as a small treat.'},
   {id:'g2-animals-m2', brief:'A child flexing their arm. A see-through diagram shows the bones of the arm and the muscle on top bunching up.', q:'What is the muscle doing to lift the arm?', o:['Pulling on the bone','Pushing the bone away','Turning into bone'], why:'When a muscle gets shorter, it pulls on the bone it is joined to, and the arm bends at the elbow.'}
  ],
  hands: {id:'g2-animals-h', title:'Food detective', need:['An adult to help','Food packets from your kitchen','Paper and a pencil'],
   steps:['Draw a plate and divide it into 4 parts.','Label the parts: energy foods, growing foods, fruit and vegetables, and treats.','Look at the food in your kitchen. Draw each one in the right part.','Plan one balanced dinner for your family.','Find a pet or an animal you like. Is it a herbivore, carnivore or omnivore?'],
   ask:'Was your dinner balanced? Which part of the plate was the biggest, and why?'}
 },
 rocks: {
  quiz: [
   ['What is soil made from?', ['Tiny pieces of rock mixed with things that were once alive','Only sand','Melted ice'], 'Soil is crumbled rock mixed with organic matter, air and water.'],
   ['What is the dark top layer of soil called?', ['Topsoil','Bedrock','Subsoil'], 'Topsoil is dark because it is full of rotted leaves and roots.'],
   ['What breaks big rocks into small pieces over many years?', ['Rain, ice, wind and plant roots','Magnets','Sunglasses'], 'This slow breaking down of rock is called weathering.'],
   ['Water freezes inside a crack in a rock. What happens?', ['The ice pushes the crack wider','The rock melts','The crack closes'], 'Ice takes up more space than water, so it pushes the crack apart.'],
   ['What is a fossil?', ['The remains or shape of a living thing from long ago, kept in rock','A shiny new pebble','A kind of soil'], 'Fossils show us plants and animals that lived millions of years ago.'],
   ['How does a fossil form?', ['A living thing is buried in mud that slowly turns to rock','It is carved by people','It falls from the sky'], 'Layers of mud cover the remains and, over a very long time, they become rock.'],
   ['Why is slate good for roofs?', ['It splits into thin sheets and water can’t soak through','It is soft and crumbly','It is very colourful'], 'Thin, flat slate tiles keep the rain out.'],
   ['Why is granite used for steps?', ['It is very hard','It soaks up water','It is light and fluffy'], 'Granite is tough, so it lasts even when lots of feet walk on it.'],
   ['Which rock often contains fossil shells?', ['Limestone','Granite','Slate'], 'Limestone often forms from the shells of sea creatures.'],
   ['Which soil lets water through fastest?', ['Sandy soil','Clay soil','Compost'], 'Sandy soil has big gaps between its grains, so water rushes through.'],
   ['Why do gardeners add compost to soil?', ['It holds water and adds nutrients','It makes the soil hard','It keeps worms away'], 'Compost is organic matter. It feeds plants and holds the right amount of water.'],
   ['A rock soaks up water when you drip water on it. Which could it be?', ['Sandstone','Granite','Slate'], 'Sandstone, chalk and limestone soak up water. Granite and slate do not.']
  ],
  mystery: [
   {id:'g2-rocks-m1', brief:'A grey cliff on a beach with a curly spiral shell shape in the rock. A child is pointing at it, and the sea is in the background.', q:'How did the shell shape get inside the rock?', o:['A sea creature was buried long ago and became a fossil','Someone carved it last week','The wind blew it there'], why:'Long ago, a sea creature died and was buried in mud. Over millions of years, the mud turned to rock and kept its shape as a fossil.'},
   {id:'g2-rocks-m2', brief:'An old stone garden wall with crumbly, rounded corners and a small plant growing out of a crack. A newer wall next to it has sharp, neat corners.', q:'Why is the old wall so crumbly?', o:['Rain, ice and roots have slowly weathered it','It was built from sand','Someone hit it with a hammer'], why:'Over many years, water, ice and plant roots slowly break rock into smaller pieces. This is called weathering.'}
  ],
  hands: {id:'g2-rocks-h', title:'Make a soil shaker', need:['An adult to help','A clear jar with a lid','A trowel of garden soil','Water'],
   steps:['Fill the jar one-third full with soil.','Add water until the jar is nearly full, then screw on the lid tightly.','Shake it hard for one minute.','Leave it still for a whole day.','Draw the layers you see. Look for anything floating on top.'],
   ask:'What sank to the bottom first? What floated? What does this tell you about what soil is made of?'}
 },
 light: {
  quiz: [
   ['What do we need in order to see?', ['Light','Sound','Wind'], 'Our eyes need light. Without light, we cannot see anything.'],
   ['What is dark?', ['When there is no light','A colour of paint','A kind of shadow puppet'], 'Dark is the absence of light.'],
   ['Which of these is a light source?', ['The sun','The moon','A mirror'], 'The sun makes its own light. The moon and mirrors only reflect light.'],
   ['How do we see a teddy bear?', ['Light bounces off it into our eyes','Light comes out of our eyes','The teddy glows'], 'Light reflects off objects and travels into our eyes.'],
   ['Which surface reflects the most light?', ['A smooth, shiny mirror','A woolly jumper','Black card'], 'Smooth, shiny surfaces are the best reflectors.'],
   ['Why do cyclists wear reflective strips?', ['So drivers can see them in headlights','To keep warm','To make them faster'], 'Reflective strips bounce light back from car headlights.'],
   ['Why must you never look straight at the sun?', ['Its light can damage your eyes','It will make you sneeze','It is too far away'], 'Sunlight is so strong that it can hurt your eyes forever, even with sunglasses.'],
   ['How is a shadow made?', ['An object blocks the light','Light shines through glass','The sun goes to sleep'], 'Light travels in straight lines. When something blocks it, a shadow forms behind.'],
   ['Which material lets light through, so it makes almost no shadow?', ['Clear glass','Wood','Cardboard'], 'Transparent materials let light pass through.'],
   ['You move a torch closer to a puppet. What happens to the shadow?', ['It gets bigger','It gets smaller','It disappears'], 'The closer the object is to the light, the bigger its shadow.'],
   ['When are shadows shortest on a sunny day?', ['Around midday','Early morning','Late evening'], 'At midday, the sun is high in the sky, so shadows are short.'],
   ['What is inside a periscope?', ['Two mirrors','A torch','A magnet'], 'Two tilted mirrors reflect light, so you can see over things.']
  ],
  mystery: [
   {id:'g2-light-m1', brief:'A sunny playground at three different times: morning, midday and evening. A child stands in the same spot each time, with a long shadow, then a short shadow, then a long shadow pointing the other way.', q:'Why does the child’s shadow change during the day?', o:['The sun moves across the sky','The child grows and shrinks','The ground moves'], why:'As the sun appears to move across the sky, the angle of light changes. Low sun makes long shadows; high sun at midday makes short ones.'},
   {id:'g2-light-m2', brief:'A dark road at night. A cyclist in dark clothes is hard to see, while another cyclist in a high-vis vest with reflective strips shines brightly in a car’s headlights.', q:'Why can the driver see one cyclist much better?', o:['The reflective strips bounce light back','That cyclist is closer to the moon','The vest makes its own light'], why:'The strips reflect the car’s headlights back towards the driver. They do not make their own light.'}
  ],
  hands: {id:'g2-light-h', title:'Shadow puppet show', need:['An adult to help','Card, scissors and lolly sticks','Sticky tape','A torch and a plain wall'],
   steps:['Draw an animal on card and cut it out.','Tape it to a lolly stick.','Make the room dark and shine the torch at the wall.','Hold the puppet between the torch and the wall.','Move the puppet closer to the torch, then further away. Watch the shadow.'],
   ask:'When was the shadow biggest? Why do you think the shadow is the same shape as your puppet?'}
 },
 forces: {
  quiz: [
   ['What is a force?', ['A push or a pull','A kind of light','A type of rock'], 'Forces are pushes and pulls. They can start, stop, speed up, slow down or turn things.'],
   ['Opening a drawer is a…', ['Pull','Push','Neither'], 'You pull a drawer towards you to open it.'],
   ['What is friction?', ['A force that slows things when surfaces rub together','A kind of magnet','A fast wind'], 'Friction acts when two surfaces touch and rub.'],
   ['On which surface will a toy car roll furthest?', ['A smooth wooden floor','Thick carpet','Bubble wrap'], 'Smooth surfaces make less friction, so the car keeps rolling.'],
   ['Why do trainers have bumpy rubber soles?', ['To make friction and give grip','To make them lighter','To make noise'], 'More friction means more grip, so you do not slip.'],
   ['How do bike brakes stop a bike?', ['Rubber pads rub on the wheel and make friction','Magnets pull the wheel','The bell rings'], 'The friction from the pads slows the wheel down.'],
   ['What do magnets attract?', ['Things made of iron or steel','All metals','Wood and plastic'], 'Magnets attract iron and steel. Aluminium cans and copper coins are not attracted.'],
   ['Which force can act without touching?', ['Magnetic force','Friction','A push from your hand'], 'A magnet can pull a paperclip from a distance.'],
   ['What are the two ends of a magnet called?', ['North and south poles','Top and bottom stops','Hot and cold ends'], 'Every magnet has a north pole and a south pole.'],
   ['What happens when two north poles face each other?', ['They push apart (repel)','They stick together','Nothing'], 'Like poles repel. Opposite poles attract.'],
   ['A north pole and a south pole face each other. What happens?', ['They pull together (attract)','They push apart','They spin round'], 'Opposite poles attract each other.'],
   ['Which of these will a magnet pick up?', ['A steel paperclip','A plastic spoon','A wooden pencil'], 'Steel contains iron, so it is magnetic.']
  ],
  mystery: [
   {id:'g2-forces-m1', brief:'A frozen pond in winter. A child in wellies slides along the ice with their arms out, while another child walks easily on a gravel path beside the pond.', q:'Why is the child on the ice sliding?', o:['Smooth ice makes very little friction','The ice is pushing them','Gravel is slippery'], why:'Ice is very smooth, so there is little friction to grip their boots. The rough gravel makes lots of friction, so walking is easy.'},
   {id:'g2-forces-m2', brief:'A fridge door covered in fridge magnets holding up drawings. One drawing has fallen to the floor because it was stuck with a magnet on a wooden door instead.', q:'Why did the magnet not stick to the wooden door?', o:['Wood is not magnetic','The magnet was too small','The drawing was too heavy'], why:'Magnets only attract materials such as iron and steel. Many fridge doors are steel, but wood is not magnetic.'}
  ],
  hands: {id:'g2-forces-h', title:'Magnet hunt', need:['An adult to help','A fridge magnet or any magnet','Paper and a pencil'],
   steps:['Draw two columns: Magnetic and Not magnetic.','Guess which objects around your home a magnet will stick to.','Test them gently: spoons, keys, coins, foil, cans, paperclips, door handles.','Write each object in the right column.','Keep magnets away from phones, tablets and bank cards.'],
   ask:'Were all the metal objects magnetic? What surprised you?'}
 }
},
g3: {
 living: {
  quiz: [
   ['What is a classification key used for?', ['To identify and name living things','To measure how tall a plant grows','To count the bones in a skeleton'], 'A key asks yes or no questions, one after another, until only one living thing is left. Then you know its name.'],
   ['Which question is best for a classification key?', ['Does it have more than six legs?','Is it pretty?','Is it my favourite?'], 'Good key questions can be answered yes or no by anyone, just by looking. "Pretty" and "favourite" are opinions.'],
   ['What do we call animals that have a backbone?', ['Vertebrates','Invertebrates','Producers'], 'Vertebrates have a backbone. Fish, amphibians, reptiles, birds and mammals are all vertebrates.'],
   ['Which of these is an invertebrate?', ['A snail','A frog','A sparrow'], 'A snail has no backbone, so it is an invertebrate.'],
   ['How many legs does an insect have?', ['Six','Eight','Ten'], 'All adult insects have six legs and three body parts.'],
   ['Why is a spider not an insect?', ['It has eight legs','It can fly','It has a backbone'], 'Spiders have eight legs and two body parts. They belong to a group called arachnids.'],
   ['Which of these plants does not make flowers?', ['A fern','A daisy','An apple tree'], 'Ferns and mosses do not have flowers. They make tiny spores instead of seeds.'],
   ['Which pair are both mammals?', ['A bat and a whale','A bat and a bee','A whale and a shark'], 'Bats and whales both have hair and feed their babies milk. A shark is a fish and a bee is an insect.'],
   ['What is a habitat?', ['The natural home of a living thing','A type of food','A group of fish'], 'A habitat gives a living thing food, water and shelter.'],
   ['Which change to an environment is caused by people?', ['Cutting down a forest to build houses','Leaves falling in autumn','A river flooding after heavy rain'], 'Building on land is a human change. It can take away the homes of many living things.'],
   ['Which of these helps wildlife?', ['Planting wildflowers and building a pond','Dropping litter in a park','Covering a garden in concrete'], 'Wildflowers feed insects and a pond gives animals water and a place to breed.'],
   ['A new road is built through a wood. What might happen to the animals living there?', ['Their habitat is split, so it is harder to find food and mates','They all grow bigger','Nothing changes for them'], 'Roads can split habitats in two. Some councils build tunnels and bridges so animals can cross safely.']
  ],
  mystery: [
   {id:'g3-living-m1', brief:'A child kneeling by a pond, holding a card with a yes/no key on it: "Does it have legs?" then "Does it have a shell?". A water snail is climbing up a reed beside a frog and a dragonfly.', q:'The animal has no legs and has a shell. Which animal is it?', o:['The water snail','The frog','The dragonfly'], why:'Follow the key: no legs, then yes to a shell. That leads to the water snail. Frogs and dragonflies both have legs.'},
   {id:'g3-living-m2', brief:'Two pictures side by side. On the left, a field full of wildflowers with many bees and butterflies. On the right, the same place covered by a new car park, with just one lonely bee.', q:'Why have most of the bees and butterflies gone?', o:['Their food plants and habitat have been removed','Bees and butterflies do not like the colour of cars','It has turned into winter'], why:'The wildflowers gave the insects nectar and shelter. When the flowers were removed, the insects lost their food and their home.'}
  ],
  hands: {id:'g3-living-h', title:'Make a minibeast key', need:['An adult to come with you','A magnifying glass','A clear pot with air holes','Paper and a pencil'],
   steps:['Go to a garden, park or school field with your adult.','Find six different minibeasts. Look under leaves and logs. Be very gentle and put each one back where you found it.','Draw each minibeast and count its legs.','Write yes or no questions that split them into groups, for example "Does it have more than six legs?".','Keep asking questions until each minibeast is on its own. That is your key!','Test your key on a friend. Can they name a minibeast using it?'],
   ask:'Which question split your minibeasts best? Would your key still work for a minibeast you did not find?'}
 },
 animals: {
  quiz: [
   ['Which teeth are pointed for gripping and tearing food?', ['Canines','Molars','Incisors'], 'Canines are the pointed teeth beside your incisors. Meat eaters like lions have very long canines.'],
   ['Which teeth at the front of your mouth cut and bite food?', ['Incisors','Canines','Molars'], 'Incisors have sharp, flat edges, like little chisels, for biting into food.'],
   ['Which teeth grind and chew food?', ['Molars','Incisors','Canines'], 'Molars are wide, bumpy teeth at the back of your mouth. They crush and grind food.'],
   ['Where does digestion begin?', ['In the mouth','In the stomach','In the large intestine'], 'Your teeth break food into small pieces and saliva starts to soften it.'],
   ['What is the tube that carries food from the mouth to the stomach?', ['The oesophagus','The small intestine','The windpipe'], 'Muscles in the oesophagus squeeze food down to the stomach.'],
   ['What does the stomach do?', ['Mixes food with acid and juices to break it down','Pumps blood around the body','Takes in air'], 'The stomach churns food and mixes it with strong juices.'],
   ['Where do nutrients from food pass into the blood?', ['The small intestine','The oesophagus','The mouth'], 'The small intestine is long and folded. Nutrients pass through its walls into the blood.'],
   ['What mainly happens in the large intestine?', ['Water is taken back into the body from waste','Food is chewed','Saliva is made'], 'The large intestine soaks up water. The waste left over leaves the body.'],
   ['In a food chain, what is a producer?', ['A green plant that makes its own food','An animal that eats plants','An animal that hunts'], 'Plants use sunlight to make their own food. Every food chain starts with a producer.'],
   ['In this food chain, which is the predator? grass → rabbit → fox', ['The fox','The rabbit','The grass'], 'The fox hunts and eats the rabbit, so the fox is the predator.'],
   ['In this food chain, which is the prey? grass → rabbit → fox', ['The rabbit','The fox','The grass'], 'The rabbit is hunted by the fox, so the rabbit is the prey.'],
   ['What do the arrows in a food chain show?', ['The way the food energy goes, from what is eaten to the eater','Which animal is the biggest','Where each animal lives'], 'An arrow means "is eaten by". Energy moves along the arrows.'],
   ['Why should we brush our teeth twice a day?', ['To remove plaque, which can cause tooth decay','To make our teeth grow longer','To make our canines sharper'], 'Plaque is a sticky layer full of germs. Brushing removes it and keeps teeth healthy.']
  ],
  mystery: [
   {id:'g3-animals-m1', brief:'A smiling child biting into a crunchy green apple, using only their front teeth. A small bite-shaped piece is coming away.', q:'Which teeth is the child using to bite off the piece of apple?', o:['Incisors','Molars','Canines'], why:'The incisors at the front of the mouth cut and bite. The molars at the back will chew the piece next.'},
   {id:'g3-animals-m2', brief:'A vegetable garden. Lettuce leaves have holes in them. A snail sits on a lettuce leaf, and a song thrush is hopping towards the snail.', q:'Which food chain is in this picture?', o:['lettuce → snail → thrush','thrush → snail → lettuce','snail → lettuce → thrush'], why:'The lettuce is the producer. The snail eats the lettuce, and the thrush eats the snail.'}
  ],
  hands: {id:'g3-animals-h', title:'Eggshell teeth test', need:['An adult to help','Three hard-boiled eggs (white shells work best)','Three cups','Water, fruit juice and a fizzy drink','An old toothbrush'],
   steps:['An eggshell is a bit like the hard outside of your teeth, called enamel.','Label your cups: water, juice and fizzy drink.','Put one egg in each cup and pour in the drink until the egg is covered.','Predict which egg will change the most.','Leave the cups somewhere safe for two days.','With your adult, lift out the eggs. Look at their colour and gently brush them. Compare them, then throw the eggs away and wash your hands.'],
   ask:'Which drink changed the shell the most? What does this tell you about looking after your teeth?'}
 },
 states: {
  quiz: [
   ['Which of these is a gas?', ['The air inside a balloon','Orange juice','A wooden block'], 'Air is a gas. It spreads out to fill the whole balloon.'],
   ['Which sentence describes a liquid?', ['It flows and takes the shape of its container','It keeps its own shape','It spreads out to fill any space'], 'Liquids can be poured and take the shape of whatever they are in.'],
   ['Which sentence describes a gas?', ['It spreads out to fill the space it is in','It can be piled up','It keeps the same shape'], 'Gases spread out in every direction to fill their container.'],
   ['Sand can be poured. Why is it a solid?', ['Each grain keeps its own shape','It is wet','It is a gas'], 'Sand pours because the grains are tiny, but each grain is a solid with its own shape.'],
   ['At what temperature does pure water freeze?', ['0°C','100°C','37°C'], 'Water freezes into ice at 0 degrees Celsius.'],
   ['At what temperature does pure water boil?', ['100°C','50°C','0°C'], 'Water boils and turns into water vapour at 100 degrees Celsius.'],
   ['Puddles dry up after rain. What is this called?', ['Evaporation','Condensation','Freezing'], 'The water in the puddle evaporates. It turns into water vapour, a gas, and goes into the air.'],
   ['Water droplets form on the outside of a cold glass. What is this called?', ['Condensation','Evaporation','Melting'], 'Water vapour in the air cools on the cold glass and turns back into liquid water.'],
   ['Chocolate goes soft in a warm hand. Which change of state is this?', ['Melting','Freezing','Condensing'], 'Heat from your hand makes the solid chocolate start to melt into a liquid.'],
   ['On which day would a puddle dry fastest?', ['A hot, windy day','A cold, still day','A cloudy night'], 'Heat and wind both make water evaporate faster.'],
   ['In the water cycle, what happens when water vapour cools high in the sky?', ['It condenses into tiny droplets that form clouds','It turns straight into ice cubes','It disappears forever'], 'The cooled vapour condenses into tiny droplets. Millions of droplets make a cloud.'],
   ['What is rain, snow or hail falling from clouds called?', ['Precipitation','Evaporation','Condensation'], 'Any water that falls from clouds is called precipitation.'],
   ['Which unit do we use to measure temperature?', ['Degrees Celsius','Centimetres','Kilograms'], 'We measure temperature in degrees Celsius, written °C, using a thermometer.']
  ],
  mystery: [
   {id:'g3-states-m1', brief:'A can of cold juice just taken out of the fridge, standing on a kitchen table on a warm day. The outside of the can is covered in tiny water droplets, and a small puddle is forming around its base.', q:'Where did the water on the outside of the can come from?', o:['Water vapour in the air condensed on the cold can','The juice leaked through the metal','Someone splashed water on it'], why:'The air has water vapour in it. When the vapour touches the cold can, it cools and condenses into liquid droplets.'},
   {id:'g3-states-m2', brief:'Two pictures of a washing line in a sunny, breezy garden. In the morning, the clothes are dripping wet. In the afternoon, the same clothes are dry and flapping in the wind.', q:'Where did the water in the wet clothes go?', o:['It evaporated into the air','It soaked into the pegs','It turned into ice'], why:'The sun and wind made the water evaporate. It became water vapour and mixed into the air.'}
  ],
  hands: {id:'g3-states-h', title:'Ice melt race', need:['An adult to help','Four ice cubes the same size','Four small plates','A timer or clock','A thermometer, if you have one'],
   steps:['Choose four places: a sunny window, a shady spot, the fridge and the kitchen table.','Predict which ice cube will melt first and which will melt last.','Put one ice cube on a plate in each place and start the timer.','Check every five minutes. Write down what you see.','Write down the time when each ice cube has completely melted.','If you have a thermometer, measure the temperature in each place.'],
   ask:'Which place melted the ice fastest? What did the warmest places have in common?'}
 },
 sound: {
  quiz: [
   ['What must happen for a sound to be made?', ['Something vibrates','Something gets hot','Something lights up'], 'All sounds are made by vibrations: tiny, fast movements backwards and forwards.'],
   ['How does sound travel to our ears?', ['As vibrations passing through the air','As beams of light','By jumping from object to object'], 'The vibrations pass from one tiny particle of air to the next until they reach your ear.'],
   ['Can sound travel through solids and liquids?', ['Yes, it can travel through solids, liquids and gases','No, only through air','Only through water'], 'Put your ear on a table and tap it gently. You can hear the sound through the solid wood!'],
   ['Why is there no sound in space?', ['There is no air for the vibrations to travel through','It is too cold for sound','It is too dark for sound'], 'Sound needs something to travel through. Space is almost empty, so sound cannot travel.'],
   ['What is pitch?', ['How high or low a sound is','How loud or quiet a sound is','How long a sound lasts'], 'A whistle has a high pitch. A big drum has a low pitch.'],
   ['A guitar string is tightened. What happens to its pitch?', ['It gets higher','It gets lower','It stays the same'], 'A tighter string vibrates faster, which makes a higher pitch.'],
   ['Three drums are the same except for their size. Which makes the lowest sound?', ['The largest drum','The smallest drum','They all sound the same'], 'A big drum skin vibrates more slowly, so it makes a lower sound.'],
   ['What is volume?', ['How loud or quiet a sound is','How high or low a sound is','How fast a sound travels'], 'Volume tells you how loud a sound is.'],
   ['You hit a drum harder. What happens to the sound?', ['It gets louder, because the vibrations are bigger','It gets higher','It gets quieter'], 'A harder hit makes bigger vibrations, and bigger vibrations sound louder.'],
   ['You walk away from a radio. What happens to the sound you hear?', ['It gets quieter','It gets louder','It gets higher'], 'Vibrations get weaker as they spread out, so sounds are quieter further away.'],
   ['You blow across the tops of bottles with different amounts of water. Which gives the highest note?', ['The bottle with the most water','The bottle with the least water','The empty bottle'], 'The air inside the bottle vibrates. Less air means a shorter column of air, which gives a higher note.'],
   ['Which part inside your ear vibrates when sound reaches it?', ['The eardrum','The tongue','The ear lobe'], 'The eardrum is a thin skin inside your ear. It vibrates and passes the sound on to your brain.'],
   ['Why do people wear ear defenders near loud machines?', ['To protect their ears from damage','To make sounds higher','To keep their ears warm'], 'Very loud sounds can damage your hearing. Ear defenders muffle the sound.']
  ],
  mystery: [
   {id:'g3-sound-m1', brief:'Two children at opposite ends of a garden, each holding a paper cup joined by a long, tight string. One child is talking into a cup, and the other is listening with a cup to their ear and a big smile.', q:'How does the voice reach the other cup?', o:['Vibrations travel along the tight string','Air blows down the string','Light travels along the string'], why:'The voice makes the cup vibrate. The vibrations travel along the tight string and make the other cup vibrate too.'},
   {id:'g3-sound-m2', brief:'A school concert. A very large drum and a very small drum stand side by side. A child is hitting each one with the same kind of beater.', q:'Which drum makes the lower sound?', o:['The large drum','The small drum','They make exactly the same sound'], why:'The large drum skin vibrates more slowly than the small one, so it makes a lower pitch.'}
  ],
  hands: {id:'g3-sound-h', title:'String telephone', need:['An adult to help','Two paper cups','About 5 metres of string','A sharp pencil','Two paper clips'],
   steps:['Ask your adult to make a small hole in the bottom of each cup with the pencil.','Push one end of the string through each hole and tie it to a paper clip inside the cup.','Stand far apart so the string is pulled tight.','One person talks into a cup while the other listens.','Now let the string go loose. Can you still hear?','Try pinching the string in the middle while you talk.'],
   ask:'What happened when the string was loose or pinched? Use the word "vibrations" to explain why.'}
 },
 electricity: {
  quiz: [
   ['Which of these plugs into the mains electricity?', ['A washing machine','A bicycle','A skipping rope'], 'A washing machine needs a lot of electricity, so it plugs into a wall socket.'],
   ['Which of these usually runs on batteries?', ['A TV remote control','A fridge','An oven'], 'A remote control uses small batteries, so it can be carried around.'],
   ['What does the cell (battery) do in a circuit?', ['It pushes electricity around the circuit','It makes the light','It stops the electricity'], 'The cell provides the push that makes electricity flow around the circuit.'],
   ['Why will a bulb not light if there is a gap in the circuit?', ['The circuit is not complete','The bulb is too bright','The wires are too long'], 'Electricity can only flow around a complete loop with no gaps.'],
   ['What does a switch do?', ['It opens and closes a gap in the circuit','It makes the battery bigger','It changes the colour of the bulb'], 'When a switch is off, it makes a gap. When it is on, the circuit is complete.'],
   ['Which material is a good electrical conductor?', ['Copper','Plastic','Wood'], 'Copper is a metal. Electricity flows through it easily, so it is used in wires.'],
   ['Why are wires covered in plastic?', ['Plastic is an insulator and keeps us safe','Plastic makes electricity faster','Plastic is shinier'], 'Plastic does not let electricity through, so we can touch the wire safely.'],
   ['Which of these is an electrical insulator?', ['Rubber','Steel','Aluminium foil'], 'Rubber does not let electricity pass through it.'],
   ['Which part of a circuit makes a noise?', ['A buzzer','A bulb','A switch'], 'A buzzer makes a sound when electricity flows through it.'],
   ['How can you test if a material is a conductor?', ['Put it in a gap in a circuit and see if the bulb lights','See if it is shiny','See if it is heavy'], 'If the bulb lights, electricity is flowing through the material, so it is a conductor.'],
   ['A bulb is joined to a battery with only one wire. What happens?', ['It does not light, because it needs a complete loop','It lights dimly','It lights brightly'], 'Electricity needs a path from the cell, through the bulb and back again.'],
   ['Why should you never push metal objects into a plug socket?', ['Metal conducts electricity and you could get a dangerous shock','It might bend the metal','The socket will get dirty'], 'Mains electricity is very powerful and can badly hurt or kill. Never touch sockets with metal.'],
   ['Is it safe to play near an electricity substation?', ['No, never. The electricity there is very dangerous','Yes, if you are careful','Yes, in the daytime'], 'Substations carry very high voltages. Always stay away and never climb the fence.']
  ],
  mystery: [
   {id:'g3-electricity-m1', brief:'A simple circuit on a school desk: a battery, three wires, a bulb and a switch. The switch is open and the bulb is dark. A child’s finger is about to press the switch down.', q:'What will happen when the child closes the switch?', o:['The bulb will light up','The battery will pop','Nothing at all'], why:'Closing the switch completes the circuit. Electricity can then flow all the way round and light the bulb.'},
   {id:'g3-electricity-m2', brief:'Children testing materials with a circuit that has a gap. A metal spoon bridges the gap and the bulb is glowing. A wooden spoon and a plastic spoon lie on the table beside it.', q:'What does the glowing bulb show about the metal spoon?', o:['It is an electrical conductor','It is an electrical insulator','It is magnetic'], why:'The bulb lights because electricity flows through the metal spoon. Metals are good conductors.'}
  ],
  hands: {id:'g3-electricity-h', title:'Electricity detective', need:['An adult to come with you','Paper and a pencil'],
   steps:['Draw two columns: Mains (plugs in) and Batteries.','Walk around your home with your adult. Look, but do not touch any plugs or sockets.','Write each electrical thing you find in the right column.','Count how many things are in each room.','With your adult, check for any dangers, like a frayed wire or too many plugs in one socket.','Make a safety poster with three electricity rules for your family.'],
   ask:'Which room had the most electrical things? Which could you swap for something that uses no electricity at all?'}
 }
},
g4: {
 living: {
  quiz: [
   ['Which animal goes through complete metamorphosis: egg, larva, pupa, adult?', ['A butterfly','A dog','A chicken'], 'A butterfly starts as an egg, hatches as a caterpillar (larva), becomes a pupa, then an adult.'],
   ['In a frog’s life cycle, what hatches from the egg?', ['A tadpole','A pupa','A chick'], 'Frogspawn hatches into tadpoles, which live in water and breathe with gills.'],
   ['Which shows a mammal’s life cycle?', ['Born alive, fed on milk, grows into an adult','Egg, larva, pupa, adult','Egg, tadpole, froglet, adult'], 'Most mammal babies grow inside their mother, are born alive and drink milk.'],
   ['How does a bird’s life cycle begin?', ['With an egg','With a larva','With a live baby'], 'Birds lay eggs. The chicks hatch and are fed by their parents.'],
   ['What is pollination?', ['Moving pollen from one flower to another','Seeds falling to the ground','Roots taking in water'], 'Insects, birds and the wind carry pollen between flowers. This lets the flowers make seeds.'],
   ['Which part of a flower makes pollen?', ['The stamen','The petal','The root'], 'The stamens are the male parts of a flower. They make powdery pollen.'],
   ['Why do many flowers have bright petals and a sweet smell?', ['To attract insects for pollination','To scare animals away','To keep the plant warm'], 'Insects visit to drink nectar and carry pollen to the next flower.'],
   ['What happens after a flower has been pollinated?', ['Seeds begin to form','The roots fall off','The plant turns into a tree'], 'After pollination, seeds grow inside the flower, often inside a fruit.'],
   ['A new potato plant grows from an old potato. What kind of reproduction is this?', ['Asexual reproduction','Sexual reproduction','Metamorphosis'], 'Only one parent is needed, so the new plant is the same as the parent. This is asexual reproduction.'],
   ['What does a caterpillar become inside its chrysalis?', ['A butterfly','A tadpole','A spider'], 'Inside the chrysalis, the caterpillar’s body changes completely into a butterfly.'],
   ['Which mammal lays eggs?', ['A platypus','A dolphin','A bat'], 'The platypus is one of very few mammals that lay eggs. Its babies still drink milk.'],
   ['Why do frogs lay hundreds of eggs?', ['Many will be eaten, so only a few survive to be adults','Frogs like to count','The eggs keep the pond warm'], 'Fish, birds and insects eat lots of frogspawn and tadpoles. Laying many eggs means some survive.'],
   ['Jane Goodall spent many years studying which animals in the wild?', ['Chimpanzees','Penguins','Sharks'], 'Jane Goodall watched chimpanzees in Tanzania and discovered that they use tools.']
  ],
  mystery: [
   {id:'g4-living-m1', brief:'A pond in spring. At the edge is clear jelly-like frogspawn with black dots. Tadpoles swim nearby, a small froglet with a short tail sits on a lily pad, and an adult frog rests on a log.', q:'What does this picture show?', o:['The stages of a frog’s life cycle','Four different kinds of animal','A food chain'], why:'Frogspawn, tadpole, froglet and adult frog are the stages of a frog’s life cycle, all in one pond.'},
   {id:'g4-living-m2', brief:'A close-up of a bee covered in yellow pollen dust, flying from one open flower towards another flower of the same kind.', q:'How is the bee helping the flowers?', o:['It carries pollen so the flowers can make seeds','It helps them grow taller','It changes their colour'], why:'Pollen sticks to the bee’s hairy body. When it visits the next flower, some pollen rubs off. This is pollination.'}
  ],
  hands: {id:'g4-living-h', title:'Grow a plant without seeds', need:['An adult to help','An old potato with little shoots ("eyes"), or a baby plant from a spider plant','A pot of compost','Water and a ruler'],
   steps:['Plant the potato with its eyes facing up, or push the spider plant baby into the compost.','Water it a little and put it somewhere light.','Each week, measure your plant and draw it.','Keep a diary for four weeks.','Compare your new plant with its parent plant.'],
   ask:'Your plant only had one parent. Is it the same as the parent? Why might this be useful for farmers?'}
 },
 animals: {
  quiz: [
   ['Which list shows the stages of human life in order?', ['Baby, child, adolescent, adult, elderly','Child, baby, adult, adolescent, elderly','Adult, baby, child, elderly, adolescent'], 'We start as babies, grow into children, become adolescents (teenagers), then adults, then elderly.'],
   ['What is the time called when a child’s body starts to change into an adult’s body?', ['Puberty','Gestation','Hibernation'], 'Puberty usually happens between about 8 and 14 years old. Everyone’s body changes at its own pace.'],
   ['About how long does it take a human baby to grow before it is born?', ['About 9 months','About 9 days','About 9 years'], 'This time is called gestation. For humans, it is about nine months.'],
   ['Which of these animals has the longest gestation?', ['An elephant','A mouse','A cat'], 'An elephant baby grows for about 22 months before it is born. A mouse takes only about 3 weeks.'],
   ['Why do human babies need adults to look after them?', ['They cannot feed or protect themselves','They are too big','They can already walk and talk'], 'Human babies depend on adults for food, warmth and safety for many years.'],
   ['Which stage of life is a teenager in?', ['Adolescence','Infancy','Old age'], 'Adolescence is the time between being a child and being an adult.'],
   ['Which change often happens as people grow old?', ['Bones get weaker and hair may turn grey','They grow taller every year','They grow new baby teeth'], 'In old age, bones and muscles get weaker and skin gets wrinkles.'],
   ['Why do adolescents need plenty of sleep and healthy food?', ['Their bodies are growing and changing fast','They are getting shorter','They have stopped growing'], 'Growing bodies need energy and nutrients from food, and rest from sleep.'],
   ['How could you find out how children’s heights change as they get older?', ['Measure the same children every year','Guess their heights','Ask one adult how tall they are'], 'Measuring the same children over time gives reliable evidence.'],
   ['Which human life stage usually lasts the longest?', ['Adulthood','Babyhood','Childhood'], 'Most people spend more years as adults than in any other stage.'],
   ['Do all children grow at exactly the same speed?', ['No, children grow at different rates','Yes, exactly the same','Only twins grow differently'], 'Everyone is different. Some children have growth spurts earlier or later than others.'],
   ['When do humans grow fastest?', ['In their first year of life','When they are about 30','When they are elderly'], 'A baby can grow about 25 centimetres in its first year. That is faster than at any other time.']
  ],
  mystery: [
   {id:'g4-animals-m1', brief:'A family walking in a park, holding hands: a baby in a pushchair, a five-year-old, a teenager, a parent, and a grandmother with grey hair.', q:'What does this picture show?', o:['Different stages of human development','People who are all adolescents','People who have all stopped growing'], why:'From the baby to the grandmother, you can see every stage of human life: baby, child, adolescent, adult and elderly.'},
   {id:'g4-animals-m2', brief:'A wooden height chart on a bedroom wall with pencil marks and ages written beside them, from age 1 to age 6. The gap between age 1 and age 2 is much bigger than the gaps between the later marks.', q:'When did this child grow the most in one year?', o:['Between age 1 and age 2','Between age 5 and age 6','The child grew the same amount every year'], why:'The biggest gap is between age 1 and 2. Young children grow fastest, then growth slows down.'}
  ],
  hands: {id:'g4-animals-h', title:'Growth detectives', need:['An adult to help','A tape measure','Family members of different ages who are happy to help','Paper and a pencil'],
   steps:['Ask your family members if you can measure them.','Make a table with columns for name, age, height and hand span.','Measure each person’s height and the span of their hand.','Put the results in order of age.','Draw a bar chart of height for each age.','Look for patterns in your chart.'],
   ask:'Do older people always have bigger measurements? At what age does growing seem to stop?'}
 },
 materials: {
  quiz: [
   ['Which material is the best thermal insulator?', ['Wool','Copper','Steel'], 'Wool traps air, which slows heat moving. That is why woolly jumpers keep you warm.'],
   ['Which material is magnetic?', ['Iron','Aluminium','Copper'], 'Iron is magnetic. Most other metals, like aluminium and copper, are not.'],
   ['Salt is stirred into water and seems to disappear. What has happened?', ['It has dissolved to make a solution','It has melted','It has evaporated'], 'The salt is still there. It has broken into tiny pieces that spread through the water.'],
   ['How can you get the salt back from salty water?', ['Let the water evaporate','Pour it through a sieve','Use a magnet'], 'When the water evaporates, salt crystals are left behind.'],
   ['Which method separates sand from water?', ['Filtering','Using a magnet','Dissolving'], 'The filter paper lets water through but traps the grains of sand.'],
   ['Which method separates paper clips from sand?', ['Using a magnet','Filtering','Evaporating'], 'Steel paper clips are attracted to the magnet. The sand is left behind.'],
   ['Which of these is soluble in water?', ['Sugar','Sand','Chalk'], 'Sugar dissolves in water. Sand and chalk do not.'],
   ['Which of these is an irreversible change?', ['Baking a cake','Melting ice','Dissolving sugar'], 'Baking makes new materials. You cannot turn a cake back into eggs and flour.'],
   ['What happens when bicarbonate of soda is mixed with vinegar?', ['A new gas, carbon dioxide, is made','Nothing happens','Ice forms'], 'The fizzing bubbles are carbon dioxide gas. A new material has been made.'],
   ['Burning wood is an irreversible change. Why?', ['New materials, like ash and smoke, are made','The wood can easily be put back together','It only changes shape'], 'Burning makes new materials. The wood cannot be got back.'],
   ['Why do saucepans have metal bottoms and plastic handles?', ['Metal conducts heat to cook food; plastic stops your hand getting burnt','Plastic cooks food faster','Metal keeps food cold'], 'Metal is a thermal conductor. Plastic is a thermal insulator.'],
   ['An iron gate goes rusty. What kind of change is this?', ['Irreversible','Reversible','Dissolving'], 'Rust is a new material made when iron reacts with water and air. It cannot be changed back.'],
   ['The scientist Ruth Benerito is famous for helping to invent what?', ['Wrinkle-free cotton','The telephone','The bicycle'], 'Ruth Benerito found a way to treat cotton so clothes did not crease so easily.']
  ],
  mystery: [
   {id:'g4-materials-m1', brief:'A glass of cloudy, sandy water being poured through a funnel lined with a paper coffee filter. Clear water drips into a jar below, and wet sand is left in the filter.', q:'Why does clear water come through?', o:['The filter lets water through but traps the sand','The sand has dissolved','The filter has melted the sand'], why:'The holes in the filter paper are too small for the sand grains, but water can pass through. This is filtering.'},
   {id:'g4-materials-m2', brief:'Two bicycles. One was left outside in the rain for a whole year and has orange, flaky patches on its chain and frame. The other was kept in a dry shed and is still shiny.', q:'What made the first bike orange and flaky?', o:['The iron reacted with water and air to make rust','The rain painted it orange','The sun melted it'], why:'Rust forms when iron or steel meets water and air. It is a new material, so this is an irreversible change.'}
  ],
  hands: {id:'g4-materials-h', title:'Mystery mixture challenge', need:['An adult to help','Sand, salt and some paper clips','A bowl, a jug of warm water and a spoon','A magnet','A funnel and a coffee filter or kitchen paper','A shallow dish'],
   steps:['Mix the sand, salt and paper clips together in the bowl. Never taste anything!','Use the magnet to pull out the paper clips.','Add warm water and stir until the salt dissolves.','Pour the mixture through the filter. The sand stays behind.','Pour the clear salty water into the dish and leave it somewhere warm for a few days.','Look closely at what is left in the dish.'],
   ask:'Which method did you use for each material, and why did it work? What did you find in the dish?'}
 },
 space: {
  quiz: [
   ['What shape are the Sun, Earth and Moon?', ['Roughly spheres','Flat circles','Cubes'], 'The Sun, Earth and Moon are all roughly sphere-shaped, like balls.'],
   ['What does the Earth orbit?', ['The Sun','The Moon','Mars'], 'The Earth travels around the Sun in a path called an orbit.'],
   ['How long does it take the Earth to orbit the Sun once?', ['About 365 days, one year','24 hours','About 28 days'], 'One full trip around the Sun takes about 365 and a quarter days.'],
   ['Why do we have day and night?', ['The Earth spins on its axis','The Sun travels around the Earth every day','The Moon blocks the Sun at night'], 'As the Earth spins, your side faces the Sun (day), then faces away (night).'],
   ['How long does it take the Earth to spin around once?', ['24 hours','One year','One week'], 'One complete spin takes about 24 hours, which is one day.'],
   ['What does the Moon orbit?', ['The Earth','Mars','Jupiter'], 'The Moon travels around the Earth.'],
   ['About how long does the Moon take to orbit the Earth?', ['About a month','One day','One year'], 'The Moon goes around the Earth in about 27 days.'],
   ['Why does the Sun seem to move across the sky?', ['Because the Earth is spinning','Because the Sun is moving around us','Because clouds push it'], 'The Sun stays still. The Earth spins, which makes the Sun look as if it moves.'],
   ['Where does the Sun rise in the morning?', ['In the east','In the west','In the north'], 'The Sun rises in the east and sets in the west.'],
   ['Why does the Moon shine?', ['It reflects light from the Sun','It makes its own light','It is on fire'], 'The Moon is not a light source. Sunlight bounces off it.'],
   ['Which planet is closest to the Sun?', ['Mercury','Earth','Neptune'], 'Mercury is the closest planet to the Sun and the smallest.'],
   ['Which is the largest planet in our solar system?', ['Jupiter','Mars','Venus'], 'Jupiter is so big that more than 1,000 Earths could fit inside it.'],
   ['Long ago, many people thought the Sun went around the Earth. Which scientist argued that the Earth goes around the Sun?', ['Nicolaus Copernicus','Isaac Newton','Charles Darwin'], 'About 500 years ago, Copernicus explained that the planets, including Earth, orbit the Sun.']
  ],
  mystery: [
   {id:'g4-space-m1', brief:'A dark room. A torch shines on one side of a globe, so half of the globe is bright and half is dark. A tiny paper person is stuck on the dark side.', q:'Is it day or night for the tiny paper person?', o:['Night, because their side is facing away from the light','Day, because the torch is on','Midday, because the globe is round'], why:'The torch is like the Sun. The side of the globe facing away from it is in darkness, so it is night there.'},
   {id:'g4-space-m2', brief:'Three photos of the same tree in a garden. In the morning, its shadow is long and points one way. At midday, the shadow is short. In the evening, the shadow is long and points the other way.', q:'Why does the tree’s shadow change during the day?', o:['The Earth spins, so the Sun seems to move across the sky','The tree moves around','The shadow is alive'], why:'As the Earth spins, the Sun appears in a different place in the sky. This changes the length and direction of shadows.'}
  ],
  hands: {id:'g4-space-h', title:'Shadow clock', need:['An adult to help','A sunny day','A pencil or stick and a lump of modelling clay','A large sheet of card','A pen'],
   steps:['Never look directly at the Sun.','Put the card flat on the ground outside in an open, sunny place.','Stand the pencil upright in the clay in the middle of the card.','Every hour, draw along the shadow and write the time.','Do this from morning until afternoon.','Look at the length and direction of each shadow.'],
   ask:'When was the shadow shortest? Why does the shadow move? Could you use your card to tell the time tomorrow?'}
 },
 forces: {
  quiz: [
   ['Why does an apple fall to the ground?', ['Gravity pulls it towards the Earth','Air pushes it down','The tree throws it'], 'Gravity is a force that pulls objects towards the centre of the Earth.'],
   ['What is air resistance?', ['A force from the air that slows moving objects','A force that pulls things upwards','A type of gravity'], 'Air pushes against things moving through it. This slows them down.'],
   ['Why does a parachute fall slowly?', ['Its large shape makes lots of air resistance','It is lighter than air','Gravity does not pull on it'], 'The big canopy catches lots of air. This air resistance slows the fall.'],
   ['Which force acts between two surfaces rubbing together?', ['Friction','Gravity','Magnetism'], 'Friction acts when surfaces rub. It slows things down and gives us grip.'],
   ['Why are fish and boats streamlined?', ['To reduce water resistance','To increase friction','To make them heavier'], 'A smooth, pointed shape lets water flow past easily, so they move faster.'],
   ['What unit is force measured in?', ['Newtons','Metres','Litres'], 'Force is measured in newtons (N), using a force meter.'],
   ['Which scientist is famous for his ideas about gravity?', ['Isaac Newton','Thomas Edison','Alexander Graham Bell'], 'Isaac Newton explained how gravity pulls objects together. The unit of force is named after him.'],
   ['Which sole would give the best grip on a slippery floor?', ['Rubber with deep grooves','Smooth plastic','Smooth leather'], 'Rough, grooved rubber makes lots of friction, which stops you slipping.'],
   ['A paper ball falls faster than a flat sheet of the same paper. Why?', ['The flat sheet has more air resistance','The ball is heavier','Gravity is stronger on balls'], 'They weigh the same, but the flat sheet pushes against more air, so it falls more slowly.'],
   ['What is a lever?', ['A bar that turns on a pivot to help lift loads','A rope around a wheel','A wheel with teeth'], 'A seesaw and a bottle opener are levers. They help a small force move a bigger load.'],
   ['How does a pulley help?', ['It lets a smaller force lift a heavy load','It makes the load heavier','It stops things moving'], 'Pulleys change the direction of a force and can make lifting easier.'],
   ['What do gears do?', ['Change the speed or direction of turning','Make things magnetic','Stop friction'], 'Gears are wheels with teeth. When one turns, it turns the next, faster or slower.'],
   ['A ball rolls across grass and slows down. Which force slows it?', ['Friction','Gravity pulling it upwards','Magnetism'], 'Friction between the ball and the grass slows the ball until it stops.']
  ],
  mystery: [
   {id:'g4-forces-m1', brief:'A sky over green fields. One skydiver floats down gently under a large, open parachute. Another skydiver, higher up, is falling quickly with the parachute still packed.', q:'Why is the skydiver with the open parachute falling slowly?', o:['The parachute makes a lot of air resistance','Gravity has stopped pulling on them','The wind is pushing them upwards'], why:'Gravity still pulls both skydivers down. The open parachute catches lots of air, and the air resistance slows the fall.'},
   {id:'g4-forces-m2', brief:'An old village well with a rope running over a wheel at the top. A child easily pulls down on one end of the rope, and a full bucket of water rises up out of the well.', q:'Which simple machine is helping the child?', o:['A pulley','A lever','A gear'], why:'The rope runs over a wheel. This is a pulley. It lets the child pull down to lift the bucket up.'}
  ],
  hands: {id:'g4-forces-h', title:'Parachute challenge', need:['An adult to help','A plastic bag, tissue paper and a cloth to cut squares from','String and sticky tape','A small toy or a lump of modelling clay','A stopwatch'],
   steps:['Cut three squares of different sizes from the same material.','Tape four pieces of string to the corners of each square and tie them to your toy.','Predict which parachute will fall slowest.','With your adult, drop each one from the same safe height, such as the top of a step. Never lean out of a window.','Time each drop three times and work out the average.','Make it fair: same toy, same height, same way of dropping.'],
   ask:'Which parachute fell the slowest? Why? What did you keep the same to make it a fair test?'}
 }
},
g5: {
 living: {
  quiz: [
   ['Which scientist created the way of naming and grouping living things that we still use?', ['Carl Linnaeus','Isaac Newton','Marie Curie'], 'Carl Linnaeus gave every living thing a two-part scientific name and sorted them into groups.'],
   ['What are microorganisms?', ['Living things too small to see without a microscope','Tiny stones','Baby animals'], 'Bacteria and some fungi are microorganisms. You need a microscope to see them.'],
   ['Which of these is a microorganism?', ['Bacteria','A beetle','A sparrow'], 'Bacteria are tiny single-celled living things.'],
   ['Which vertebrate group has lungs and dry, scaly skin, and lays eggs on land?', ['Reptiles','Amphibians','Fish'], 'Reptiles like lizards, snakes and tortoises have dry scales and lay eggs on land.'],
   ['Which are the five groups of vertebrates?', ['Mammals, birds, reptiles, amphibians and fish','Insects, spiders, worms, snails and crabs','Plants, fungi, animals, rocks and water'], 'All five groups have a backbone.'],
   ['Which kingdom do mushrooms belong to?', ['Fungi','Plants','Animals'], 'Mushrooms are fungi. Fungi are a separate group from plants and animals.'],
   ['Why are fungi not plants?', ['They cannot make their own food from sunlight','They are too small','They grow in soil'], 'Plants make food using sunlight. Fungi feed on dead or living things instead.'],
   ['Which useful job can some microorganisms do?', ['Help make bread and yoghurt','Make the Sun shine','Build mountains'], 'Yeast, a fungus, makes bread rise. Bacteria turn milk into yoghurt.'],
   ['How can we stop harmful microorganisms spreading?', ['Wash our hands with soap','Share drinking cups','Sneeze into our hands'], 'Soap and water wash germs away. Catch sneezes in a tissue.'],
   ['Which animal is an arachnid?', ['A scorpion','A centipede','A butterfly'], 'Scorpions, like spiders, have eight legs. They are arachnids.'],
   ['A whale lives in the sea. Why is it not a fish?', ['It breathes air with lungs and feeds its young milk','It is too big to be a fish','It has fins'], 'Whales are mammals. They breathe air and feed their babies milk.'],
   ['Which group does an insect belong to?', ['Invertebrates','Vertebrates','Mammals'], 'Insects have no backbone, so they are invertebrates.'],
   ['Why do scientists classify living things?', ['To help them identify, name and study living things','To decide which animals are best','To make lists for fun'], 'Grouping living things by their features helps scientists all around the world understand them.']
  ],
  mystery: [
   {id:'g5-living-m1', brief:'An old loaf of bread forgotten in a warm cupboard, with fuzzy green, blue and white patches growing on the slices.', q:'What is growing on the bread?', o:['Mould, a type of fungus','A new plant from seeds','Sugar crystals'], why:'Mould is a fungus. It grows on food that is warm and damp, and it feeds on the bread.'},
   {id:'g5-living-m2', brief:'A rock pool at the seaside with a crab, a starfish, a small fish, a sea anemone and some seaweed. A child is looking into the pool, holding a classification key.', q:'Which animal in the pool is a vertebrate?', o:['The small fish','The crab','The starfish'], why:'Fish have a backbone, so they are vertebrates. Crabs, starfish and sea anemones are invertebrates.'}
  ],
  hands: {id:'g5-living-h', title:'Mould detectives', need:['An adult to help','Three slices of bread','Three clear food bags that seal, and sticky tape','A spray bottle of water','Labels'],
   steps:['Label the bags: dry and warm, damp and warm, damp and cold.','Put one slice of bread in each bag. Spray the "damp" slices lightly with water.','Seal each bag and tape it shut. Never open the bags.','Put the "cold" bag in the fridge and the others somewhere warm.','Look through the bags every day for a week and draw what you see.','At the end, your adult throws the bags away without opening them.'],
   ask:'Which conditions helped the mould grow fastest? Why do we keep some foods in the fridge?'}
 },
 animals: {
  quiz: [
   ['What is the job of the heart?', ['To pump blood around the body','To digest food','To clean the air we breathe'], 'The heart is a strong muscle. It beats all the time to push blood around your body.'],
   ['Which blood vessels carry blood away from the heart?', ['Arteries','Veins','Nerves'], 'Arteries have thick walls because blood rushes through them from the heart.'],
   ['Which blood vessels carry blood back to the heart?', ['Veins','Arteries','Nerves'], 'Veins bring blood back to the heart.'],
   ['What are capillaries?', ['Tiny blood vessels where oxygen passes into the body’s cells','Bones in the hand','Parts of the stomach'], 'Capillaries are thinner than a hair. Oxygen and nutrients pass through their walls.'],
   ['What does blood carry to all the cells of the body?', ['Oxygen and nutrients','Sound and light','Air bubbles'], 'Cells need oxygen and nutrients to live and give us energy.'],
   ['Where does blood pick up oxygen?', ['In the lungs','In the stomach','In the brain'], 'When you breathe in, oxygen passes from your lungs into your blood.'],
   ['How are nutrients from food carried around the body?', ['In the blood','Along the nerves','Through the bones'], 'Nutrients pass from the small intestine into the blood, which carries them everywhere.'],
   ['How many chambers does the human heart have?', ['Four','Two','Six'], 'The heart has four chambers: two at the top and two at the bottom.'],
   ['Why does your heart beat faster when you exercise?', ['Your muscles need more oxygen','Your heart is cold','You are hungry'], 'Working muscles need more oxygen, so the heart pumps faster to deliver it.'],
   ['Where can you feel your pulse?', ['On your wrist or the side of your neck','On your elbow','On your hair'], 'Your pulse is the beat of blood being pushed through an artery.'],
   ['Which habit can harm the heart and lungs?', ['Smoking','Walking every day','Eating vegetables'], 'Smoking damages the lungs and the heart. Many people find it very hard to stop.'],
   ['Which is part of a healthy lifestyle?', ['A balanced diet, exercise and enough sleep','Eating only sweets','Sleeping for two hours a night'], 'Healthy food, regular exercise and good sleep keep the heart and body strong.'],
   ['William Harvey was a doctor who discovered what?', ['That blood is pumped around the body in a loop','How to make a telescope','How plants make food'], 'About 400 years ago, William Harvey showed that the heart pumps blood around the body and back again.']
  ],
  mystery: [
   {id:'g5-animals-m1', brief:'A child sitting on the grass after running a race, with two fingers on the inside of their wrist and a stopwatch beside them. A chart behind shows "resting: 80 beats per minute" and "after running: 140 beats per minute".', q:'Why is the child’s pulse higher after running?', o:['The heart pumps faster to get more oxygen to the muscles','The stopwatch is broken','Running makes the blood cold'], why:'Running muscles need more oxygen. The heart beats faster to carry more blood to them.'},
   {id:'g5-animals-m2', brief:'A close-up of the inside of a person’s wrist, with thin blue-looking lines visible under the skin.', q:'Which blood vessels can you see under the skin of the wrist?', o:['Veins, carrying blood back to the heart','Arteries, carrying blood away from the heart','Nerves'], why:'The veins in your wrist are close to the skin, so you can often see them. Arteries are usually deeper.'}
  ],
  hands: {id:'g5-animals-h', title:'Pulse investigation', need:['An adult to help','A timer or stopwatch','Paper and a pencil'],
   steps:['Sit still for two minutes. Find your pulse on your wrist with two fingers (not your thumb).','Count the beats for 15 seconds, then multiply by 4. This is your resting heart rate.','Do star jumps for one minute, then measure your pulse again straight away.','Rest, and measure again after 2 minutes and after 5 minutes.','Draw a line graph of your results.','Stop if you feel dizzy or unwell, and tell your adult.'],
   ask:'How much did your heart rate go up? How long did it take to get back to normal? Why?'}
 },
 evolution: {
  quiz: [
   ['What are fossils?', ['The remains or traces of living things from long ago, preserved in rock','Old coins buried in the ground','Shiny crystals'], 'Fossils can be bones, shells, footprints or leaf prints, turned to stone over millions of years.'],
   ['Mary Anning was famous for finding what?', ['Fossils, including ichthyosaur skeletons','New planets','The cure for an illness'], 'Mary Anning found amazing fossils on the cliffs of Lyme Regis in England over 200 years ago.'],
   ['What is inheritance?', ['Features being passed from parents to their offspring','Choosing what to eat','Learning to ride a bike'], 'Eye colour and the shape of your ears are features you inherit from your parents.'],
   ['Why are offspring not identical to their parents?', ['They get a mix of features from both parents','They choose to look different','They eat different food'], 'Each offspring gets a different mix of features, so brothers and sisters look different too.'],
   ['What is an adaptation?', ['A feature that helps a living thing survive in its habitat','A type of fossil','A kind of weather'], 'A camel’s hump and a duck’s webbed feet are adaptations.'],
   ['Why does a polar bear have thick fur and a layer of fat?', ['To stay warm in the freezing Arctic','To swim faster in warm seas','To hide in the desert'], 'Thick fur and fat keep the polar bear’s body warm.'],
   ['How is a cactus adapted to the desert?', ['It stores water and has spines instead of leaves','It has big, thin leaves','It only grows in ponds'], 'The cactus stores water in its stem. Spines lose less water than leaves and protect it from animals.'],
   ['Which of these is an adaptation of a camel?', ['Wide feet that do not sink into sand','Gills for breathing','Webbed wings'], 'A camel’s wide feet spread its weight, so it can walk on soft sand.'],
   ['Which scientist is famous for the theory of evolution by natural selection?', ['Charles Darwin','Isaac Newton','Galileo Galilei'], 'Charles Darwin, and also Alfred Russel Wallace, explained how living things change over time.'],
   ['On which islands did Darwin study finches with different beaks?', ['The Galápagos Islands','The British Isles','The Arctic islands'], 'The Galápagos Islands are in the Pacific Ocean. Darwin studied many animals there.'],
   ['Why did the finches on different islands have different beaks?', ['Each beak shape suited the food on that island','The birds were different ages','They broke their beaks'], 'Thick beaks crack seeds; thin beaks catch insects. Each shape suited the food available.'],
   ['What is natural selection?', ['Living things best suited to their environment survive and pass on their features','Farmers choosing which animals to keep','Animals choosing where to live'], 'Over many generations, helpful features become more common. This is how living things evolve.'],
   ['What do fossils tell us?', ['Living things have changed over a very long time','Living things never change','Dinosaurs lived at the same time as humans'], 'Fossils show animals and plants that no longer exist, and how living things have changed.']
  ],
  mystery: [
   {id:'g5-evolution-m1', brief:'A child on a pebbly beach at the bottom of a grey cliff, gently brushing a rock with a soft brush. A spiral-shaped ammonite fossil is showing in the rock.', q:'What can this fossil tell scientists?', o:['What lived there millions of years ago','What the weather will be tomorrow','How old the child is'], why:'Ammonites lived in the sea millions of years ago. The fossil shows that this land was once under the sea.'},
   {id:'g5-evolution-m2', brief:'A litter of puppies lying together: some are brown, some are black and white, and one is brown with white patches. Their brown mother lies beside them, and their black-and-white father sits nearby.', q:'Why do the puppies look different from each other?', o:['Each one inherited a different mix of features from both parents','They ate different food','They were born in different years'], why:'Each puppy gets a different mix of features from its mother and father. This is inheritance and variation.'}
  ],
  hands: {id:'g5-evolution-h', title:'Design an adapted animal', need:['Paper and colouring pencils','Books or websites about habitats (with an adult)'],
   steps:['Choose a habitat: desert, polar ice, rainforest or deep ocean.','List three challenges of living there, such as cold, little water or predators.','Invent an animal with at least four adaptations for that habitat.','Draw your animal and label each adaptation.','Next to each label, explain how it helps the animal survive.','Find a real animal that has one of the same adaptations.'],
   ask:'Which real animal is most like yours? What would happen to your animal if its habitat suddenly changed?'}
 },
 light: {
  quiz: [
   ['How does light travel?', ['In straight lines','In circles','Around corners'], 'Light travels in straight lines. That is why you cannot see around a corner.'],
   ['How do we see objects that are not light sources?', ['Light reflects off them into our eyes','Our eyes send out beams of light','The objects make a sound'], 'Light from a source hits the object and bounces into our eyes.'],
   ['Which of these is a light source?', ['A candle flame','The Moon','A mirror'], 'A candle flame makes its own light. The Moon and mirrors only reflect light.'],
   ['What is reflection?', ['When light bounces off a surface','When light is soaked up','When light turns into sound'], 'Smooth, shiny surfaces like mirrors reflect light very well.'],
   ['Which surface reflects light best?', ['A smooth, shiny mirror','Black velvet','Rough tree bark'], 'A mirror is smooth and shiny, so it reflects almost all the light that hits it.'],
   ['Why does a shadow have the same outline as the object?', ['Light travels in straight lines and the object blocks it','The shadow copies the object','Shadows are made of dark light'], 'The light that misses the edges goes straight past, so the shadow matches the object’s outline.'],
   ['When does a shadow get bigger?', ['When the object moves closer to the light source','When the object moves away from the light source','Never'], 'Closer to the light, the object blocks more light, so its shadow grows.'],
   ['Which material is opaque?', ['Wood','Clear glass','Clean water'], 'Opaque materials do not let any light through, so they make dark shadows.'],
   ['Which material is translucent?', ['Tracing paper','Brick','Clear glass'], 'Translucent materials let some light through, but you cannot see clearly through them.'],
   ['How does a periscope let you see over a wall?', ['Two mirrors reflect light down to your eye','Light goes through the cardboard','It makes its own light'], 'Light reflects off the top mirror, down to the bottom mirror, and into your eye.'],
   ['Why does a straw look bent in a glass of water?', ['Light changes direction as it passes from water into air','The straw really bends','The water squashes it'], 'This bending of light is called refraction.'],
   ['In a ray diagram, what do the arrows on the lines show?', ['The direction the light is travelling','How hot the light is','The colour of the light'], 'Arrows show light travelling from the source, to the object, to the eye.'],
   ['Why should you never look directly at the Sun?', ['Its light can damage your eyes','It is too far away to see','It makes you sneeze'], 'Sunlight is so strong it can permanently damage your eyes, even with sunglasses on.']
  ],
  mystery: [
   {id:'g5-light-m1', brief:'A pencil standing in a clear glass that is half full of water. Seen from the side, the pencil looks bent where it goes into the water.', q:'Look where the pencil goes into the water. Why does it look bent there?', o:['Light bends as it passes between water and air','The water has bent the pencil','The glass is squashing the pencil'], why:'Light changes direction when it passes from water into air. This is called refraction. The pencil is really still straight.'},
   {id:'g5-light-m2', brief:'A child crouching behind a garden wall, looking into the bottom of a homemade cardboard periscope. The top of the periscope pokes over the wall towards a bird sitting on a fence.', q:'How can the child see the bird?', o:['Two mirrors reflect the light from the bird down into their eye','Light goes straight through the wall','Light curves over the wall by itself'], why:'Light from the bird hits the top mirror, reflects down to the bottom mirror, then reflects into the child’s eye.'}
  ],
  hands: {id:'g5-light-h', title:'Make a periscope', need:['An adult to help (with the cutting)','A long, clean juice carton','Two small plastic safety mirrors','Scissors and sticky tape','A protractor'],
   steps:['Ask your adult to cut a square window near the top of the carton on one side.','Cut another window near the bottom, on the opposite side.','Tape one mirror inside at the top, at an angle of 45 degrees, facing down.','Tape the other mirror at the bottom at 45 degrees, facing up.','Test it by looking over a table or round a door.','Draw a ray diagram showing how the light travels through your periscope.'],
   ask:'What happened when the mirrors were not at 45 degrees? Draw the path of the light with arrows.'}
 },
 electricity: {
  quiz: [
   ['What happens to a bulb when you add another cell to the circuit?', ['It gets brighter','It gets dimmer','It goes out'], 'More cells give a higher voltage, which pushes more electricity through the bulb.'],
   ['You add a second bulb to a series circuit with one cell. What happens?', ['Both bulbs are dimmer than one bulb on its own','Both bulbs are brighter','Nothing changes'], 'The bulbs share the same push from the cell, so each one is dimmer.'],
   ['What happens to a buzzer when the voltage is increased?', ['It gets louder','It gets quieter','It stops'], 'A higher voltage makes a buzzer louder and a motor spin faster.'],
   ['Why do scientists use symbols in circuit diagrams?', ['They are quick to draw and anyone can read them, in any language','They look prettier than pictures','They are colourful'], 'Circuit symbols are the same all over the world.'],
   ['What does a circle with a cross inside stand for?', ['A bulb (lamp)','A cell','A switch'], 'The symbol for a bulb is a circle with a cross in it.'],
   ['What does a long line next to a short line stand for?', ['A cell','A buzzer','A motor'], 'The long line is the positive end of the cell and the short line is the negative end.'],
   ['What does a circle with the letter M inside stand for?', ['A motor','A bulb','A buzzer'], 'M stands for motor.'],
   ['How are wires drawn in a circuit diagram?', ['As straight lines','As wavy lines','As dots'], 'Wires are drawn as straight lines with square corners.'],
   ['What is voltage measured in?', ['Volts','Metres','Litres'], 'A typical AA battery gives 1.5 volts.'],
   ['There is one open switch in a series circuit with three bulbs. What happens?', ['All three bulbs go off','Only the bulb next to the switch goes off','All the bulbs get brighter'], 'In a series circuit, there is only one path. One gap stops the whole circuit.'],
   ['What might happen if you connect too many cells to one small bulb?', ['The bulb could blow and stop working','The bulb would get dimmer','The bulb would turn blue'], 'Too high a voltage can break the thin wire inside the bulb.'],
   ['Why does a motor spin faster with two cells instead of one?', ['The higher voltage pushes more electricity through it','The wires are shorter','The motor gets colder'], 'More voltage means more power for the motor.'],
   ['Alessandro Volta is famous for inventing what?', ['The first electric battery','The telescope','The light bulb'], 'Volta made the first battery over 200 years ago. The volt is named after him.']
  ],
  mystery: [
   {id:'g5-electricity-m1', brief:'Two identical torches side by side on a table with their battery covers open. One has one battery inside and gives a dim beam. The other has two batteries inside and gives a bright beam.', q:'Why is one torch brighter than the other?', o:['It has more cells, so a higher voltage','Its bulb is bigger','It is a newer torch'], why:'The torches are the same, but two cells give a higher voltage than one. A higher voltage makes the bulb brighter.'},
   {id:'g5-electricity-m2', brief:'Two simple circuits on a school desk, each with one battery. In the first circuit, a single bulb glows brightly. In the second, three bulbs in a row (in series) all glow dimly.', q:'Why are the three bulbs dimmer?', o:['They share the voltage from just one cell','The wires are a different colour','Three bulbs always make each bulb brighter'], why:'The voltage from one cell is shared between the three bulbs, so each gets less and glows more dimly.'}
  ],
  hands: {id:'g5-electricity-h', title:'Circuit code-breakers', need:['A circuit kit at school: cells, wires, bulbs, a buzzer, a motor and a switch','A partner','Paper, a pencil and a ruler'],
   steps:['Draw a circuit diagram using the correct symbols. Use a ruler for the wires.','Swap diagrams with your partner.','Build your partner’s circuit exactly as it is drawn.','Check: does it work the way your partner expected?','Change one thing, like adding a cell or a bulb. Predict what will happen first, then test it.','Record your predictions and results in a table.'],
   ask:'Did your predictions match your results? Draw a circuit that would make a motor spin as fast as possible safely.'}
 }
}
};

/* topic names for grades that do not have Library stories yet */
window.SQ_CHAL_TOPICS = {
  g4: [
    {id:'living', name:'Living things and their habitats', portal:'Living Wonders', color:'leaf'},
    {id:'animals', name:'Animals, including humans', portal:'Living Wonders', color:'rose'},
    {id:'materials', name:'Properties and changes of materials', portal:'Matter & Magic', color:'sun'},
    {id:'space', name:'Earth and space', portal:'Our Amazing Planet', color:'sky'},
    {id:'forces', name:'Forces', portal:'Power & Motion', color:'plum'}
  ],
  g5: [
    {id:'living', name:'Living things and their habitats', portal:'Living Wonders', color:'leaf'},
    {id:'animals', name:'Animals, including humans', portal:'Living Wonders', color:'rose'},
    {id:'evolution', name:'Evolution and inheritance', portal:'Living Wonders', color:'teal'},
    {id:'light', name:'Light', portal:'Power & Motion', color:'sun'},
    {id:'electricity', name:'Electricity', portal:'Power & Motion', color:'plum'}
  ]
};
