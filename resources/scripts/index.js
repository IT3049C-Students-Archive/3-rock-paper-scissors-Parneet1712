// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById("game-screen") ;
const startGameButton = document.getElementById("start-game-button") ;
const userName = document.getElementById("username");
const userSelection = document.getElementById("user-selection");
const goButton = document.getElementById("go-button");
const scoreParagraph = document.getElementById("score");
const gameHistoryParagraph = document.getElementById("game-history");
//const userScore = 0;
//const cpuScore = 0;

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (startGameButtonEvent) {
  //const username = document.getElementById("userName").value;
  game = new RockPaperScissors(userName.value);
  // Complete
  startGameButtonEvent.preventDefault();
  console.log("User clicked the start button");
  welcomeScreen.classList.add("d-none");
  gameScreen.classList.remove("d-none");
});

// updateScoreTallyUI
function updateScoreTallyUI(){
  //const score = document.getElementById("scoreParagraph").innerHTML= game.userName + ": " + game.score + " v CPU: " +  game.cpuScore;
  scoreParagraph.innerHTML = game.username + ": " + game.score.user + " v CPU: " + game.score.cpu;
  //return score;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  //game = new gameHistoryLog(gameHistoryParagraph);
  //document.getElementById("gameHistoryParagraph").innerHTML="";
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;

}



// go-button EventListener
goButton.addEventListener(`click`, function (goButtonEvent) {
  goButtonEvent.preventDefault();
  console.log("Go button is clicked")
  //game = new play(userSelection);
  game.play(userSelection.value);

  updateScoreTallyUI();
  updateGameHistoryUI();
});