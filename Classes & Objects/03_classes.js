class toyotaCar {           // creating a class
    start (){           // creating a function named "start"
        console.log("start");
    }

    stop (){            // creating a function named "stop"
        console.log("stop");
    }

    setBrand(brand){        // creating a function "setBrand" & passing an argument "brand" in it 
        this.brandName = brand;      // creating a property "brandName" in the object
    }

}

let fortuner = new toyotaCar() ;        // created an object "fortuner" by using a keyword "new" and calling the class "toyotaCar".
fortuner.setBrand("fortuner legender");    // entering the value "fortuner legender" in the property "brandName"

let lexus = new toyotaCar();