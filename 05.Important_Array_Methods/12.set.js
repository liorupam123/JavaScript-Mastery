// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access ==> undefined
// Order is not guaranteed
// unique items only (no duplicates allowed)

 const items = ['item1', 'item2', 'item3'];
 const numbers = new Set();
 numbers.add(1);
 numbers.add(2);
 numbers.add(2); // this two will not add
 numbers.add(3);
 numbers.add(4);
 numbers.add(5);
 numbers.add(6);
 numbers.add(items);
 numbers.add(items); // this will not add , same array same address
 console.log(numsbers);
 // this two arrays will add because of different address
 numbers.add(['item1', 'item2']);
 numbers.add(['item1', 'item2']);

	/*----------------------------*/

 if(numbers.has(1)){
    console.log("1 is present")
 }else{
    console.log("1 is not present")
  }

	/*----------------------------*/

 for(let number of numbers){
    console.log(number);
 }

	/*----------------------------*/

 const myArray = [1,2,4,4,5,6,5,6];
 const uniqueElements = new Set(myArray);
 // console.log(uniqueElements);
 let length = 0;
 for(let element of uniqueElements){
     length++;
 }

 console.log(length);
