// Get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.

let num = prompt("Enter a number ");   // using "prompt" we can take input from the user on the website
console.log(num);

if(num%5 === 0 ){
    console.log("number is multiple of 5.")
} else{
    console.log("number is NOT a multiple of 5.")
}