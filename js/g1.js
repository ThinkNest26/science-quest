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
  ]
};
