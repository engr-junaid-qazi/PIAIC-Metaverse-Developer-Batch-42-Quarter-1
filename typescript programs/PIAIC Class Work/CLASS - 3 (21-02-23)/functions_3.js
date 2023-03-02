function sum() {
    var prompt = require('prompt-sync')({ sigint: true });
    var n1 = parseFloat(prompt("Enter 1st Number: "));
    var n2 = parseFloat(prompt("Enter 2nd Number: "));
    //var c =  n1+n2;      
    console.log("The Sum of Two Numbers is = ", n1 + n2);
    return n1 + n2;
}
sum();
