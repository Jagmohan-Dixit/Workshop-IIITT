for (let i = 0; i < 6; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnHTML = this.innerHTML;
    makeSound(btnHTML);
    //alert("I got clicked");
  });
}

function makeSound(key) {
  switch (key) {
    case "Applause":
      var audio = new Audio("./sound/applause.mp3");
      audio.play();
      break;
    case "Boo":
      var audio = new Audio("./sound/boo.mp3");
      audio.play();
      break;
    case "Gasp":
      var audio = new Audio("./sound/gasp.mp3");
      audio.play();
      break;
    case "Tada":
      var audio = new Audio("./sound/tada.mp3");
      audio.play();
      break;
    case "Victory":
      var audio = new Audio("./sound/victory.mp3");
      audio.play();
      break;
    case "Wrong":
      var audio = new Audio("./sound/wrong.mp3");
      audio.play();
      break;

    default:
      console.log(btnHTML);
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  console.log(activeBtn.classList.value);
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 200);
}
