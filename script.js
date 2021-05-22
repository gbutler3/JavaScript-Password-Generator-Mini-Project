// Assignment Code
var generateBtn = document.querySelector("#generate"); // looks for an id named generatebtn

var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Realized I had to put the split in there so that they wouldn't all be read together as one string
var capitalsArray =capitals.split("");
var normal = "abcdefghijklmnopqrstuvwxyz" //add .split("") to the end of this see java lesson 15!
var normalArray= normal.split("");
var number = "0123456789"
var numberArray = number.split("");
var specialSymbols = "!@#$%^&*()<>?+*";
var specialSymbolsArray = specialSymbols.split("");
var Inputs;//made this a variable because in the prompts I needed to define what the user input is
var fullPassword= [];

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
   console.log(Inputs);
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
else if( normal && number && specialSymbols){
  Inputs= normalArray.concat(numberArray, specialSymbolsArray);
  console.log(Inputs);
}
//true CAP, LOWER
else if(capitals && normal){
  Inputs= capitalsArray.concat(normalArray);
  console.log(Inputs);
}
//true LOWER, NUMBER
else if( normal && number){
  Inputs= normalArray.concat(numberArray);
  console.log(Inputs);
}
//true NUMBER, SYMBOL
else if(number && specialSymbols){
  Inputs= numberArray.concat(specialSymbolsArray);
  console.log(Inputs);
}
//true CAP
else if(capitals){
  Inputs= capitalsArray;
  console.log(Inputs);
}
//true LOWER
else if( normal){
  Inputs= normalArray;
  console.log(Inputs);
}
//true NUMBER
else if(number){
  Inputs= numberArray;
  console.log(Inputs);
}
//true SYMBOL
else if(specialSymbols){
  Inputs= specialSymbolsArray;
  console.log(Inputs);
}

for (var i = 0; i < PWlength; i++) {
  var newCharacter = Inputs[Math.floor(Math.random() * Inputs.length)];
  fullPassword.push(newCharacter);
}

var password = fullPassword.join("");
  console.log("Your Pasword is: " + password);
  return password;
}

// Add event listener to generate button- listening for click and then it will rin "writepassword"
generateBtn.addEventListener("click", writePassword);