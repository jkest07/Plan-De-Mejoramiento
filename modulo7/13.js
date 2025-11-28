const textarea = document.getElementById("texto");
const btn = document.getElementById("btn-contar");
const salida = document.getElementById("resultado");

// Función que limpia texto: quita tildes y signos
function limpiarTexto(texto) {
    return texto
        .normalize("NFD")                       // separa tildes
        .replace(/[\u0300-\u036f]/g, "")        // elimina tildes
        .replace(/[^a-zA-Z0-9\s]/g, "")         // quita signos raros
        .toLowerCase();
}

// Contador de palabras usando Map
function contarPalabras(texto) {
    const limpio = limpiarTexto(texto);
    const palabras = limpio.split(/\s+/).filter(w => w.length > 0);

    const mapa = new Map();

    palabras.forEach(palabra => {
        mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
    });

    return mapa;
}

btn.addEventListener("click", () => {
    const texto = textarea.value.trim();

    if (texto === "") {
        salida.textContent = "Escribe algo para analizar.";
        return;
    }

    const mapa = contarPalabras(texto);

    // Convertimos el Map a un texto bonito
    let resultado = "";
    mapa.forEach((count, palabra) => {
        resultado += `${palabra}: ${count}\n`;
    });

    salida.textContent = resultado;
});
