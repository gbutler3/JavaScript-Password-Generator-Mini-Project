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
  var ammount = prompt("How many characters do you want to use? (Must be between 8 and 128)");
    if (ammount == null || ammount<8 || ammount>128 || isNaN(ammount)) {
      alert("INVALID; Please enter a NUMBER between 8-128.");
      return
    }
  }

// Add event listener to generate button- listening for click and then it will rin "writepassword"
generateBtn.addEventListener("click", writePassword);
