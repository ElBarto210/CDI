
var vehicles = [
    {matricula: '0000AAA', 
    features : [wheelchair = 1, truck = 1, baby_carriage = 1, charging_station = 1]},
    {matricula: '1234ABC', features : [wheelchair = 0, truck = 0, baby_carriage = 0, charging_station = 1]},
    {matricula: '3124KSD', features : [wheelchair = 0, truck = 0, baby_carriage = 1, charging_station = 0]}
];
function addVehicle() {
    const div = document.createElement('div');
      
    div.className = 'menu_button';
      
    div.innerHTML = `
    <h1>0000AAA</h1>
    <i class="icon fas fa-car"></i>
    <div class="feature_icon_box">
        <i class="icon fas fa-wheelchair feature_icons"></i>
        <i class="icon fas fa-truck feature_icons"></i>
    </div>
    <i class="fas fa-trash thrash_icon"></i>
    `;
    
    var c = document.querySelector('lista');
    c.appendChild(div);
    //document.getElementById('lista').appendChild(div);
}
      
addVehicle();

function removeRow(input) {
    document.getElementById('content').removeChild(input.parentNode);
}