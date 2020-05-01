var normal = "#fff7e6";
var pulsado = "#ffdd99";
var shadow = "inset 0px 0px 0px 0px rgba(231,167,50,0.75)";
var put_shadow = "inset -3px -3px 0px 0px rgba(231,167,50,0.75)";
var outline = "3px solid white";

var p1 = false;
var p2 = false;

function select_parking1() {
    if(p1==false){
    	document.getElementById("pa1").style.background=pulsado;
    	document.getElementById("pa1").style.boxShadow=shadow;
    	document.getElementById("pa1").style.outline=outline;
    	p1=true;
    }
    else {
    	document.getElementById("pa1").style.background=normal;
    	document.getElementById("pa1").style.boxShadow=put_shadow;
    	document.getElementById("pa1").style.outline="";
    	p1=false;
    }
    if(p2==true){
    	document.getElementById("pa2").style.background=normal;
    	document.getElementById("pa2").style.boxShadow=put_shadow;
    	document.getElementById("pa2").style.outline="";
    	p2=false;
    }
}

function select_parking2() {
    if(p2==false){
    	document.getElementById("pa2").style.background=pulsado;
    	document.getElementById("pa2").style.boxShadow=shadow;
    	document.getElementById("pa2").style.outline=outline;
    	p2=true;
    }
    else {
    	document.getElementById("pa2").style.background=normal;
    	document.getElementById("pa2").style.boxShadow=put_shadow;
    	document.getElementById("pa2").style.outline="";
    	p2=false;
    }
    if(p1=true){
    	document.getElementById("pa1").style.background=normal;
    	document.getElementById("pa1").style.boxShadow=put_shadow;
    	document.getElementById("pa1").style.outline="";
    	p1=false;
    }
}

function onhoverp1(){
	if(p1==false) {
		document.getElementById("pa1").style.background="#ffeecc";
	}
}

function outhoverp1(){
	if(p1==false) {
		document.getElementById("pa1").style.background="#fff7e6";
	}
}

function onhoverp2(){
	if(p2==false) {
		document.getElementById("pa2").style.background="#ffeecc";
	}
}

function outhoverp2(){
	if(p2==false) {
		document.getElementById("pa2").style.background="#fff7e6";
	}
}
