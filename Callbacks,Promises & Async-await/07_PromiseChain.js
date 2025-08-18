function asynfunc1(){   // creating a function "asynfunc1".
    return new Promise((resolve, reject) => {   // Create and return a new Promise object with resolve & reject functions.
        setTimeout( () => {     // creating setTimeout arrow function
            console.log("you got data1");  // print "you got data1" as the Promise is created. 
            resolve("success");  // creating  msg "resolve"
        }, 4000);
    });
};

function asynfunc2(){  // created another function "asynfunc2".
    return new Promise((resolve, reject) => {   // Create and return a new Promise object with resolve & reject functions.
        setTimeout( () => { // creating setTimeout arrow function
            console.log("you got data2");
            resolve("success");
        }, 4000);
    });
};

console.log("fetching data1......");   // print the msg "fetching data1......"

asynfunc1().then( (res) => {   // calling "asynfunc1" function and if Promise is fullfilled then print the value of resolve.
console.log(res);

console.log("fetching data2......");    // print the msg "fetching data2......"

asynfunc2().then( (res) => {       // calling "asynfunc2" function and if Promise is fullfilled then print the value of resolve.
console.log(res);
    });

});