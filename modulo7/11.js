const btn = document.getElementById("btn-ejecutar");
const salida = document.getElementById("resultado");

// Función que simula recibir un objeto incompleto
function obtenerUsuario() {
    return {
        nombre: "Juan",
        // edad no viene
        pais: "Colombia",
        // correo no viene
    };
}

// Función que usa destructuring con valores por defecto
function procesarUsuario(usuario) {
    const {
        nombre = "Desconocido",
        edad = "No especificada",
        pais = "No registrado",
        correo = "Sin correo"
    } = usuario;

    return {
        nombre,
        edad,
        pais,
        correo
    };
}

// Evento para mostrar el resultado
btn.addEventListener("click", () => {
    const usuario = obtenerUsuario();          // Objeto incompleto
    const resultado = procesarUsuario(usuario); // Destructuring seguro

    salida.textContent = JSON.stringify(resultado, null, 2);
});
