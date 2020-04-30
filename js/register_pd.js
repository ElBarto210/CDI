function continue_button() {
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var phone = document.getElementById("phone").value
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    
    if(mail == 'ejemplo@hotmail.com') {
        window.alert("El email introducido ya está en uso");
    }
    else {
        
        if(pass == pass2) {
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("last_name", last_name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("mail", mail);
            sessionStorage.setItem("pass", pass);
            window.location.href = "register_vh.html";
        } 
        
        else {
            window.alert("Las contraseñas no son iguales");
        }
    }
}
