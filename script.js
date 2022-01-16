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



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

        if(computerScore < 3 && playerScore < 3) {
            let round = playRound(prompt("Enter either rock, paper, or scissors."), computerPlay());
            if(round.startsWith("You win!")) {
                console.log("You won this round.");
                console.log(playerScore);
                playerScore++;
                console.log(playerScore);
            } else if(round.startsWith("You lose.")) {
                console.log("You lost this round.");
                console.log(computerScore);
                computerScore++;
                console.log(computerScore);
            } else {
                console.log("It's a tie!");
                i--;
            }
        }
        
    }

    if(playerScore >= 3) {
        console.log("You have won.");
        return "You have won."
    } else {
        console.log("You have lost.");
        return "You have lost."
    }
}

game();