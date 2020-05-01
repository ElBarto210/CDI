var Vrepostar = "false";
var Vaceite = "false";
var Vpresion = "false";
var Vlavado = "false";

function actualizar() {
    Vrepostar = sessionStorage.getItem("repostar");
    Vaceite = sessionStorage.getItem("aceite");
    Vpresion = sessionStorage.getItem("presion");
    Vlavado = sessionStorage.getItem("lavado");
    
    if(Vrepostar=="true") {
        document.getElementById("repostar").style.background="#CA8D13";
    }    
    if(Vaceite=="true") {
        document.getElementById("aceite").style.background="#CA8D13";
    }    
    if(Vpresion=="true") {
        document.getElementById("presion").style.background="#CA8D13";
    }
    if(Vlavado=="true") {
         document.getElementById("lavado").style.background="#CA8D13";
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
        document.getElementById("repostar").style.background="#CA8D13";
        Vrepostar="true";
        sessionStorage.setItem("repostar",Vrepostar);
    }
    else {
        document.getElementById("repostar").style.background="#e7a732";
        Vrepostar="false";
        sessionStorage.setItem("repostar",Vrepostar);
    }
}

function aceite() {
    if(Vaceite=="false"){
        document.getElementById("aceite").style.background="#CA8D13";
        Vaceite="true";
        sessionStorage.setItem("aceite",Vaceite);
    }
    else {
        document.getElementById("aceite").style.background="#e7a732";
        Vaceite="false";
        sessionStorage.setItem("aceite",Vaceite);
    }
}

function presion() {
    if(Vpresion=="false"){
        document.getElementById("presion").style.background="#CA8D13";
        Vpresion="true";
         sessionStorage.setItem("presion",Vpresion);
    }
    else {
        document.getElementById("presion").style.background="#e7a732";
        Vpresion="false";
         sessionStorage.setItem("presion",Vpresion);
    }
}

function lavado() {
    if(Vlavado=="false"){
        document.getElementById("lavado").style.background="#CA8D13";
        Vlavado="true";
        sessionStorage.setItem("lavado",Vlavado);
    }
    else {
        document.getElementById("lavado").style.background="#e7a732";
        Vlavado="false";
        sessionStorage.setItem("lavado",Vlavado);
    }
}

function volver() {
    window.location.href = "service_select.html";
}