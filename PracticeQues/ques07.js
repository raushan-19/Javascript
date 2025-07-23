// Prompt the user to enter their full name without using spaces. Generate a username for them based on the input. Start username with @, followed by their fullname and ending with the fullname length.

let name = prompt("Enter your name without spaces...");

let newname = "@" + name + name.length;

console.log(newname);