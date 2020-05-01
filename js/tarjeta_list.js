function update(){
    var pagos = sessionStorage.getItem('pagos');
    pagos = pagos ? JSON.parse(pagos) : {};

    if(sessionStorage.getItem('paypal') != null){
        pagos.push(sessionStorage.getItem('paypal'));
        sessionStorage.removeItem('paypal');
    }else if (sessionStorage.getItem('tarjeta') != null){
        var tarjeta = sessionStorage.getItem('tarjeta');
        pagos.push(tarjeta);
        sessionStorage.removeItem('tarjeta');
    }

    for(var i = 0; i < pagos.length; i++){
        addPago(pagos[i]);
    }
    sessionStorage.setItem('pagos', JSON.stringify(pagos));
}

function addPago(pago) {
    const div = document.createElement('div');
      
    div.className = 'menu-button';
    var name = pago;
    div.id = pago;
    if(pago == 'paypal'){
        var p = `<i class="icon fab fa-paypal"></i>`;
        name = 'Paypal';
    }else{
        p=`<i class="icon fas fa-credit-card"></i>`;
    }
   
    div.innerHTML = `
    <h1>`+name+`</h1>
    `+p+`
    <i class="fas fa-trash thrash_icon" onclick="removePago('`+pago+`')"></i>
    `;
      
    document.getElementById('lista').appendChild(div);
}
      

/*
function removeVehicle(input) {
    for(var i = 0; i<vehicles.length; i++){
        if(vehicles[i].matricula == "'"+input+"'"){
            vehicles.splice(i,1);
       }
   }
   window.location.href = "vh_list.html"
}
*/

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i] === nameKey) {
            return i;
        }
    }
}

function removePago(input) {
    var pagos = sessionStorage.getItem("pagos");
    pagos = pagos ? JSON.parse(pagos) : {};
    document.getElementById('lista').removeChild(document.getElementById(input));

    const index = search(input, pagos);
    if (index > -1) {
        pagos.splice(index, 1);
    }
    nPa =[]
    for(var i = 0; i<pagos.length; i++){
        nPa.push(pagos[i]);
    }
    sessionStorage.setItem("pagos", JSON.stringify(nPa));

}
