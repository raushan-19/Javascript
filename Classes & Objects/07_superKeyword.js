class person{
    constructor(){        
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
    }
}

class engineer extends person {
    constructor(branch){
        super();             // -> to invoke parent constructor
        this.branch = branch;
    }
    work (){
        console.log("solve problems, build something");
    }
}

let engObj = new engineer ("Computer Science");