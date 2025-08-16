let a = 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);

//console.log("a+b = ",a+c);        // -> suppose we have an error in this line

try{            // writing a "try" block
    console.log("a+b = ",a+c);        // writring the line of code in which may be error is present
} catch (err) {         // wrting "catch" block & passing an argument "err" in it
    console.log(err);     // if the error will present in line it will print the error
}

console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);