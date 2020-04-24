function continue_button() {
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var name = document.getElementById("name").value;
    
    
    
    if(pass == pass2) {
        document.cookie = "mail=" + mail;
        document.cookie = "name=" + name;
        
        window.location.href = "register_vh.html";
    } 
    else {
        window.alert("Las contraseñas no son iguales");
    }
}