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

var prompts = ['Was I born in Colorado?','Was I in the Coast Guard?','Do I have an Associate\'s degree?','Is Bade my legal name?','Do I have prior experience with coding?']
var corrections = ['Wrong. I was born in New Mexico.','Wrong. I was in the Navy.','Wrong. I do have an Associate\'s degree.','Wrong. My legal name is Cristian.','Wrong. I do have experience in coding.']
var correctAnswers1to5 = [0,0,1,0,1]

for(let i = 0; i < prompts.length; i++) {
  if(correctAnswers1to5[i]) {
    var trueAnswer = ['yes', 'y']
    var falseAnswer = ['no', 'n']
  } else {
    var trueAnswer = ['no', 'n']
    var falseAnswer = ['yes', 'y']
  }

  let currPrompt = prompt(prompts[i]).toLowerCase();

  if(currPrompt === trueAnswer[0] || currPrompt === trueAnswer[1]) {
    console.log('Correct!');
    alert('Correct!');
    numAnswersCorrect++;
  } else if(currPrompt === falseAnswer[0] || currPrompt === falseAnswer[1]) {
    console.log(corrections[i]);
    alert(corrections[i]);
  }
}

//Random Number Guessing Game
var maxNumber = 100;
var randNumber = Math.random() * Math.floor(maxNumber);

var answeredCorrectly = false;
var maxTries = 4;
var numGuessPrompt = prompt('I\'m thinking of a random number. Try to guess it!');

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

//Multiple Answer Question
maxTries = 6;
answeredCorrectly = false;
var correctAnswers7 = ['Torment: Numenera','Legend Of Zelda: Breath Of The Wild','Armello'];

for(let i = 0; i < maxTries; i++) {
  let lastPrompt = prompt('What are one of my top 3 games?');

  for(let i = 0; i < correctAnswers7.length; i++) {
    if(lastPrompt === correctAnswers7[i]) {
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

//Goodbye message
alert('Thank you for taking the quiz, ' + userName + '. You got ' + numAnswersCorrect + ' correct!');
