var userScore = 0;
var comScore = 0;
var userChoice, comChoice;


function gameplay(userChoice, comChoice) {

    if (
        (userChoice === "rock" && comChoice === "scissors") ||
        (userChoice === "paper" && comChoice === "rock") ||
        (userChoice === "scissors" && comChoice === "paper")
    ) {
       
        userScore++;
    } else  if (
        (comChoice === "rock" && userChoice === "scissors") ||
        (comChoice === "paper" && userChoice === "rock") ||
        (comChoice === "scissors" && userChoice === "paper")
    ){
       comScore++;
    }
}

function ComputerPlay() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Map the random number to a choice (rock, paper, or scissors)
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            // Handle unexpected cases (though it's unlikely to happen in this scenario)
            return "rock";
    }
}
function displayScore() {
    let uScore = document.getElementById("userScore"); 
    let cScore = document.getElementById("comScore"); 
    uScore.textContent = userScore;
    cScore.textContent = comScore; }

function showChoices(userChoice, comChoice){
   let choice1 = document.getElementById("user");
   let choice2 = document.getElementById("com");
   choice1.textContent = userChoice;
   choice2.textContent = comChoice;
}

document.getElementById("rock").addEventListener('click', function() {
    let userChoice = "rock";
    let comChoice = ComputerPlay();
    gameplay(userChoice, comChoice);
    displayScore();
    showChoices(userChoice,comChoice);
});

document.getElementById("paper").addEventListener('click', function() {
    let userChoice = "paper";
    let comChoice = ComputerPlay();
    gameplay(userChoice, comChoice);
    displayScore();
    showChoices(userChoice,comChoice);
});

document.getElementById("scissors").addEventListener('click', function() {
    let userChoice = "scissors";
    let comChoice = ComputerPlay();
    gameplay(userChoice, comChoice);
    displayScore();
    showChoices(userChoice,comChoice);
});
displayScore();