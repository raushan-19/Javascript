// push() method (add items at end)

// let foodItems = ["potato","apple","litchi","tomato"];
// foodItems.push("chips");
// console.log(foodItems);  // output :- 'potato', 'apple', 'litchi', 'tomato', 'chips'

// pop() method (remove items at end)

// let foodItems = ["potato","apple","litchi","tomato"];
// let deletedItem = foodItems.pop();   // it will delete the last item of array
// console.log(foodItems);   // output :- 'potato', 'apple', 'litchi' 
// console.log("Deleted item =",deletedItem);      // output :- tomato

// to-string() method (converts array into string)

// let foodItems = ["potato","apple","litchi","tomato"];
// console.log(foodItems.toString());

// concat() method (joins multiple arrays & returns result)

// let foodItems = ["potato","apple","litchi","tomato"];
// let drinks = ["cocacola","pepsi","maza","thumsup"];

// let items = foodItems.concat(drinks);

// console.log(items); 

// unshift() method (add items at start)

// let foodItems = ["potato","apple","litchi","tomato"];
// foodItems.unshift("chips");
// console.log(foodItems);  // output :- 'chips', 'potato', 'apple', 'litchi', 'tomato'

// shift() method (delete items from start)

let foodItems = ["potato","apple","litchi","tomato"];
let deletedItem = foodItems.shift();   // it will delete the first item of array
console.log(foodItems);   // output :- 'apple', 'litchi','tomato'
console.log("Deleted item =",deletedItem);      // output :- potato