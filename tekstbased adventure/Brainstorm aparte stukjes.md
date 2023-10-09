de code start met een input.question("What is your name?");

1: Ik wil het verhaal starten met een 2d player die recht voor iemand staat. Je klikt dan op een knopje om met die persoon voor je te praten. Deze peroon vertelt je over een item dat verborgen ligt in een gevaarlijke dungeon. Hij vraagt of jij dit item zou kunnen halen. De persoon geeft hier ook een korte uitleg over dat hij gehoord heeft over je en hoe heldhaftig je bent en daarom vraagt hij jou om hulp. Helemaal aan het begin geef je je naam, zodat de persoon je kan aanspreken met je naam wat het net iets persoonlijker maakt. Voor het item wil ik een magic item gebruiken die iemand zou kunnen healen.
_Item_: Een magische plant die heel rare is en alleen in de diepste grotten groeit. Er zijn rumours dat er eentje bij het einde van de diepe grot net buiten de village groeit. Deze grot is zeer gevaarlijk, daarom is er nog niemand bij deze plant gekomen.
_Verhaal achter het item_:
_Volledige dialogue_: Ah, name, what a fortuitous encounter! Rumors of your valor in rescuing an entire village from the clutches of a fearsome dragon have reached my ears. Your reputation precedes you, and I find myself in desperate need of someone of your caliber. You see, my daughter is afflicted by a grave ailment, a curse that has plagued her since birth, and it now threatens to consume her entirely. There exists a remedy, hidden deep within a foreboding dungeon, a place shrouded in the shadows of a legendary battle between two formidable witches, a battle that unfolded eons ago. Few have dared to tread upon the threshold of this accursed cavern since. Would you consider embarking on a perilous quest to retrieve this elusive cure for me?
	_If yes_: 3
	_If no_: 2  

2: _dialogue van de man_: I beg of you warrior, you are my only hope. I am prepared to offer every precious coin in my possession. My daughter means everything to me...
Hier kun je ervoor kiezen om het alsnog gratis te doen om de man te helpen, of dat je het geldbedrag accepteerd. Either way ga je door naar 3.
	toch gratis de quest doen: 3
	het geldbedrag accepteren: 3

3: _dialogue_: I cannot express my gratitude adequately! The object of your quest is a delicate bloom known as Luminara's Tear. It takes its name from the witch who engaged in a fierce confrontation with the malevolent sorceress, and it is whispered that the evil sorceress ensnared Luminara within these very caverns... You should be able to find this plant in the darkest part of the cave. Allow me to accompany you to the entrance.

_Hierna wil ik een console.log doen dat er langzaam . . . in beeld komt om soort van te laten zien dat je samen naar de dungeon loopt.

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
Press a to move to the next room > 7

6: als je beluit er voorbij te sneaken, lukt het je om voorbij de eerste 2 te sneaken, maar wanneer je langs de 3e spin gaat, ziet de 4e spin je en die bijt je in je rug. 
_dialogue_: You quickly realize that taking on all four spiders in combat may be too risky. Instead, you decide to trust your stealthy instincts and attempt to sneak past them.
Hugging the shadows cast by the glowing crystals, you move silently, your every step calculated to avoid attracting their attention. The first two spiders, engrossed in their own macabre dance, pay you no mind as you slink past them, your heart pounding in your chest.
However, as you inch closer to the third spider, your foot accidentally grazes a loose pebble on the cave floor, sending it skittering across the stone. The noise is faint, but it's enough to catch the attention of the monster. The spider turns, its eight eyes narrowing as it locks onto your position.
You freeze, hoping that your motionlessness will make you invisible to the creature. But it's too late. The spider hisses menacingly and lunges at you with lightning speed. Your heart sinks as its venomous fangs pierce your skin, sending searing pain through your body. > einde 1

7: Na de spinnen kom je in een nieuwe kamer met een lake en waterval of dripstone. Hier komt iig het geluid van het water vandaan. Aan het einde van deze kamer ga je door naar de kamer van de human. In deze kamer zweeft de geest van Luminara rond. Ze zit hier al die tijd al opgesloten. Korte interactie met Luminara beschrijven. Beschrijven dat je een lichtwitte ziel ziet verschijnen, benadrukken dat ze light magic en hope uitstraalt, ze zegt iets van "save me". Daarna beschrijving kamer uitlopen en naar de volgende kamer. 
_dialogue_: As you follow the faintly glowing crystals into the next room, you slowly see your reflection appearing on the ground. You realise that there is a deep lake in this dark room. On the left side of the lake is a path to walk on. Will you...
	stand still and look around for a second: 7.1
	walk to the next room: 7.2 

7.1: _dialogue_: You look around you, but its way too dark to really see anything. The walls are rocky and grey, and the water is a deep black. You realize you are thirsty and kneel down in front of the lake. The water feels very cold to your fingers and as you take a sip, a white shimmer appears above the lake. The shimmer gradually takes the form of a beautiful woman, reflecting white light with sparkles of gold reflecting in the water. Her hair is long and blonde, and on her hair you see a crown made of a gorgeous flower. The stems are golden and the buds are shaped like tiny dewdrops  filled with a dark blue liquid that sparkles like a thousand stars. As you look at her, the feeling of hope slowly starts filling your body. As she opens her mouth, an angelic but weak voice echoes through the room: "_save me_". The misty woman disappears, and you stand alone in the dark room again. You stand still for a second, and then you notice a hole in the wall that leads to the next room.
	press a to continue to the next room: 13

7.2: _dialogue_: You walk the path next to the lake until you see a hole in the wall that leads to a new, better lighted chamber and you step in.
	press a to continue to the next room: 13

8: De lichtjes zijn vuurvliegjes en lichtgevende kristallen. De kristallen staan door de gehele cave heen zodat het niet pikdonker is, maar het extra licht dat je zag aan het begin zijn de vuurvliegjes. Een optie van een keuze voor de vuurvliegjes is ermee interacten.
_dialogue_: As you step into the room, your senses are immediately ensnared by an ethereal spectacle. The walls are adorned with small clusters of bioluminescent crystals that emit a soft glow, casting a gentle, cerulean luminescence across the chamber. Fireflies dance through the air, their flickering illumination intermingling with the radiant crystals, creating an enchanting play of light and shadow. What will you do? 
	Walk to the next room: 10
	Try and catch the fireflies: 9

9: Als je besluit te interacten met de vuurvliegjes kun je er een aantal vangen in een lege potion bottle die nog in je pouch zit. Hierdoor kun je een beetje rondkijken door de kamer en zie je iets op de muur geschreven staan. Op de muur staat een uitleg/hint/prophecy naar de curse en/of de cure van de curse. Zodra je die hebt gelezen ga je door naar de volgende ruimte 
_dialogue_: With a twinkle of curiosity, you resolve to capturing these enigmatic fireflies. In the depths of your pouch you come across an empty potion bottle, its size seemingly tailored for the task at hand. After several deft attempts, you successfully ensnare a substantial gathering of the radiant insects within the confines of the bottle. 
Your newfound trophy in hand, you turn your attention to the room itself, drawn by the luminescent spectacle around you. Amidst the glimmering crystals and the mesmerizing dance of fireflies, your eyes fall upon a cryptic inscription etched into one of the walls. The inscription reads: "INPUT TEXT." You stand in contemplative silence, the words seeming to pulse with latent significance. Could this be about the sinister curse spoken of by the desperate man?
	press a to continue to the next room: 10

10: Na de vuurvliegjes kom je in een ruimte met een kleine encounter die te maken heeft met het beetje verlichte, rocky gangpad. Je kunt ook hier kiezen voor aanvallen of sneaken. Eerst beschrijven hoe je de kamer uitloopt, daarna hoe de nieuwe ruimte eruit ziet.
	aanvallen: 11
	sneaken: 12

11: Als je ze aanvalt > einde

12: erlangs sneaken > 13

13: In deze kamer komt er een human die in de village woont die je een tijdje terug gered hebt. Hier krijg je wat backstory over jezelf en een keuze die (indirect) te maken heeft met welke boss je dalijk gaat bevechten.
Boss links: 14
Boss rechts: 15

14: Je loopt de kamer in en er komt een beschrijving van boss 1. Hierna kun je kiezen:
	attack: 17
	turn back: 16

15: Je loopt de kamer in en er komt een beschrijving van boss 2. Hierna kun je kiezen:
	attack: 18
	turn back: 16

16: 

17: 

18: 