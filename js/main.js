function Search_destination() {
    var destination = document.getElementById("destination").value;

    document.cookie = "destination=" + destination + ";";

    window.location.href = "buscador.html";
}

function getName(cname) {
    var value = "Username";
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
