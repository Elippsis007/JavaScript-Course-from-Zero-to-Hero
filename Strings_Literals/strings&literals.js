const firstName = 'Michael';
const job = 'technical support engineer';
const birthYear = 1987;
const year = 2022;

const michael = "I'm " + firstName + ', and I am a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(michael);

// Template Literal
// Template Literals are a way of writing a string in a normal way but now I can insert variables directly into the string.

const michaelNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(michaelNew);


// Nice benefit of using backticks in JS helps with sliminating the choice of what quotations to use and sets me up
// for using tempate literals faster all I have to do is ${} for my variables.
console.log(`Just a regular string...`);


// Muti-line string - \n\ known as "newline" allows multiple lines of strings to be written out (handy for paragraphs)
console.log('String with \n\
multiple \n\
lines');

// An even easier way of using multi-line strings is by simpley using backticsk `` and pressing enter for new lines.
console.log(`String
multiple
lines`);