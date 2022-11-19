// Coding Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: 

"Mark's BMI (28.3) is higher than John's (23.9)!" --- Hint: Use an if/else statement 😊 ---
*/

// const Markmass = 95;
// const Markheight = 1.88;
// const Johnmass = 85;
// const Johnheight = 1.76;

const Markmass = 78;
const Markheight = 1.69;
const Johnmass = 92;
const Johnheight = 1.95;


const Markbmi = Markmass / Markheight ** 2;
const Johnbmi = Johnmass / (Johnheight * Johnheight);
console.log(Markbmi, Johnbmi)

if (Markbmi > Johnbmi) {
    console.log(`Mark's BMI (${Markbmi}) is higher than Johns's (${Johnbmi})!`);
} else {
    console.log(`Johns's BMI (${Johnbmi}) is higher than Marks's (${Markbmi})!`);
}