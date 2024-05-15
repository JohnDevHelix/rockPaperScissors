// Get Computer Choice here //

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3);
    return choice[computer];
 }
 
 // Play Round here //
 
 const newDiv = document.createElement("div");
 newDiv.classList.add("result");
 const rounds = document.querySelector(".game-round");
 rounds.appendChild(newDiv);
 
 const choiceRock = document.createElement("img");
 choiceRock.src = "rock.svg";
 choiceRock.alt = "hand rock sign";
 choiceRock.classList.add("img-choice");
 const choicePaper = document.createElement("img");
 choicePaper.src = "paper.svg";
 choicePaper.alt = "hand paper sign";
 choicePaper.classList.add("img-choice");
 const choiceScissors = document.createElement("img");
 choiceScissors.src = "scissors.svg";
 choiceScissors.alt = "hand scissors sign";
 choiceScissors.classList.add("img-choice");
 const humanChoiceImg = document.querySelector("#human-img");
 const compChoiceImg = document.querySelector("#comp-img");
 
 let humanScore = 0;
 let computerScore = 0;
 
 function playRound(humanChoice, computerChoice) {
 
    if (humanChoice == "rock" && computerChoice === "scissors") {
            newDiv.textContent = "You win! Rock beats Scissors";
            humanScore++;
             playerScore.innerText = humanScore;
             humanChoiceImg.appendChild(choiceRock);
             compChoiceImg.appendChild(choiceScissors);
        } else if (humanChoice == "paper" && computerChoice === "rock") {
            newDiv.textContent = "You win! Paper beats Rock";
            humanScore++;
             playerScore.innerText = humanScore;
             humanChoiceImg.appendChild(choicePaper);
             compChoiceImg.appendChild(choiceRock);
        } else if (humanChoice == "scissors" && computerChoice === "paper") {
            newDiv.textContent = "You win! Scissors beats Paper";
            humanScore++;
             playerScore.innerText = humanScore;
             humanChoiceImg.appendChild(choiceScissors);
             compChoiceImg.appendChild(choicePaper); 
        } else if (humanChoice == "rock" && computerChoice === "paper") {
            newDiv.textContent = "You lose! Paper beats Rock";
            computerScore++;
             compScore.innerHTML = computerScore;
             humanChoiceImg.appendChild(choiceRock);
             compChoiceImg.appendChild(choicePaper); 
        } else if (humanChoice == "paper" && computerChoice === "scissors") {
            newDiv.textContent = "You lose! Scissors beats Paper";
            computerScore++;
             compScore.innerHTML = computerScore;
             humanChoiceImg.appendChild(choicePaper);
             compChoiceImg.appendChild(choiceScissors); 
        } else if (humanChoice == "scissors" && computerChoice === "rock") {
            newDiv.textContent = "You lose! Rock beats Scissors";
            computerScore++;
             compScore.innerHTML = computerScore;
             humanChoiceImg.appendChild(choiceScissors);
             compChoiceImg.appendChild(choiceRock); 
        } else if (humanChoice == "rock" && humanChoice == computerChoice) {
             humanChoiceImg.appendChild(choiceRock.cloneNode(true));
             compChoiceImg.appendChild(choiceRock.cloneNode(true));     
            newDiv.textContent = "DRAW!";
        } else if (humanChoice == "paper" && humanChoice === computerChoice) {
             humanChoiceImg.appendChild(choicePaper.cloneNode(true));
             compChoiceImg.appendChild(choicePaper.cloneNode(true));     
            newDiv.textContent = "DRAW!";
 } else if (humanChoice == "scissors" && humanChoice === computerChoice) {
             humanChoiceImg.appendChild(choiceScissors.cloneNode(true));
             compChoiceImg.appendChild(choiceScissors.cloneNode(true));     
            newDiv.textContent = "DRAW!";
      } 
   }
 
 
 // Buttons and game round functions here //
 
 const buttons = document.querySelectorAll("button");
 const main = document.querySelector(".center-div");
 const winDiv = document.createElement("div");
 winDiv.classList.add("winner");
 
 
 const playerScore = document.createElement("span");
 const compScore = document.createElement("span");
 playerScore.classList.add("player-score");
 compScore.classList.add("comp-score");
 compScore.innerHTML = computerScore;
 playerScore.innerText = humanScore;
 
 
 document.querySelector("#player").appendChild(playerScore);
 document.querySelector("#computer").appendChild(compScore);
 let gameRound = 0;
 
 buttons.forEach((button) => {
    button.addEventListener("click", () => {
       if (humanChoiceImg.hasChildNodes() && compChoiceImg.hasChildNodes()) {
         humanChoiceImg.removeChild(humanChoiceImg.firstChild);
         compChoiceImg.removeChild(compChoiceImg.firstChild);
         }
 
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameRound++;
      
       if (gameRound === 5) {
             document.querySelector("h2").innerText = "Final Round";
           } else {
      document.querySelector("h2").innerText = "Round " + gameRound; 
           }
 
 
         document.querySelector("#human-select").innerHTML = humanSelection.toUpperCase() + "!";
         document.querySelector("#comp-select").innerHTML = computerSelection.toUpperCase() + "!";
        getWinner();
 
      
            } ) } );
 
 
 // Get winner and new round here //
 
 const tryAgainBtn = document.createElement("button");
 tryAgainBtn.classList.add("try-again");
 tryAgainBtn.textContent = "New Round";
 main.appendChild(tryAgainBtn);
 tryAgainBtn.disabled = true;
 
 function getWinner () {
    if (gameRound === 5) {
        if (humanScore > computerScore) {
            document.querySelector("h1").textContent = "CONGRATULATIONS! You Win!";
           
        } else if (humanScore < computerScore) {
            document.querySelector("h1").textContent = "TRY AGAIN! You Lose!";
           
        } else {
            document.querySelector("h1").textContent = "It's a DRAW!";
           
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
    if (humanChoiceImg.hasChildNodes() && humanChoiceImg.hasChildNodes()) {
         humanChoiceImg.removeChild(humanChoiceImg.firstChild);
         compChoiceImg.removeChild(compChoiceImg.firstChild);
         }
   document.querySelector("h2").innerText = "Begin Round";
   document.querySelector("h1").innerText = "Pick your weapon!";
   document.querySelector("#human-select").innerHTML = "Player";
   document.querySelector("#comp-select").innerHTML = "Computer"
   });
    }