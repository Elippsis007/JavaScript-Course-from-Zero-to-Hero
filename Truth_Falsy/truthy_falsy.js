/*

Falsy Values

There are 5 falsy valuse: 0, "", undefined, null, NaN
This means that if I was to convert any of the above into a boolean I will get a faulsy value

*/

console.log(Boolean(0)); // returns false
console.log(Boolean(undefined)); // returns false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

/* The purpose of this example is demonstrating that when 0 value is assigned that will 
    return falsy on the else statement */
const money = 0;
if  (money) {
    console.log(`Don't spend your money at all`);
}   else {
        console.log(`You should look for a job`);
    }


 /* In this example as height is undefined has no value assinged to it it will 
    will return the else statement as a falsy */   
let height;
if(height) {
    console.log(`Yay! Height is defined`);
}   else {
    console.log(`Height is UNDEFINED`);
}