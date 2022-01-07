function singHappyBirthday(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();



function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans); //9

// undefined + undefined == NaN
// 4 + undefined = NaN

// isEven
// input : number 
// output : true , false 

function isEven(number){
     return number % 2 === 0;
 }

 console.log(isEven(4));// true

// function 
// input : string 
// output: firstCharacter 

 function firstChar(anyString){
     return anyString[0];
 }

 console.log(firstChar("zbc")); //z

// function 
// input : array, target (number)
// output: index of target if target present in array 

//Linear Search
function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans);
