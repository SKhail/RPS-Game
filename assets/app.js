
// Starting rounds
let playerScore = 0;
let botScore = 0;


// The computer decides 
function botDecider() {
 const game = ["Rock", "Paper", "Scissors"]
 let randomChoice = Math.floor(Math.random() * game.length);
 switch (randomChoice) {
  case 0:
   return "Rock";
  case 1:
   return "Paper";
  case 2:
   return "Scissors";
 }
}

//Covering each scenarios with Player vs Bot
function gameRounds(playerSelection, botSelection) {
 console.log(`The player picks ${playerSelection}`);
 console.log(`The Bot picks ${botSelection}`);
 switch (playerSelection) {
  case "Rock":
   switch (botSelection) {
    case "Rock":
     alert("Draw Baby!!!")
     break;
    case "Paper":
     alert("Bot has won !!!")
     botScore++;
     break;
    case "Scissors":
     alert("Human has won!")
     break;
   }
   break;
  case "Paper":
   switch (botSelection) {
    case "Rock":
     alert("Human has won!")
     playerScore++;
     break;
    case "Paper":
     alert("Draw Baby!!!")
     break;
    case "Scissors":
     alert("Bot has won !!!")
     botScore++;
     break;
   }
   break;
  case "Scissors":
   switch (botSelection) {
    case "Rock":
     alert("Bot has won !!!")
     botScore++;
     break;
    case "Paper":
     alert("Human has won")
     playerScore++;
    case "Scissors":
     alert("Draw Baby!!!")
     break;
   }
   break;
 }
}

// Dipslays the score to show whos leading/Won
function displayScore() {
 console.log(`Player ${playerScore} ---- Bot ${botScore}`);
 if (playerScore > botDecider) {
  console.log("The player is leading the race");
 } else if (botScore === playerScore) {
  console.log("Its a draw!");
 } else {
  console.log("The bot is leading the race!");
 }
}


// this game will go for 10 rounds and include the scores for each round
function game() {
 for (let i = 1; i <= 10; i++) {
  console.log(`Round ${i} starts`.toUpperCase());
  const playerSelection = prompt("Pick Rock, Paper, or Scissors"); // Which one to pick
  const botSelection = botDecider(); // Computer Selection
  gameRounds(playerSelection, botSelection);
  displayScore() // Shows the score after each round
 }
 console.log("The game has ended");
}

//Excecution
game();




//This function will make this game play 10 rounds
// function game() {
//  for (let i = 1; i < 10; i++)
//   console.log(`Round ${i} starts`);
//  const playerSelection = prompt("Pick Rock, Paper or Scissors");
//  const botSelection = botDecider();
//  gameRounds(playerSelection, botSelection);
// }
// console.log("The Game has ended");
// if (playerScore > botScore) {
//  alert("The Player is the winner")
// } else if (botScore === playerScore) {
//  alert("Its a draw")
// } else {
//  alert("The bot wins");
// }

// game();
