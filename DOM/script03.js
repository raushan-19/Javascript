// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");   // use to get Attribute name
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));     // use to change Attribute name

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "red";      // changing in style through JS
// div.style.fontSize = "25px";      
// div.innerText = "hello";
// div.style.visibility = "hidden";

// Insert Elements

// let newBtn = document.createElement("button");      // Creating new button
// newBtn.innerText = "click me!";                     // Writing something in the button 
// console.log(newBtn);                                // Showing the button on console

// let div = document.querySelector("div");            // Accessing the div
// // div.append(newBtn);                              // Adding button at the end of the div
// // div.prepend(newBtn);                                // Adding button at the starting of the div
// div.before(newBtn);                                // Adding button before the div
// // div.after(newBtn);                                // Adding button after  div

// let newhead = document.createElement("h1");             // Creating new heading
// newhead.innerText = "Heading";                          // Writing something in the heading
// console.log(newhead);                                    // Showing the heading on console


// let div = document.querySelector("div");                 // Accessing the div
// div.before(newhead);                                     // Adding heading before the div

// Delete Elements

let paragraph = document.querySelector("p");
paragraph.remove();