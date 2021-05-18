// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var PWLength= prompt ("How many characters do you want to use (Must be between 8-128)");
if (PWLength < 8){
  alert ("Password must be at more than 8 characters");
}
else if (PWLength > 128){
  alert ("Password must be less than 128 characters");
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
