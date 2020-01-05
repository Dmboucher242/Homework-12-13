var lowerCasedLetters = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [ "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];




   let complexity = prompt("Choose a password length between 8 and 128 characters long")
   if (complexity < 8 || complexity >128){
      alert("Must choose a number between 8 and 128");
      complexity = prompt("Choose a password length between 8 and 128 characters long")
      
   }
   var lowerCasedLetters = confirm("Would you like your password to contain lower cased letters?");
   var upperCasedLetters = confirm("Would you like your password to contain upper cased letters?");
   var numbers = confirm("Would you like your password to contain numbers?")
   var specialCharacters = confirm("Would you like your password to contain special characters?");

   


 
   




 
 
