
function calc(num1:number, num2:number){ 
    const prompt = require('prompt-sync')({sigint: true});
     let n1 = parseFloat(prompt("Enter 1st Number: ",num1));
     let n2 = parseFloat(prompt("Enter 2nd Number: ",num2));
    console.log(arguments);
}
calc(num1,num2);