// Event Handling in JavaScript

let btn1 = document.querySelector("#btn1");     // Accessing the button with the help of its id

btn1.onclick = () => {              // creating an arrow function in which we are storing the "onclick" event.
    console.log("btn 1 was clicked");       // printing somw output on the console when event happens
};


let box = document.querySelector("div");        // Accessing the div

box.onmouseover = () => {                   // creating an arrow function in which we are storing the "onmouseover" event
    alert("you are in div");
};

