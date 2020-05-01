function update(){
    var vehicles = sessionStorage.getItem('vehicles');
    vehicles = vehicles ? JSON.parse(vehicles) : {};

    var vhmatricula = sessionStorage.getItem('vhmatricula');

    var wheelchair = sessionStorage.getItem('wheelchair');
    if(wheelchair == "1"){
        wheelchair = true;
    } else{
        wheelchair = false;
    }
    sessionStorage.removeItem('wheelchair');
    var truck = sessionStorage.getItem('truck');
    if(truck == "1"){
        truck = true;
    } else{
        truck = false;
    }
    sessionStorage.removeItem('truck');
    var baby_carriage = sessionStorage.getItem('baby-carriage');
    if(baby_carriage == "1"){
        baby_carriage = true;
    } else{
        baby_carriage = false;
    }
    sessionStorage.removeItem('baby-carriage');
    var charging_station = sessionStorage.getItem('charging-station');
    if(charging_station == "1"){
        charging_station = true;
    } else{
        charging_station = false;
    }
    sessionStorage.removeItem('charging-station');
    var vehicle = {matricula:vhmatricula, features :{wheelchair, truck, baby_carriage, charging_station}};
    vehicles.push(vehicle);


    for(var i = 0; i < vehicles.length; i++){
        addVehicle(vehicles[i].matricula, vehicles[i].features.wheelchair,  vehicles[i].features.truck, vehicles[i].features.baby_carriage, vehicles[i].features.charging_station);
    }
    sessionStorage.setItem('vehicles', JSON.stringify(vehicles));
}

function addVehicle(matricula, w,t,b,e) {
    const div = document.createElement('div');
      
    div.className = 'menu-button';

    div.id = matricula;

    var a ="";
    var tr ="";
    var c ="";
    var d ="";

    if(w){
        var d = `<i class="icon fas fa-wheelchair feature_icons"></i>`;
    }
    if(t){
        var tr = `<i class="icon fas fa-truck feature_icons"></i>`;
    }
    if(b){
        var a = `<i class="icon fas fa-baby-carriage feature_icons"></i>`;
    }
    if(e){
        var c = `<i class="icon fas fa-charging-station feature_icons"></i>`;
    }
   
    div.innerHTML = `
    <h1>`+matricula+`</h1>
    <i class="icon fas fa-car"></i>
    <div class="feature_icon_box">`+a+tr+c+d+`
    </div>
    <i class="fas fa-trash thrash_icon" onclick="removeVehicle('`+matricula+`')"></i>
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
        if (myArray[i].matricula === nameKey) {
            return i;
        }
    }
}

function removeVehicle(input) {
    var vehicles = sessionStorage.getItem("vehicles");
    vehicles = vehicles ? JSON.parse(vehicles) : {};
    document.getElementById('lista').removeChild(document.getElementById(input));

    const index = search(input, vehicles);
    if (index > -1) {
        vehicles.splice(index, 1);
    }
    nVe =[]
    for(var i = 0; i<vehicles.length; i++){
        nVe.push(vehicles[i]);
    }
    sessionStorage.setItem("vehicles", JSON.stringify(nVe));

}
