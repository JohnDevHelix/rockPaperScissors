const buttons = document.querySelectorAll("button");
const main = document.querySelector(".main");
const newDiv = document.createElement("div");
newDiv.classList.add("result");

const winDiv = document.createElement("div");
winDiv.classList.add("winner");



let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function getComputerChoice() {
   const choice = ["rock", "paper", "scissors"];
   let computer = Math.floor(Math.random() * 3);
   return choice[computer];
}

function playRound(humanChoice, computerChoice) {

   if (humanChoice == "rock" && computerChoice === "scissors") {
           newDiv.textContent = "You win! Rock beats Scissors";
           humanScore++;
            playerScore.innerText = humanScore;
            main.appendChild(newDiv);
       } else if (humanChoice == "paper" && computerChoice === "rock") {
           newDiv.textContent = "You win! Paper beats Rock";
           humanScore++;
            playerScore.innerText = humanScore;
            main.appendChild(newDiv);
       } else if (humanChoice == "scissors" && computerChoice === "paper") {
           newDiv.textContent = "You win! Scissors beats Paper";
           humanScore++;
            playerScore.innerText = humanScore;
            main.appendChild(newDiv);
       } else if (humanChoice == "rock" && computerChoice === "paper") {
           newDiv.textContent = "You lose! Paper beats Rock";
           computerScore++;
            compScore.innerHTML = computerScore;
            main.appendChild(newDiv);
       } else if (humanChoice == "paper" && computerChoice === "scissors") {
           newDiv.textContent = "You lose! Scissors beats Paper";
           computerScore++;
            compScore.innerHTML = computerScore;
            main.appendChild(newDiv);
       } else if (humanChoice == "scissors" && computerChoice === "rock") {
           newDiv.textContent = "You lose! Rock beats Scissors";
           computerScore++;
            compScore.innerHTML = computerScore;
       } else {
           newDiv.textContent = "DRAW!";
            main.appendChild(newDiv);
       }
}

const playerScore = document.createElement("span");
const compScore = document.createElement("span");
playerScore.classList.add("player-score");
compScore.classList.add("comp-score");
compScore.innerHTML = computerScore;
playerScore.innerText = humanScore;


document.querySelector("#player").appendChild(playerScore);
document.querySelector("#computer").appendChild(compScore);

buttons.forEach((button) => {
   button.addEventListener("click", () => {
       const humanSelection = button.id;
       const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
       gameRound++;
       getWinner();
           } ) } );
       

function getWinner () {
   if (gameRound === 5) {
       if (humanScore > computerScore) {
           winDiv.textContent = "CONGRATULATIONS! You Win!";
          main.appendChild(winDiv);
       } else if (humanScore < computerScore) {
           winDiv.textContent = "TRY AGAIN! You Lose!";
          main.appendChild(winDiv);
       } else {
           winDiv.textContent = "It's a DRAW!";
          main.appendChild(winDiv);
       }
     buttons.forEach((button) => { button.disabled = true; });

     
     tryAgainBtn.disabled = false;
}

  document.querySelector(".try-again").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  compScore.innerHTML = computerScore;
  playerScore.innerText = humanScore;
  buttons.forEach((button) => { button.disabled = false });
  newDiv.textContent = "";
  winDiv.textContent = "";
  gameRound = 0;
  tryAgainBtn.disabled = true;
  
  });
   }


const tryAgainBtn = document.createElement("button");
const buttonDiv = document.querySelector(".buttons");
tryAgainBtn.classList.add("try-again");
tryAgainBtn.textContent = "Try Again";
main.appendChild(tryAgainBtn);
tryAgainBtn.disabled = true;


