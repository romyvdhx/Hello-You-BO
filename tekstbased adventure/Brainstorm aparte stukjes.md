de code start met een input.question("What is your name?");

1: Ik wil het verhaal starten met een 2d player die recht voor iemand staat. Je klikt dan op een knopje om met die persoon voor je te praten. Deze peroon vertelt je over een item dat verborgen ligt in een gevaarlijke dungeon. Hij vraagt of jij dit item zou kunnen halen. De persoon geeft hier ook een korte uitleg over dat hij gehoord heeft over je en hoe heldhaftig je bent en daarom vraagt hij jou om hulp. Helemaal aan het begin geef je je naam, zodat de persoon je kan aanspreken met je naam wat het net iets persoonlijker maakt. Voor het item wil ik een magic item gebruiken die iemand zou kunnen healen.
_Item_: Een magische plant die heel rare is en alleen in de diepste grotten groeit. Er zijn rumours dat er eentje bij het einde van de diepe grot net buiten de village groeit. Deze grot is zeer gevaarlijk, daarom is er nog niemand bij deze plant gekomen.
_Verhaal achter het item_:
_Volledige dialogue_: Ah, name, what a fortuitous encounter! Rumors of your valor in rescuing an entire village from the clutches of a fearsome dragon have reached my ears. Your reputation precedes you, and I find myself in desperate need of someone of your caliber. You see, my daughter is afflicted by a grave ailment, a curse that has plagued her since birth, and it now threatens to consume her entirely. There exists a remedy, hidden deep within a foreboding dungeon. Eons ago there was a battle between two formidable witches and few have dared to tread upon the threshold of this accursed cavern since. Would you consider embarking on a perilous quest to retrieve this cure for me?
	_If yes_: 3
	_If no_: 2  

2: _dialogue van de man_: I beg of you warrior, you are my only hope. I am prepared to offer every precious coin in my possession. My daughter means everything to me...
Hier kun je ervoor kiezen om het alsnog gratis te doen om de man te helpen, of dat je het geldbedrag accepteerd. Either way ga je door naar 3.
	toch gratis de quest doen: 3
	het geldbedrag accepteren: 3

3: _dialogue_: I cannot express my gratitude enough! The object of your quest is a delicate bloom known as Luminara's Tear. It takes its name from the witch who engaged in a fierce confrontation with the malevolent sorceress, and it is whispered that the evil sorceress ensnared Luminara within these very caverns... You should be able to find this plant in the darkest part of the cave. Allow me to accompany you to the entrance.
_Hierna wil ik een console.log doen dat er langzaam . . . in beeld komt om soort van te laten zien dat je samen naar de dungeon loopt._
In de afbeelding sta je nu samen met de man bij een opening van een grot.
	_dialogue_: Here we are. May fortune favor your valor, brave one.
	_press arrow up / w to enter the cave._

Zodra je de cave in bent gelopen zie je outlines van cavemuren naast en voor je, en links en rechts zit een opening. Als eerste dialogue wordt er van beide kanten een korte beschrijving gegeven met een klein beetje verschil. De eerste keuze wordt: Ga je naar links of naar rechts? Deze keuze maakt voor het einde niks uit, omdat ze uiteindelijk allebei naar de kamer met het item linken. Verdere keuzes kunnen wel gevolgen hebben op het einde.
	_dialogue_: To your left, a narrow corridor veers deeper into the darkness. The faint sound of dripping water echoes from within. To your right, a wider tunnel stretches out. It's floor uneven with rocky terrain. You can see a few very small flickers of light at the far end of this tunnel. Which path will you choose? Left or Right? _press a/d or left / right arrow_
	Left: 4
	Right: 8

4: Na dit donkere pad kom je in een donkere kamer. Af en toe staat er een gedimd lichtgevend kristal bij de muur, waardoor je wel een beetje je route kunt zien. De encounter zijn 4 spinnen. Je kunt er hier voor kiezen of je ze aanvalt of erlangs sneakt.
_dialogue_: As you cautiously step into the dark corridor, your heart races with anticipation. The eerie glow of the crystals on the walls casts an otherworldly ambiance, revealing a room shrouded in mystery. The faint, pulsating light from the crystals is your only source of illumination.
With each step, your footsteps echo through the chamber, reverberating off the cold stone walls. The air is thick with a musty scent, and you can't shake the feeling that you're not alone. Your senses are on high alert, and it doesn't take long for your instincts to prove correct.
As you move a little deeper into the room, you spot movement on the ceiling. Looking up, you see four grotesque shapes descending on silken threads. Spiders! Their numerous beady eyes gleam in the eerie glow of the crystals, and their fangs drip with venom. What will you do?
	Attack: 5
	Try to sneak past them: 6

5: als je ze aanvalt slash je ze een voor een neer. Daarna kijk je uitgeput, maar trots om je heen. 
_dialogue_: Without hesitation, you draw your weapon and prepare to face the arachnid foes. The spiders skitter closer, their legs tapping softly on the stone floor. You know you can't afford to let them get too close, so you lunge forward, striking at the nearest one with all your might.
With a deft and powerful blow, your weapon connects, crushing the spider and sending it sprawling. But the battle is far from over. The remaining three spiders advance, hissing in anger and hunger.
You press on, determined to protect yourself from these grotesque creatures. With each swing, you manage to fend off their attacks, your strikes connecting with deadly precision. One by one, the spiders fall, their venomous fangs no match for your skill and determination.
As the last spider writhes in its final moments, you take a moment to catch your breath. While standing still you can hear the faint echoes of dripping water coming from the adjoining chamber. 
Press a to move to the next room 
	continue: 7

6: als je beluit er voorbij te sneaken, lukt het je om voorbij de eerste 2 te sneaken, maar wanneer je langs de 3e spin gaat, ziet de 4e spin je en die bijt je in je rug. 
_dialogue_: You quickly realize that taking on all four spiders in combat may be too risky. Instead, you decide to trust your stealthy instincts and attempt to sneak past them.
Hugging the shadows cast by the glowing crystals, you move silently, your every step calculated to avoid attracting their attention. The first two spiders, engrossed in their own macabre dance, pay you no mind as you slink past them.
However, as you cautiously approach the third spider, your foot brushes against a strand of the monster's web. You witness the delicate threads quiver and ripple, gradually transmitting the vibrations toward the spider until it reaches one of its legs. The spider turns, its eight eyes narrowing as it locks onto your position.
You freeze, hoping that your motionlessness will make you invisible to the creature. but it's too late. The spider hisses menacingly and lunges at you with lightning speed. Your heart sinks as its venomous fangs pierce your skin, sending searing pain through your body. 
	einde 1

7: Na de spinnen kom je in een nieuwe kamer met een lake en waterval of dripstone. Hier komt iig het geluid van het water vandaan. Aan het einde van deze kamer ga je door naar de kamer van de human. In deze kamer zweeft de geest van Luminara rond. Ze zit hier al die tijd al opgesloten. Korte interactie met Luminara beschrijven. Beschrijven dat je een lichtwitte ziel ziet verschijnen, benadrukken dat ze light magic en hope uitstraalt, ze zegt iets van "save me". Daarna beschrijving kamer uitlopen en naar de volgende kamer. 
_dialogue_: As you trace the soft, ethereal radiance of the crystals into the adjoining chamber, you see your reflection gradually appearing on the floor beneath you. It dawns upon you that within this dimly illuminated space lies a profound, still lake. To the left of the lake, a pathway meanders. Will you...
	stand still and look around for a second: 7.1
	walk to the next room: 7.2 

7.1: _dialogue_: You try to look around, but your surroundings are shrouded in darkness. The walls, ashen and jagged, converge with the inky depths of the water. An unquenchable thirst gnaws at you, and you kneel down in front of the lake. The chilling water sends shivers down your spine as you take a sip. In that moment, a spectral luminescence materializes above the lake, manifesting into the form of a beautiful woman. She emits a radiant white light interwoven with glimmering threads of gold that dance upon the water's surface. Her long blonde hair bears a crown made out of a gorgeous flower. The stems are golden and the buds are shaped like tiny dewdrops filled with a dark blue liquid that sparkles like a thousand stars. As you look at her, a feeling of hope slowly starts filling your body. As she opens her mouth, an angelic but weak voice echoes through the room: "_save me_". The misty apparition dissolves into the air, leaving you once more in solitary darkness. You remain motionless for a brief moment, and then your gaze falls upon an opening in the wall that leads further into the cave.
	continue: 13

7.2: _dialogue_: You follow the path along the lake's edge until you encounter an opening in the wall, guiding you into a new, more illuminated chamber. With a determined stride, you enter.
	continue: 13

8: De lichtjes zijn vuurvliegjes en lichtgevende kristallen. De kristallen staan door de gehele cave heen zodat het niet pikdonker is, maar het extra licht dat je zag aan het begin zijn de vuurvliegjes. Een optie van een keuze voor de vuurvliegjes is ermee interacten.
_dialogue_: As you step into the room, your senses are immediately ensnared by an ethereal spectacle. The walls are adorned with small clusters of bioluminescent crystals that emit a soft glow, casting a gentle, cerulean luminescence across the chamber. Fireflies dance through the air, their flickering illumination intermingling with the radiant crystals, creating an enchanting play of light and shadow. What will you do? 
	Walk to the next room: 10
	Try and catch the fireflies: 9

9: Als je besluit te interacten met de vuurvliegjes kun je er een aantal vangen in een lege potion bottle die nog in je pouch zit. Hierdoor kun je een beetje rondkijken door de kamer en zie je iets op de muur geschreven staan. Op de muur staat een uitleg/hint/prophecy naar de curse en/of de cure van de curse. Zodra je die hebt gelezen ga je door naar de volgende ruimte 
_dialogue_: With a twinkle of curiosity, you resolve to capturing these enigmatic fireflies. In the depths of your pouch you come across an empty potion bottle, its size seemingly tailored for the task at hand. After several deft attempts, you successfully ensnare a substantial gathering of the radiant insects within the confines of the bottle. 
With your newfound trophy in hand, you turn your attention to the room itself. Amidst the glimmering crystals and the mesmerizing dance of fireflies, your eyes fall upon a cryptic inscription etched into one of the walls. The inscription reads: "INPUT TEXT." You stand in contemplative silence, the words seeming to pulse with latent significance. Could this be about the sinister curse spoken of by the desperate man?
	continue: 10

10: Na de vuurvliegjes kom je in een ruimte met een kleine encounter die te maken heeft met het beetje verlichte, rocky gangpad. Je kunt ook hier kiezen voor aanvallen of sneaken. Eerst beschrijven hoe je de kamer uitloopt, daarna hoe de nieuwe ruimte eruit ziet.
_dialogue_: As you step into the new chamber, your attention is drawn to a sizable, furry form sprawled upon the rugged terrain. Its back rises and falls rhythmically, each breath a deliberate motion.
	attack: 11
	sneak past: 12

11: Resolute in your decision, you opt to confront the creature. It doesn't seem all that imposing, after all. Drawing your sword from its sheath, you cautiously approach the beast. When you draw near, you plant your steps with precision, hoist your sword, and swiftly swing it, unleashing a fierce _slaaassshhh_. But as the fur begins to ripple and shift, your heart lurches with horror, for you realize that your attack has barely left a mark. As the creature stirs and gradually rises, its true enormity dawns upon you – it's far larger than your initial assessment. Now that it's standing, you can look at it a little closer. The creature looks like a bear, but it's a lot bigger and has the head of an owl. This fearsome owlbear ascends onto its hind legs, its towering form casting a daunting shadow over you. With a single swipe of its massive paw, your fate is sealed. 
	einde 1

12: Carefully assessing the situation, you realize that a direct confrontation with this beast may be unwise. Your instincts guide you to employ a more cunning approach. You watch the monster's rhythmic breathing for a moment, timing your movements with the gentle rise and fall of its back. With nimble precision, you step softly, shifting your weight silently from one foot to the other. Each calculated movement is made with the utmost care to avoid creating any sound that might alert the beast. Your heart pounds as you make your way around the perimeter of the chamber, ever so gradually inching closer to the next room while maintaining a keen awareness of the creature's slumbering form. As you navigate the treacherous path, your patience and dexterity pay off, and you manage to slip past the creature undetected. 
	continue: 13

13: In deze kamer komt er een human die in de village woont die je een tijdje terug gered hebt. Hier krijg je wat backstory over jezelf en een keuze die (indirect) te maken heeft met welke boss je dalijk gaat bevechten.
_dialogue_: Your character enters a dimly lit chamber deep within the dungeon. At the far end of the room, they spot a lone human, dressed in tattered clothes and bearing a faint resemblance to one of the villagers they saved from the monster attack.
Human: Startled, the human raises a shaky hand. _Who goes there? Friend or foe?_
	Identify yourself as the savior of the village: 13.1
	Remain silent: 13.2

13.1: Eyes widening in recognition and relief. _You're the one! Thank the gods you've come. I've been trapped here for days. I want to go deeper into the dungeon, but there's a grim choice ahead. You see, there are only two paths that lead deeper into the cave, but they are guarded by grueling monsters. On the left, I can hear fire crackling with a faint sissing. On the right I occasionally hear falling rocks. What route will you take?_
	Boss links: 14
	Boss rechts: 15

13.2: _I don't know who you are, but I need help. Can you help me?_
	Identify yourself: 13.1

14: Je loopt de kamer in en er komt een beschrijving van boss 1. Serpentian Harbinger
_dialogue_: As you step into the chamber, you see a hulking, reptilian brute, covered in scales that shimmer with a metallic sheen. Its eyes glow with an eerie, otherworldly light, and its claws are sharp enough to cut through stone. There is smoke coming out its nostrils and mouth and the ground around this monstrosity is on fire.
	attack belly: 17
	attack eyes: 18
	turn back: 16

15: Je loopt de kamer in en er komt een beschrijving van boss 2. The Stone Goliath
_dialogue_: As you step into the chamber, you see a massive, humanoid creature made entirely of enchanted stone. It stands over ten feet tall and is adorned with ancient, runic markings etched into its stony skin. When it slams into the ground, it creates shockwaves, causing rocks to rain down from above. 
	attack runic markings: 19
	attack shoulder: 20
	turn back: 16

16: _dialogue_: The peril appears too great, leading you to choose to retreat. You retrace your steps, leaving the chamber and the cursed dungeon. Outside, the father is waiting. He notices you have returned with empty hands. _I see you weren't able to find it. Thank you for trying anyway. If you couldn't do it, no one can._ 
	einde 2

17: _dialogue_: With a determined gleam in your eye, you clutch your weapon tightly and step boldly into the chamber. The air crackles with tension as you square off against the hulking, reptilian brute, its metallic scales reflecting the eerie, otherworldly light in a mesmerizing dance. It narrows its glowing eyes upon you, seemingly unfazed by your presence. As you inch closer, adrenaline courses through your veins, your heart pounding with each step. The reptilian behemoth lets out a deafening roar, a sound that reverberates through the chamber and sends shivers down your spine. Its claws glint menacingly, sharp enough to cleave through solid stone. Undaunted, you focus your resolve and strike. With a quick, calculated movement, you lunge forward, aiming your weapon for the creature's vulnerable belly. The blade finds its mark, sinking deep into the beast's underbelly, and a visceral roar of pain echoes through the chamber. The creature thrashes and bellows, smoke spewing from its nostrils and mouth as the ground around it trembles. You hold your ground, maintaining your grip on the weapon, as the reptilian monstrosity's struggles weaken. It eventually collapses to the ground, its otherworldly light extinguished. 
	continue: 21

18: _dialogue_: With a bead of sweat on your brow, you prepare for your daring confrontation with the monstrous reptilian creature. Steel determination courses through your veins as you tighten your grip on your weapon. In a swift motion, you dart towards the creature, attempting to land a blow on its glowing eyes. But the creature is quick to react. As your blade draws near, the reptilian brute snaps its head back, its eyes narrowing with a predatory intelligence. With a startling agility, it evades your attack, and in a flash, one of its claws lashes out, striking you with a resounding blow that sends you sprawling across the chamber. Pain sears through your body as you tumble to the ground. You've given it your all, but in this brutal clash, it's clear the creature is the victor. The metallic scales shimmer triumphantly, and the beast lets out a triumphant roar. The ground shakes beneath its weight as it asserts its dominance, leaving you defeated and at its mercy. 
	einde 1

19: _dialogue_: You quickly assess the situation, realizing that the runic markings may be the creature's vulnerability. With a determined focus, you draw your sword and make a calculated move towards the creature. The stone golem, sensing the threat, attempts to strike back with a powerful fist. You expertly dodge the attack, narrowly avoiding the crushing blow, and are closing in on the runic markings. Each strike at the runes emits a bright light, and the stone creature roars in agony with each blow. As you continue to strike at the runic symbols, the creature weakens progressively. It trembles under the relentless assault, desperately trying to defend its ancient markings. But with each precise strike, the runes begin to shatter. Finally, you deliver a devastating blow that shatters the last runic symbol. The stone creature crumbles into pieces, its stony form disintegrating into a pile of rubble. The chamber falls silent, and you emerge victorious. 
	continue: 21

20: _dialogue_: As you prepare to engage the colossal stone creature, your eyes narrow in on a seemingly vulnerable spot amidst the rugged contours of its rocky form. Alongside the imposing runic markings etched across its body, you notice a hairline fracture on its left shoulder, a slight imperfection amidst the otherwise unyielding stone. With a calculated lunge, you direct your weapon toward this apparent weakness, hoping to exploit it to your advantage. Your blade strikes the fracture with precision, causing a cascade of tiny, shimmering stone shards to spray into the air. However, your momentary satisfaction soon turns to dread. The massive stone creature, unshaken by your attack, slowly turns its attention toward you. Its eyes, deep chasms of ancient, mystical power, lock onto your position. With an unexpected agility, it raises one enormous, stone-covered arm and retaliates. A colossal, stone-clad fist crashes down upon you with tremendous force, sending shockwaves through the chamber. The impact is devastating, and the ground trembles beneath you as rocks rain down from the ceiling. Though you managed to strike a perceived weakness, it quickly becomes evident that the creature's true strength lies in its unyielding, enchanted core. Your vision blurs as pain courses through your body, and with a final, desperate gasp, you realize that this battle is over. 
	einde 1

21: final room