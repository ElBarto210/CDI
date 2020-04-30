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

function mant_general() {
    document.getElementById("pop-window").style.visibility="visible";
}

function buscar() {
    window.location.href = "aparcamientos.html";
}


//MANTENIMIENTO GENERAL
var Vrepostar = false;
var Vaceite = false;
var Vpresion = false;
var Vlavado = false;


function repostar() {
    if(Vrepostar==false){
        document.getElementById("repostar").style.background="#CA8D13";
        Vrepostar=true;
    }
    else {
        document.getElementById("repostar").style.background="#e5a227";
        Vrepostar=false;
    }
}

function aceite() {
    if(Vaceite==false){
        document.getElementById("aceite").style.background="#CA8D13";
        Vaceite=true;
    }
    else {
        document.getElementById("aceite").style.background="#e5a227";
        Vaceite=false;
    }
}

function presion() {
    if(Vpresion==false){
        document.getElementById("presion").style.background="#CA8D13";
        Vpresion=true;
    }
    else {
        document.getElementById("presion").style.background="#e5a227";
        Vpresion=false;
    }
}

function lavado() {
    if(Vlavado==false){
        document.getElementById("lavado").style.background="#CA8D13";
        Vlavado=true;
    }
    else {
        document.getElementById("lavado").style.background="#e5a227";
        Vlavado=false;
    }
}

function volver() {
    window.location.href = "service_select.html";
}