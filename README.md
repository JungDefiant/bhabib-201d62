## Synopsis

This project is a webpage with a biography about the author and a short quiz to let the user know about the author. This code was developed collaboratively by Ashley Biermann and Bade Habib.

Driver: Ashley Biermann
Navigator: Bade Habib

## Code Example

The code initializes the values for the prompt, the maximum tries, and a variable checking if the question was answered correctly. Then, it runs a *for loop* that asks the question each time. The loop breaks if the question is answered correctly and sends a victory message. Otherwise, it continues to iterate until all tries have been attempted. If all tries have been attempted, the code checks the variable for answering correctly, and it sends a losing message if the user didn't answer correctly. Slight variations on this code exists for each question.

```javascript
var answeredCorrectly = false;
var maxTries = 5;
var thisPrompt = 'Question here!';

for(int i = 0; i < maxTries; i++) {
  var answer = prompt(thisPrompt);
  if(answer == 'right answer') {
    alert('victory message');
    answeredCorrectly = true;
    break;
  } else {
    alert('wrong answer');
  }
}

if(!answeredCorrectly) alert('loser message');
```

## Motivation

This project exists to inform the user about the author in an interactive way.

## Installation

You can get the project by simply cloning or downloading the repo and opening index.html into a browser.

## API Reference

W3Schools CSS: https://www.w3schools.com/cssref/default.asp

## License

This project uses the MIT license.
