// function game() {
//   let computerScore = 0;
//   let playerScore = 0;

//   for (i = 0; i < 5; i++) {
//     let roundResult = playRound();

//     if (roundResult === "invalid option") {
//       i--;
//     }
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
let playerScore = 0;
let computerScore = 0;

const $rpsButtons = document.querySelectorAll(".rps-button");

const roundResultDiv = document.querySelector("#round-result");

const restartButton = document.querySelector("#button-start-again");

const gameScoreDiv = document.querySelector("#current-game-score");

const gameResultDiv = document.querySelector("#game-result");

$rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(playerChoosenButton) {
  let playerChoice = playerChoosenButton;
  let computerChoice = getComputerChoice();
  let roundResult = compareChoices(playerChoice, computerChoice);
  if (roundResult === "win") {
    playerScore++;
  }
  if (roundResult === "lose") {
    computerScore++;
  }
  displayRoundResult(roundResult, playerChoice, computerChoice);
  displayCurrentGameScore();

  if (computerScore >= 5) {
    endCurrentGame();
    return;
  }
  if (playerScore >= 5) {
    endCurrentGame();
    return;
  }
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
  const winMessage = `You won! ${playerChoice} beats ${computerChoice}`;
  const loseMessage = `You lost! ${computerChoice} beats ${playerChoice}`;
  const tieMessage = "it's a tie!";
  const invalidMessage = "Please choose a valid option";

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

function displayRoundResult(roundResult, playerChoice, computerChoice) {
  roundResultDiv.innerText = "";

  let resultMessage = document.createElement("p");
  resultMessage.innerText = chooseResultMessage(
    roundResult,
    playerChoice,
    computerChoice
  );
  roundResultDiv.appendChild(resultMessage);
}

function displayCurrentGameScore() {
  gameScoreDiv.innerText = `current score: you ${playerScore} - ${computerScore} computer`;
}

function endCurrentGame() {
  if (playerScore === 5) {
    gameResultDiv.innerText = `You won the game!`;
  }

  if (computerScore === 5) {
    gameResultDiv.innerText = `the computer won the game!`;
  }

  restartButton.classList = "";

  const playerChoicesDiv = document.querySelector("#playerChoicesDiv");

  playerChoicesDiv.classList = "hidden";

  gameScoreDiv.innerText = `final score: you ${playerScore} - ${computerScore} computer`;
}

restartButton.addEventListener("click", () => {
  roundResultDiv.innerText = "";
  gameScoreDiv.innerText = "you 0 - 0 computer";
  playerChoicesDiv.classList = "";
  gameResultDiv.innerText = "";
  playerScore = 0;
  computerScore = 0;
  restartButton.classList.add("hidden");
});
