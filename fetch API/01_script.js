let para = document.querySelector("#para");
let btn = document.querySelector("#btn");

let url = "https://catfact.ninja/facts";

const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(url);
    console.log(response);  // JSON format
    let line = await response.json();
    console.log(line.data);
    let randomindex = Math.floor(Math.random() *  line.data.length);
    para.innerText = line.data[randomindex].fact;
};

btn.addEventListener("click", getFacts );