var lowerCasedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
function getPasswordOptions() {

   var length = parseInt(prompt(
      "Choose a password length between 8 and 128 characters."
   ));

   if (length < 8) {
      alert("Password length must be between 8 and 128 characters.");
      return;
   }
   if (length > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return;
   }
   if (isNaN(length) === true) {
      alert("Password length must be a number.");
      return;
   }

   var hasLowerCasedLetters = confirm("Would you like your password to include lowercase letters?");
   var hasUpperCasedLetters = confirm("Would you like your password to include uppercase letters?");
   var hasNumbers = confirm("Would you like your password to include numbers?");
   var hasSpecialCharacters = confirm("Would you like your password to include special characters?");


   var passwordOptions = {
      length: length,
      hasLowerCasedLetters: hasLowerCasedLetters,
      hasUpperCasedLetters: hasUpperCasedLetters,
      hasNumbers: hasNumbers,
      hasSpecialCharacters: hasSpecialCharacters
   };

   return passwordOptions;
}

function getRandom(arr) {
   var randIndex = Math.floor(Math.random() * arr.length);
   var randElement = arr[randIndex];

   return randElement;
}

function generatePassword() {
   var options = getPasswordOptions();
   var result = [];

   var possibleCharacters = [];

   var guaranteedCharacters = [];

   if (options.hasLowerCasedLetters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedLetters);
      guaranteedCharacters.push(getRandom(lowerCasedLetters));
   }
   if (options.hasUpperCasedLetters) {
      possibleCharacters = possibleCharacters.concat(upperCasedLetters);
      guaranteedCharacters.push(getRandom(upperCasedLetters));
   }
   if (options.hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
      guaranteedCharacters.push(getRandom(numbers));
   }
   if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
   }

   for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);

      result.push(possibleCharacter);
   }

   for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
   }

   return result.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

}

generateBtn = document.addEventListener("click", writePassword);

