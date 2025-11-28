// Referencias al DOM
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorEdad = document.getElementById("error-edad");

const resultado = document.getElementById("resultado");

// Funciones de validación
function validarNombre() {
    if (nombre.value.trim().length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }
    errorNombre.textContent = "";
    return true;
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value.trim())) {
        errorEmail.textContent = "Debe ingresar un email válido.";
        return false;
    }
    errorEmail.textContent = "";
    return true;
}

function validarEdad() {
    const valor = Number(edad.value);

    if (Number.isNaN(valor) || valor <= 0) {
        errorEdad.textContent = "Ingrese una edad válida.";
        return false;
    }
    errorEdad.textContent = "";
    return true;
}

// Validación en tiempo real
nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
edad.addEventListener("input", validarEdad);

// Evento del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const okNombre = validarNombre();
    const okEmail = validarEmail();
    const okEdad = validarEdad();

    if (okNombre && okEmail && okEdad) {
        resultado.textContent = "Formulario enviado correctamente ✔";
    } else {
        resultado.textContent = "";
    }
});
