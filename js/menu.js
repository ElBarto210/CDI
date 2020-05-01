function hidemenu() {
     window.location.href = "principal.html";
}

function Usuario() {
     window.location.href = "menu_user.html";
}

function vehiculos() {
     window.location.href = "vh_list.html";
}

function pagos() {
     window.location.href = "tarjeta_list.html";
}

function reserva() {
     if (sessionStorage.getItem("reserva") == '1'){
          window.location.href = "info-reserva.html";
     }
     else{
          window.alert("No tienes reservas en este momento");
     }
     
}

function informacion() {
    window.location.href = "contacto.html"
}

function logout() {
     window.location.href = "inicio.html";
    delete_cookie("mail");
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('last_name');
    sessionStorage.removeItem('phone');
    sessionStorage.removeItem('pass');
    sessionStorage.removeItem('vhmarca');
    sessionStorage.removeItem('vhmodelo');
    sessionStorage.removeItem('vhmatricula');

    //delete rest of cookies
}
