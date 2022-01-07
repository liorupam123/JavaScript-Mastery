// hoisting 

hello();

// can use hello function before initialization
function hello(){
   console.log("hello world");
}

// can't use hello function before initialization
var hello = function(){
   console.log("hello world");
}
 

console.log(hello); // error --> const,let  undefined --> error
const hello = "hello world";
console.log(hello); // hello world
