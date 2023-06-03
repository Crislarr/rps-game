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

  let winMessage = `You won! ${playerChoice} beats ${computerChoice}`;

  let loseMessage = `You lost! ${computerChoice} beats ${playerChoice}`;

  let tieMessage = "it's a tie!";

  if (playerChoice === computerChoice) {
    return tieMessage;
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log(winMessage);
      return "win";
    } else if (computerChoice === "paper") {
      console.log(loseMessage);
      return "lose";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(winMessage);
      return "win";
    } else if (computerChoice === "scissors") {
      console.log(loseMessage);
      return "lose";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      rconsole.log(winMessage);
      return "win";
    } else if (computerChoice === "rock") {
      console.log(loseMessage);
      return "lose";
    }
  } else {
    return "Please choose a valid option";
  }
}

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
// }
// game();
