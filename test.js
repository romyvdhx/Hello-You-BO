const input = require('readline-sync');
let validAnswer = false;

while(validAnswer == false)
{
    let answerOne = input.question("a. yes \nb. no \n");
        if(answerOne == "a")
        {
            validAnswer = true;
            console.log("yay");
        } else if(answerOne == "b")
        {
            validAnswer = true;
            console.log("more yay");
        }
}
