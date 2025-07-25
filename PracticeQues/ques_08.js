// for a given array with marks of students -> [85,96,78,58,67,49].find the average of the entire class.

let marks = [85,96,78,58,67,49];
let sum = 0;

for(let val of marks){
    sum = sum + val;
}

console.log(sum);

let average = sum/marks.length;
console.log("average marks of the class is",average);
