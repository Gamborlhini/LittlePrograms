'use strict';
function Mean() {
  var set = prompt("Enter in all of your numbers, seperated by a space");
  var setArray = set.split(" ");
  var numArray = setArray.sort(function (a, b) {  return a - b;  });
  numArray = numArray.map(Number);
  var arrayLength = numArray.length;
  var sumArray = numArray.reduce(function(acc, val) { return acc + val; });
  var average = sumArray/arrayLength;
  alert("The mean of your data set is " + average);
}
function randomNamePicker() {
  var names = prompt("Enter in all of your names, seperated by a space.");
  var namesArray = names.split(" ");
  console.log(namesArray);
  var random = namesArray[Math.floor(Math.random()*namesArray.length)];
  console.log(random);
  alert("Your name is... " + random);
}
var playerPosX = 1;
var playerPosY = 1;
var playerSizeX = 1;
var playerSizeY = 1;
var player = [
  {x: 10*playerPosX, y: 10*playerPosY, width: 10*PlayerSizeX, height: 10*playerSizeY, color: Beige},

]
function paycheck() {
  var FourvFour = Number(prompt("How many 4v4 games did you referee?"));
  var SevenvSeven = Number(prompt("How many 7v7 games did you referee?"));
  var NinevNine = Number(prompt("How many 9v9 games did you referee?"));
  var sri = Number(prompt("How many hours (Non-Volunteer) did you work at SRI?"));
  var FourvFourCash = 12*FourvFour;
  var SevenvSevenCash = 14*SevenvSeven;
  var NinevNineCash = 18*NinevNine;
  var sriCash = 10*sri;
  var Total = FourvFourCash+SevenvSevenCash+NinevNineCash+ sriCash;
  var FourPercent = FourvFourCash/Total*100 + "%";
  var SevenPercent = SevenvSevenCash/Total*100 + "%";
  var NinePercent = NinevNineCash/Total*100 + "%";
  var sriPercent = sriCash/Total*100 + "%";
  alert("You made $" + Total + ", " + FourPercent + " of that was from 4v4 games, " + SevenPercent + " of that was from 7v7 games, " + NinePercent + " of that was from 9v9 games, and " + sriPercent + " of that was made from SRI.")
}
