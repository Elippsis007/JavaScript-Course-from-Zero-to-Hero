/* A conditioner operator allows me to write something similar to an if/else statement
    but more condensed and in one line */

const age = 23;
// The "?" mark is essentially your "if" and after the : is your else...
// Three parts of the Ternary operator --> Condition, If and Else
// This line is an expression which will returna a value
const drink = age >= 18 ? `wine` : 'water';
console.log(drink);

/* Using ternary operator I can transform this code to simply the code above.
    Eliminating excess code not needed */
let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

/* This shows that a template literal can included into ternary operator
    as the literal can take an expression to produce a value */
console.log(`I like to drink ${age >= 18 ? `wine` : 'water'}`);