let promise = new Promise((resolve, reject) => {     // Creating a new Promise object and assigning it to variable "promise".
                                                    // Promise constructor takes a function with two arguments:
                                                    // "resolve" (for success) and "reject" (for failure).

    console.log("I am a promise.");     // This line runs immediately when the promise is created.
                                        // It prints "I am a promise." to the console.

 // reject("some error occured");   // This would reject the promise with an error message.
                                    // (Currently commented out, so it won’t run.)

    resolve("success");     // This resolves the promise with the value "success".
                            // Means the promise is completed successfully.
});   
// End of promise creation.