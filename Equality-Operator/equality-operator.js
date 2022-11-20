const birthage = 18;
// If your if statement is not going to have else and will be one line there is no need for {}

// "===" is a strict equality operator
if(birthage === 18) console.log(`You just became an adult (strict)`);

// When comparing values always use the === rather than this one
if(birthage == 18) console.log(`You just became an adult (loose)`);


/* Without "Number" before prompt the result will be on the else statement because
    13 will be understood as a string */
const favourite = Number(prompt(`What is your favourite number?`));
console.log(favourite);

if (favourite === 13) {
    console.log(`Cool! 13 is an amazing number!`)
} else {
    console.log(`This is not a number!`)
}

/* Here on this statement, it asks if 13 is the number the it will execute the if statement
    however if it's not 13 that is typed in it will ignore the if statement and checks to see
    the else if statement for 7 and if it is 7 then the it will return the string. */
if (favourite === 13) {
    console.log(`Cool! 13 is an amazing number!`)
} else if (favourite === 7) {
    console.log(`7 is also a cool number!`)
} else if (favourite === 2) {
    console.log(`2 is also a cool number`)
} else {
    console.log(`Number is not 13 or 7 or 2`)
}

// The different operater !== or "not equal to" 13 then print the string asking the question.
if (favourite !== 13) console.log(`Why not the number 13?`)
