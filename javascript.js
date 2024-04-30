const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); 

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    return choice[computer];
}

function getHumanChoice() {
    let humanPrompt = prompt("Enter your choice:");
    return humanPrompt.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
    if (humanChoice == "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
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
        console.log("Draw! Try Again");
    }
} else {
    console.log("Invalid Choice! Try Again");
}
}

playRound(humanSelection, computerSelection);

