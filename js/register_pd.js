function continue_button() {
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var phone = document.getElementById("phone").value
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    
    
    
    if(pass == pass2) {
        document.cookie = "name=" + name + ";";
        document.cookie = "last_name=" + last_name + ";";
        document.cookie = "phone=" + phone + ";";
        document.cookie = "name=" + name + ";";
        document.cookie = "pass" + pass + ";";
        
        window.location.href = "register_vh.html";
    } 
    else {
        window.alert("Las contraseñas no son iguales");
    }
}
