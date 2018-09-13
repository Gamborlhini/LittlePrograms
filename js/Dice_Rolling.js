var d100, d20, d12, d10, d8, d6, d4;
function rollad100() {
  d100 = random(1, 101);
  alert("You got " + d100)
}
function rollad20() {
  d20 = random(1,21);
alert("You got " + d20);
}
function rollad12() {
  d12 = random(1,13);
  alert("You got " + d12);
}
function rollad10() {
  d10 = random(1,11)
  alert("You got " + d10);
}
function rollad8() {
  random(1,9);
  alert("You got " + d8);
}
function rollad6() {
  random(1,7);
  alert("You got " + d6);
}
function rollad4() {
  random(1,5)
  alert("You got " + d4);
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
