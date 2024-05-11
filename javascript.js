const buttons = document.querySelectorAll("button");
const main = document.querySelector(".main");
const newDiv = document.createElement("div");
newDiv.classList.add("result");
main.appendChild(newDiv);

buttons.forEach((button) => {
    button.addEventListener("click", () => console.log(button.id)) });

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3);
    return choice[computer];
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;


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
            console.log("Draw!");
        }
    } else {
        console.log("Invalid Choice! Try Again");
    }
    }
    playRound(humanSelection, computerSelection);
    
    if (i === 5) {
        if (humanScore > computerScore) {
            console.log("Human Wins");
        } else if (humanScore < computerScore) {
            console.log("Computer Wins");
        } else {
            console.log("Draw!");
        }
    } else {}
}





