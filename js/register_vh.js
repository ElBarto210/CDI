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

    var features = ['wheelchair', 'baby-carriage', 'truck', 'charging-station'];

    var vhmarca = document.getElementById("vhmarca").value;
    var vhmodelo = document.getElementById("vhmodelo").value;
    var vhmatricula = document.getElementById("vhmatricula").value;


    sessionStorage.setItem('vhmarca',vhmarca );
    sessionStorage.setItem('vhmodelo',vhmodelo );
    sessionStorage.setItem('vhmatricula',vhmatricula );


    if(sessionStorage.getItem('vhmarca') != null){

    var vhmarca2 = sessionStorage.setItem('vhmarca2',vhmarca );
    var vhmodelo2 = sessionStorage.setItem('vhmodelo2',vhmodelo );
    var vhmatricula2 = sessionStorage.setItem('vhmatricula2',vhmatricula );
    }

    if(sessionStorage.getItem('vhmarca2') != null){
    var vhmarca3 = sessionStorage.setItem('vhmarca3',vhmarca );
    var vhmodelo3 = sessionStorage.setItem('vhmodelo3',vhmodelo );
    var vhmatricula3 = sessionStorage.setItem('vhmatricula3',vhmatricula );
    }

    for(var i = 0; i<features.length; i++){
        sessionStorage
        sessionStorage.getItem(feature) == "1"
    }
        
    window.location.href = "pago.html";
}
