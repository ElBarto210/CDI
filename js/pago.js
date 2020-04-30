function continue_button() {
    var nametarjeta = document.getElementById("name").value;
    var numtarjeta = document.getElementById("tarjeta").value;
    var cvv = document.getElementById("cvv").value;
    var caducidad = document.getElementById("caducidad").value;

    var nametarjeta = sessionStorage.setItem('name',nametarjeta );
    var numtarjeta = sessionStorage.setItem('tarjeta',numtarjeta );
    var cvv = sessionStorage.setItem('cvv',cvv );
    var caducidad = sessionStorage.setItem('caducidad',caducidad );

    if(nametarjeta != null){

        var nametarjeta2 = sessionStorage.setItem('name2',nametarjeta );
        var numtarjeta2 = sessionStorage.setItem('tarjeta2',numtarjeta );
        var cvv2 = sessionStorage.setItem('cvv2',cvv );
        var caducidad2 = sessionStorage.setItem('caducidad2',caducidad );
    }

    else if(nametarjeta2 !=null){
        var nametarjeta3 = sessionStorage.setItem('name3',nametarjeta );
        var numtarjeta3 = sessionStorage.setItem('tarjeta3',numtarjeta );
        var cvv3 = sessionStorage.setItem('cvv3',cvv );
        var caducidad3 = sessionStorage.setItem('caducidad3',caducidad );
    }
    
    window.location.href = "inicio.html"
}


function tarjeta() {
    if((document.getElementById('datos-box').style.visibility)=='visible') {
        document.getElementById('datos-box').style.visibility='hidden';
        document.getElementById('button-tarjeta').style.background='#e5a227';
    }
    else {
        document.getElementById('datos-box').style.visibility='visible'
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