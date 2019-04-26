let playerScore = 0, computerScore = 0;

function computerPlay() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

const div = document.querySelector('div');
const p = document.querySelector('p');

function textOutput() {
    div.textContent = ("Player Score = " + playerScore + " Computer Score = " + computerScore);
if(playerScore >= 5 && playerScore > computerScore) {
    p.textContent = "Player has won!";
} else if(computerScore >= 5 && computerScore > playerScore) {
    p.textContent = "Computer has won!";
}
}


let btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => {playRound("rock");
textOutput();
});

let btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {playRound("paper");
textOutput();
});

let btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {playRound("scissors");
textOutput();
});

function playRound(playerSelection) {

    switch(computerSelection = computerPlay()) {
        case 1: computerSelection = "rock";
        break;
        case 2: computerSelection = "paper";
        break;
        case 3: computerSelection = "scissors";
        break;
    }

    if(playerSelection == computerSelection) {
        return;
    }

    if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return;
    }

    if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return;
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return;
    }

    if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return;
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return;
    }

    if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return;
    }
}