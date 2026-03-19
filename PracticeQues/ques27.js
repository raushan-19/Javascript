//Write a program to generate a random number and store it in a variable. The program then takes the input from the user to tell whether the guess was correct, greater or smaller than the original number. 100 - (no. of guess) is the score of user. The program is expected to terminate once the number is guessed. Number should be between 1 and 100.

// Function to generate a random number between min and max (inclusive)
function getNum(min, max) {
    // Math.random() generates a number between 0 and 1
    // Multiply it with (max - min + 1) to get range size
    // Add min to shift the range, and Math.floor to remove decimals
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random number between 1 and 100 and store it
let randomNum = getNum(1, 100);

let guess = 0;
let score;
let num;

while (num != randomNum) {

    num = parseInt(prompt("Enter number between 1 and 100"));
    if (num === randomNum) {
        alert("number matched"); 
        guess++;
        break;
    }   
    else if (num < randomNum) {
        alert("Your number is smaller than generated number.");
        guess++; 
    }     
    else if (num > randomNum) {
        alert("Your number is greater than generated number.");
        guess++; 
    }
}

score = 100 - guess;
alert("Your score is " + score);