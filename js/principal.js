function Search_destination() {
    var destination = document.getElementById("location").value;
 
    if(destination == "" || destination == null) {
        window.alert("Destino vacío.");
    }
    else {
        sessionStorage.setItem('destination' , destination);
        window.location.href = "service_select.html";
    }
}

function getUsername() {
    var name = sessionStorage.getItem('name')
    if(name == null){
        name = "admin";
    }
    return name;
}

function displaymenu() {
    window.location.href = "menu.html";
}