// // push() method (add items at end)

// let foodItems1 = ["potato","apple","litchi","tomato"];
// foodItems1.push("chips");
// console.log(foodItems1);  // output :- 'potato', 'apple', 'litchi', 'tomato', 'chips'

// // pop() method (remove items at end)

// let foodItems2 = ["potato","apple","litchi","tomato"];
// let deletedItem1 = foodItems2.pop();   // it will delete the last item of array
// console.log(foodItems2);   // output :- 'potato', 'apple', 'litchi' 
// console.log("Deleted item =",deletedItem1);      // output :- tomato

// // to-string() method (converts array into string)

// let foodItems3 = ["potato","apple","litchi","tomato"];
// console.log(foodItems3.toString());

// // concat() method (joins multiple arrays & returns result)

// let foodItems4 = ["potato","apple","litchi","tomato"];
// let drinks = ["cocacola","pepsi","maza","thumsup"];
// let items = foodItems4.concat(drinks);
// console.log(items); 

// // unshift() method (add items at start)

// let foodItems5 = ["potato","apple","litchi","tomato"];
// foodItems5.unshift("chips");
// console.log(foodItems5);  // output :- 'chips', 'potato', 'apple', 'litchi', 'tomato'

// // shift() method (delete items from start)

// let foodItems6 = ["potato","apple","litchi","tomato"];
// let deletedItem2 = foodItems6.shift();   // it will delete the first item of array
// console.log(foodItems6);   // output :- 'apple', 'litchi','tomato'
// console.log("Deleted item =",deletedItem2);      // output :- potato

// // slice() method (returns a piece of a array)

// let foodItems7 = ["potato","apple","litchi","tomato"];
// console.log(foodItems7.slice(0,3)); // output :- 'potato', 'apple', 'litchi'  (index 3 is excluded)

// // splice() method [change original array (add,remove,replace)]

// let arr = [0,1,2,3,4,5,6,7];
// console.log(arr);
// arr.splice(2,2,102,103);  // at index 2 , 2 elements will delete, Deleted element will replace with 102 and 103
// console.log(arr);

// // adding through splice method
// let arr2 = [0,1,2,3,4,5,6,7];
// arr2.splice(2,0,101);     // at index 2 , no element will delete, 101 will add at index 2
// console.log(arr2);

// // deleteing through splice 
// let arr3 = [0,1,2,3,4,5,6,7];
// arr3.splice(2,3);       // at index 2 , 3 elements will be deleted , no element will be added
// console.log(arr3);

// // replacing through splice
// let arr4 = [0,1,2,3,4,5,6,7];
// arr4.splice(3,1,103);       // at index 3 , 1 element will be deleted , 103 will take the place of that element
// console.log(arr4);

// // map() method (similar as "forEach" but difference is that it will give you a new array)

// let num = [1,3,6,9,76,56];
// num.map((val) => {
//     console.log(val);
// })

// // filter() method

// let numbers = [1,7,90,68,75,44,24,32,31,33];
// let newNumbers = numbers.filter((val) => {      // creating a new array in which by using filter method we goes through every number of old array
//     if(val % 2 == 0) console.log(val)           // checking if the number is even or not ,if it is even the it will store amd print in new array
// })

// // reduce() method

// let arr5 = [1,2,3,4];
// let output = arr5.reduce((res,cur) => {         // creating a new array in which by using reduce method we assign '1' as "res" and '2' as "cur"
//     return res+cur;                             // returning the values by doing their sum
// })
// console.log(output);