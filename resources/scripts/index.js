// Elements
const welcomeScreen = document.getElementById(`welcomeScreen`);
const gameScreen = document.getElementById("gameScreen") ;
const startGameButton = document.getElementById("startGameButton") ;
const userName = document.getElementById("userName");
const userSelection = document.getElementById("userSelection");
const goButton = document.getElementById("goButton");
const scoreParagraph = document.getElementById("scoreParagraph");
const gameHistoryParagraph = document.getElementById("gameHistoryParagraph");

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
startGameButton.addEventListener(`click`, function (startGameButtonEvent) {
  const username = document.getElementById("userName");
  game = new RockPaperScissors(userName);
  // Complete
startGameButtonEvent.preventDefault();
console.log("User clicked the start button");
welcomeScreen.classList.add("game");
gameScreen.classList.remove("game");

});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  
});