function reservar_button() {
 
	var numeroHoras = document.getElementById("duracion").value;

    if(numeroHoras > 0) {
        sessionStorage.setItem("precioAparcamiento", numeroHoras*3);

        var direccion = ["reserva-aparcamiento.html", "repostar.html", "lavado.html"];
        if(sessionStorage.getItem('repostar') == "true" ){
            window.location.href = direccion[1];
        } else if(sessionStorage.getItem('lavado') == "true" ){
            window.location.href = direccion[2];
        }
    }
    else{
        window.alert("El tiempo no puede ser menor que 1.");
    }

}

function back(){

	window.location.href = "info-aparcamiento.html";
	
}

function precioAparcamiento(){
 document.getElementById("precioAparcamiento").innerHTML = document.getElementById("duracion").value*3+"€";
}
                            