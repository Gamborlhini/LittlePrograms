function findVolts() {
  var current = prompt("What is the current of your circuit (In amps)?");
  var resistance = prompt("What is the resistance of your circuit (In ohms)?");
  alert("The voltage of your circuit is " + resistance*current + " volts");
}
function findCurrent() {
  var voltage = prompt("What is the voltage of your circuit (In volts)?");
  var resistance = prompt("What is the resistance of your circuit (In ohms)?");
  alert("The current of your circuit is " + voltage/resistance + " amps");
}
function findResistance() {
  var current = prompt("What is the current of your circuit (In amps)?");
  var voltage = prompt("What is the voltage of your circuit (In volts)?");
  alert("The resistance of your circuit is " + voltage/current + " ohms");
}
function findPower() {
  var current = prompt("What is the current of your circuit (In amps)?");
  var voltage = prompt("What is the voltage of your circuit (In volts)?");
  alert("The power of our circuit is " + current*voltage + " watts");
}
function findEquivelentResistance(){
  var seriesorParallel = prompt("Is your circuit series or parallel?");
  if (seriesorParallel == "series" || seriesorParallel == "Series") {
    var resistorsSeries = 0;
    var amountofResistorsSeries = prompt("How many resistors do you have?");
    for (var j = 0; j < amountofResistorsSeries; j++) {
      jPlusOne = j+1;
      amountofResistorsSeries[i]
      resistorsSeries += Number(prompt("What is the value of resistor number " + jPlusOne));
    }
    alert(resistorsSeries);
  }
  else if (seriesorParallel == "parallel" || seriesorParallel == "Parallel") {
    var resistorsParallel =0;
    var resistorsParallelInverse = [];
    var amountofResistorsParallel = prompt("How many resistors do you have");
    for (var i = 0; i < amountofResistorsParallel; i++) {
      var iPlusOne = i+1;
      resistorsParallel += Number(1/prompt("What is the value of resistor number " + iPlusOne));
    }
    alert("The resistance of your circuit is " + 1/resistorsParallel);
  }

}
