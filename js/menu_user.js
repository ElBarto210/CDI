
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

//HABILITAR EDICION DE CAMPOS
function enableedit(field) {
    document.getElementById(field).disabled = false;
    document.getElementById(field).placeholder = " ";
}

function continue_button() {
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var phone = document.getElementById("phone").value
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    
    
    if(pass == pass2) {
       if(name!="") {
            document.cookie = "name=" + name + ";";
        }
        
        if(last_name!="") {
            document.cookie = "last_name=" + last_name + ";";
        }
        
        if(phone!="") {
            document.cookie = "phone=" + phone + ";";
        }
    
        if(mail!="") {
            document.cookie = "mail=" + mail + ";";
        }
        
        document.cookie = "pass" + pass + ";";
        
        window.location.href = "menu.html";
    } 
    
    else {
        window.alert("Las contraseñas no son coinciden");
    }
    
}