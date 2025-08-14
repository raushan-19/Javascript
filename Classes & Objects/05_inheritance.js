class parent{   // creating a class named "parent"
    hello (){       // crating a function "hello"
        console.log("hello");   
    }
};

class child extends parent{};       // creating a class "child" who takes all the property of class "parent" bcz we have used "extends"

let obj = new child ();  // creating an object & calling the "child" class