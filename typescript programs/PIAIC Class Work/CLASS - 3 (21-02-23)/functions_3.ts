function sum(){
    
    const prompt = require('prompt-sync')({sigint: true});
     let n1 = parseFloat(prompt("Enter 1st Number: "));
     let n2 = parseFloat(prompt("Enter 2nd Number: "));
     //var c =  n1+n2;      
     console.log("The Sum of Two Numbers is = ",  n1+n2);
     return n1+n2;
}
sum();