// Obtener referencia al contenedor principal
const container = document.querySelector(".container");

// Obtener referencias a los botones de registrarse e iniciar sesión
const btnregistrase = document.getElementById("sign-up-btn");
const btniniciarsesion = document.getElementById("sign-in-btn");

// Agregar un evento al botón "Registrarse"
btnregistrase.addEventListener("click", () => {
  // Agregar la clase "sign-up-mode" al contenedor
  container.classList.add("sign-up-mode");
});

// Agregar un evento al botón "Iniciar Sesión"
btniniciarsesion.addEventListener("click", () => {
  // Remover la clase "sign-up-mode" del contenedor
  container.classList.remove("sign-up-mode");
});
