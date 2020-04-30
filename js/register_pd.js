function continue_button() {
    var name = document.getElementById('name').value;
    var last_name = document.getElementById('last_name').value;
    var phone = document.getElementById('phone').value
    var mail = document.getElementById('mail').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;
    
    if(pass == pass2) {

        var name = sessionStorage.setItem('name',name );
        var last_name = sessionStorage.setItem('last_name',last_name );
        var phone = sessionStorage.setItem('phone',phone );
        var mail = sessionStorage.setItem('mail',mail );
        var pass = sessionStorage.setItem('pass',pass );
        
        window.location.href = "register_vh.html";
    } 
    else {
        window.alert("Las contraseñas no son iguales");
    }
}
