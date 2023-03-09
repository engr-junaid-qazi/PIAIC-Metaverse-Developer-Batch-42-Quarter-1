"use strict";
/* 3- Task: Create a Function to Determine the Discount Amount for a Product

Breakdown:

•	Create a function that takes a product price and a discount percentage as
    input and calculates the discount amount for the product using the formula:
    discount amount = product price * (discount percentage / 100).
•	If the discount percentage is greater than or equal to 50%, the function
    should return an error message indicating that the discount percentage is
    invalid.
•	Display the original price, discount percentage, discount amount, and
    final price of the product to the user as output.
•	Test the function with different product prices and discount percentages. */
exports.__esModule = true;
var prompt = require("prompt-sync")();
function discAmount() {
    var x = parseFloat(prompt("Enter Product Price (in PKR): "));
    var y = parseFloat(prompt("Enter Discount Percentage (%) to Give: "));
    var z = x * (y / 100);
    if (y >= 50) {
        console.group("Discount Perentage is Invalid");
    }
    else {
        console.log("Original Price of the Product: ", x + " Rs.");
        console.log("Discount Given: ", y + " %");
        console.log("Discount Given: ", z + " Rs.");
        console.log("Price After Discount: ", x - z + " Rs.");
    }
}
discAmount();
