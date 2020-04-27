function hidemenu() {
     window.location.href = "inicio.html";
}

function Usuario() {
     window.location.href = "inicio.html";
}

function vehiculos() {
     window.location.href = "inicio.html";
}

function pagos() {
     window.location.href = "inicio.html";
}

function reservas() {
     window.location.href = "inicio.html";
}

function logout() {
     window.location.href = "start.html";
    delete_cookie("mail");
    //delete rest of cookies
}

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}