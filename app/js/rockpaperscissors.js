

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    var playerMove;
    if (move === null) {
        playerMove = getInput();
    } else {
            playerMove = move;
    }
    return playerMove;
}

function getComputerMove(move) {
    var computerMove;
    if (move === null) {
        computerMove = randomPlay();
    } else {
        computerMove = move;
    }
    return computerMove;
}
    var winner;
function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("It's a draw!");
    } 
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
        console.log("Player Wins!");
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
        console.log("Computer Wins!");
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
        console.log("Player Wins!");
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
        console.log("Computer Wins!");
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
        console.log("Computer Wins!");
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
        console.log("Player Wins!");
    }
    return winner;
} 
console.log(getWinner());

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while( playerWins < 5 && computerWins < 5) {
        var playerMove = getInput();
        var computerMove = randomPlay();
    getWinner(playerMove,computerMove);
        if (winner === "player") {
            playerWins++;
        } 
        else if (winner === "computer") {
            computerWins++;
        }
    }
    console.log([playerWins, computerWins]);
}
