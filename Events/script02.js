// // EVENT HANDLING IN JAVASCRIPT

// let btn1 = document.querySelector("#btn1");     // Accessing the button with the help of its id

// btn1.onclick = () => {              // creating an arrow function in which we are adding  the "onclick" event.
//     console.log("btn 1 was clicked");       // printing somw output on the console when event happens
// };


// let box = document.querySelector("div");        // Accessing the div

// box.onmouseover = () => {                   // creating an arrow function in which we are adding the "onmouseover" event
//     alert("you are in div");
// };

// // EVENT OBJECT

// let btn1 = document.querySelector("#btn1");     // Accessing the button

// btn1.onclick = (evt) => {         // Creating an arrow function in which we are adding "onclick" event and taking a variable "e".
//     console.log(evt);     // printing the variable as a object on the console
//     console.log(evt.type);    // it will give the type of event
//     console.log(evt.target);      // it will give html of the element 
// }

// EVENT LISTENER

let btn1 = document.querySelector("#btn1");     // Accessing the button

btn1.addEventListener("click",(evt) => {
    console.log("button 1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click",() => {
    alert("button 1 was clicked 😁👍");
});