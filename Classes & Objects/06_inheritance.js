class person{

        constructor(){
            this.species = "homo sapiens";
        }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends person {
    work (){
        console.log("solve problems, build something");
    }
}

class doctor extends person {
    work (){
        console.log("Treat patients");
    }
}

let shradhaObj = new engineer ();