// Assignment Code
var generateBtn = document.getElementById("generate");


var length = 8-128;
var charset = ["a","b","c"defghijklmnopqrstuvwxyz"]
var charset = [ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]
var charset = []retVal = "";
for (var i = 0; <= length; i++)
{ var ranchar = math.random(length);
writePassword += charset(randonNumber, randonNumber +1);
}


// Write password to the #password input// add starter code 
function writePassword() {
  var password = generatePassword(); 
  var passwordText
 
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
