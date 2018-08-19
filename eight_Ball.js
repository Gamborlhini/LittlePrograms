function eightBall() {
  var question = prompt("What is your yes or no question?");
  var random = Math.random();
  if (random <= 0.2) {
    alert("Probably");
  }
  else if (random <= 0.4 && random > 0.2) {
    alert("No way");
  }
  else if (random <= 0.6 && random > 0.4) {
    alert("The genie is sleeping, try again later");
  }
  else if (random <= 0.7 && random > 0.6) {
    alert("The crystal ball has shattered, try again later");
  }
  else if (random < 0.95 && random > 0.7) {
    alert("Unclear");
  }
  else if (random <= 1.0 && random > 0.95){
    alert("100%");
  }
  else if (question === "" || question === " ") {
    alert("You didn't even ask anything");
  }
  else {
    alert("Whoops, something went wrong, the genie therapists will be coming around soon!");
    console.error("If/Elif failed to execute correctly");
  }
}
