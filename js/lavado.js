var precio_total=0.00;


function list_lavados() {
    document.getElementById("tipo-lavado-selector").style.visibility="visible";
}

function hide_lavados() {
    document.getElementById("tipo-lavado-selector").style.visibility="hidden";
}

function lavado1() {
	set_precio_value(2.00);
    document.getElementById("tipo-lavado-selector").style.visibility="hidden";
    document.getElementById("input-tipo-lavado").value="Lavado a mano";
}

function lavado2() {
	set_precio_value(5.00);
    document.getElementById("tipo-lavado-selector").style.visibility="hidden";
    document.getElementById("input-tipo-lavado").value="Tunel de lavado";
}

function lavado3() {
	set_precio_value(8.00);
    document.getElementById("tipo-lavado-selector").style.visibility="hidden";
    document.getElementById("input-tipo-lavado").value="Lavado automático";
}

function set_precio_value(n) {
	sessionStorage.setItem("precio-lavado",n);
	document.getElementById("precio-total").innerHTML = n;
}

function set_precio(plus) {
	precio_total += plus;
	sessionStorage.setItem("precio-lavado",precio_total);
	document.getElementById("precio-total").innerHTML = precio_total;

}