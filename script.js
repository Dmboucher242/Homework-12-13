var generate = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function(){

    console.log("complexity");
});



function generate(){
    
    // let complexity = document.getElementById("slidebar").value;
    let complexity =42;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+-=";
    let password = "";
  
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * (values.length)));
        
    }
    document.getElementById("textbox").textContent = password;
    

}





