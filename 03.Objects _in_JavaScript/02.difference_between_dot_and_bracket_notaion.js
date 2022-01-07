// difference between dot and bracket notaion

 const key = "email";
 const person = {
     name: "harshit",
     age: 22,
     "person hobbies": ["guitar", "sleeping", "listening music"]

 }
console.log(person["name"]); // harshit
console.log(person["age"]);  // 22
 person["person"] = "male";

 console.log(person["person hobbies"]);
 person[key] = "harshitvashisth@gmail.com";
 console.log(person);

person.key = "harshitvashisth@gmail.com";
console.log(person);
/* const person = {
     name: "harshit",
     age: 22,
		 key: "harshitvashisth@gmail.com"
     "person hobbies": ["guitar", "sleeping", "listening music"]

 } */

person[key] = "harshitvashisth@gmail.com";
console.log(person);
/* const person = {
     name: "harshit",
     age: 22,
		 email: "harshitvashisth@gmail.com"
     "person hobbies": ["guitar", "sleeping", "listening music"]

 } */
