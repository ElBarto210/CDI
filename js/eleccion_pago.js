function update(){
    var pagos = sessionStorage.getItem('pagos');
    pagos = pagos ? JSON.parse(pagos) : {};
/*
    if(sessionStorage.getItem('paypal') != null){
        pagos.push(sessionStorage.getItem('paypal'));
        sessionStorage.removeItem('paypal');
    }else{
        var tarjeta = sessionStorage.getItem('tarjeta');
        pagos.push(tarjeta);
        sessionStorage.removeItem('tarjeta');
    }
*/
    for(var i = 0; i < pagos.length; i++){
        addPago(pagos[i]);
    }

}

function addPago(pago) {
    const div = document.createElement('button');
      
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
    <h1 class="text-button">`+name+`</h1>
    `+p+`
    `;
      
    document.getElementById('lista').appendChild(div);
}
