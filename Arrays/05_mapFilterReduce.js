// Array map method

// NOTE => map() creates a new array by performing some operations on each array element.

// let arr = [45, 23, 21];
// console.log(arr);

// let a = arr.map((value)=>{
//     return value+1;
// })
// console.log(a);

// Array filter method

// let arr2 = [45, 23, 21, 0, 2, 5];
// let b = arr2.filter((a)=>{
//     return a<=10;
// })
// console.log(b);

// Array reduce method

let arr3 = [1, 2, 3, 4, 5, 2];

let a = arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(a);