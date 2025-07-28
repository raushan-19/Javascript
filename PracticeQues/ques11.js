// Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels(str){  // creating function & entering a parameter "str" 
    let count = 0;          // initializing a "count" with 0 for counting vowels

    for(char of str){       // it will go through every character of string
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){       // it will check the vowels in string
            count++;        // if vowels are matched count will increase 
        }
    }
    console.log("No. of vowels in ",str,"is",count); // it wil print the output
}
countVowels("Raushan")  // calling the function and entering the value into it  