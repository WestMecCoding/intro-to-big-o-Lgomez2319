
// Initialize some variable called someStr to some string of your choice
let someStr = "watermelon";

// Create a named function that takes an arguement 'str'
function reverseString(str) {
    // in the function reverse 'str'
    str = str.split("").reverse().join("");
    // return 'str'
    return str;
}

// outside of the function, log the function and pass someStr
console.log(reverseString(someStr));
