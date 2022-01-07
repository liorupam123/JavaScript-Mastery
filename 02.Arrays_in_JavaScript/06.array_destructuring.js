// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1, ,myvar2] = myArray; // to store value3 invar2, middle space for skipping the element

let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);// value1
console.log("value of myvar2", myvar2);// value2
console.log(myNewArray); // value3,value4
