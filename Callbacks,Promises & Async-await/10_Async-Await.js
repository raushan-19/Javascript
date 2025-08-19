function getData (dataID){  // created a function "getData" and passes a value "dataID".
  return new Promise((resolve, reject) => {     // created a Promise and returning it in the function    
    setTimeout(() => {         // crteated a setTimeout with arrow function             
        console.log("Data = ",dataID);  // printing the value of "dataID"
          resolve("success");       // printing the success msg with resolve
    },2000);
    });
};

async function getAlldata() {       // created a function with async

    console.log("fetching data1...");   // it will print "fetching data1..."
    await getData(1);       // calling "getData" with value 1, it will pause execution of "getAlldata" and execute "getData"
    console.log("fetching data2...");
    await getData(2);  // it will execute after the execution of it's previous function
    console.log("fetching data3...");
    await getData(3);  // it will execute after the execution of it's previous function
    console.log("fetching data4...");
    await getData(4);  // it will execute after the execution of it's previous function
    console.log("fetching data5...");
    await getData(5);  // it will execute after the execution of it's previous function
    console.log("fetching data6...");
    await getData(6);  // it will execute after the execution of it's previous function
    
}