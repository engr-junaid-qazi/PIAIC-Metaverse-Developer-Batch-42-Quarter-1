function calculator(){
    const prompt = require('prompt-sync')({sigint: true});
    let n1 = parseFloat(prompt("Enter 1st Number: "));
    let n2 = parseFloat(prompt("Enter 2nd Number: "));
    let op = prompt("Enter Operator (+, -, *, /): "); 

    if(op == "+"){
        console.log("The Sum of Two Numbers is = ", n1+n2); 
    }

    if(op == "-"){
        console.log("The Difference of Two Numbers is = ", n1-n2);
    } 
    if(op == "*"){
        console.log("The Product of Two Numbers is = ", n1*n2);
    }        
    if(op == "/"){
        console.log("The Division of Two Numbers is = ", n1/n2); 
    }
}
calculator();
