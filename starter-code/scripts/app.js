// Basic Calculator

var basic_num_1 = document.getElementById("basic-num-1");
var basic_num_2 = document.getElementById("basic-num-2");
var basic_operation = document.getElementById("basic-operation");
var basic_answer_alert = document.getElementById("basic-answer-alert");
var basic_calc = document.getElementById("basic-calc");

function alertTest () {
  alert("you got me!");
}

basic_calc.addEventListener("click", calculate);

function calculate () {

  var output = 0;

  var operation = basic_operation.value;
  var firstNumber = parseInt(basic_num_1.value);
  var secondNumber = parseInt(basic_num_2.value);

  if (operation=="+") {
    output = firstNumber + secondNumber;
  }

  else if (operation=="-") {
    output = firstNumber - secondNumber;
  }

  else if (operation=="*") {
    output = firstNumber * secondNumber;
  }

  else if (operation=="/") {
    output = firstNumber / secondNumber;
  }

  basic_answer_alert.textContent = output;

}

// Trip Calculator

// The trip cost calculator should let you calculate the cost of a trip, taking into account that:
// when the speed is less than 60, the formula is distance / mpg * cost
// when the speed is more than 60, the formula is `distance / (mpg - (speed - 60) * 2) * cost

var trip_distance = document.getElementById("trip-distance");
var trip_mpg = document.getElementById("trip-mpg");
var trip_cost = document.getElementById("trip-cost");
var trip_speed = document.getElementById("trip-speed");
var trip_calc = document.getElementById("trip-calc");
var trip_answer_alert = document.getElementById("trip-answer-alert");

trip_calc.addEventListener("click", calculateTripCost);

function calculateTripCost () {

  var tripCost=0;

  var distance = parseInt(trip_distance.value);
  var mpg = parseInt(trip_mpg.value);
  var cost = parseInt(trip_cost.value);
  var speed = parseInt(trip_speed.value);

  if (speed<60) {
    tripCost = (distance/mpg)*cost;
  }
  else if (speed>60) {
    tripCost = (distance/(mpg-(speed-60)*2))*cost;
  }

  trip_answer_alert.textContent = tripCost;

}

// BMI Calculator

// The BMI calculator should compute a body mass index, with the formula ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703

// The formula for BMI using the metric system is: ( Weight in Kilograms / ( Height in Meters x Height in Meters ) )

var bmi_mass = document.getElementById("bmi-mass");
var bmi_height = document.getElementById("bmi-height");
var bmi_calc = document.getElementById("bmi-calc");
var bmi_answer_alert = document.getElementById("bmi-answer-alert");

bmi_calc.addEventListener("click", calculateBMI);

function calculateBMI () {

  var mass = parseInt(bmi_mass.value);
  var height = parseFloat(bmi_height.value);

  var BMI = mass/(height * height);

  bmi_answer_alert.textContent = BMI;
}

// Mortgage Calculator

// The mortgage calculator formula should compute the monthly cost of a loan, with the formula loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)

// Return the value of the number 4 to be the power of 3 (4*4*4):

// Math.pow(4, 3);

var mortgage_loan = document.getElementById("mortgage-loan");
var mortgage_apr = document.getElementById("mortgage-apr");
var mortgage_term = document.getElementById("mortgage-loan");
var mortgage_calc = document.getElementById("mortgage-calc");
var mortgage_answer_alert = document.getElementById("mortgage-answer-alert");

mortgage_calc.addEventListener("click", calculateMortgageCost);

function calculateMortgageCost () {

  var loan = Number(mortgage_loan.value);
  var apr = Number(mortgage_apr.value)/100.0;
  var term = Number(mortgage_term.value);

  var mortgageCost = (loan * apr * Math.pow((1+apr), term)) / (Math.pow((1+apr), term) - 1)

  console.log(mortgageCost);

  mortgage_answer_alert.textContent = mortgageCost;

}