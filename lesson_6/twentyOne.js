const readline = require('readline-sync');
const SUITES = ['Heart', 'Diamond', 'Spade', 'Club'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const BUST_LIMIT = 21;
const DEALER_HIT_LIMIT = 17;
const MATCHES_TO_WIN = 5;

function initializeDeck() {
  let deck = [];

  for (let suitIdx = 0; suitIdx < SUITES.length; suitIdx += 1) {
    let suite = SUITES[suitIdx];

    for (let valueIdx = 0; valueIdx < VALUES.length; valueIdx += 1) {
      let value = VALUES[valueIdx];

      deck.push([suite, value]);
    }
  }

  return shuffle(deck);
}

function shuffle(cardArr) {
  for (let idx = cardArr.length - 1; idx > 0; idx -= 1) {
  let otherIdx = Math.floor(Math.random() * (idx + 1));
  [cardArr[idx], cardArr[otherIdx]] = [cardArr[otherIdx], cardArr[idx]];
  }

  return cardArr;
}

function prompt(message) {
  console.log(`=>${message}`);
}

function displayCards(playerHand, dealerHand, playerTotal) {
  console.clear();
  prompt('Your cards are:');
  console.log(playerHand);
  prompt(`They add up to ${playerTotal}`);

  if (playerTotal <= BUST_LIMIT) {
  prompt('The dealer has:');
  console.log([dealerHand[0], ['hidden card']]);
  }
}

function isValidChoice(choice) {
   return ((choice.toLowerCase() !== 'h' && choice.toLowerCase() !== 'hit') &&
        (choice.toLowerCase() !== 's' && choice.toLowerCase() !== 'stay'));
  }

function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;

  values.forEach(value => {

    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > BUST_LIMIT) {
      sum -= 10;
    }
  });

  return sum;
}

function busted (handTotal) {
  return handTotal > BUST_LIMIT;
}

function detectResult(playerTotal, dealerTotal) {
  if (playerTotal > BUST_LIMIT) {
    return 'Player Busted';
  } else if (dealerTotal > BUST_LIMIT) {
    return 'Dealer Busted';
  } else if (playerTotal > dealerTotal) {
    return 'Player wins';
  } else if (dealerTotal > playerTotal) {
    return 'Dealer wins';
  } else return 'Draw';
}

function displayResult(playerHand, dealerHand, playerTotal, dealerTotal, playerScore, dealerScore) {
  let result = detectResult(playerTotal, dealerTotal)
  console.clear ();

  prompt('Your hand is:')
  console.log(playerHand);
  prompt(`It adds up to ${playerTotal}\n`);

  prompt("The dealer's hand is:")
  console.log(dealerHand);
  prompt(`It adds up to ${dealerTotal}\n`);

  switch (result) {
  case 'Player Busted':
    prompt('You busted, dealer wins!');
    break;
  case 'Dealer Busted':
    prompt('Dealer busted, you win!');
    break;
  case 'Player wins':
    prompt('You win!');
    break;
  case 'Dealer wins':
    prompt('Dealer wins');
    break;
  case 'Draw':
    prompt("It's a draw")
}
  prompt(`Your score is ${playerScore} and the dealer's score is ${dealerScore}\n`)
}

function isValidAnswer(reply) {
  return ((reply.toLowerCase() !== 'yes' && reply.toLowerCase() !== 'y' ) &&
          (reply.toLowerCase() !== 'no' && reply.toLowerCase() !== 'n'));
}

function willPlayAgain () {
  prompt('Would you like to play again?');
  let reply = readline.question();

  while (isValidAnswer(reply)) {
  prompt('Please type "yes" (or "y") or "no" or ("n")');
  reply = readline.question();
  }

  return reply.toLowerCase() === 'yes' || reply.toLowerCase() === 'y';
}

do {
  let playerScore = 0;
  let dealerScore = 0;    

  while (true) {
    let deck = initializeDeck();

    let playerHand = deck.splice(0, 2);
    let dealerHand = deck.splice(0, 2);

    let playerTotal = total(playerHand);
    let dealerTotal = total(dealerHand);

    let playerChoice;

    displayCards(playerHand, dealerHand, playerTotal);

    do {
      prompt('Hit or Stay?');
      playerChoice = readline.question();
      while (isValidChoice(playerChoice)) {
        prompt('Please type "Hit" (or "h") or "Stay" or "s"');
        playerChoice = readline.question();
      }

      if (playerChoice.toLowerCase() === 'hit' || playerChoice.toLowerCase() === 'h') {
          playerHand.push(deck.splice(0, 1).flat());
          playerTotal = total(playerHand)
      }

      displayCards(playerHand, dealerHand, playerTotal);

    } while ((playerChoice.toLowerCase() === 'hit' || playerChoice.toLowerCase() === 'h')
    && !busted(playerTotal));

  if (busted(playerTotal)) {
      dealerScore += 1;  
      displayResult(playerHand, dealerHand,playerTotal, dealerTotal, playerScore, dealerScore);
      } else {
        while (true) {
          if (dealerTotal >= DEALER_HIT_LIMIT || busted(dealerHand)) {
            break;
          } else if (dealerTotal === BUST_LIMIT) {
            break;
          } else {
            dealerHand.push(deck.splice(0, 1).flat());
            dealerTotal = total(dealerHand);
          }
        }

      if (busted(dealerTotal)) {
        playerScore += 1;
      } else if (playerTotal > dealerTotal) {
        playerScore += 1;
      } else if (dealerTotal > playerTotal) {
        dealerScore += 1;
     }  
     displayResult(playerHand, dealerHand,playerTotal, dealerTotal, playerScore, dealerScore)
    }

    if ((playerScore < MATCHES_TO_WIN && dealerScore < MATCHES_TO_WIN)) {
      prompt('Hit enter to shuffle and redeal');
      readline.question();
    } else if (playerScore === MATCHES_TO_WIN) {
      prompt('You are the grand winner!');
      break;
    } else if (dealerScore === MATCHES_TO_WIN) {
      prompt('The dealer is the grand winner!');
      break;
    }
  } 

 } while (willPlayAgain());