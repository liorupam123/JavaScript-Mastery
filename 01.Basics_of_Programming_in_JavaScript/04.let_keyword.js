// let keyword 
// declare variable with let keyword 

let firstName = "harshit";
firstName = "Mohit"; // changing the value
console.log(firstName);

// normal difference between var vs let ==> we can't declare 2 variables of same name
var firstName = "harshit";
var firstName = "Mohit";
console.log(firstName); // it will print mohit

let firstName = "harshit";
let firstName = "Mohit";
console.log(firstName); // it will show error

// block scope vs funtion scope (covered later in this video)
