const hasDriversLicense = true; // Variable A
const hasGoodVision = false; // Variable B

/* Here in this ex. with AND operator when you have two variables with "true" assigned
    you will always get a return of "true" --> true && true = true */
console.log(hasDriversLicense && hasGoodVision);


const hasBlueEyes = true; // A
const hasBlondHair = true; // B
const hasBeard = false; // C

/* In this ex. working with AND operator for two variables one "true" and the other 
"false" will always retrun "false" --> true && false = false */
console.log(hasBlueEyes && hasBlondHair);

/* Here with the OR (||) with a "true" and a "false" variable will return a "true"
    true || false = true */
console.log(hasBlueEyes || hasBlondHair);


/* In this ex. we have a true & false variables and when executed returns "false" because 
    true && false = false */
if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive....`)
}

/* In this ex. for and "OR" boolean, I have a "true" OR "false" with this if and else statement 
    it will return "true" because --> true || true = true */
if (hasBlondHair && hasBlueEyes && !hasBeard) {
    console.log(`We need to speak with them...`)
} else {
    console.log(`We don't need to speak to them...`)
}