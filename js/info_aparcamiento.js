function next(){
    var direccion = ["reserva-aparcamiento.html", "repostar.html", "lavado.html"];
	if(sessionStorage.getItem('aparcar') == true | sessionStorage.getItem('aparcar') == "true"){
		window.location.href = direccion[0];
	} else if(sessionStorage.getItem('repostar') == "true" ){
		window.location.href = direccion[1];
	} else if(sessionStorage.getItem('lavado') == "true" ){
		window.location.href = direccion[2];
	} else{
		window.location.href = "eleccion_pago.html";
	}
}

