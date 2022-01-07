// prototype
// javascript function ===> function  + object

function hello(){
    console.log("hello world");
}

// name property ---> tells function name;
// console.log(hello.name);

// you can add your own properties 

hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// function provides more usefull properties.


console.log(hello.prototype); // {} --> {constructor: f}

// only functions provide prototype property**

 hello.prototype.abc = "abc";
 hello.prototype.xyz = "xyz";
 hello.prototype.sing = function(){
     return "lalalla";
 };
 console.log(hello.prototype);
 console.log(hello.prototype.sing());
