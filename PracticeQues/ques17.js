// create a h2 heading element with text - "hello raushan".append from apna college students" to this text using js.

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Shradha Mam";

// create three divs with common class name - "box". access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";