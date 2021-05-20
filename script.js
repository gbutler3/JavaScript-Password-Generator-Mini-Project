


// Assignment Code
var generateBtn = document.querySelector("#generate"); // looks for an id named generatebtn
var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Realized I had to put the split in there so that they wouldn't all be read together as one string
var capitalsArray =capitals.split("");
var normal = "abcdefghijklmnopqrstuvwxyz";
var normalArray= normal.split("");
var number = "0123456789"
var numberArray = number.split("");
var specialSymbols = "!@#$%^&*()<>?+*";
var specialSymbolsArray = specialSymbols.split("");
var Inputs;//made this a variable because in the prompts I needed to define what the user input 
var PWlength; //made this a variable because In the loop at the bottom I needed to define PWlength


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
    return}
  //TO DO: take console.logs out after completed, using for visual of if code is working 
    console.log("password length " + PWlength)
  var capitals = confirm("Would you like UPPERCASE letters in your password?"); 
    console.log(" capitals  " + capitals)
  var normal = confirm("Would you like LOWER CASE letters in your password?");
    console.log(" lower case  " + normal)
  var number = confirm("Would you like NUMBERS letters in your password?");
    console.log(" numbers  " + number)
  var specialSymbols = confirm("Would you like SYMBOLS  in your password?");
    console.log("symbols " + specialSymbols)
//this is if they user inputs cancel for all the options 
 if(!capitals && !normal && !number && !specialSymbols) {
   Inputs = alert ("No criteria selected, please start over")
 } 
//true CAP, LOWER, NUMBER, SYMBOL
 else if(capitals && normal && number && specialSymbols){
   Inputs= capitalsArray.concat(normalArray, numberArray, specialSymbolsArray);
   console.log(Inputs);
 }
// true CAP, LOWER, NUMBER, 
else if(capitals && normal && number){
  Inputs= capitalsArray.concat(normalArray, numberArray);
  console.log(Inputs);
}
// true LOWER, NUMBER, SYMBOL

//true CAP, LOWER
else if(capitals && normal){
  Inputs= capitalsArray.concat(normalArray);
  console.log(Inputs);
}
//true LOWER, NUMBER
//true NUMBER, SYMBOL
//true CAP
else if(capitals){
  Inputs= capitalsArray;
  console.log(Inputs);
}
//true LOWER
//true NUMBER
//true SYMBOL
}

// Add event listener to generate button- listening for click and then it will rin "writepassword"
generateBtn.addEventListener("click", writePassword);