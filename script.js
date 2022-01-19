function computerPlay() {
    let computerDec = Math.floor(Math.random() * 3) + 1;
    switch(computerDec) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        return "Choose again!";
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
        
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        return "You lose. Rock loses to paper.";
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
        
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose. Paper loses to scissors.";
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat paper.";
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose. Scissors lose to rock.";
        
    }
}



const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(computerScore < 3 && playerScore < 3) {
            let round = playRound(button.textContent, computerPlay());
            if(round.startsWith("You win!")) {
                results.textContent = "You win!";
                console.log(playerScore);
                playerScore++;
                console.log(playerScore);
            } else if(round.startsWith("You lose.")) {
                results.textContent = "You lose.";
                console.log(computerScore);
                computerScore++;
                console.log(computerScore);
            } else {
                results.textContent = "It's a tie!"
            }
        }
        score.textContent = `Player Score: ${playerScore}
        Computer Score: ${computerScore}`
        

        if(playerScore >= 3) {
            results.textContent = "You won the whole game!";
            playerScore = 0;
            computerScore = 0;
            return "You have won."
        } else if(computerScore >= 3) {
            results.textContent = "You have lost it all...";
            computerScore = 0;
            playerScore = 0;
            return "You have lost."
        }

        
    });
});






// function game() {
//     
// }

// game();