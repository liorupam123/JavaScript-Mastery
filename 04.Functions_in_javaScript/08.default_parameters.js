// default parameters 

 function addTwo(a,b){
    if(typeof b ==="undefined"){
        b = 0;
    }
     return a+b;
 }
const ans = addTwo(4); // I will send one parameter, it b will be undefined , it will not show NAN, it will print 4
console.log(ans); // 4


// if b is not sent it will take b as 0
function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4); // it will take b as 0, output = 4
const ans = addTwo(4, 8); // 12
console.log(ans);
