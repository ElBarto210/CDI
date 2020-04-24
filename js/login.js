function login() {
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    
    
    document.cookie = "mail=" + mail;
    
    window.location.href = "main.html";
}