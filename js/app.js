"use strict";

//Welcome Message
var userName = prompt('What\'s your name?');
alert('Welcome, ' + userName + ', to Bade\'s About Me quiz!');

// Question  1: Was I born in Colorado? False.
var q1Prompt = 'Was I born in Colorado?';
var q1Answer = prompt(q1Prompt).toLowerCase();

// Check 1st question and notify user
if(q1Answer === 'no' || q1Answer === 'n') {
  //console.log('Correct!');
  alert('Correct!');
} else if(q1Answer === 'yes' || q1Answer === 'y') {
  //console.log('Wrong. I was born in New Mexico.');
  alert('Wrong. I was born in New Mexico.');
}

// Question  2: Was I in the Coast Guard? False.
var q2Prompt = 'Was I in the Coast Guard?';
var q2Answer = prompt(q2Prompt).toLowerCase();

// Check 2nd question and notify user
if(q2Answer === 'no' || q2Answer === 'n') {
  //console.log('Correct!');
  alert('Correct!');
} else if(q2Answer === 'yes' || q2Answer === 'y') {
  //console.log('Wrong. I was in the Navy.');
  alert('Wrong. I was in the Navy.');
}

// Question  3: Do I have an Associate's degree? True.
var q3Prompt = 'Do I have an Associate\'s degree?';
var q3Answer = prompt(q3Prompt).toLowerCase();

// Check 3rd question and notify user
if(q3Answer === 'yes' || q3Answer === 'y') {
  //console.log('Correct!');
  alert('Correct!');
} else if(q3Answer === 'no' || q3Answer === 'n') {
  //console.log('Wrong. I do have an Associate\'s degree.');
  alert('Wrong. I do have an Associate\'s degree.');
}

// Question  4: Is Bade my legal name? False.
var q4Prompt = 'Is Bade my legal name?';
var q4Answer = prompt(q4Prompt).toLowerCase();

// Check 4th question and notify user
if(q4Answer === 'no' || q4Answer === 'n') {
  //console.log('Correct!');
  alert('Correct!');
} else if(q4Answer === 'yes' || q4Answer === 'y') {
  //console.log('Wrong. My legal name is Cristian.');
  alert('Wrong. My legal name is Cristian.');
}

// Question  5: Do I have prior experience with coding? True
var q5Prompt = 'Do I have prior experience with coding?';
var q5Answer = prompt(q5Prompt).toLowerCase();

// Check 5th question and notify user
if(q5Answer === 'yes' || q5Answer === 'y') {
  //console.log('Correct!');
  alert('Correct!');
} else if(q5Answer === 'no' || q5Answer === 'n') {
  //console.log('Wrong. I do have experience in coding.');
  alert('Wrong. I do have experience in coding.');
}

//Goodbye message
alert('Thank you for taking the quiz, ' + userName + '.');
