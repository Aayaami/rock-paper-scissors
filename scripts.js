function computerPlay() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(computerSelection = computerPlay()) {
        case 1: computerSelection = "rock";
        break;
        case 2: computerSelection = "paper";
        break;
        case 3: computerSelection = "scissors";
        break;
    }

    let draw = "draw", player = "player", computer = "computer";

    if(playerSelection == computerSelection) {
        return "draw";
    }

    if(playerSelection == "rock" && computerSelection == "paper") {
        return computer;
    }

    if(playerSelection == "rock" && computerSelection == "scissors") {
        return player;
    }

    if(playerSelection == "paper" && computerSelection == "rock") {
        return player;
    }

    if(playerSelection == "paper" && computerSelection == "scissors") {
        return computer;
    }

    if(playerSelection == "scissors" && computerSelection == "rock") {
        return computer;
    }

    if(playerSelection == "scissors" && computerSelection == "paper") {
        return player;
    }
}