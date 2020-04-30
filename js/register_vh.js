function changeFeature(feature) {
    if(sessionStorage.getItem(feature) == "1" ){
        sessionStorage.removeItem(feature);
        document.getElementById(feature).style = "feature_button"
    }
    else{
        sessionStorage.setItem(feature, "1");
        document.getElementById(feature).style.backgroundColor = "#a36d09";
        document.getElementById(feature).style.color = "#ffffff";
    }
}

function continue_button() {

    var vhmarca = document.getElementById("vhmarca").value;
    var vhmodelo = document.getElementById("vhmodelo").value;
    var vhmatricula = document.getElementById("vhmatricula").value;

    sessionStorage.setItem("vhmarca", vhmarca);
    sessionStorage.setItem("vhmodelo", vhmodelo);
    sessionStorage.setItem("vhmatricula", vhmatricula);

    window.location.href = "pago.html";
}
