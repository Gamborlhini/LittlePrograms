function tipCalc() {
  var costofMeal = Number(prompt("What was the cost of your meal?"));
  var rating = Number(prompt("What percent tip do you want to give?"));
  if (isNaN(rating)) {
    alert("You didn't enter an integer!");
  }
  else {
    var onePercentCOM = costofMeal/100;
    var rounded = Math.ceil(onePercentCOM*100)/100;
    var tip = Number(rounded*rating);
    var totalCost = tip+costofMeal;
    alert("Your tip is $" + tip);
    alert("The total cost of your meal is $" + totalCost);
  }
}
