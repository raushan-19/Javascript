// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let num = Number(prompt("Guess the number between 01 to 20."));
let CorrectValue = 5;

if(num===CorrectValue){
    console.log("Congratulations, your number matches the right value",CorrectValue);
}else{
    console.log("Sorry, Guess the another one!");
}