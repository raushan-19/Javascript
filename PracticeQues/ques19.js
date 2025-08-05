// Create <p> tag in html, give it a class & some style.
// Now create a new class in css and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using class list.

let para = document.querySelector("p");

// para.setAttribute("class","newClass");

para.classList.add("newClass");