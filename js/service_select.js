function list_plates() {
    document.getElementById("full-plate-selector").style.visibility="visible";
}

function hide_plates() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
}

function plate1() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="0000AAA";
}

function plate2() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="1234ABC";
}

function plate3() {
    document.getElementById("full-plate-selector").style.visibility="hidden";
    document.getElementById("plate-number").innerHTML="3124KSD";
}