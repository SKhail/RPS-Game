
const displayPlayer = document.getElementById("displayPlayer");
const displayBot = document.getElementById("displayBot");
const displayResults = document.getElementById("displayResults");

//Choices
const choices = ["Rock", "Paper", "Scissors"];
// Live score display 
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const botScoreDisplay = document.getElementById("botScoreDisplay");
let playerScore = 0;
let botScore = 0;


//Covering each scenarios with Player vs Bot
function game(playerChoice) {

  const botChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === botChoice) {
    result = "It's a draw!!!";  // if player vs bot outcome is the same result it will be a draw
  }
  else {
    switch (playerChoice) {
      case "Rock":
        result = (botChoice === "Scissors") ? "You Won!" : "You Lost";
        break;
      case "Paper":
        result = (botChoice === "Rock") ? "You Won!" : "You Lost!";
        break;
      case "Scissors":
        result = (botChoice === "Paper") ? "You Won!" : "You Lost!";
        break;
    }
  }

  // Displays the score to show whos leading/Won
  displayPlayer.textContent = `Player: ${playerChoice}`;
  displayBot.textContent = `Bot: ${botChoice}`;
  displayResults.textContent = result;

  displayResults.classList.remove("greenWin", "redText");

  switch (result) {
    case "You Won!":
      displayResults.classList.add("greenWin");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lost!":
      displayResults.classList.add("redLost");
      botScore++;
      botScoreDisplay.textContent = botScore;
      break;
  }

  console.log(result);

}

