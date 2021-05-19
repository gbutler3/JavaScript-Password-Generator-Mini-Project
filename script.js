// Assignment Code
var generateBtn = document.querySelector("#generate"); // looks for an id named generatebtn
var capitals = "ABCDEFGHIJKLMNOP"
var normal = "abcdefghijklmnop"
var number ="0123456789"
var specialSymbols = "!@#$%^&*()<>?*"

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //this is a function being called - value expected to be returned 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var PWlength = prompt("How many characters do you want to use? (Must be between 8 and 128)");
    if (PWlength == null || PWlength<8 || PWlength>128 || isNaN(PWlength)) {
      alert("INVALID; Please enter a NUMBER between 8-128.");
      return
    }

  var capitals = confirm("Would you UPPERCASE letters in your password?");
  var normal = confirm ("Would you like LOWERCASE letters in your password?");
  var number = confirm ("would you like NUMBERS in your password?");
  var specialSymbols = confirm ("Would you like SPECIAL CHARACTERS in your password?");
  
  }

// Add event listener to generate button- listening for click and then it will rin "writepassword"
generateBtn.addEventListener("click", writePassword);
