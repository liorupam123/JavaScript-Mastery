// methods
// function inside object

// this is a keyword to identify object 
// this == object
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);

		//console.log(`person name is ${firstName} and age is ${age}`); --> error without this key word
}

const person1 = {
    firstName : "harsh",
    age: 8,
		//about: function(){ console.log (" persone..... ")
    about: personInfo
}
//console.log(person.about) --> (){ console.log (" persone..... ")
//person.about() --> persone.....
// person.firstName --> harsh
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
