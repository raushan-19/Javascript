// For a given array of numbers, print the sqaure of each value using the forEach loop.

let arr = [76,89,65,43,12,98,21];       // creating an array of numbers

arr.forEach((val) =>{           // creating an arrow function "val" in forEach loop which will go through every number of array
    let sqaure = val*val;       // taking a new variable "square" in which we calculate the sqaure of values 
    console.log("Square of",val,"is",sqaure);        
}
) 