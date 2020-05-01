var Vrepostar = "false";
var Vaceite = "false";
var Vpresion = "false";
var Vlavado = "false";

var pulsado = "#bb8211";
var no_pulsado = "#e7a732";

function actualizar() {
    Vrepostar = sessionStorage.getItem("repostar");
    Vaceite = sessionStorage.getItem("aceite");
    Vpresion = sessionStorage.getItem("presion");
    Vlavado = sessionStorage.getItem("lavado");
    
    if(Vrepostar=="true") {
        document.getElementById("repostar").style.background=pulsado;
    }    
    if(Vaceite=="true") {
        document.getElementById("aceite").style.background=pulsado;
    }    
    if(Vpresion=="true") {
        document.getElementById("presion").style.background=pulsado;
    }
    if(Vlavado=="true") {
         document.getElementById("lavado").style.background=pulsado;
    }

    if(Vrepostar==null) {
        Vrepostar="false";
    }    
    if(Vaceite==null) {
        Vaceite="false";
    }    
    if(Vpresion==null) {
        Vpresion="false";
    }
    if(Vlavado==null) {
         Vlavado="false";
    }
}

function repostar() {
    if(Vrepostar=="false"){
        document.getElementById("repostar").style.background=pulsado;
        Vrepostar="true";
        sessionStorage.setItem("repostar",Vrepostar);
    }
    else {
        document.getElementById("repostar").style.background=no_pulsado;
        Vrepostar="false";
        sessionStorage.setItem("repostar",Vrepostar);
    }
}

function aceite() {
    if(Vaceite=="false"){
        document.getElementById("aceite").style.background=pulsado;
        Vaceite="true";
        sessionStorage.setItem("aceite",Vaceite);
    }
    else {
        document.getElementById("aceite").style.background=no_pulsado;
        Vaceite="false";
        sessionStorage.setItem("aceite",Vaceite);
    }
}

function presion() {
    if(Vpresion=="false"){
        document.getElementById("presion").style.background=pulsado;
        Vpresion="true";
         sessionStorage.setItem("presion",Vpresion);
    }
    else {
        document.getElementById("presion").style.background=no_pulsado;
        Vpresion="false";
         sessionStorage.setItem("presion",Vpresion);
    }
}

function lavado() {
    if(Vlavado=="false"){
        document.getElementById("lavado").style.background=pulsado;
        Vlavado="true";
        sessionStorage.setItem("lavado",Vlavado);
    }
    else {
        document.getElementById("lavado").style.background=no_pulsado;
        Vlavado="false";
        sessionStorage.setItem("lavado",Vlavado);
    }
}

function volver() {
    window.location.href = "service_select.html";
}