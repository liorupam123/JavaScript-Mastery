function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}
// user1.about.call(user2)

// apply --> direct print
 about.apply(user1, ["guitar", "bach"]);
// bind --> make a function , call the function to print
 const func = about.bind(user2, "guitar", "bach");
 func();
