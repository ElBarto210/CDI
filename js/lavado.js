var precio_total=0.00;
var Vabrillantador="false";
var Vencerado="false";
var Vembellecimiento="false";
var no_pulsado="#ffaa00";
var pulsado="#e69900";

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

function update_precio() {
	sessionStorage.setItem("precio-lavado",precio_total);
	document.getElementById("precio-total").innerHTML = precio_total;
}


/*EXTRAS*/

function abrillantador() {
	if(Vabrillantador=="true") {  
	    Vabrillantador = "false";
	   	document.getElementById("abrillantador").style.background=no_pulsado;
	   	document.getElementById("check-AA").style.visibility="hidden";
	   	precio_total-=5;
	   	update_precio();
	}
	else {
	    document.getElementById("abrillantador").style.background=pulsado;
	    document.getElementById("check-AA").style.visibility="visible";
	    Vabrillantador = "true";
	    precio_total+=5;
	    update_precio();
	}
}

function encerado() {
	if(Vencerado=="true") {  
	        Vencerado = "false";
	        document.getElementById("encerado").style.background=no_pulsado;
	        document.getElementById("check-BB").style.visibility="hidden";
	        precio_total-=8;
	        update_precio();
	    }
	    else {
	        document.getElementById("encerado").style.background=pulsado;
	        document.getElementById("check-BB").style.visibility="visible";
	        Vencerado = "true";
	        precio_total+=8;
	        update_precio();
	    }
}

function embellecimiento() {
	if(Vembellecimiento=="true") {  
	        Vembellecimiento = "false";
	        document.getElementById("embellecimiento").style.background=no_pulsado;
	        document.getElementById("check-CC").style.visibility="hidden";
	        precio_total-=10;
	        update_precio();
	    }
	    else {
	        document.getElementById("embellecimiento").style.background=pulsado;
	        document.getElementById("check-CC").style.visibility="visible";
	        precio_total+=10;
	        Vembellecimiento = "true";
	        update_precio();
	    }
}


