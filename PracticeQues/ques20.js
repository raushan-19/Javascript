// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let btn = document.querySelector("#btn");       // Accessing the button
let body = document.querySelector("body");      // Accessing the body
let currMode = "light";                         // creating a variable "currMode" & giving it a value "light"

btn.addEventListener("click",() => {            // creating an arrow function & adding an event "click" in the button using "eventlistener" 
   if (currMode === "light") {                  // checking if "currMode" has "light" or not

    currMode = "dark";                          // if value matches, it change the value to "dark"
    body.classList.remove("light");             // removing the previous value from the body
    body.classList.add("dark");                 // adding the new value value to the body
   }
   
   else {

    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
   }

   console.log(currMode);           // it will print the value of "currMode" on the console
});