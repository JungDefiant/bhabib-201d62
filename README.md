## Synopsis

This project is a webpage with a biography about the author and a short quiz to let the user know about the author.

## Code Example

The code prompts the user with a question, then stores their answer. If they answer correctly, they get an alert telling them they answered correctly, and vice versa.

```javascript
var qPrompt = "Question here!"
var qAnswer = prompt(qPrompt).toLowerCase();

if(qAnswer === 'yes' || qAnswer === 'y') {
  alert('Correct!');
} else if(qAnswer === 'no' || qAnswer === 'n') {
  alert('Wrong!');
}
```

## Motivation

This project exists to inform the user about the author in an interactive way.

## Installation

You can get the project by simply cloning or downloading the repo and opening index.html into a browser.

## API Reference

W3Schools CSS: https://www.w3schools.com/cssref/default.asp

## License

This project uses the MIT license.
