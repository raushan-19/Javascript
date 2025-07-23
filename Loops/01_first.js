// print 1 to 5.

// for(let i =1; i<=5; i++){
//     console.log(i);
// }

// calculate sum of 1 to n.

// let num = prompt("Enter your number : ");
// let sum = 0;

// for (let i = 1; i <= num; i++){
//     sum = sum + i;
// }

// console.log("Sum = ",sum);
 
// while loop 

// let i= 1;
// while (i<=5){
//     console.log("i=",i);    // print 1 to 5
//     i=i+1;
// }

// Do While loop

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while (i<= 5);

// for-of loop  (it is used for strings and arrays)

// let str = "Raushan Tiwari";

// let size = 0;       // it is to check the size of the string
// for(let i of str){          // this is usually used in strings and arrays
//     console.log("i=",i);
//     size++;
// }
// console.log("Size of string is",size);         // output :- 14

// for-in loop (it is used for objects and arrays)

let student ={
    name:"Raushan",
    age:20,
    course:"BCA",
    roll:135
};

for (let i in student){
    console.log("key =",i,"values =",student[i]);  // it will return keys in output 
}
