const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

// function getPlayerChoice() {
//   let input = prompt("Choose rock, paper, or scissors:");
//   input = input.toLowerCase();
// }

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Both chose rock. This round ends in a tie.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper beats rock. Computer wins this round.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Rock beats scissors. You win this round.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats rock. You win this round.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Both chose paper. This round ends in a tie.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Scissors beats paper. Computer wins this round.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Rock beats scissors. Computer wins this round.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors beats paper. You win this round.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Both chose scissors. This round ends in a tie.";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.

//At this point you should be using console.log() to display the results of each round and the winner at the end.

//Use prompt() to get input from the user.

//function playGame() {
//code here
//}
