function login() {
    var user, pass;

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    if (user === "Jefferson Gutierritos" && pass === "SoyBatman") {
        window.location = "../Html/Cajero.html";
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, verifica tus datos.");
    }
}
