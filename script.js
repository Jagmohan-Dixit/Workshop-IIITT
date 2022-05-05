var applauseButton = document.getElementById("applauseBtn");
var booButton = document.getElementById("booBtn");
var gaspButton = document.getElementById("gaspBtn");
var tadaButton = document.getElementById("tadaBtn");
var victoryButton = document.getElementById("victoryBtn");
var wrongButton = document.getElementById("wrongBtn");

applauseButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/applause.mp3');
audio.play();
});

booButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/boo.mp3');
  audio.play();
});

gaspButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/gasp.mp3');
  audio.play();
});

tadaButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/tada.mp3');
audio.play();
});

victoryButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/victory.mp3');
  audio.play();
});

wrongButton.addEventListener("click", () => {
  //do something
  var audio = new Audio('./sound/wrong.mp3');
  audio.play();
});