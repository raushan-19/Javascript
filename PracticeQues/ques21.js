// Create something on your website using "mouseover" event which affect your whole page.

let box = document.querySelector(".box");
let body = document.querySelector("body");
let mode = "light";

box.addEventListener("mouseover",(evt) => {
    if(mode === "light"){

        mode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else{

        mode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }

    console.log(mode);
});

