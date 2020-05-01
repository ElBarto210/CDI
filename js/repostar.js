var optionPicked = 2;
var gasPicked = 1;
var precioRepostajeAnterior = 0;

function list_options() {
    document.getElementById("full-option-selector").style.visibility="visible";
}

function hide_options() {
    document.getElementById("full-option-selector").style.visibility="hidden";
}

function opcion1() {
    document.getElementById("full-option-selector").style.visibility="hidden";
    document.getElementById("picked_option").innerHTML = "<i class=\"fas fa-tint\"></i>";
    optionPicked = 1;
    precioRepostaje();
}

function opcion2() {
    document.getElementById("full-option-selector").style.visibility="hidden";
    document.getElementById("picked_option").innerHTML = "<i class=\"fas fa-euro-sign\"></i>";
    optionPicked = 2;
    precioRepostaje()
}

function list_gas() {
    document.getElementById("full-gas-selector").style.visibility="visible";
}

function hide_gas() {
    document.getElementById("full-gas-selector").style.visibility="hidden";
}
function gas1() {
    document.getElementById("full-gas-selector").style.visibility="hidden";
    document.getElementById("picked_gas").innerHTML = "Gasolina sin plomo 95 - E5";
    gasPicked = 1;
    precioRepostaje()
}

function gas2() {
    document.getElementById("full-gas-selector").style.visibility="hidden";
    document.getElementById("picked_gas").innerHTML = "Gasolina sin plomo 98 - E5";
    gasPicked = 2;
    precioRepostaje();
}

function gas3() {
    document.getElementById("full-gas-selector").style.visibility="hidden";
    document.getElementById("picked_gas").innerHTML = "Diésel - B7";
    gasPicked = 3;
    precioRepostaje();
}

function gas4() {
    document.getElementById("full-gas-selector").style.visibility="hidden";
    document.getElementById("picked_gas").innerHTML = "Biodiésel - B7";
    gasPicked = 4;
    precioRepostaje();
}

function precioRepostaje() {
    var precioRepostaje = 0;
    var cantidad = document.getElementById("cantidad").value;
    if(cantidad <= 0) {
        window.alert("La cantidad no puede ser inferior a 1");
    }
    else {
        if(optionPicked == 1) {
            var tipoGasolina = document.getElementById("picked_gas").value;
            switch(gasPicked) {
                case 1:
                    precioRepostaje = cantidad * 1.3;
                    break;
                case 2:
                    precioRepostaje = cantidad * 1.4;
                    break;
                case 3:
                    precioRepostaje = cantidad * 1.1;
                    break;
                default:
                    precioRepostaje = cantidad * 1.2;
            }
            precioRepostaje = precioRepostaje.toFixed(2);
        }
        else {
            precioRepostaje = cantidad;
        }
        document.getElementById("precioRepostaje").innerHTML = precioRepostaje+"€";
        
    
    }

}
function next(){
    var direccion = ["reserva-aparcamiento.html", "repostar.html", "lavado.html"];
	if(sessionStorage.getItem('lavado') == "true" ){
		window.location.href = direccion[2];
	} else{
        window.location.href = "eleccion_pago.html"
    }
}
























