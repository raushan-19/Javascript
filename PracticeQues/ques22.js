// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.

let age = prompt("enter your age");
age = Number.parseInt(age);  // it is use to convert age into a number 

const canDrive = (age) =>{
    return age >= 18 ? true : false;
};

if(canDrive(age)){
    alert("you can drive.");
}else{
    alert("you can't drive!")
}