function Search_destination() {
    var destination = document.getElementById("destination").value;

    sessionStorage.setItem('destination' , destination);

    window.location.href = "buscador.html";
}

function getUsername() {
    var name = sessionStorage.getItem('name')
    if(name === " "){
        name = "Username";
    }
    return name;
}

function getCookie(cname) {
    var value = " ";
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i<ca.length; i++){
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
        }
    }
    return value;
}

function displaymenu() {
    window.location.href = "menu.html";
}