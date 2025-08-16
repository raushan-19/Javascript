function getData (dataID, getNextdata){          // creating a function "getData" & passing some parameters into it
    setTimeout(() => {                      // creating timeout with arrow function which execute after 2 sec
        console.log("Data = ",dataID);          // printing value of data
            if(getNextdata){                // chicking if value of "getNextdata" is present
                    getNextdata();          // if there is value of "getNextdata" the print it
            };
    },2000);
};

// -> Callback Hell

getData(1,() => {    // calling the "getData" function & entering the value of 1st parameter
      console.log("getting data 2.....");
    getData(2, () => {
          console.log("getting data 3.....");
        getData(3, () => {          // entering the value of next parameter in an arrow function,so that it will run after 2 sec of execution of 1st data
              console.log("getting data 4.....");
            getData(4);
        });
    });      
});