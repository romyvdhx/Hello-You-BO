const input = require('readline-sync');

let playerName = input.question("What is your name? ");

let storyParts = 
[
    {
        textOne:"A man approaches you: \"Ah, " + playerName + ", what a fortuitous encounter! Rumors of your valor in rescuing an entire village from the clutches of a fearsome dragon have reached my ears. Your reputation precedes you, and I find \nmyself in desperate need of someone of your caliber. You see, my daughter is afflicted by a grave ailment, a curse that has plagued her since birth, and it now threatens to consume her entirely. There exists a remedy, \nhidden deep within a foreboding dungeon. Eons ago there was a battle between two formidable witches and few have dared to tread upon the threshold of this accursed cavern since. Would you consider embarking on a perilous \nquest to retrieve this cure for me?\""
    },
    {
        textTwo:"deel 2"
    },
    {
        textThree:""
    },
    {
        textFour:""
    },
    {
        textFive:""
    },
    {
        textSix:""
    },
    {
        textSeven:""
    },
    {
        textEight:""
    },
    {
        textNine:""
    },
    {
        textTen:""
    },
    {
        textEleven:""
    },
    {
        textTwelve:""
    },
    {
        textThirteen:""
    },
    {
        textFourteen:""
    },
    {
        textFifteen:""
    },
    {
        textSixteen:""
    },
    {
        textSeventeen:""
    },
    {
        textEighteen:""
    },
    {
        textNineteen:""
    },
    {
        textTwenty:""
    },
    {
        textTwentyone:""
    },
    {
        textTwentytwo:""
    },
    {
        textTwentythree:""
    },
    {
        textTwentyfour:""
    },
    {
        textTwentyfive:""
    },
    {
        textTwentysix:""
    },
    {
        textTwentyseven:""
    },
    {
        textTwentyeight:""
    }
];

let replay = true;
let alive = true;

while(replay == true)
{
    while(alive == true)
    {
        console.log(storyParts[0].textOne);
        let answerOne = input.question("A. yes \nB. no \n");
        if(answerOne == "a")
        {
            console.log("deel 3");
        } else if(answerOne == "b")
        {
            console.log(storyParts[1].textTwo);
            alive = false;
        } else
        {
            console.log("You can only answer with a or b.");
        }
    }
}