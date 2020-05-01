function carga_valores(){
    sessionStorage.setItem("reserva", "1");

    var aparcar = sessionStorage.getItem('aparcar');
    var repostar = sessionStorage.getItem('repostar');
    var aceite = sessionStorage.getItem('aceite');
    var presion = sessionStorage.getItem('presion');
    var lavado = sessionStorage.getItem('lavado');

    var precioAparcamiento = Number(sessionStorage.precioAparcamiento);
    var precioRepostaje = Number(sessionStorage.precioRepostaje);
    var precioAceite = 3;
    var precioPresion = 5;
    var precioLavado = Number(sessionStorage.precioLavado);
    
    console.log(aparcar);
    console.log(repostar);
    console.log(aceite);
    console.log(presion);
    console.log(lavado);
    
    if (aparcar == null){
        disable("aparcar");
        precioAparcamiento = 0;
    }
    else {  document.getElementById("precioAparcamiento").innerHTML = sessionStorage.precioAparcamiento+"€";    
    }
    
    if (repostar == null){
        disable("repostar");
        precioRepostaje = 0;
    }
    else {  document.getElementById("precioRepostaje").innerHTML = sessionStorage.precioRepostaje+"€";    
    }
    
    if (aceite == null){
        disable("aceite");
        precioAceite = 0;
    }
    else{
        document.getElementById("precioAceite").innerHTML = "3€";
    }
    
    if (presion == null){
        disable("presion");
        precioPresion = 0;
    }
    else{
        document.getElementById("precioPresion").innerHTML = "5€"; 
    }
    
    if (lavado == null){
        disable("lavado");
        precioLavado = 0;
    }
    else{
        document.getElementById("precioLavado").innerHTML = sessionStorage.precioLavado+"€";
    }
    console.log(Number(sessionStorage.precioRepostaje));
    
    document.getElementById("precioTotal").innerHTML = precioAparcamiento + precioRepostaje + precioAceite + precioPresion + precioLavado + "€";
}

function disable(id){
    document.getElementById(id).style.display = 'none';
}


