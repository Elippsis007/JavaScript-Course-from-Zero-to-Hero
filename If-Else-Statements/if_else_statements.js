const age = 15;

// inside the condition I need to put the boolean value as this is what I am looking to check

/* This if/else state checks that age is greater or equal to 18 then it will print the first statement
    if the check sees that the age is less than 18 then the else statement will kick in and print the second statement.
*/

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    // creating a calculation from a variable called "yearsLeft" with value/calculation of 18(legal age) - age
    const yearsLeft = 18 - age;
    // Backticks used here in the console log for the string using template literal
    console.log(`Sarah can drive in another ${yearsLeft} years 😀`);
}

// So year of birth is set to 1987
const yearBirth = 2002;

let century;
// This if/else statement says that year of birth is less than or equal to 2000 then that person was born in the 20th Century
if (yearBirth <= 2000) {
    century = 20;
// If the person year of birth is larger than 2000 than the statement will tell that the person was born in the 21st century
} else {
    century = 21;
}
console.log(century);