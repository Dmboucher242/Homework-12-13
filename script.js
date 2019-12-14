let complexity = prompt("Choose a password length between 8 and 128 characters long")
   if (complexity < 8 || complexity >128){
       alert("Must choose a number between 8 and 128");
        complexity = prompt("Choose a password length between 8 and 128 characters long")
 
   }
       alert(complexity);
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=";
var generate = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function(){
 
   console.log(generate(complexity));
});
 
 
 
function generate(complexity){
  
   let complexity = document.getElementById("slidebar").value;
   let password = "";
    for(var i = 0; i < complexity; i++){
       password = values.charAt(Math.floor(Math.random() * (values.length)));
       return password;
   }
   document.getElementById("textbox").textContent = password;
}