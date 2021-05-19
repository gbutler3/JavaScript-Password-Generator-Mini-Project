// Assignment Code
var generateBtn = document.querySelector("#generate"); // looks for an id named generatebtn
var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Realized I had to put the split in there so that they wouldn't all be read together as one string
var capitalsArray =capitals.split("");
var normal = "abcdefghijklmnopqrstuvwxyz";
var normalArray= normal.split("");
var number ="0123456789";
var numberArray = number.split("");
var specialSymbols = "!@#$%^&*()<>?+*";
var specialSymbolsArray = specialSymbols.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //this is a function being called - value expected to be returned 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {
  var PWlength = prompt("How many characters do you want to use? (Must be between 8 and 128)");
    console.log("password length " + PWlength)
  var capitals = confirm("Would you like UPPERCASE letters in your password?");
    console.log(" capitals  " + capitals)
  var normal = confirm("Would you like LOWER CASE letters in your password?");
    console.log(" lower case  " + normal)
  var number = confirm("Would you like NUMBERS letters in your password?");
    console.log(" numbers  " + number)
  var specialSymbols = confirm("Would you like SYMBOLS  in your password?");
    console.log("symbols " + specialSymbols)
}
// Add event listener to generate button- listening for click and then it will rin "writepassword"
generateBtn.addEventListener("click", writePassword);
