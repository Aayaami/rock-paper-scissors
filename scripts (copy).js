function computerPlay() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function playRound(playerSelection, computerSelection) {
 
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

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?");
        if (playRound(playerSelection) == "player") {
            playerScore++;
            console.log("Player won!");
        } else if(playRound(playerSelection) == "computer") {
            computerScore++;
            console.log("Computer won!");
        }
    }
    
    if(playerScore > computerScore) {
        console.log("Player has more points than computer!");
    } else if (playerScore < computerScore) {
        console.log("Computer has more points than player!");
    }
}

function love() {
    let name = "Krestik";
    console.log(name + ", I Love You! <3");
}


let n = 45;

function prime() {
    console.log("2")
    for(let i = 2; i < n; i++) {
        if(i % n == 1) {
            console.log(i);
        }
    }
}

let a, b;

a = 2 + 2;

b = 2*a;