// Return the number of vowels in a string

// Declare a string variable
const str = "hello world";

// Declare an empty string variable for vowels count
const vowelsCount = "";

// Declare an empty string variable for count
let count = "";

// Define a function that returns the number of vowels in a string
function countVowels(stri) {

// Use a for loop to iterate over each character of the string
for (let i = 0; i < stri.length; i++) {

// Use an array of vowels and the includes method to check if the character is a vowel
if (["a", "e", "i", "o", "u"].includes(stri.charAt(i))) {
    
// Increment the count variable by one if the character is a vowel
count++;
}
}
// Return the count variable as the final result
return count;
}

// Call the function with the str variable as the argument and log the result to the console
console.log(countVowels(str));