// console.log(window);
 "use strict";
 function myFunc(){
    
     console.log(this);
 }
 myFunc(); --> undefined for using strict mode

/*--------------------------------------------------------*/

// both prints same 
console.log(this)  
console.log(window) 
this===window --> true
