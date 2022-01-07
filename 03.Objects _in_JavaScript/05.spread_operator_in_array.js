// spread operator in array
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123"]; // ["1", "2", "3"]
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

 const newObject = { ...obj2, ...obj1, key69: "value69" }; // obj1 + obj2 + key69


 const newObject = { ...["item1", "item2"] }; // 0: "item1", 1: "item2"


const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };// 0: "a", 1: "b" , 2: "b" ..

 console.log(newObject);
