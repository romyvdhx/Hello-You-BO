const input = require('readline-sync');

let playerName = input.question("What is your name? ");

let storyParts = 
[
    {
        text:"A man approaches you: \"Ah, " + playerName + ", what a fortuitous encounter! Rumors of your valor in rescuing an entire village \nfrom the clutches of a fearsome dragon have reached my ears. Your reputation precedes you, and I find myself in desperate \nneed of someone of your caliber. You see, my daughter is afflicted by a grave ailment, a curse that has plagued her since \nbirth, and it now threatens to consume her entirely. There exists a remedy, hidden deep within a foreboding dungeon. Eons \nago there was a battle between two formidable witches and few have dared to tread upon the threshold of this accursed \ncavern since. Would you consider embarking on a perilous quest to retrieve this cure for me?\"",
        question:"a. yes \nb. no \n",
        answers:[
            {
                answer:"a",
                nextPart:2
            },
            {
                answer:"b",
                nextPart:1
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"The man continues, \"I beg of you warrior, you are my only hope. I am prepared to offer every precious coin in my \npossession. My daughter means everything to me...\"",
        question:"a. do it for free anyways \nb. accept the money \n",
        answers:[
            {
                answer:"a",
                nextPart:2
            },
            {
                answer:"b",
                nextPart:2
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"The man says \"I cannot express my gratitude enough! The object of your quest is a delicate bloom known as Luminara's \nTear. It takes its name from the witch who engaged in a fierce confrontation with the malevolent sorceress, and it is \nwhispered that the evil sorceress ensnared Luminara within these very caverns... You should be able to find this plant in the \ndarkest part of the cave. Allow me to accompany you to the entrance.\" After walking for a little while, you come to a halt \n\"Here we are. May fortune favor your valor, brave one.\"",
        question:"press a to enter the cave \n",
        answers:[
            {
                answer:"a",
                nextPart:3
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"                                                    \n              O                O                    \n             /|\\              /|\\                   \n              |                |                    \n_____,__.,___/_\\___,.____.____/_\\__,_____._______,._\n                                                    "
    },
    {
        text:"To your left, a narrow corridor veers deeper into the darkness. The faint sound of dripping water echoes from within. To \nyour right, a wider tunnel stretches out. It's floor uneven with rocky terrain. You can see a few very small flickers of \nlight at the far end of this tunnel. Which path will you choose? Left or Right?",
        question:"a. left \nb. right \n",
        answers:[
            {
                answer:"a",
                nextPart:4
            },
            {
                answer:"b",
                nextPart:10
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"-----------------------___________-------------------\n  -----------_________/     .     \\____-------- -----\n--- -- -----/    ,      '         .    \\__---    ----\n  -------  |                 .            \\---- -----\n-----  -- /         '              '       \\_________\n_________/     .        '   ,            '           \n          '           .            '         .        \n  '   ,         .             '        .         \"   \n________   .       '     O       '          ,        \n----    |               /|\\                 _________\n   ---- |    '    ,      |     .    \"      |---  ----\n------   \\____          / \\           ____/  -----   \n---      ---- \\_____   .   '    _____/--- ---- ------\n --------      -----\\       ,  /   -------   ------  \n---        -----     |,       |-----       -------   \n---------------------/        \\----------------------"
    },
    {
        text:"As you cautiously step into the dark corridor, your heart races with anticipation. The eerie glow of the crystals on the walls \ncasts an otherworldly ambiance, revealing a room shrouded in mystery. The faint, pulsating light from the crystals is your \nonly source of illumination. With each step, your footsteps echo through the chamber, reverberating off the cold stone \nwalls. The air is thick with a musty scent, and you can't shake the feeling that you're not alone. Your senses are on high \nalert, and it doesn't take long for your instincts to prove correct. As you move a little deeper into the room, you spot \nmovement on the ceiling. Looking up, you see four grotesque shapes descending on silken threads. Spiders! Their \nnumerous beady eyes gleam in the eerie glow of the crystals, and their fangs drip with venom. What will you do?",
        question:"a. attack \nb. sneak past \n",
        answers:[
            {
                answer:"a",
                nextPart:5
            },
            {
                answer:"b",
                nextPart:6
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"Without hesitation, you draw your weapon and prepare to face the arachnid foes. The spiders skitter closer, their legs \ntapping softly on the stone floor. You know you can't afford to let them get too close, so you lunge forward, striking at the \nnearest one with all your might. With a deft and powerful blow, your weapon connects, crushing the spider and sending it \nsprawling. But the battle is far from over. The remaining three spiders advance, hissing in anger and hunger. You press on, \ndetermined to protect yourself from these grotesque creatures. With each swing, you manage to fend off their attacks, your \nstrikes connecting with deadly precision. One by one, the spiders fall, their venomous fangs no match for your skill and \ndetermination. As the last spider writhes in its final moments, you take a moment to catch your breath. While standing still \nyou can hear the faint echoes of dripping water coming from the adjoining chamber.",
        question:"press a to continue to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:7
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"You quickly realize that taking on all four spiders in combat may be too risky. Instead, you decide to trust your stealthy \ninstincts and attempt to sneak past them. Hugging the shadows cast by the glowing crystals, you move silently, your every \nstep calculated to avoid attracting their attention. The first two spiders, engrossed in their own macabre dance, pay you no \nmind as you slink past them. However, as you cautiously approach the third spider, your foot brushes against a strand of the \nmonster's web. You witness the delicate threads quiver and ripple, gradually transmitting the vibrations toward the spider \nuntil it reaches one of its legs. The spider turns, its eight eyes narrowing as it locks onto your position. You freeze, hoping \nthat your motionlessness will make you invisible to the creature. but it's too late. The spider hisses menacingly and lunges \nat you with lightning speed. Your heart sinks as its venomous fangs pierce your skin, sending searing pain through your body.",
        isEnding:true,
        hasArt:false
    },
    {
        text:"As you trace the soft, ethereal radiance of the crystals into the adjoining chamber, you see your reflection gradually \nappearing on the floor beneath you. It dawns upon you that within this dimly illuminated space lies a profound, still \nlake. To the left of the lake, a pathway meanders. Will you...",
        question:"a. stand still and look around \nb. walk to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:8
            },
            {
                answer:"b",
                nextPart:9
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"You try to look around, but your surroundings are shrouded in darkness. The walls, ashen and jagged, converge with the \ninky depths of the water. An unquenchable thirst gnaws at you, and you kneel down in front of the lake. The chilling water \nsends shivers down your spine as you take a sip. In that moment, a spectral luminescence materializes above the lake, \nmanifesting into the form of a beautiful woman. She emits a radiant white light interwoven with glimmering threads of gold \nthat dance upon the water's surface. Her long blonde hair bears a crown made out of a gorgeous flower. The stems are \ngolden and the buds are shaped like tiny dewdrops filled with a dark blue liquid that sparkles like a thousand stars. As you \nlook at her, a feeling of hope slowly starts filling your body. As she opens her mouth, an angelic but weak voice echoes \nthrough the room: \"save me\". The misty apparition dissolves into the air, leaving you once more in solitary darkness. You \nremain motionless for a brief moment, and then your gaze falls upon an opening in the wall that leads further into the cave.",
        question:"press a to continue to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:15
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"You follow the path along the lake's edge until you encounter an opening in the wall, guiding you into a new, more \nilluminated chamber. With a determined stride, you enter.",
        question:"press a to continue to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:15
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"As you step into the room, your senses are immediately ensnared by an ethereal spectacle. The walls are adorned with \nsmall clusters of bioluminescent crystals that emit a soft glow, casting a gentle, cerulean luminescence across the chamber. \nFireflies dance through the air, their flickering illumination intermingling with the radiant crystals, creating an enchanting \nplay of light and shadow. What will you do?",
        question:"a. walk to the next room \nb. try to catch the fireflies \n",
        answers:[
            {
                answer:"a",
                nextPart:12
            },
            {
                answer:"b",
                nextPart:11
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"With a twinkle of curiosity, you resolve to capturing these enigmatic fireflies. In the depths of your pouch you come across \nan empty potion bottle, its size seemingly tailored for the task at hand. After several deft attempts, you successfully ensnare \na substantial gathering of the radiant insects within the confines of the bottle. With your newfound trophy in hand, you \nturn your attention to the room itself. Amidst the glimmering crystals and the mesmerizing dance of fireflies, your eyes fall \nupon a cryptic inscription etched into one of the walls. The inscription reads: \n\"The curse's mark endures, its malevolence unyielding; time alone shall not cleanse the stain.\" \nYou stand in contemplative silence, the words seeming to pulse with latent significance. Could this be about the sinister \ncurse spoken of by the desperate man?",
        question:"press a to continue to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:12
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"As you step into the new chamber, your attention is drawn to a sizable, furry form sprawled upon the rugged terrain. Its \nback rises and falls rhythmically, each breath a deliberate motion.",
        question:"a. attack \nb.sneak past \n",
        answers:[
            {
                answer:"a",
                nextPart:13
            },
            {
                answer:"b",
                nextPart:14
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"Resolute in your decision, you opt to confront the creature. It doesn't seem all that imposing, after all. Drawing your sword \nfrom its sheath, you cautiously approach the beast. When you draw near, you plant your steps with precision, hoist your \nsword, and swiftly swing it, unleashing a fierce slash. But as the fur begins to ripple and shift, your heart lurches with \nhorror, for you realize that your attack has barely left a mark. As the creature stirs and gradually rises, its true enormity \ndawns upon you – it's far larger than your initial assessment. Now that it's standing, you can look at it a little closer. The \ncreature looks like a bear, but it's a lot bigger and has the head of an owl. This fearsome owlbear ascends onto its hind legs, \nits towering form casting a daunting shadow over you. With a single swipe of its massive paw, your fate is sealed.",
        isEnding:true,
        hasArt:false
    },
    {
        text:"Carefully assessing the situation, you realize that a direct confrontation with this beast may be unwise. Your instincts guide \nyou to employ a more cunning approach. You watch the monster's rhythmic breathing for a moment, timing your movements \nwith the gentle rise and fall of its back. With nimble precision, you step softly, shifting your weight silently from one foot to \nthe other. Each calculated movement is made with the utmost care to avoid creating any sound that might alert the beast. \nYour heart pounds as you make your way around the perimeter of the chamber, ever so gradually inching closer to the next \nroom while maintaining a keen awareness of the creature's slumbering form. As you navigate the treacherous path, your \npatience and dexterity pay off, and you manage to slip past the creature undetected.",
        question:"press a to continue to the next room \n",
        answers:[
            {
                answer:"a",
                nextPart:15
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"You enter a dimly lit chamber deep within the dungeon. At the far end of the room, you spot a lone human, dressed in \ntattered clothes and bearing a faint resemblance to one of the villagers you saved from the monster attack. Startled, the \nhuman raises a shaky hand and calls out: \"Who goes there? Friend or foe?\"",
        question:"a. identify yourself \nb. remain silent \n",
        answers:[
            {
                answer:"a",
                nextPart:16
            },
            {
                answer:"b",
                nextPart:17
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"----_____/       \\_____________/      \\__________----\n---/        .              '                .    \\---\n--|  '              ,             ,            '  |--\n--|           ,              O          .         |--\n--|                ,    .   /|\\              ,    |--\n--|     '                    |      '             |--\n--|          ,              / \\          .        |--\n--|  '               ,                ,      .    |--\n--|       '                     .                 |--\n--|           ,         O                 ,       |--\n--|   '             .  /|\\         ,           .  |--\n--|       .             |    '          .         |--\n--|  .          '      / \\     ,            '     |--\n---\\_____  ,    _________________    '  _________/---\n---------\\     /-----------------\\     /-------------"
    },
    {
        text:"Eyes widening in recognition and relief, he declares: \"You're the one! Thank the gods you've come. I've been trapped here \nfor days. I want to go deeper into the dungeon, but there's a grim choice ahead. You see, there are only two paths that lead \ndeeper into the cave, but they are guarded by gruelling monsters. On the left, I can hear fire crackling with a faint sissing. \nOn the right I occasionally hear falling rocks. What route will you take?\"",
        question:"a. left \nb. right \n",
        answers:[
            {
                answer:"a",
                nextPart:18
            },
            {
                answer:"b",
                nextPart:19
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"----_____/       \\_____________/      \\__________----\n---/        .              '                .    \\---\n--|  '              ,             ,            '  |--\n--|           ,              O          .         |--\n--|                ,    .   /|\\              ,    |--\n--|     '                    |      '             |--\n--|          ,              / \\          .        |--\n--|  '               ,                ,      .    |--\n--|       '                     .                 |--\n--|           ,         O                 ,       |--\n--|   '             .  /|\\         ,           .  |--\n--|       .             |    '          .         |--\n--|  .          '      / \\     ,            '     |--\n---\\_____  ,    _________________    '  _________/---\n---------\\     /-----------------\\     /-------------"
    },
    {
        text:"The man continues: \"I don't know who you are, but I need help. Can you help me?\"",
        question:"press a to identify yourself to the man \n",
        answers:[
            {
                answer:"a",
                nextPart:16
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"----_____/       \\_____________/      \\__________----\n---/        .              '                .    \\---\n--|  '              ,             ,            '  |--\n--|           ,              O          .         |--\n--|                ,    .   /|\\              ,    |--\n--|     '                    |      '             |--\n--|          ,              / \\          .        |--\n--|  '               ,                ,      .    |--\n--|       '                     .                 |--\n--|           ,         O                 ,       |--\n--|   '             .  /|\\         ,           .  |--\n--|       .             |    '          .         |--\n--|  .          '      / \\     ,            '     |--\n---\\_____  ,    _________________    '  _________/---\n---------\\     /-----------------\\     /-------------"
    },
    {
        text:"As you step into the chamber, you see a hulking, reptilian brute, covered in scales that shimmer with a metallic sheen. Its \neyes glow with an eerie, otherworldly light, and its claws are sharp enough to cut through stone. There is smoke coming out \nits nostrils and mouth and the ground around this monstrosity is on fire.",
        question:"a. attack its eyes \nb. attack its stomach \nc. turn back \n",
        answers:[
            {
                answer:"a",
                nextPart:22
            },
            {
                answer:"b",
                nextPart:21
            },
            {
                answer:"c",
                nextPart:20
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"As you step into the chamber, you see a massive, humanoid creature made entirely of enchanted stone. It stands over ten \nfeet tall and is adorned with ancient, runic markings etched into its stony skin. When it slams into the ground, it creates \nshockwaves, causing rocks to rain down from above.",
        question:"a. attack the runic markings \nb. attack its shoulder \nc. turn back \n",
        answers:[
            {
                answer:"a",
                nextPart:23
            },
            {
                answer:"b",
                nextPart:24
            },
            {
                answer:"c",
                nextPart:20
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"The peril appears too great, leading you to choose to retreat. You retrace your steps, leaving the chamber and the cursed \ndungeon. Outside, the father is waiting. He notices you have returned with empty hands and mumbles \"I see you weren't \nable to find it. Thank you for trying anyway. If you couldn't do it, no one can.\"",
        isEnding:true,
        hasArt:true,
        art:"____   ---------    ------  |         |------   -----\n    \\______________________/           \\_____________\n                                 O                   \n                                /|\\                  \n                    '            |             '     \n                                / \\                  \n       .                                             \n                         O       .                   \n                        /|\\                          \n                         |                           \n                        / \\                          \n             ,                            '          \n_____________________________________________________"
    },
    {
        text:"With a determined gleam in your eye, you clutch your weapon tightly and step boldly into the chamber. The air crackles \nwith tension as you square off against the hulking, reptilian brute, its metallic scales reflecting the eerie, otherworldly light \nin a mesmerizing dance. It narrows its glowing eyes upon you, seemingly unfazed by your presence. As you inch closer, \nadrenaline courses through your veins, your heart pounding with each step. The reptilian behemoth lets out a deafening \nroar, a sound that reverberates through the chamber and sends shivers down your spine. Its claws glint menacingly, sharp \nenough to cleave through solid stone. Undaunted, you focus your resolve and strike. With a quick, calculated movement, \nyou lunge forward, aiming your weapon for the creature's vulnerable belly. The blade finds its mark, sinking deep into the \nbeast's underbelly, and a visceral roar of pain echoes through the chamber. The creature thrashes and bellows, smoke \nspewing from its nostrils and mouth as the ground around it trembles. You hold your ground, maintaining your grip on the \nweapon, as the reptilian monstrosity's struggles weaken. It eventually collapses to the ground, its otherworldly light \nextinguished.",
        question:"press a to continue \n",
        answers:[
            {
                answer:"a",
                nextPart:25
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"With a bead of sweat on your brow, you prepare for your daring confrontation with the monstrous reptilian creature. Steel \ndetermination courses through your veins as you tighten your grip on your weapon. In a swift motion, you dart towards the \ncreature, attempting to land a blow on its glowing eyes. But the creature is quick to react. As your blade draws near, the \nreptilian brute snaps its head back, its eyes narrowing with a predatory intelligence. With a startling agility, it evades your \nattack, and in a flash, one of its claws lashes out, striking you with a resounding blow that sends you sprawling across the \nchamber. Pain sears through your body as you tumble to the ground. You've given it your all, but in this brutal clash, it's \nclear the creature is the victor. The metallic scales shimmer triumphantly, and the beast lets out a triumphant roar. The \nground shakes beneath its weight as it asserts its dominance, leaving you defeated and at its mercy.",
        isEnding:true,
        hasArt:false
    },
    {
        text:"You quickly assess the situation, realizing that the runic markings may be the creature's vulnerability. With a determined \nfocus, you draw your sword and make a calculated move towards the creature. The stone golem, sensing the threat, \nattempts to strike back with a powerful fist. You expertly dodge the attack, narrowly avoiding the crushing blow, and are \nclosing in on the runic markings. Each strike at the runes emits a bright light, and the stone creature roars in agony with \neach blow. As you continue to strike at the runic symbols, the creature weakens progressively. It trembles under the \nrelentless assault, desperately trying to defend its ancient markings. But with each precise strike, the runes begin to shatter. \nFinally, you deliver a devastating blow that shatters the last runic symbol. The stone creature crumbles into pieces, its stony \nform disintegrating into a pile of rubble. The chamber falls silent, and you emerge victorious.",
        question:"press a to continue \n",
        answers:[
            {
                answer:"a",
                nextPart:25
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"As you prepare to engage the colossal stone creature, your eyes narrow in on a seemingly vulnerable spot amidst the \nrugged contours of its rocky form. Alongside the imposing runic markings etched across its body, you notice a hairline \nfracture on its left shoulder, a slight imperfection amidst the otherwise unyielding stone. With a calculated lunge, you direct \nyour weapon toward this apparent weakness, hoping to exploit it to your advantage. Your blade strikes the fracture with \nprecision, causing a cascade of tiny, shimmering stone shards to spray into the air. However, your momentary satisfaction \nsoon turns to dread. The massive stone creature, unshaken by your attack, slowly turns its attention toward you. Its eyes, \ndeep chasms of ancient, mystical power, lock onto your position. With an unexpected agility, it raises one enormous, \nstone-covered arm and retaliates. A colossal, stone-clad fist crashes down upon you with tremendous force, sending \nshockwaves through the chamber. The impact is devastating, and the ground trembles beneath you as rocks rain down \nfrom the ceiling. Though you managed to strike a perceived weakness, it quickly becomes evident that the creature's true \ntrength lies in its unyielding, enchanted core. Your vision blurs as pain courses through your body, and with a final, \ndesperate gasp, you realize that this battle is over.",
        isEnding:true,
        hasArt:false
    },
    {
        text:"With the creature vanquished, you find a moment to explore the room. Your gaze falls upon a small doorway, and beyond \nits threshold, a brilliant blue glimmer beckons. As you approach, a breathtaking revelation unfolds: a remarkable plant with \na golden stem and leaves resembling tiny dewdrops, each one filled with a deep blue liquid that shimmers like the cosmos \nitself. There's no mistaking it; before you stands Luminara's Tear.",
        question:"press a to continue \n",
        answers:[
            {
                answer:"a",
                nextPart:26
            }
        ],
        isEnding:false,
        hasArt:false
    },
    {
        text:"You approach the plant with a slow and deliberate pace, captivated by its exquisite appearance. Gently, you pluck the \nglistening dewdrops and store them in your pouch. As you retrace your steps, exiting the dungeon, you encounter the man \nstanding outside the entrance, eagerly awaiting your return. The man, curiosity twinkling in his eyes, asks: \"Have you \nsucceeded? Did you bring me the cure?\"",
        question:"a. hand him the cure \nb. don't give him the cure \n",
        answers:[
            {
                answer:"a",
                nextPart:27
            },
            {
                answer:"b",
                nextPart:28
            }
        ],
        isEnding:false,
        hasArt:true,
        art:"____   ---------    ------  |         |------   -----\n    \\______________________/           \\_____________\n                                 O                   \n                                /|\\                  \n                    '            |             '     \n                                / \\                  \n       .                                             \n                         O       .                   \n                        /|\\                          \n                         |                           \n                        / \\                          \n             ,                            '          \n_____________________________________________________"
    },
    {
        text:"You retrieve the delicate petals from your pouch and present them to the man. Gratitude fills his eyes as he utters: \"Thank \nyou so much. Let's deliver the cure to my daughter swiftly.\" Guiding you to his humble abode, you step into the cozy living \nroom. On the far side of the room, a fragile little girl lies on the couch, her pallid face resembling freshly fallen snow, her \neyes struggling to stay open. You hasten towards her, extending the tiny petals. The moment they touch her, both the girl \nand the petals radiate a brilliant, ethereal light. A misty apparition takes form, her long, golden hair crowned with \nLuminara's tears. Her voice is an angelic melody as she speaks, \"Thank you for rescuing me from that malevolent cave \nwhere I languished for ages. As a token of my gratitude, I shall mend this child's ailment.\" With a gentle touch, Luminara's \nradiant hand caresses the girl, who stirs and slowly opens her eyes. Luminara smiles at you and, with a graceful motion, \nfades away. The man rushes to his daughter, embracing her tightly, tears of relief and joy streaming down his face.",
        isEnding:true,
        hasArt:true,
        art:"____   ---------    ------  |         |------   -----\n    \\______________________/           \\_____________\n                                 O                   \n                                /|\\                  \n                    '            |             '     \n                                / \\                  \n       .                                             \n                         O       .                   \n                        /|\\                          \n                         |                           \n                        / \\                          \n             ,                            '          \n_____________________________________________________"
    },
    {
        text:"You gaze down, shaking your head in defeat. Disappointment shadows the man's eyes, though he does his best to conceal \nit. He softly says, \"Thank you for your efforts. I know you did your utmost.\" As you bid him farewell, an unexpected glow \nemanates from your pouch. A hazy figure takes form, a woman with flowing blonde hair and a crown crafted from \nLuminara's Tears. She introduces herself as Luminara and expresses her profound gratitude for your rescue. However, her \njoy dims as she senses tension between you and the man. \"What troubles you? You saved me from that wretched cave, \nshouldn't you be rejoicing?\" The man, his expression flustered, questions you: \"Have you deceived me? Did you manage to \nfind the cure?\" Luminara's gaze shifts to you, her countenance revealing her disdain, and she mutters incantations under \nher breath. Suddenly, you find yourself back within the sinister depths of the cave. As you attempt to leave through the \nentrance, you realize you're now trapped in this malevolent place. In the distance, you catch a glimpse of Luminara and \nthe man entering the man's house, determined to save the ailing girl.",
        isEnding:true,
        hasArt:true,
        art:"____   ---------    ------  |         |------   -----\n    \\______________________/           \\_____________\n                                 O                   \n                                /|\\                  \n                    '            |             '     \n                                / \\                  \n       .                                             \n                         O       .                   \n                        /|\\                          \n                         |                           \n                        / \\                          \n             ,                            '          \n_____________________________________________________"
    }
];

let replay = true;

while(replay == true)
{
    console.clear();
    let validReplayAnswer = false;
    let nextPartAnswer = 0;
    let nextPart = 0;
    while(storyParts[nextPart].isEnding == false)
    {
        let validAnswer = false;
        if(storyParts[nextPart].hasArt == true)
        {
            console.log(storyParts[nextPart].art);
        }
        console.log(storyParts[nextPart].text);
        let playerAnswer = input.question(storyParts[nextPart].question);
        for(let i = 0; i < storyParts[nextPart].answers.length; i++)
        {
            if(storyParts[nextPart].answers[i].answer == playerAnswer)
            {
                validAnswer = true;
                nextPartAnswer = storyParts[nextPart].answers[i].nextPart;
            }
        }
        if(validAnswer == true)
        {
            nextPart = nextPartAnswer;
            console.clear();
        } else
        {
            console.clear();
            let validAnswers = "You can only answer with ";
            for(let i = 0; i < storyParts[nextPart].answers.length; i++)
            {
                if(i > 0)
                {
                    validAnswers = validAnswers + " or ";
                }
                validAnswers = validAnswers + storyParts[nextPart].answers[i].answer;
            }
            console.log(validAnswers);
        }
    }
    if(storyParts[nextPart].hasArt == true)
    {
        console.log(storyParts[nextPart].art);
    }
    console.log(storyParts[nextPart].text);
    console.log("The end");
    while(validReplayAnswer == false)
    {
        let replayAnswer = input.question("Do you want to play again? \na. yes \nb. no \n");
        if(replayAnswer == "a")
        {
            validReplayAnswer = true;
        } else if(replayAnswer == "b")
        {
            validReplayAnswer = true;
            replay = false;
        } else
        {
            console.clear();
            console.log("You can only answer with a or b");
        }
    }
}