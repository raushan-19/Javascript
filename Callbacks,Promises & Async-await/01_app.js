// // -> Synchronous Programming

// console.log("one");    // it will execute first
// console.log("two");     // it will wait for the execution of 1st line then it will execute
// console.log("three");

// -> Asynchronous Programming

function hello (){          // creating a function "hello"
    console.log("Hello Shradha");
};

setTimeout(hello,5000);    // it will execute "hello" function after 5 seconds.( 5 sec = 5000ms)

// -> "setTimeout" can also work as arrow finction

console.log("one");         // it will print faster
console.log("two");

setTimeout (() =>{              // creating an arrow function
    console.log("hello Raushan");       // it will print "hello Raushan" after 4 sec
},4000);

console.log("three");       // it will also be not affected be "setTimeout" ,it also prints beofe "setTimeout"
console.log("four");