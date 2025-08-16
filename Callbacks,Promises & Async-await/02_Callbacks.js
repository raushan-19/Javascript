function sum (a, b){            // Creating a function "sum"
    console.log(a + b);
}

function calculator(a, b, sumCallback){      // Creating another function "calculator" & passing the 1st function as an argument in it 
    sumCallback(a, b);          // passing callback function   (here : sumCallback == sum)
}

calculator(1, 2, sum);   // entering the value in "calculator" function and passing the "sum" function
