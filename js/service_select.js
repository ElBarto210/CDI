var Vaparcar = "false";

var pulsado = "#bb8211";
var no_pulsado = "#e7a732";

function actualizar() {
    Vaparcar = sessionStorage.getItem("aparcar");

    if(Vaparcar == "true") {
        document.getElementById("aparcar").style.background="#CA8D13";
    } 
}

function list_plates() {
    document.getElementById("full-plate-selector").style.visibility="visible";
}

function hide_plates() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
}

function plate1() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="0000AAA";
}

function plate2() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="1234ABC";
}

function plate3() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="3124KSD";
}


function aparcar() {
    if(Vaparcar=="true") {  
        Vaparcar = "false";
        sessionStorage.setItem("aparcar",Vaparcar);
        document.getElementById("aparcar").style.background=no_pulsado;
    }
    else {
        document.getElementById("aparcar").style.background=pulsado;
        Vaparcar = "true";
        sessionStorage.setItem("aparcar",Vaparcar);
    }
}

/*
function onhoveraparcar(){
    if(Vaparcar=="false") {
        document.getElementById("aparcar").style.background="#f8b020";
    }
}

function outhoveraparcar(){
    if(Vaparcar=="false") {
        document.getElementById("aparcar").style.background="#e7a732";
    }
}
*/

function mant_general() {
    window.location.href = "mant_gen_select.html";
}

function buscar() {
    window.location.href = "aparcamientos.html";
}