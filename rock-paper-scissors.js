//  TEST | all good 
// console.log("it works");

// global variables
// humanScore, computerScore initialized to 0
let humanScore = 0;
let computerScore = 0;

// write the computer logic
// write a func named getComputerChoice 
// it will randomly return ("rock", "paper" or "scissors") 
// using the math.random method
function getComputerChoice() {
    // get a random number
    let choiceNum = Math.floor(Math.random() * 3);
    let computerChoice;

    // set each num to a textual choice 
    if (choiceNum === 2) {
        computerChoice = "rock";
    }
    else if (choiceNum === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// TEST | it works
// console.log(getComputerChoice());

// write the logic for the human choice
// write a func named getHumanChoice
// it will return one of the valid choices from the user inputs 
function getHumanChoice() {
    let humanChoice = prompt("enter your choice", "enter here")
    return humanChoice;
}

// Write the logic to play a single round
// create a func named playRound
// it takes two parameters: humanChoice, computerChoice
// make the humanChoice parameter case insensitive
// write code to declare a winner 
// increment the winner score (humanScore or computerScore)
function playRound(humnChoice, compChoice) {
    let human = humnChoice.toLowerCase();
    let computer = compChoice;

    if (human === computer) {
        console.log(`It's a tie! Both chose ${human}.`);
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${human} beats ${computer}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computer} beats ${human}.`);
    }
}

// TEST | works well
// // Test 1: Tie scenario
// console.log("--- Test 1: Tie ---");
// playRound("rock", "rock");

// // Test 2: Case sensitivity test (uppercase/mixed case input)
// console.log("--- Test 2: Case Insensitivity ---");
// playRound("ROCK", "scissors"); // Human should win

// // Test 3: Human winning scenarios
// console.log("--- Test 3: Human Wins ---");
// playRound("paper", "rock"); // Human should win
// playRound("Scissors", "paper"); // Human should win

// // Test 4: Computer winning scenarios
// console.log("--- Test 4: Computer Wins ---");
// playRound("rock", "paper"); // Computer should win
// playRound("paper", "scissors"); // Computer should win

// // Check the accumulated scores after these tests
// console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);

// Write the logic to play the entire game
    // write a func named playGame
    // it will call playRound func 5 time (rounds)
    // it will also keep track of the scores and declare a winner in the end 

