// You are creating a website for your college. create a class User with 2 properties, name & email. It also has a method called viewdata() that allows user to view Website data.

// Create a new class Admin which inherits from User. Add a new method called editData that allows it to edit website data.

class user{

    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("You read your data");
    }

}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        console.log("some new value");
    }
}

let student1 = new user("Raushan","rish19@gmail.com");
let student2 = new user("Shradha","Shradha21@gmail.com");
let student3 = new user("Sarabjeet","ysarabjeet6@gmail.com");

let admin = new Admin ("admin","admin@gmail.com");