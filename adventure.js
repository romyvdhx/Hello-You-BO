const input = require('readline-sync');

let playerName = input.question("What is your name? ");

let storyParts = 
[
    {
        textOne:"deel 1 " + playerName + " test"
    },
    {
        textTwo:"deel 2"
    },
];

let alive = true;
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