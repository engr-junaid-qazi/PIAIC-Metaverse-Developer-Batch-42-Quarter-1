function calc(num1, num2) {
    var prompt = require('prompt-sync')({ sigint: true });
    var n1 = parseFloat(prompt("Enter 1st Number: "));
    var n2 = parseFloat(prompt("Enter 2nd Number: "));
    console.log(arguments);
}
calc();
