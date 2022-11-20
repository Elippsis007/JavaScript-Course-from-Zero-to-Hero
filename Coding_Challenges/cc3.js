// Coding Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
1. Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
2. Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
3. Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const teamA = "Dolphins";
const teamB = "Koalas";

const avgScoreDolphins = (97 + 112 + 101) / 3;
console.log(avgScoreDolphins)

const avgScoreKoalas = (109 + 95 + 106) / 3;
console.log(avgScoreKoalas)

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`The winning team is ${teamA}`)
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100)
    console.log(`The winning team is ${teamB}`)
else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log(`The competition has ended in a draw with ${teamA} and ${teamB} both winning the trophy.`)
} else  {
    // depending on the scores, if the points for both teams fall below 100 they both lose and there is no winner
    console.log(`No one will win the trophy this year`)
}
