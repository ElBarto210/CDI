function carga_valores(){
    sessionStorage.setItem("reservas", "1");

    var aparcar = sessionStorage.getItem('aparcar');
    var repostar = sessionStorage.getItem('repostar');
    var aceite = sessionStorage.getItem('aceite');
    var presion = sessionStorage.getItem('presion');
    var lavado = sessionStorage.getItem('lavado');

    console.log(aparcar);
    
    if (aparcar != true){
        disable("aparcar");
    }
    else{
        console.log("beatch");
    }
    if (repostar == true){
        disable("repostar");
    }
    if (aceite == true){
        disable("aceite");
    }
    if (presion == true){
        disable("presion");
    }
    if (lavado == true){
        disable("lavado");
    }
    
}

function disable(id){
    var nodes = document.getElementById(id).getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;
    }
}


