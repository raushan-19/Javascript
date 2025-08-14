class Car {     // creating a class "car"
    
    constructor(brand,customer){            // creating a constructor with arguments ("brand" & "customer")
        console.log("creating new brand");      
        this.brand = brand;             // cretaing a property in the class through constructor
        this.customer = customer;

    }

    start (){           
        console.log("start");
    }

    stop (){           
        console.log("stop");
    }

}

let fortuner = new Car() ;              
fortuner.brand = "toyota";                  // giving the value to the property
fortuner.customer = "raushan";
console.log(fortuner);    // printing the object "fortuner" on the console

let lexus = new Car();
lexus.brand = "supra";
lexus.customer = "sarabjeet";
console.log(lexus);    // printing the object "lexus" on the console