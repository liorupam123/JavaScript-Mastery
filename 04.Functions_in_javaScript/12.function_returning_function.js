// function returning function 

function myFunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); // hello function
ans(); // hello world

/*--------------------------------------*/

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans()); // hello world
ans(); // nothing
