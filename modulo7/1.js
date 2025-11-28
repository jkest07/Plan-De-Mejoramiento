// Seleccionar elementos del DOM
const inputNombre = document.querySelector("#nombre");
const btnSaludar = document.querySelector("#btn-saludar");
const resultado = document.querySelector("#resultado");

// Evento de clic
btnSaludar.addEventListener("click", () => {

    // Obtener el valor del input
    const nombre = inputNombre.value.trim();

    // Validación básica
    if (nombre === "") {
        resultado.textContent = "Por favor escribe tu nombre.";
        return;
    }

    // Mostrar saludo personalizado
    resultado.textContent = `Hola ${nombre}, ¡bienvenido! 😄`;
});
