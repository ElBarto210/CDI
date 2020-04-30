function reservar_button() {
	var numeroHoras = document.getElementById("duracion").value;

	document.cookie = "numeroHoras="+numeroHoras;

	window.location.href = "inicio.html"
}