const readline = require('readline-sync');
const MESSAGE = require('./ticTacToe.json');

const MATCHES_TO_WIN = 5;
const INITIAL_MARKER = ' ';
const COMPUTER_MARKER = 'X';
const HUMAN_MARKER = 'O';
const WIN_SQRS = {
  row1: [1, 2, 3],
  row2: [4, 5, 6], 
  row3: [7, 8, 9], 
  column1: [1, 4, 7], 
  column2: [2, 5, 8], 
  column3: [3, 6, 9], 
  diagnol1: [1, 5, 9], 
  diagnol2 : [3, 5, 7]
}

function prompt(message) {
  console.log(`=>${message}`)
}

function displayBoard(board, humanScore, cpuScore) {
  console.clear();

  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');

  prompt(`You are: ${HUMAN_MARKER} and the computer is ${COMPUTER_MARKER}\n`);
  prompt(`${MESSAGE['Human score']} ${humanScore}`);
  prompt(`${MESSAGE['CPU score']} ${cpuScore}`);
}

function initialzeBoard() {
  let board = {};

  for (let sqr = 1; sqr <= 9; sqr += 1) {
    board[String(sqr)] = INITIAL_MARKER;
  }

  return board;
}

function emptySqrs (board) {
  return Object.keys(board).filter(key => {
    return board[key] === INITIAL_MARKER;
  })
}

function joinOr (arr, seprtr = ', ', conj = 'or') {
  let resultStr = '';

  if (arr.length === 0) {
    return resultStr;
  } else if (arr.length === 1) {
    return resultStr += arr[0];
  } else if (arr.length === 2) {
    return resultStr += `${arr[0]} ${conj} ${arr[1]}`;
  } else arr.forEach((element, idx) => {
    if (idx === arr.length - 1) {
      return resultStr +=`${conj} ${element}`;
    } else return resultStr += `${element}${seprtr}`;
  })

  return resultStr;
}

function chooseSqr (board, currentPlayer, humanScore, cpuScore) {
  if (currentPlayer === 'human') {
    playerChoosesSqr(board);
    displayBoard(board,  humanScore, cpuScore);
  }

  if (currentPlayer === 'computer') {
    computerChoosesSqr(board);
    displayBoard(board,  humanScore, cpuScore);
    }
  }

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'human') {
    return 'computer';
  }

  if (currentPlayer === 'computer') {
    return 'human';
  }
}

function playerChoosesSqr (board) {
  let usrSqr;

  while (true) {
    prompt(`${MESSAGE['Selection']} ${joinOr(emptySqrs(board))}`);
    usrSqr = readline.question().trim();
    
    if (emptySqrs(board).includes(usrSqr)) break;
  
    prompt(MESSAGE['Valid']);
  }

  board[usrSqr] = HUMAN_MARKER; 
}

function cpuStratigicMove (board, line, marker) {
    let movesInLine = line.map(sqr => board[sqr])

    if (movesInLine.filter(val => val === marker).length === 2) {
      let openSqr = line.find(sqr => board[sqr] === INITIAL_MARKER)
      if (openSqr !== undefined) {
        return openSqr;
      }
    }

  return null;
}  

function computerChoosesSqr (board) {
  let cmptrSqr;
  let possibleWins = Object.values(WIN_SQRS);

  for (let idx = 0; idx < possibleWins.length; idx += 1) {
    let line = possibleWins[idx];
    cmptrSqr = cpuStratigicMove(board, line, COMPUTER_MARKER);
    if (cmptrSqr) break;
  }

  if (!cmptrSqr) {
   for (let idx = 0; idx < possibleWins.length; idx +=1) {
      let line = possibleWins[idx];
      cmptrSqr = cpuStratigicMove(board, line, HUMAN_MARKER);
      if (cmptrSqr) break;
  }
}

  if (!cmptrSqr) {
    if (board[5] === INITIAL_MARKER) {
      cmptrSqr = 5;
    } else {
      let rndmIndx = Math.floor(Math.random() * emptySqrs(board).length);
      cmptrSqr = emptySqrs(board)[rndmIndx];
    }
  }

  board[cmptrSqr] = COMPUTER_MARKER;
  
}

function isTie(board) {
  return emptySqrs(board).length === 0
}

function checkForWinner(board, marker) {
  let wins = Object.values(WIN_SQRS);

    return wins.some(subArr => {
      return subArr.every(sqr => board[sqr] === marker)
  })
}

function willPlayAgain() {
  prompt(MESSAGE['Play again']);
  let answer = readline.question().toLowerCase();
  while ((answer !== 'n' && answer !== 'y') &&

        (answer !== 'no' && answer !== 'yes')) {
        prompt (MESSAGE['Invalid answer']);
        answer = readline.question().toLowerCase();
  }

  return answer === 'y' || answer === 'yes';
}

do {
  console.clear();
  let board = initialzeBoard();
  let humanScore = 0;
  let cpuScore = 0;
  
  prompt(MESSAGE['Welcome']);
  prompt(MESSAGE['Victory condition'])
  prompt (MESSAGE['Who first'])

  let selection = readline.question()
  
  while (selection !== '1' && selection !== '2') {
    prompt(MESSAGE['Valid']);
    prompt(MESSAGE['Who first']);
    selection = readline.question();
  }

  let firstMover;
  let currentPlayer;

  if (selection === '1') {
    firstMover = 'human';
  }

  if (selection === '2') {
    firstMover = 'computer';
  }

  do {
    board = initialzeBoard();
    displayBoard(board,  humanScore, cpuScore);

    if (firstMover === 'human') {
      currentPlayer = 'human';
    } else {
      currentPlayer = 'computer';
    }

    while(true) {
      chooseSqr(board, currentPlayer, humanScore, cpuScore);
      currentPlayer = alternatePlayer(currentPlayer);

      if (checkForWinner(board, HUMAN_MARKER)) {
          humanScore += 1;
          break;
      } else if (checkForWinner(board, COMPUTER_MARKER)) {
          cpuScore += 1;
          break;
      } else if (isTie(board)) {
          break;
      }
  }

  } while (humanScore < MATCHES_TO_WIN && cpuScore < MATCHES_TO_WIN)
  
  displayBoard(board, humanScore, cpuScore);
  
  if (humanScore === MATCHES_TO_WIN) {
    prompt(MESSAGE['Human wins']);
  } else prompt(MESSAGE['CPU wins']);

} while(willPlayAgain())

prompt(MESSAGE['Thanks'])