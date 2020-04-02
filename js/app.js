'use strict';

/*
=== Lab 03 Planning ===
1. (HTML) Create 'Top Ten' (any) as an ordered list [X]
2. (HTML) Convert work experience and education to an unordered list
3. (JS) Add 6th question to guessing game that takes in a numeric input and prompts user to guess a number - use a random number generator [X]
4. (JS) Add alert for number-guessing question that says whether guess is too high or low [X]
5. (JS) Give the user 4 opportunities to answer the number-guessing game and give correct answer after all tries are exhausted [X]
6. (JS) Add 7th question with multiple correct answers stored in an array [X] 
7. (JS) Give the user 6 attempts to guess and display all correct answers if they fail [X]
8. (JS) Guesses end when the user gives a correct answer or exhausts all attempts [X]
9. (JS) Convert the first five questions into an array with a 'for loop' that iterates through them [X]
10. (JS) Keep track of number of correct answers and tell users how many they get right/wrong at the end [X]
*/

//Welcome Message
var userName = prompt('What\'s your name?');
alert('Welcome, ' + userName + ', to Bade\'s About Me quiz!');

var numAnswersCorrect = 0;

//ask 5 questions
function askQuestion(qPrompt, correction, answerFlag) {
  var trueAnswer, falseAnswer;
  if(answerFlag) {
    trueAnswer = ['yes', 'y'];
    falseAnswer = ['no', 'n'];
  } else {
    trueAnswer = ['no', 'n'];
    falseAnswer = ['yes', 'y'];
  }

  let currPrompt = prompt(qPrompt).toLowerCase();

  if(currPrompt === trueAnswer[0] || currPrompt === trueAnswer[1]) {
    console.log('Correct!');
    alert('Correct!');
    numAnswersCorrect++;
  } else if(currPrompt === falseAnswer[0] || currPrompt === falseAnswer[1]) {
    console.log(correction);
    alert(correction);
  }
}

//Random Number Guessing Game
function playNumberGuess(maxNumber, maxTries){

  var randNumber = Math.random() * Math.floor(maxNumber);
  randNumber = Math.round(randNumber);

  var answeredCorrectly = false;
  var numGuessPrompt = prompt('I\'m thinking of a random number from 1 to ' + maxNumber + '. Try to guess it.');
  console.log('random number: ' + randNumber);

  if(numGuessPrompt == randNumber) {
    alert('Correct!');
  } else {
    for (let i = 1; i < maxTries; i++) {
      if(numGuessPrompt < randNumber) {
        numGuessPrompt = prompt('Too low! Try again...');
      } else if(numGuessPrompt > randNumber) {
        numGuessPrompt = prompt('Too high! Try again...');
      } else if(numGuessPrompt == randNumber) {
        alert('Correct!');
        answeredCorrectly = true;
        numAnswersCorrect++;
        break;
      }
    }

    if(!answeredCorrectly) alert('Didn\'t guess the number!');
  }
}

// Multiple Answer Question
function askMultiAnswerQuestion(correctAnswers, maxTries) {
  var answeredCorrectly = false;

  for(let i = 0; i < maxTries; i++) {
    let lastPrompt = prompt('What are one of my top 3 games? Use proper spelling, it\'s important!');

    for(let i = 0; i < correctAnswers.length; i++) {
      if(lastPrompt === correctAnswers[i]) {
        alert('Correct!');
        answeredCorrectly = true;
        numAnswersCorrect++;
        break;
      }
    }

    if(answeredCorrectly) break;
    else alert('Wrong answer! Try again!');
  }

  if(!answeredCorrectly) alert('Didn\'t guess correctly!');
}

//function calls
askQuestion('Was I born in Colorado?', 'Wrong. I was born in New Mexico.', 0);
askQuestion('Was I in the Coast Guard?', 'Wrong. I was in the Navy.', 0);
askQuestion('Do I have an Associate\'s degree?', 'Wrong. I do have an Associate\'s degree.', 1);
askQuestion('Is Bade my legal name?', 'Wrong. My legal name is Cristian.', 0);
askQuestion('Do I have prior experience with coding?', 'Wrong. I do have experience in coding.', 1);
playNumberGuess(10, 4);
askMultiAnswerQuestion(['Torment: Numenera','Legend Of Zelda: Breath Of The Wild','Armello'], 6);

//Goodbye message
alert('Thank you for taking the quiz, ' + userName + '. You got ' + numAnswersCorrect + ' correct!');
