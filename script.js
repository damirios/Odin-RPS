function computerPlay() {
    let randomNumber;
    let element;
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        element = "Rock"; 
    } else if (randomNumber == 2) {
        element = "Paper";
    } else {
        element = "Scissors";
    }
    return element
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'Draw! Both Rock.';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats Rock.';
        } else {
            return 'You win! Rock beats Scissors.';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You win! Paper beats Rock.';
        } else if (computerSelection == 'paper') {
            return 'Draw! Both Paper.';
        } else {
            return 'You lose! Scissors beats Paper.';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats Paper.';
        } else {
            return 'Draw! Both Scissors.';
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper or Scissors?');
        gameResult = playRound(playerSelection, computerPlay());
        console.log(gameResult);
    }
}

game();