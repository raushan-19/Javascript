// Create an array of numbers and take a input from the user to add number to the array. Keep adding numbers to the array until 0 is added to the array.

let arr = [1, 4, 65, 76, 98, 67];
let a;
do {
    a = prompt("Enter a number :");
    a = Number.parseInt(a);
    arr.push(a);
    console.log(arr);
}
while (a != 0);
