// Create an array to store companies -> "bloomberg","microsoft","uber","google","IBM","netflix"

let comapny = ["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(comapny);

// a. Remove the first company from the array

comapny.shift();
console.log(comapny);


// b. Remove uber and add ola in its place 

comapny.splice(1,1,"ola");
console.log(comapny);


// c. Add amazon at the end

comapny.push("amazon");
console.log(comapny);
