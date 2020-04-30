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
}

function repostar() {
    if(Vrepostar=="false"){
        document.getElementById("repostar").style.background="#CA8D13";
        Vrepostar="true";
    }
    else {
        document.getElementById("repostar").style.background="#e7a732";
        Vrepostar="false";
    }
}

function aceite() {
    if(Vaceite=="false"){
        document.getElementById("aceite").style.background="#CA8D13";
        Vaceite="true";
    }
    else {
        document.getElementById("aceite").style.background="#e7a732";
        Vaceite="false";
    }
}

function presion() {
    if(Vpresion=="false"){
        document.getElementById("presion").style.background="#CA8D13";
        Vpresion="true";
    }
    else {
        document.getElementById("presion").style.background="#e7a732";
        Vpresion="false";
    }
}

function lavado() {
    if(Vlavado=="false"){
        document.getElementById("lavado").style.background="#CA8D13";
        Vlavado="true";
    }
    else {
        document.getElementById("lavado").style.background="#e7a732";
        Vlavado="false";
    }
}

function volver() {
    sessionStorage.setItem("repostar",Vrepostar);
    sessionStorage.setItem("aceite",Vaceite);
    sessionStorage.setItem("presion",Vpresion);
    sessionStorage.setItem("lavado",Vlavado);
    window.location.href = "service_select.html";
}