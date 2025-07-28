// Find largest number in an array using reudce() method

let arr = [2,5,7,8,45,76,89,21,43]              // creating an array

let largestNum = arr.reduce((prev,curr) => {        
    return prev > curr ? prev : curr ;          // if "prev" is greater then return "prev" otherwise return curr
})
console.log(largestNum);