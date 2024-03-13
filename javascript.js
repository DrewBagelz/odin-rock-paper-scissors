let choice = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}
