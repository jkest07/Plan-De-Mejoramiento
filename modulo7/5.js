// Referencias al DOM
const inputTexto = document.getElementById("texto");
const btnNormalizar = document.getElementById("btn-normalizar");
const resultado = document.getElementById("resultado");

// Función utilitaria para normalizar texto
function normalizarTexto(texto) {
    return texto
        .normalize("NFD")                    // Separa letras de sus tildes
        .replace(/[\u0300-\u036f]/g, "")     // Elimina las tildes
        .replace(/[^a-zA-Z0-9 ]/g, "")       // Elimina símbolos especiales
        .toLowerCase();                      // Convierte a minúsculas
}

// Evento
btnNormalizar.addEventListener("click", () => {
    const texto = inputTexto.value.trim();

    if (texto === "") {
        resultado.textContent = "Por favor escribe un texto.";
        return;
    }

    const limpio = normalizarTexto(texto);
    resultado.textContent = limpio;
});
