function reservar_button() {
	var numeroHoras = document.getElementById("duracion").value;

	sessionStorage.setItem("numeroHoras", numeroHoras);

	var direccion = ["reserva-aparcamiento.html", "repostar.html", "lavado.html"];
	if(sessionStorage.getItem('repostar') == "true" ){
		window.location.href = direccion[1];
	} else if(sessionStorage.getItem('lavado') == "true" ){
		window.location.href = direccion[2];
	}
	

}

function back(){

	window.location.href = "info-aparcamiento.html";
	
}