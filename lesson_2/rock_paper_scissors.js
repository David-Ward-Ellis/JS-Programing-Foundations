const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'k'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelecomePrompts() {
prompt('Welcome to the rock, paper, scissors, lizard, spock game!\n');
prompt('The first to win five times is the grand winner.\n');
prompt(`Use the following entries during play:
  > type 'p' for paper,
  > type 'r' for rock, 
  > type 's' for scissors,
  > type 'l' for lizard, 
  > type 'k' for Spock.`);
}

function getUserInput() {
  prompt('Please make a selection');
  let userInput = readline.question();
  while (!VALID_CHOICES.includes(userInput)) {
    prompt("That's not a valid choice");
    prompt(`Please choose: ${VALID_CHOICES.join(', ')}`);
    userInput = readline.question();
  }
  userInput = updateInput(userInput);
  return userInput;
}

function getComputerInput() {
  let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let compSelection = VALID_CHOICES[randomIndex];
  compSelection = updateInput(compSelection);
  return compSelection;
}

function updateInput(input) {
  if (input === 'r') {
    return 'rock';
  } else if (input === 'p') {
    return 'paper';
  } else if (input === 's') {
    return 'scissors';
  } else if (input === 'l') {
    return 'lizard';
  } else return 'Spock';
}

function decideWinner(user, computer) {
  if (user === computer) return 'It is a tie!';

  let win;

  let options = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'Spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['Spock', 'paper'],
      Spock: ['scissors', 'rock']
  };

  let optionKeys = Object.keys(options);

  optionKeys.forEach(function(selection) {
    if (user === selection && options[selection].includes(computer)) {
      win = 'You win!';
    } else if (computer === selection && options[selection].includes(user)) {
      win = 'Computer wins!';
    }
  });
  return win;
}

function displayWinner(userChoice, computerChoice, victor) {
  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);
  prompt(victor);
}

function updateUserScore(winner, userScore) {
  if (winner === 'You win!') {
    return userScore += 1;
  } else return userScore;
}

function updateComputerScore(winner, computerScore) {
  if (winner === 'Computer wins!') {
    return computerScore += 1;
  } else return computerScore;
}

function displayScore (person, machine) {
  prompt(`You have ${person} points and the computer has ${machine} points`)
}

function nextMove() {
  prompt(`Pick your next move:
  > type 'p' for paper,
  > type 'r' for rock, 
  > type 's' for scissors,
  > type 'l' for lizard, 
  > type 'k' for Spock.`)
}

function grandWinner(user, computer) {
  if (user === 5) {
    prompt('You are the grand winner!');
    }

  if (computer === 5) {
    prompt('Computer is the grand winner!');
    }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  while (userScore < 5 && computerScore < 5) {
    let userInput = getUserInput();
    console.clear();
    let computerInput = getComputerInput();
    let winner = decideWinner(userInput, computerInput);
    userScore = updateUserScore(winner, userScore);
    computerScore = updateComputerScore(winner, computerScore);
    displayWinner(userInput, computerInput, winner);
    displayScore(userScore, computerScore);
    nextMove();
  }

  grandWinner(userScore, computerScore);

}
 
function willPlayAgain() {
  prompt('Would you like to play again (yes/no)?');
  let answer = readline.question().toLocaleLowerCase();
  while ((answer !== 'n' && answer !== 'y') &&

        (answer !== 'no' && answer !== 'yes')) {
        prompt ('Please enter "yes" or "no".');
        answer = readline.question().toLocaleLowerCase();
  }
  return answer === 'yes' || answer === 'y';
}

do {
console.clear();
displayWelecomePrompts()
playGame();

} while (willPlayAgain());