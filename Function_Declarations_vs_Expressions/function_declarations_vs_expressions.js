
// name of the function is calcAge1 with a parameter of birthyear
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// calling the function
const age1 = calcAge1(1991);
console.log(age1)

/* Assigning a function to a variable called "calcAge2"
    A function without a name is called an anonymous function */
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

/* The difference between function declarations and function expressions is
    I can call function declarations before they are defined in the code. */
