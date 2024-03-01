// Create a function that filters out negative numbers

//Declare variable of numbers that contain positive and negative numbers
let numbers = [10, -20, 15, -12, -34, -50, -30, 20, 75]

//use the reserve word filter and create function
numbers = numbers.filter(function(x){

//return number > negative number (-1)
    return x > -1
});

//Print numbers
console.log(numbers)