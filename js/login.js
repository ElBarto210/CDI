function login() {
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
        
    if((mail == sessionStorage.getItem('mail')) && (pass == sessionStorage.getItem('pass'))){
        window.location.href = "inicio.html";
    }
    else{
        window.alert = ('Credenciales no validos')
    }
        
}
