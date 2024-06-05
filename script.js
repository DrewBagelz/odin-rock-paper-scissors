const info = document.querySelector("#info");
const controls = document.querySelector("#controls");
const playBtn = document.querySelector("#play");

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
});

let playerScore = 0;
let computerScore = 0;
