function carga_valores(){
    sessionStorage.setItem("reserva", "1");

    var aparcar = sessionStorage.getItem('aparcar');
    var repostar = sessionStorage.getItem('repostar');
    var aceite = sessionStorage.getItem('aceite');
    var presion = sessionStorage.getItem('presion');
    var lavado = sessionStorage.getItem('lavado');

    console.log(aparcar);
    console.log(repostar);
    console.log(aceite);
    console.log(presion);
    console.log(lavado);
    
    if (aparcar == null){
        console.log("hola");
        disable("aparcar");
    }
    else {  document.getElementById("precioAparcamiento").innerHTML = sessionStorage.precioAparcamiento;    
    }
    
    if (repostar == null){
        console.log("hola2");
        disable("repostar");
    }
    if (aceite == null){
        console.log("hola3");
        disable("aceite");
    }
    if (presion == null){
        console.log("hola4");
        disable("presion");
    }
    if (lavado == null){
        console.log("hola5");
        disable("lavado");
    }
    
}

function disable(id){
    document.getElementById(id).style.display = 'none';
}


