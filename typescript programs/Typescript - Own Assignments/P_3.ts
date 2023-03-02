/* Name Cases: Store a person’s name in a variable, and then print that 
person’s name in lowercase, uppercase, and titlecase.*/

let str = "JuNaId JAHaNgir QaZI";
console.log("Name in Original: ",str);
let a = str.toUpperCase();
console.log("Name in Upper Case: ",a);

let b = str.toLowerCase();
console.log("Name in Lower Case: ",b); 

let c = str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
console.log("First letter of Name in Upper Case: ",c);

function ticase(str) {
    str = str.toLowerCase().split(' '); /* The split( ) method is used for strings. 
    It divides a string into substrings and returns them as an array. 
    It takes 2 parameters, and both are optional.
    
    string.split(separator, limit);
        •	Separator: Defines how to split a string… by a comma, character etc.
        •	Limit: Limits the number of splits with a given number
    
    The split( ) method doesn’t work directly for arrays. 
    However, we can first convert the elements of our array to a string, 
    then we can use the split( ) method. */
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
/* charAt() returns the character at a specified index (position) in a string.*/
    }
    return str.join(' ');
    }
console.log("Name in Title Case: ", ticase(str));

console.log(str.charAt(3));

function ticase2(str) {
    str = str.toLowerCase().split(' ');
} 

/*

In VS Code, find the variable name where it is showing deprecated name. 
Put your cursor and right click on it, then select 'Go to Definition'. 
It will open another file named as lib.dom.d.ts.

lib.dom.d.ts

Just remove the line "declare const name: void;"
This will remove your variable name from the deprecated list.*/