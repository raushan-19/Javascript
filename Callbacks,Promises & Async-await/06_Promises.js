const getPromise = () => {            // Define a function named getPromise which returns a Promise
    return new Promise((resolve,reject) => {   // Create and return a new Promise object with resolve & reject functions
        console.log("I am promise");  // Print "I am promise" immediately when the Promise is created
        reject("some error occurred"); // Reject the Promise with an error message
        // resolve("success");         // (Commented) This would fulfill the Promise if used instead of reject
    });
};

let promise = getPromise();           // Call the getPromise function and store the returned Promise in variable "promise"

promise.then( (res) => {              // Attach a 'then' handler to run when the Promise is resolved (fulfilled)
    console.log("Promise fullfilled",res); // Print "Promise fullfilled" if resolve() was called  & from "res" we can access original value of resolve
});

promise.catch( (err) => {             // Attach a 'catch' handler to run when the Promise is rejected
    console.log("rejected",err);           // Print "rejected" if reject() was called & from "err" we can access original value of reject
});
