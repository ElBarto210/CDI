
function Search_destination() {
    var destination = document.getElementById("destination").value;

    window.location.href = "buscador.html";
}

function getUsername() {
    var name = sessionStorage.getItem('name');
    if(name == ""){
        name = "admin";
    }
    return name;
}

function displaymenu() {
    window.location.href = "menu.html";
}

function login() {
    window.location.href = "login.html";
    sessionStorage.setItem('vehicles', JSON.stringify([]));
    sessionStorage.setItem('pagos', JSON.stringify([]));
}

function register(){
    sessionStorage.setItem('vehicles', JSON.stringify([]))
    sessionStorage.setItem('pagos', JSON.stringify([]))
}
