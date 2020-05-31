// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById("game-screen") ;
const startGameButton = document.getElementById("start-game-button") ;
const userName = document.getElementById("username");
const userSelection = document.getElementById("user-selection");
const goButton = document.getElementById("go-button");
const scoreParagraph = document.getElementById("score");
const gameHistoryParagraph = document.getElementById("game-history");

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){

}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
start-game-button.addEventListener(`click`, function (startGameButtonEvent) {
  const username = document.getElementById("userName");
  game = new RockPaperScissors(userName);
  // Complete
startGameButtonEvent.preventDefault();
//console.log("User clicked the start button");
welcomeScreen.classList.add("d-none");
gameScreen.classList.remove("d-none");

});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  
});