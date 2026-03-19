// NOTE :- in forEach loop we can use three parameters : 1. value, 2. Index, 3. Array itself
// NOTE :- forEach loop is only used in arrays

// forEach loop :-

let num = [1, 2, 4, 8, 7, 9];

// for (let i = 0; i <= num.length; i++) {
//     console.log(num[i]);
// }

num.forEach((element) => {      // creating an arrow function in forEach loop which will go through every number of array
    console.log(element * element);
})

// Array.from

let name = "Raushan";
let arr = Array.from(name);  // it will convert 'name' into an array.
console.log(arr);

// for...of loop

for(let i of num){
    console.log(i);
}