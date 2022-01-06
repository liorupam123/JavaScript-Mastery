// trim() ==> remove spaces from string , doesn't change the main string , creat a new  string , so store into a new let or change the value of past string

// toUpperCase() ==> every capital upper case , doesn't change the main string , creat a new  string , so store into a new let or change the value of past string

// toLowerCase() ==> every capital lower case , doesn't change the main string , creat a new  string , so store into a new let or change the value of past string

// slice()

let firstName = "   harshit   ";

// console.log(firstName.length); // 14
// let trim_firstName = firstName.trim(); 
// console.log(trim_firstName)   // harshit
// console.log(trim_firstName.length); // 7

let firstName = "harshit"

// firstName = firstName.toUpperCase(); // HARSHIT
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index ==> doesn't include the last index

let newString = firstName.slice(0,5); // harsh
console.log(newString);
let newString = firstName.slice(1); // 1 to end
