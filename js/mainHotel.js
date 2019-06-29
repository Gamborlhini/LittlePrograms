var total, floor, room, floorReport, roomReport, people, floorOut, roomOut, totalOut;
var reportArray = [];
var retriveCached = localStorage.getItem("cache");
var rooms = retriveCached.split(',').map(Number);
if (rooms === undefined || rooms.length == 0 || rooms[0] == "NaN" || cache == "NaN") {
    // array empty or does not exist
    for (var i = 0; i < 200; i++) {
      rooms[i]=0;
    }
    console.log("Array was empty");
}
cache = retriveCached.toString();
localStorage.setItem("cache", cache);
//use myArray, it's an array of numbers
var cache;
function checkIn() {
  floor = Number(prompt("Which floor is your room on?"));
  room = Number(prompt("Which room would you like to check in?"));
  people = Number(prompt("How many people are checking into that room?"));
  total = floor*20+room;
  rooms[total] = people;
  cache = rooms.toString();
  localStorage.setItem("cache", cache);

}
function checkOut() {
  floorOut = Number(prompt("Which floor is your room on?"));
  roomOut = Number(prompt("Which room would you like to check out?"));
  totalOut = floorOut*20+roomOut;
  rooms[totalOut] = 0;
  cache = rooms.toString();
  localStorage.setItem("cache", cache);
}
function report() {
  document.getElementById("output").innerHTML = "";
  reportArray = [];
  for (var i = 0; i < rooms.length; i++) {
    floorReport = Math.floor(i/20)
    roomReport = i%20;
    if (rooms[i] != 0) {
      reportArray.push("Room " + roomReport + " on floor " + floorReport + " has " + rooms[i] + " people in it. <br>");
      cache = rooms.toString();
      localStorage.setItem("cache", cache);
    }
  }
  document.getElementById("output").innerHTML = reportArray.join(" ");
}
