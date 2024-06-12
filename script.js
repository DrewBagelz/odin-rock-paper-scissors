const info = document.querySelector("#info");
const controls = document.querySelector("#controls");
const playBtn = document.querySelector("#play");
const outcome = document.querySelector("#outcome");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const playAgain = document.createElement("button");

let playerScore = 0;
let computerScore = 0;

playBtn.addEventListener("click", setUpGame);

function chooseRock() {
	const playerSelection = "rock";
	const computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	checkWinner();
}

function choosePaper() {
	const playerSelection = "paper";
	const computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	checkWinner();
}

function chooseScissors() {
	const playerSelection = "scissors";
	const computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	checkWinner();
}

function setUpGame() {
	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	controls.removeChild(playBtn);
	controls.appendChild(rockBtn);
	rockBtn.textContent = "Rock";
	controls.appendChild(paperBtn);
	paperBtn.textContent = "Paper";
	controls.appendChild(scissorsBtn);
	scissorsBtn.textContent = "Scissors";
	rockBtn.addEventListener("click", chooseRock);
	paperBtn.addEventListener("click", choosePaper);
	scissorsBtn.addEventListener("click", chooseScissors);
}

function getComputerChoice() {
	const choice = ["rock", "paper", "scissors"];
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
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore++;
		outcome.textContent = "Scissors beats paper. Computer wins this round.";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		outcome.textContent = "Rock beats scissors. Computer wins this round.";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		outcome.textContent = "Scissors beats paper. You win this round.";
	} else if (
		playerSelection === "scissors" &&
		computerSelection === "scissors"
	) {
		outcome.textContent = "Both chose scissors. This round ends in a tie.";
	}
}

function checkWinner() {
	if (playerScore === 5) {
		info.textContent = `Congratulations! You beat the computer ${playerScore} to ${computerScore}.`;
		outcome.textContent = "";
		controls.removeChild(rockBtn);
		controls.removeChild(paperBtn);
		controls.removeChild(scissorsBtn);
		controls.appendChild(playAgain);
		playAgain.textContent = "Play Again?";
		playAgain.addEventListener("click", resetGame);
		playerScore = 0;
		computerScore = 0;
	} else if (computerScore === 5) {
		info.textContent = `Sorry. The computer beat you ${computerScore} to ${playerScore}.`;
		outcome.textContent = "";
		controls.removeChild(rockBtn);
		controls.removeChild(paperBtn);
		controls.removeChild(scissorsBtn);
		controls.appendChild(playAgain);
		playAgain.textContent = "Play Again?";
		playAgain.addEventListener("click", resetGame);
		playerScore = 0;
		computerScore = 0;
	}
}

function resetGame() {
	info.textContent = `User ${playerScore} - ${computerScore} CPU`;
	outcome.textContent = "";
	controls.removeChild(playAgain);
	controls.appendChild(rockBtn);
	rockBtn.textContent = "Rock";
	controls.appendChild(paperBtn);
	paperBtn.textContent = "Paper";
	controls.appendChild(scissorsBtn);
	scissorsBtn.textContent = "Scissors";
	rockBtn.addEventListener("click", chooseRock);
	paperBtn.addEventListener("click", choosePaper);
	scissorsBtn.addEventListener("click", chooseScissors);
}
