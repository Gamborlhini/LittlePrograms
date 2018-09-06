function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function tipCalc() {
  var costofMeal = Number(prompt("What was the cost of your meal?"));
  var rating = Number(prompt("What percent tip do you want to give?"));
  if (isNaN(rating)||costofMeal<=0||rating<=0) {
    alert("You didn't enter a valid number (hint, don't put the percentage sign after the tip percent, its already been included)");
  }
  else if (rating<=100&&rating>0) {
    var onePercentCOM = costofMeal/100;
    var rounded = Math.ceil(onePercentCOM*100)/100;
    var tip = Number(rounded*rating);
    var totalCost = tip+costofMeal;
    totalCost = financial(totalCost);
    alert("Your tip is $" + tip);
    alert("The total cost of your meal is $" + totalCost);
  }
  else {
    alert("Whoops, something went wrong, the devs will be coming around soon!");
    console.error("tipCalc went wrong")
  }
}
