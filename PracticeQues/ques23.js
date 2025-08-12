// Create a snake , water , gun game in javascript.

let user = prompt("Enter S, W, or G");

let cpuI = Math.floor(Math.random() * 3);        // "math.random is use to generate  random numbers btwn o to 2 because we have last digit `3` which excluded & math.floor is use to remove decimal values of generated numbers"

let cpu = ["S","W","G"][cpuI];

const match = (cpu,user) => {
    if(cpu === user ){
        return "Match is tied.";
    }else if(cpu === "S" && user === "W" ){
        return "cpu";
    }else if(cpu === "W" && user === "S" ){
        return "user";
    }else if(cpu === "G" && user === "S" ){
        return "cpu";
    }else if(cpu === "S" && user === "G" ){
        return "user";
    }else if(cpu === "W" && user === "G" ){
        return "cpu";
    }else if(cpu === "G" && user === "W" ){
        return "user";
    }
};

let result = match(cpu,user);
document.write(`The winner is : `+ result);  // "document.write" directly shows the output on the browser