console.log(game());

// function game() {
//   let computerScore = 0;
//   let playerScore = 0;

//   for (i = 0; i < 5; i++) {
//     let roundResult = playRound();
//     if (roundResult === "win") {
//       playerScore++;
//     }
//     if (roundResult === "lose") {
//       computerScore++;
//     }
//     if (computerScore === 3) {
//       return "You lost the game!";
//     }
//     if (playerScore === 3) {
//       return "You won the game!";
//     }
//   }

//   if (computerScore > playerScore) {
//     return "You lost the game!";
//   } else if (playerScore > computerScore) {
//     return "You won the game!";
//   } else if (computerScore === playerScore) {
//     return "It's a tie after all!";
//   }
// }

function playRound() {
  let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
  let computerChoice = getComputerChoice();
  let gameResult = compareChoices(playerChoice, computerChoice);
  console.log(chooseResultMessage(gameResult, playerChoice, computerChoice));
  return gameResult;
}

function getComputerChoice() {
  let n = Math.floor(Math.random() * 100);
  if (n <= 33) {
    return "rock";
  } else if (n >= 66) {
    return "paper";
  } else if (n > 33 && n < 66) {
    return "scissors";
  }
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "win";
    } else if (computerChoice === "paper") {
      return "lose";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "win";
    } else if (computerChoice === "scissors") {
      return "lose";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "win";
    } else if (computerChoice === "rock") {
      return "lose";
    }
  } else {
    return "invalid option";
  }
}

function chooseResultMessage(gameResult, playerChoice, computerChoice) {
  let winMessage = `You won! ${playerChoice} beats ${computerChoice}`;
  let loseMessage = `You lost! ${computerChoice} beats ${playerChoice}`;
  let tieMessage = "it's a tie!";
  let invalidMessage = "Please choose a valid option";

  if (gameResult === "win") {
    return winMessage;
  } else if (gameResult === "lose") {
    return loseMessage;
  } else if (gameResult === "tie") {
    return tieMessage;
  } else if (gameResult === "invalid option") {
    return invalidMessage;
  }
}
