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

const buttons = document.querySelectorAll(".button");

const $rockButton = document.querySelector("#rock");
const $paperButton = document.querySelector("#paper");
const $scissorsButton = document.querySelector("#scissors");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(playerChoosenButton) {
  let playerChoice = playerChoosenButton;
  let computerChoice = getComputerChoice();
  let roundResult = compareChoices(playerChoice, computerChoice);
  displayRoundResult(roundResult, playerChoice, computerChoice);
  console.log(chooseResultMessage(roundResult, playerChoice, computerChoice));
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
  const roundResultDiv = document.querySelector("#round-result");
  roundResultDiv.innerHTML = "";

  let resultMessage = document.createElement("p");
  resultMessage.innerText = chooseResultMessage(
    roundResult,
    playerChoice,
    computerChoice
  );

  roundResultDiv.appendChild(resultMessage);
}
// console.log(game());
