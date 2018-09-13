function rollad100() {
  alert("You got " + random(1,101))
}
function rollad20() {
alert("You got " + random(1,21));
}
function rollad12() {
  alert("You got " + random(1,13));
}
function rollad10() {
  alert("You got " + random(1,11));
}
function rollad8() {
  alert("You got " + random(1,9));
}
function rollad6() {
  alert("You got " + random(1,7));
}
function rollad4() {
  alert("You got " + random(1,5));
}
function flipaCoin() {
  var random = Math.random();
  if (random(1,51) > 50) {
    alert("You got heads!");
}
  else {
    alert("You got tails!");
  }
  console.log(random);
}
