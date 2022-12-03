'use strict';

/*  A function is like a variable only the function takes whole chunks of code
    and can be used again and again, it also retrieve data and return data
*/

/*
    The function below is named "logger" and what it will do when called/invoked is 
    return 'My name is Mike'
*/
function logger () {
    console.log('My name is Mike');
}
// invoking the function / calling the function
logger();
logger();
logger();

// Naming the function "fruitProcessor" with parenthesis containg two parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);