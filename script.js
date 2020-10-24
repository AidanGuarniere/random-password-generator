// Assignment code here
// global variables
var n = false;
var l = false;
var u = false;
var s = false;

var num = "1234567890";
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var spec = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var pLength; 
var uInput = "";
var rPassword



function generatePassword() {
  //set variables to starter values at beggining of generatePassword()
  var n = false;
  var l = false;
  var u = false;
  var s = false;
  var uInput = ""
 
  // ask for length of password
  var length = window.prompt("How long would you like your password? (In between 8 and 128 characters)");

  // check for appropriate length, if true, ask if user wants numbers in their password
  if(length >= 8 && length < 129 ){    
    var n = window.confirm("Do you want numbers in your password?");
  // if false, request appropriate length
  } else {
    window.alert("Please enter a number between 8 and 128");
    ImCheating 
  }
  // if user wants numbers, add them to their input choices (uInput)
  if (n) {
    n = true;
    uInput = uInput + num;
  
  }
  // ask if user wants capitilized letters in their password
  var u = window.confirm("Would you like capital letters in your password?")
  // if user wants capitilized letters, add them to their input choices (uInput)
  if(u){
    u = true;
    uInput = uInput + cap;
  }
  // ask if user wants lowercase letters in their password
  var l = window.confirm("Would you like lowercase letters in your password?")
  // if user wants lowercase letters, add them to their input choices (uInput)
  if(l){
    l = true;
    uInput = uInput + low;
  }
  // ask if user wants special characters in their password
  var s = window.confirm("Would you like special characters in your password?")
  // if user wants special characters, add them to their input choices (uInput)
  if(s){
    s = true;
    uInput = uInput + spec;

  }
  // if user does not pick a password selector, request they use at least one valid selector and return them to selector questions
  if (n !=true && u !=true && l !=true && s !=true){
    window.alert("You need to pick at least one password selector");
    generatePassword();
  }
  // log uInput 
  console.log(uInput);

  // set rPassword to an empty string
  var rPassword = ""

  // for loop to select a list of characters that are randomly chosen from the uInput character preferences AND as long as "var length"
  for (var i = 0; i < length; i++ ) {
  var random = Math.floor(Math.random() * uInput.length);

  rPassword = rPassword + uInput.charAt(random);
}

  // display random password
  return rPassword;


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
