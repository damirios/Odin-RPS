let gameResult;
let playerScore = 0;
let compScore = 0;

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
            compScore += 1;
            return 'You lose! Paper beats Rock.';
        } else {
            playerScore += 1;
            return 'You win! Rock beats Scissors.';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore += 1;
            return 'You win! Paper beats Rock.';
        } else if (computerSelection == 'paper') {
            return 'Draw! Both Paper.';
        } else {
            compScore += 1;
            return 'You lose! Scissors beats Paper.';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            compScore += 1;
            return 'You lose! Rock beats Scissors.';
        } else if (computerSelection == 'paper') {
            playerScore += 1;
            return 'You win! Scissors beats Paper.';
        } else {
            return 'Draw! Both Scissors.';
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', launchRound));

function launchRound(e) {
    const playerChoice = e.target.textContent;
    const computerChoice = choosingSign();

    gameResult = playRound(playerChoice, computerChoice);

    let resultDiv = document.createElement('div');
    resultDiv.setAttribute('style', "min-height=80px; width: 600px; padding: 10px; margin: 20px auto 0;\
    background-color: rgb(97, 80, 248); text-align: center; color: #fff; font-size: 30px; border-radius: 5px;\
    font-weight: 500;");
    resultDiv.textContent = gameResult;
    const body = document.querySelector('body');
    body.appendChild(resultDiv);

    if (playerScore == 5 || compScore == 5) {
        const winnerBox = document.createElement('div');
        winnerBox.setAttribute('style', "min-height=100px; min-width: 800px; padding: 20px; margin: 30px auto 0;\
        background-color: rgb(211, 91, 22); text-align: center; color: #fff; font-size: 40px; border-radius: 5px;\
        font-weight: 700;");
        if (playerScore == 5) {
            winnerBox.textContent = "Congratulations! You won 5 rounds! You are good!";
        } else {
            winnerBox.textContent = "Sorry! You lose 5 rounds! Try again!";
        }
        body.appendChild(winnerBox);
        playerScore = 0;
        compScore = 0;
    }
}

function choosingSign() {
    const numOneToThree = Math.floor((Math.random() * 3) + 1);
    if (numOneToThree == 1) {
        return "Rock";
    } else if (numOneToThree == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
