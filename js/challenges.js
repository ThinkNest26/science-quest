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
}

};
