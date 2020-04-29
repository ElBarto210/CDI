function continue_button() {
    var nametarjeta = document.getElementById("name").value;
    var numtarjeta = document.getElementById("tarjeta").value;
    var cvv = document.getElementById("cvv").value;
    var caducidad = document.getElementById("caducidad").value;

    document.cookie = "nametarjeta="+nametarjeta;
    document.cookie = "numtarjeta="+numtarjeta;
    document.cookie = "cvv="+cvv;
    document.cookie = "caducidad="+caducidad;

    window.location.href = "inicio.html"
}


function tarjeta() {
    if((document.getElementById('datos-box').style.visibility)=='visible') {
        document.getElementById('datos-box').style.visibility='hidden';
        document.getElementById('button-tarjeta').style.background='#e5a227';
    }
    else {
        document.getElementById('datos-box').style.visibility='visible'
        document.getElementById;
        document.getElementById('button-tarjeta').style.background='#CA8D13';
        document.getElementById('button-paypal').style.background='#e5a227';
    } 
    if((document.getElementById('paypal-box').style.visibility)=='visible') {
        document.getElementById('paypal-box').style.visibility='hidden';
        document.getElementById('button-paypal').style.background='#e5a227';
    }
}

function paypal() {
    if((document.getElementById('datos-box').style.visibility)=='visible') {
        document.getElementById('datos-box').style.visibility='hidden';
        document.getElementById('button-tarjeta').style.background='#e5a227';
    }
    if((document.getElementById('paypal-box').style.visibility)=='visible') {
        document.getElementById('paypal-box').style.visibility='hidden';
        document.getElementById('button-paypal').style.background='#e5a227';
    }
    else {
        document.getElementById('paypal-box').style.visibility='visible';
        document.getElementById('button-paypal').style.background='#CA8D13';
    } 
}

function gopaypal_button() {
    window.location.href = "inicio.html"
}