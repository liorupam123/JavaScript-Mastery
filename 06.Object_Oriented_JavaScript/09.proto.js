// proto

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__ != prototype

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    

// if any object is not in obj2 , js will auto matically search it in obj1
const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
console.log(obj.key2); // value2--> from obj1
// obj2.key2 = "unique";
console.log(obj2);


console.log(obj2.__proto__); //obj1
