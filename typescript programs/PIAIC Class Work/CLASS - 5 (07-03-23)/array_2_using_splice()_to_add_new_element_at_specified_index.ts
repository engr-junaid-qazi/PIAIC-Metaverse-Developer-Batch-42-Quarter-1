/* Using Splice to add new item at particular index */

let fruits:string [] = ["Apple", "Orange", "Banana", "Lemon"];
fruits.splice(2, 0, "Grapes", "Cherry");
console.log(fruits);

let fruits2:string [] = ["Apple", "Orange", "Banana", "Lemon"];
fruits2.splice(2, 1, "Grapes", "Cherry");
console.log(fruits2);
