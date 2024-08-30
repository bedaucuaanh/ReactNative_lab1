//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!
//Your tasks:
//1. Calculate the average score for each team, using the test data below
//2. Compare the team&#39;s average scores to determine the winner of the competition,
//and print it to the console. Don&#39;t forget that there can be a draw, so test for that
//as well (draw means they have the same average score)
//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
//team only wins if it has a higher score than the other team, and the same time a
//score of at least 100 points. Hint: Use a logical operator to test for minimum
//score, as well as multiple else-if blocks
//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
//both teams have the same score and both have a score greater or equal 100
//points. Otherwise, no team wins the trophy
//Test data:
//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Function de tinh diem trung binh
function calculateAverage(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

// Function de tinh nguoi chien thang
function determineWinner(dolphinsScores, koalasScores, minScoreRequired = 0) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Diem trung binh cua ca heo: ${dolphinsAverage}`);
    console.log(`Diem trung binh cua Koalas: ${koalasAverage}`);

    if (dolphinsAverage >= minScoreRequired && koalasAverage >= minScoreRequired) {
        if (dolphinsAverage > koalasAverage) {
            console.log('Ca heo da thang');
        } else if (koalasAverage > dolphinsAverage) {
            console.log('Koalas da thang');
        } else {
            console.log('Tran nay hoa');
        }
    } else {
        console.log('Khong doi nao thang');
    }
}

// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data 2: 
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Data 3
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Tra ve Data
console.log('Ket qua Data 1');
determineWinner(dolphinsScores1, koalasScores1, 100);

// Tra ve Data 1
console.log('\nKet qua them Data 1:');
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1, 100);

// Tra ve Data 2
console.log('\nKet qua them Data 2:');
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2, 100);