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

// #region TEST | it works
// console.log(getComputerChoice());

// write the logic for the human choice
// write a func named getHumanChoice
// it will return one of the valid choices from the user inputs 
// function getHumanChoice() {
//     let humanChoice = prompt("enter your choice")
//     return humanChoice;
// }
// #endregion

// FOR R.P.S.UI ////////////////////////
// selector for each button
const rButton = document.querySelector(".rock");
const pButton = document.querySelector(".paper");
const sButton = document.querySelector(".scissors");

// select the result dev
const div = document.querySelector(".result")

// select the score div 
const scoreDiv = document.querySelector(".score");

// create a para to display the winner
const para = document.querySelector(".winner");

// eventListener for each button
rButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
pButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
sButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// Write the logic to play a single round
// create a func named playRound
// it takes two parameters: humanChoice, computerChoice
// make the humanChoice parameter case insensitive
// write code to declare a winner
// increment the winner score (humanScore or computerScore)
function playRound(humnChoice, CompChoice) {
    const human = humnChoice;
    const computer = CompChoice;

    // make the p to display the result in
    let result = '';

    if (human === computer) {
        result = `It's a tie! Both chose ${human}.`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        result = `You win! ${human} beats ${computer}.`;
    } else {
        computerScore++;
        result = `You lose! ${computer} beats ${human}.`;
    }

    div.textContent = result;

    // display the score
    scoreDiv.textContent = `Computer: ${computerScore} | You: ${humanScore}.`;

    // announce the winner
    if(computerScore === 5 ){
        para.textContent = `Hard luck, The computer wins` 
    }
    else if( humanScore === 5){
        para.textContent = `You win!!, Great job`
    }

}

// #region TEST | works well
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
// #endregion

// (DELETED)Write the logic to play the entire game
// write a func named playGame
// it will call playRound func 5 time (rounds)
// it will also keep track of the scores and declare a winner in the end 

