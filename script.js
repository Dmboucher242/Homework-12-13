function generate(){
    let textarea = document.getElementById("password").nodeValue
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";
    for(var i = 0; i <=complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

 
    }

    document.getElementById("textarea").value = passwords;

}

