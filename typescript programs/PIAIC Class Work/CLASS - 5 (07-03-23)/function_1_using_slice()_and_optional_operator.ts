/* rest operator (...) & optional operator (?) */

let fruits = ["Apple", "Orange", "Banana", "Lemon"];
const fruit = fruits.splice(2);
console.log(fruit);

function sum(num1:number, num2?:number){
    //return num1+num2;
    console.log("Sum is: ", num1+num2)
}
sum(2,4)

