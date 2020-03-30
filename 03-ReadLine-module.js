const readline = require('readline');

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let r = num1 + num2;

RL.question(`What is ${num1} + ${num2}?\n`, (userInput) => {
  if (userInput.trim() == r) {
    RL.close()
  } else {
    RL.setPrompt('Incorrect response please try again\n');
    RL.prompt();
    RL.on('line', (userInput) => {
      if (userInput.trim() == r) {
        RL.close();
      } else {
        RL.setPrompt(`Your answer of ${userInput} is incorrect, try again\n`)
        RL.prompt();
      }
    });
  }
})

RL.on('close', () => console.log('Correct!'));

