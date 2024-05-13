const buttons = document.querySelectorAll("button");
const main = document.querySelector(".main");
const newDiv = document.createElement("div");
newDiv.classList.add("result");
main.appendChild(newDiv);


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3);
    return choice[computer];
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++
        } else if (humanChoice == "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else {
            console.log("DRAW!");
        }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        console.log(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
            } ) } );
        




 






