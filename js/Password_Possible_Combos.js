var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "!", "@", "#", "$", "%", "^", "&", "*", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
"!", "@", "#", "$", "%", "^", "&", "*","(", ")", "!", "@", "#", "$", "%", "^", "&", "*", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")","_","_","_","_","_","_","_","_","_","_"
];
var output = document.getElementById('output');
var pi = 3.1415926535897932384626433832795028841971;
var InputNumbers = document.getElementById('Numbers');
var InputLetters = document.getElementById('Letters');
var CapitalcharactersAthroughR = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];
var CapitalCharactersSthroughZ = ["S", "T", "U", "V", "W", "X", "Y", "Z"];
var LowerCaseCharactersAthroughR = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"];
var LowerCaseCharactersSthroughZ = ["s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
var numpassword = numbers;
var numbersandSpecialChars = numbers.concat(specialCharacters);
var lettersPasscode = CapitalcharactersAthroughR.concat(CapitalCharactersSthroughZ, LowerCaseCharactersAthroughR, LowerCaseCharactersSthroughZ);
var alphanumericpassword = CapitalcharactersAthroughR.concat(CapitalCharactersSthroughZ, LowerCaseCharactersAthroughR, LowerCaseCharactersSthroughZ, numbers);
var allpasscode = CapitalcharactersAthroughR.concat(CapitalCharactersSthroughZ, LowerCaseCharactersAthroughR, LowerCaseCharactersSthroughZ, numbers, specialCharacters);
var lettersandSpecialCharactersPasscode = CapitalcharactersAthroughR.concat(CapitalCharactersSthroughZ, LowerCaseCharactersAthroughR, LowerCaseCharactersSthroughZ, specialCharacters);
function alphaNumericPasswordGenerator12Digit() {
  var alphaNumericPassword = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
}
function validatePassword() {
    var p = document.getElementById('Length').value,
        errors = [];
    if (p.length < 4) {
        errors.push("Your password must be at least 4 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (p.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one uppercase letter.")
    }
    if (p.search(/.*[!@#$%^&*() =+_-]/) < 0) {
      errors.push("Your password must contain at least one uppercase letter.")
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    else if (errors.length = 0) {
      frn();
    }
    return true;
}
else if (length <= 3) {
  alert("Your password must be at least 4 digits long");
}
  else {
    for (var j = 0; j < length; j++) {
      alphaNumericPassword.push(alphanumericpassword[Math.floor(Math.random()*72)]);
    }
    document.getElementById('output').innerHTML = alphaNumericPassword.join("");
  }
}
function possibleCombos() {
  var amountofDigits = Number (prompt ("How many digits are there in your password?"));
  var numbersPerDigit = Number (prompt ("How many different characters/numbers can each digit be?"));
  var pow = Math.pow(numbersPerDigit, amountofDigits);
  alert ("There are " + pow + " possible combinations for your password.");
}
function dynamicPassword() {
  var UltimatePassword = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var i = 0; i < length; i++) {
      UltimatePassword.push(allpasscode[Math.floor(Math.random()*148)]);
    }
    document.getElementById('output').innerHTML = UltimatePassword.join("");
  }
}
function numbersOnly() {
  var numbersArray = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var k = 0; k < length; k++) {
      numbersArray.push(numbers[Math.floor(Math.random()*20)]);
    }
    document.getElementById('output').innerHTML = numbersArray.join("");
  }
}
function lettersOnly() {
  var lettersArray = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var l = 0; l < length; l++) {
      lettersArray.push(lettersPasscode[Math.floor(Math.random()*52)]);
    }
    document.getElementById('output').innerHTML = lettersArray.join("");
  }
}
function specialCharactersOnly() {
  var specialCharactersArray = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var m = 0; m < length; m++) {
      specialCharactersArray.push(specialCharacters[Math.floor(Math.random()*66)]);
    }
    document.getElementById('output').innerHTML = specialCharactersArray.join("");
  }
}
function numbersandSpecialCharacters() {
  var numbersandSpecialCharactersArray = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var n = 0; n < length; n++) {
      numbersandSpecialCharactersArray.push(numbersandSpecialChars[Math.floor(Math.random()*76)]);
    }
    document.getElementById('output').innerHTML = numbersandSpecialCharactersArray.join("");
  }
}
function lettersandSpecialCharacters() {
  var lettersandSpecialCharactersArray = [];
  var length = document.getElementById('Length').value;
  if (length == 0) {
    console.log("Empty Length");
  }
  else {
    for (var o = 0; o < length; o++) {
      lettersandSpecialCharactersArray.push(lettersandSpecialCharactersPasscode[Math.floor(Math.random()*118)]);
    }
    document.getElementById('output').innerHTML = lettersandSpecialCharactersArray.join("");
  }
}
function frn() {
  if (document.getElementById('Numbers').checked && document.getElementById('Letters').checked && document.getElementById('Special_Characters').checked == false) {
    alphaNumericPasswordGenerator12Digit();
  }

  else if (document.getElementById('Numbers').checked && document.getElementById('Special_Characters').checked && document.getElementById('Letters').checked) {
    dynamicPassword();
  }
  else if (document.getElementById('Numbers').checked && document.getElementById('Special_Characters').checked == false && document.getElementById('Letters').checked == false) {
    numbersOnly();
  }
  else if (document.getElementById('Numbers').checked == false && document.getElementById('Special_Characters').checked == false && document.getElementById('Letters').checked) {
    lettersOnly();
  }
  else if (document.getElementById('Numbers').checked == false && document.getElementById('Special_Characters').checked && document.getElementById('Letters').checked == false) {
    specialCharactersOnly();
  }
  else if (document.getElementById('Numbers').checked && document.getElementById('Special_Characters').checked && document.getElementById('Letters').checked == false) {
    numbersandSpecialCharacters();
  }
  else if (document.getElementById('Numbers').checked == false && document.getElementById('Special_Characters').checked && document.getElementById('Letters').checked) {
    lettersandSpecialCharacters();
  }
}
