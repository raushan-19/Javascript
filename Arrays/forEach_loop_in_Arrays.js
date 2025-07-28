let arr = ["ironman","thor","hulk","shaktiman","spiderman"];        // creating an array

arr.forEach( (val,idx) => {   // creating an arrow function "val" in forEach loop which will go through every number of array
    console.log(val,idx);       // it will print all the valu of array consecutively
} )

// NOTE :- in forEach loop we can use three parameters : 1. value, 2. Index, 3. Array itself
// NOTE :- forEach loop is only used in arrays