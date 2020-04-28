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
