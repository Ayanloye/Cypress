// Print a table containing multiplication tables


// A function to print a multiplication table of a given number
function printTable(number) {
    // A variable to store the output
    let output = ""
    // A loop to iterate from 1 to 12
    for (let i = 1; i <= 12; i++) {
    // concatenates the product of the number and the iterator to the output
    output += number + " x " + i + " = " + number * i + "\n";
    }
    // Print the output to the console
    console.log(output);
    }
    // Call the function with any number you want
printTable(6);