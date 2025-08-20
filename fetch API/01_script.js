let para = document.querySelector("#para");     // Accessing the paragraph 
let btn = document.querySelector("#btn");   // Accessing the button

let url = "https://catfact.ninja/facts";    // Putting the url in a variable

const getFacts = async () => {     // making an async(arrow) function 
    console.log("Getting Data...");     
    let response = await fetch(url);    // fetching url with await in varaible "response"  
    let line = await response.json();   // creating a variable "line" in which "response" is converted into JSON format
    console.log(response); 
    console.log(line.data); // This prints the array of "cat facts" that comes from the API  (data is array which stores all facts of this API)
    let randomindex = Math.floor(Math.random() *  line.data.length);     // creating a random index between the length of the array "data"
    para.innerText = line.data[randomindex].fact;    // it will print the value of a random fact which is extracted from the "data" array through "randomindex" 
};

btn.addEventListener("click", getFacts );  // on clicking the button "getFacts" will execute.