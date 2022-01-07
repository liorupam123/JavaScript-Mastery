// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}
// if we don't write user1 into the (), it will show undefined
user1.about(user1);
