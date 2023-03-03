// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input//
function writePassword() {
  var password = '';
  var lengthmin = 8;
  var lengthmax = 120;
  var length = Math.floor(Math.random() * (lengthmax-lengthmin +1)) + lengthmin; 
  var Charset = ["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","","x","y","z"];
   Charset = Charset.concat(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])
   Charset = Charset.concat(["0","1","2","4","5","6","7","8","9"])
   Charset = Charset.concat(["~","!","@","#","$","%","^","&","*","(",")","_","+"])
  for ( var i = 0; i < length; i++ ) {
    password += Charset[Math.floor(Math.random() * Charset.length)];
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

generate.addEventListener("click", writePassword);
