// Take a number as an input from user. Create an array of number drom 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array (Factorial of n).


let n = Number(prompt("Enter the number!"));    // taking input from user

let arr = [] ;          // creating an empty array to store the generated values with the help of input

for(let i=1;i<=n;i++){      // creating a loop until it reaches the value of 
    arr.push(i);            // storing the values into array
    // arr[i-1] = i;        // it also does the same work as previous line does (storing the values into array)
}
console.log(arr);       // It will print the array

let sum = arr.reduce((prev,curr) => {       // creating a variable "sum" where we create arrow func using reduce method and taking two parameters "prev" and "curr"
    return prev+curr;       // retruning the sum of "prev" and "curr"
})
console.log("sum of 1 to",n,"is",sum);

let fact = arr.reduce((prev,curr) => {       // creating a variable "fact" where we create arrow func using reduce method and taking two parameters "prev" and "curr"
    return prev*curr;       // retruning the product of "prev" and "curr"
})
console.log("Factorial of",n,"is",fact);