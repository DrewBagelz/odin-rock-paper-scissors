const choice = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "rock") {
		return "Both chose rock. This round ends in a tie.";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computerScore++;
		return "Paper beats rock. Computer wins this round.";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		return "Rock beats scissors. You win this round.";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++;
		return "Paper beats rock. You win this round.";
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		return "Both chose paper. This round ends in a tie.";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore++;
		return "Scissors beats paper. Computer wins this round.";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		return "Rock beats scissors. Computer wins this round.";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		return "Scissors beats paper. You win this round.";
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		return "Both chose scissors. This round ends in a tie.";
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
		const computerSelection = getComputerChoice();
		console.log("* ", playRound(playerSelection, computerSelection));
	}

	if (playerScore > computerScore) {
		return playerScore + "-" + computerScore + ", You win!";
	} else if (computerScore > playerScore) {
		return playerScore + "-" + computerScore + ", Computer wins.";
	} else {
		return playerScore + "-" + computerScore + ", This game ends in a tie.";
	}
}

console.log(playGame());
