function login() {
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
        
    if((mail == sessionStorage.getItem('mail')) && (pass == sessionStorage.getItem('pass')) || ((mail == 'admin') && (pass == 'admin'))){
        window.location.href = "principal.html";
    }
    
    else{
        window.alert("Credenciales no válidos");
    }
        
}
