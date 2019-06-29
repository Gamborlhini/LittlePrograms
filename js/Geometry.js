function findSAofSphere() {
  var radius = prompt("What is the radius of your sphere?");
  var one = 4*pi*(radius*radius);
  var unit = prompt("What unit are these measurements in?");
  alert ("Your sphere has a surface area of " + one + " square " + unit);
}
function findVolumeofRectangle() {
  var height = prompt("What is the height of your rectangle?");
  var width = prompt("What is the width of your rectangle?");
  var length = prompt("What is the length of your rectangle?");
  var unit = prompt("What unit are these measurements in?");
  alert ("Your rectangle has a volume of " + height*width*length + " cubic " + unit);
}
function findVolumeofCylinder() {
  var height = prompt("What is the height of your cylinder?");
  var radius = prompt("What is the radius of your cylinder");
  var unit = prompt("What unit are these measurements in?");
  var radiusSquared = Math.pow(radius, 2);
  alert ("Your cylinder has a volume of " + pi*radiusSquared*height + " cubic " + unit);
}
function findVolumeofSphere() {
  var radius = Number(prompt("What is the radius of your sphere?"));
  var radiusCubed = Math.pow(radius, 3);
  var fourThirds = 4/3;
  var pi = 3.1415926535897932384626433832795028841971;
  var unit = prompt("What unit are these measurements in?");
  alert("The volume of your sphere is " + fourThirds*pi*radiusCubed + " cubic " + unit);
}
function findSAofRectangle() {
  var width = Number (prompt("What is the width of your rectangle"));
  var height = Number (prompt("What is the height of your rectangle"));
  var length = Number (prompt("What is the length of your rectangle"));
  var unit = prompt("What unit are these measurements in?");
  var one = width*height;
  var two = width*length;
  var three = length*height;
  var first = one+two+three;
  alert("Your rectangle has a surface area of " + first*2 + " square " + unit);
}
