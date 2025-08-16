class person{
    constructor(name){        
        this.species = "homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }
}

class engineer extends person {
    constructor(name){           // passing the variable "name" into child constructor
        super(name);             // -> to invoke parent constructor     && passing the variable "name" into super so that it can take the parameter of "name" from parent constructor
        
    }
    work (){ 
        super.eat();               // to invoke "eat" function firstly then "work" function
        console.log("solve problems, build something");
    }
}

let engObj = new engineer ("Raushan");