"use strict";

let choices = ["rock", "paper", "scissor"];
let computerChoiceHMTL = document.getElementsByClassName("computer-choice")[0];

/* Generate a random number for computer to play */
let computerPlay = function() {
    
    let computerChoice =  Math.floor(Math.random() * 3);
    computerChoiceHMTL.innerHTML = "The computer has made a choice."
    return choices[computerChoice];
}


/* Call function go get computer choice */
let computerChoice = computerPlay();

let userChoice;

/* Set HTML buttons to a variable */
let rockButton = document.getElementById("rock-choice");
let paperButton = document.getElementById("paper-choice");
let scissorButton = document.getElementById("scissor-choice");

let gameResponseHMTL = document.getElementById("game-results");
let computerResponseHTML = document.getElementById("computer-response");
let gameScoreHTML = document.getElementById("game-score");

/* On click of rock button, user selection will get the value of button and other buttons with disable */
rockButton.addEventListener("click", function()
{
   userChoice = rockButton.value;
   paperButton.setAttribute("disabled", "disabled");
   paperButton.classList.add("disable-button");

   scissorButton.setAttribute("disabled", "disabled");
   scissorButton.classList.add("disable-button");

   playGame(userChoice, computerChoice);
});

/* On click of paper button, user selection will get the value of button and other buttons with disable */
paperButton.addEventListener("click", function()
{
    userChoice = paperButton.value;
    rockButton.setAttribute("disabled", "disabled");
    rockButton.classList.add("disable-button");

    scissorButton.setAttribute("disabled", "disabled");
    scissorButton.classList.add("disable-button");

    playGame(userChoice, computerChoice);
});

/* On click of paper button, user selection will get the value of button and other buttons with disable */
scissorButton.addEventListener("click", function()
{
    userChoice = scissorButton.value;
    rockButton.setAttribute("disabled", "disabled");
    rockButton.classList.add("disable-button");

    paperButton.setAttribute("disabled", "disabled");
    paperButton.classList.add("disable-button");

    playGame(userChoice, computerChoice);
});

let computerScore = 0;
let yourScore = 0;

let playGame = function(userChoice, computerChoice) 
{
    if(userChoice===computerChoice)
    {
        gameResponseHMTL.innerHTML = "It's a tie!";
    } 
    else if((userChoice==="rock" && computerChoice =="paper") || (userChoice==="paper" && computerChoice =="scissor") || (userChoice==="scissor" && computerChoice =="rock"))
    {
        gameResponseHMTL.innerHTML = "You lose!";
        computerScore++;
        gameScoreHTML.innerHTML = `Your Score: ${yourScore} | Computer Score: ${computerScore}`
    }
    else
    {
        gameResponseHMTL.innerHTML = "You win!";
        yourScore++;
        gameScoreHTML.innerHTML = `Your Score: ${yourScore} | Computer Score: ${computerScore}`
    }

    computerResponseHTML.innerHTML = `The computer picked ${computerChoice}`
}


