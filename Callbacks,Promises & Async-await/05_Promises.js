function getData (dataID, getNextdata){      // Declaring a function named getData with 2 parameters: dataID and getNextdata
    return new Promise((resolve, reject) => { // Returning a new Promise object which takes two arguments: resolve and reject
          
        setTimeout(() => {                    // setTimeout is used to delay execution of the code inside it
                                 
            console.log("Data = ", dataID);   // After the delay, print "Data =" followed by the value of dataID
            
            resolve("success");               // Mark the Promise as fulfilled (resolved) with the value "success"
                
            if(getNextdata){                  // Check if getNextdata callback function is provided
                getNextdata();                // If yes, then call getNextdata() function
            };
            
        }, 8000);                             // The delay for setTimeout is 8000 milliseconds (8 seconds)

    });                                       // End of Promise
};                                            // End of getData function

let finaval = getData(123);                   // Calling getData with dataID = 123, returns a Promise and stores it in finaval
