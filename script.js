'use strict';

//generate correctNum
let correctNum = Math.floor(Math.random() * 20 + 1);
console.log(correctNum);
let score = 20;
let heighestScore = 0;

const check = document.querySelector('.check');
check.addEventListener("click", handleCheck);
function handleCheck() {
    let guessNum = Number(document.querySelector('.guess').value);

    //not a number
    if (guessNum === 0) {
        document.querySelector('.message').textContent = 'No number!';

    }
    //correct number
    else if (guessNum === correctNum) {
        document.querySelector('.number').textContent = correctNum;
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector("body").style.backgroundColor = 'green';
        if (score > heighestScore) {
            heighestScore = score;
            document.querySelector('.highscore').textContent = heighestScore;
        }


    }
    if (score > 1) {
        // higher number
        if (guessNum > correctNum) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;

        }
        // lower number
        else if (guessNum < correctNum) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;

        }
    }
    else { document.querySelector('.message').textContent = 'You lose the game !'; }




}

// reset the game
document.querySelector('.again').addEventListener('click', handleReset);
function handleReset() {
    score = 20;
    correctNum = Math.floor(Math.random() * 20 + 1);
    console.log(correctNum);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = heighestScore;



}


