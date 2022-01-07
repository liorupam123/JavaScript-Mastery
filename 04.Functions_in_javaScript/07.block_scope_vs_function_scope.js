// block scope vs function scope 


// let and const are block scope ==> we can't access it from outside block scope
// var is function scope  ==> we can access it from everywhere


// Block 
 {
     const firstName = "harshit";
     console.log(firstName);
 }
console.log(firstName); // ==> It will show error , because firstName is declared in block, we can't access it outside that


// two different block with same variable will not show any error , it will show the desired output

{
     const firstName = "harshit";
     console.log(firstName);
 }

{
     const firstName = "mohit";
     console.log(firstName);
 }

const firstName = "rupam";
     console.log(firstName);



// var is function scope , we can access it from any where
 {
     var firstName = "harshit";
     console.log(firstName);
 }
console.log(firstName); //==> harshit


// for using var firstName we can use it from everywhere in the function , it will show 3 outputs if we use const/let it will show error after printing one
function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();
