/* 2- Task: Create an Array Manipulation Program

Breakdown:

•	Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
•	Use array methods to perform the following manipulations:
    o	Append a string to the end of the array
    o	Prepend a string to the beginning of the array
    o	Remove a string from a specific index in the array and replace it with another string
•	Display the array before and after each manipulation to the user as output.*/
/* Append a string to the end of the array */
var str = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Append String at the end of given Array using string's push() method: ", str);
str.push("melon");
console.log(str);
/* Prepend a string to the beginning of the array */
str.unshift("grapes");
console.log("Prepend String at the beginning of given Array using string's unshift() method: ", str);
/* Remove a string from a specific index in the array and replace it with
another string */
str.splice(2, 1, "mango");
console.log("Remove String \"banana\" at Index 2 & replaces it with other String \"orange\" in the given Array using string's splice() method: ", str);
