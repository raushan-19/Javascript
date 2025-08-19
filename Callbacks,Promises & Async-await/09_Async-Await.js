 async function hello (){       // Writing "async" keyword before the function bcz it always returns a promise
    console.log("Hello Shradha");
}

function api () {       // creating function
    return new Promise((resolve,reject) => {        // creating a promise and returning it in the function
       setTimeout( (res) =>{    // creating setTimeout with arrow function
         console.log("Weather data");   
        resolve(200);
        console.log(res);
       },5000);
    });
};

async function getWeatherData() {      // creating a function using async 
    await api();        // calling api function with await bcz it will pause all other execution of this "getWeatherData" function until the api has executed
    await api(); // it will execute after the 1st call of api
}

// getWeatherData();