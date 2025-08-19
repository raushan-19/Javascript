function getData (dataID){  // created a function "getData" and passes a value "dataID".
  return new Promise((resolve, reject) => {     // created a Promise and returning it in the function    
    setTimeout(() => {         // crteated a setTimeout with arrow function             
        console.log("Data = ",dataID);  // printing the value of "dataID"
          resolve("success");       // printing the success msg with resolve
    },2000);
    });
};

// -> Promise Chain

getData(1).then( (res) =>{  // calling "getData" with value 1 and adding then with arrow function if Promise is fullfilled

  return getData(2);  // again return "getData" with value 2. 

}).then( (res) => {

      return getData (3);   // again return "getData" with value 3.

}).then((res) =>{    // adding then with arrow function if Promise is fullfilled 
    
      console.log(res);  // printing the value of resolve

});