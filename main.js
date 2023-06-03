function getComputerChoice() {
  let n = Math.floor(Math.random() * 100);
  if (n < 33) {
    return "rock";
  } else if (n > 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
