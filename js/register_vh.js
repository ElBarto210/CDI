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


function changeFeature(feature) {
    if (getCookie(feature) !== "1") {
        document.cookie = feature + "= 1;";
    }
    else{
        document.cookie = feature + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    }

}

function continue_button() {
    var vhmarca = document.getElementById("vhmarca").value;
    var vhmodelo = document.getElementById("vhmodelo").value;
    var vhmatricula = document.getElementById("vhmatricula").value;

    document.cookie = "vhmatricula="+vhmatricula;
    document.cookie = "vhmodelo="+vhmodelo;
    document.cookie = "vhmarca="+vhmarca;

    window.location.href = "pago.html"
}
