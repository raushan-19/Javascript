// Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first Element inside the body tag.

let btn = document.createElement("button");         // creating a button
btn.innerText = "Click me!";                        // Writing something in the button
btn.style.color = "white";                          // text color of button will be white
btn.style.backgroundColor = "red";                  // background of button will be red
console.log(btn);

let body = document.querySelector("body");          // Accessing the body
body.prepend(btn);                                  // Inserting button in the body as 1st element using "prepend"