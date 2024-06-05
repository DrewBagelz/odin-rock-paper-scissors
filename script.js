const info = document.querySelector("#info");
const controls = document.querySelector("#controls");
const playBtn = document.querySelector("#play");
const outcome = document.querySelector("#outcome");

let playerScore = 0;
let computerScore = 0;

playBtn.addEventListener("click", () => {
	const rockBtn = document.createElement("button");
	const paperBtn = document.createElement("button");
	const scissorsBtn = document.createElement("button");

	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	controls.removeChild(playBtn);
	controls.appendChild(rockBtn);
	rockBtn.textContent = "Rock";
	controls.appendChild(paperBtn);
	paperBtn.textContent = "Paper";
	controls.appendChild(scissorsBtn);
	scissorsBtn.textContent = "Scissors";

	const choice = ["rock", "paper", "scissors"];

	function getComputerChoice() {
		return choice[Math.floor(Math.random() * choice.length)];
	}

	function playRound(playerSelection, computerSelection) {
		if (playerSelection === "rock" && computerSelection === "rock") {
			outcome.textContent = "Both chose rock. This round ends in a tie.";
		} else if (playerSelection === "rock" && computerSelection === "paper") {
			computerScore++;
			outcome.textContent = "Paper beats rock. Computer wins this round.";
		} else if (playerSelection === "rock" && computerSelection === "scissors") {
			playerScore++;
			outcome.textContent = "Rock beats scissors. You win this round.";
		} else if (playerSelection === "paper" && computerSelection === "rock") {
			playerScore++;
			outcome.textContent = "Paper beats rock. You win this round.";
		} else if (playerSelection === "paper" && computerSelection === "paper") {
			outcome.textContent = "Both chose paper. This round ends in a tie.";
		} else if (
			playerSelection === "paper" &&
			computerSelection === "scissors"
		) {
			computerScore++;
			outcome.textContent = "Scissors beats paper. Computer wins this round.";
		} else if (playerSelection === "scissors" && computerSelection === "rock") {
			computerScore++;
			outcome.textContent = "Rock beats scissors. Computer wins this round.";
		} else if (
			playerSelection === "scissors" &&
			computerSelection === "paper"
		) {
			playerScore++;
			outcome.textContent = "Scissors beats paper. You win this round.";
		} else if (
			playerSelection === "scissors" &&
			computerSelection === "scissors"
		) {
			outcome.textContent = "Both chose scissors. This round ends in a tie.";
		}
	}

	rockBtn.addEventListener("click", () => {
		const playerSelection = "rock";
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	});
	paperBtn.addEventListener("click", () => {
		const playerSelection = "paper";
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	});
	scissorsBtn.addEventListener("click", () => {
		const playerSelection = "scissors";
		const computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	});

	// if (playerScore === 5) {
	// 	outcome.textContent = `Congratulations! You beat the computer ${playerScore} to ${computerScore}.`;
	// } else if (computerScore === 5) {
	// 	outcome.textContent = `Sorry. The computer beat you ${computerScore} to ${playerScore}.`;
	// }
});
