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


// Write the logic to play the entire game
// write a func named playGame
// it will call playRound func 5 time (rounds)
// it will also keep track of the scores and declare a winner in the end 
