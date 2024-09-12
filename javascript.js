function getComputerChoice() {
    let random = Math.random();
    let result;
    if (random < 1/3) {
        result = "Rock";
    } 
    else if (random < 2/3) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }

    return result;

}


function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:");

    if (choice.toLowerCase() === "rock") {
        return "Rock";
    }
    else if (choice.toLowerCase() === "paper") {
        return "Paper";
    }
    else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    }
    else {
        return "Invalid choice";
    }
}


    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() === "rock" && computerChoice === "Rock") {
            console.log("Tie! Rock and Rock");
            return 3;
        } 
        else if (humanChoice.toLowerCase() === "rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            return 1;
        }
        else if (humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors");
            return 0;
        }

        if (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock");
            return 0;
        } 
        else if (humanChoice.toLowerCase() === "paper" && computerChoice === "Paper") {
            console.log("Tie! Paper and Paper");
            return 3;
        }
        else if (humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            return 1;
        }

        if (humanChoice.toLowerCase() === "scissors" && computerChoice === "Scissors") {
            console.log("Tie! Scissors and Scissors");
            return 3;
        } 
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            return 0;
        }
        else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            return 1;
        }
    }

    

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);

        if (result === 0) {
            humanScore++;
        }
        else if (result === 1) {
            computerScore++;
        }
    }
    console.log("Human: " + humanScore + " Computer: " + computerScore);

}

playGame();


