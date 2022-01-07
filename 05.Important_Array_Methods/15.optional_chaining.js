// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}


// ?. will not show error, it will show undefined
console.log(user?.firstName);
console.log(user?.address?.houseNumber); // undefined
console.log(user.address.houseNumber); // error
