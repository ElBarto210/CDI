var vehicles = [
    {matricula: '0000AAA', 
    features : [wheelchair = true, truck = true, baby_carriage = true, charging_station = true]},
    {matricula: '1234ABC', features : [wheelchair = false, truck = false, baby_carriage = false, charging_station = true]},
    {matricula: '3124KSD', features : [wheelchair = false, truck = false, baby_carriage = true, charging_station = false]}
];

function setVehicles(){
    for(var i = 0; i<vehicles.length; i++){
        addVehicle(vehicles[i].matricula, vehicles[i].features[0],  vehicles[i].features[1], vehicles[i].features[2], vehicles[i].features[3], "card"+i);
    }
}

function addVehicle(matricula, w,t,b,e,id) {
    const div = document.createElement('div');
      
    div.className = 'menu-button';

    div.id = id;

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
    <i class="fas fa-trash thrash_icon"></i>
    `;
      
    document.getElementById('lista').appendChild(div);
}
      


function removeVehicle(input) {
    document.getElementById('lista').removeChild(input.parentNode);
}