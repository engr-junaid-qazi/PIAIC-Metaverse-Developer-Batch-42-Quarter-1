
function calc(){ 
    const prompt = require('prompt-sync')({sigint: true});
    let n1 = parseFloat(prompt("Enter 1st Number: "));
    let n2 = parseFloat(prompt("Enter 2nd Number: "));
    console.log(arguments);
    console.log("The Sum of Two Numbers is = ", n1+n2);
}
calc();