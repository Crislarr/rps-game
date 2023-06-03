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

function playRound() {
  let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();

  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    return "it's a tie!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (computerChoice === "paper") {
      return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (computerChoice === "scissors") {
      return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return `You won! ${playerChoice} beats ${computerChoice}`;
    } else if (computerChoice === "rock") {
      return `You lost! ${computerChoice} beats ${playerChoice}`;
    }
  } else {
    return "Please choose a valid option";
  }
}

// function game() {
//   let computerScore = 0;
//   let playerScore = 0;

//   for (i = 0; i < 5; i++) {
//     if (console.log(playRound()) === )
//     if (computerScore === 3) {
//       return "You lost the game!";
//     } else if (playerScore === 3) {
//       return "You won the game!";
//     }
//   }
// }
// game();
