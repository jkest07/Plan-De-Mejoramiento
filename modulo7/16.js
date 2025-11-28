const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn-ordenar");
const salida = document.getElementById("resultado");

// Función para convertir cada línea en un objeto
function parsearEntrada(texto) {
    const lineas = texto.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    const objetos = [];

    for (let linea of lineas) {
        try {
            objetos.push(JSON.parse(linea));
        } catch (err) {
            throw new Error(`Error al parsear: "${linea}"\nAsegúrate de que sea un JSON válido.`);
        }
    }

    return objetos;
}

// Ordenamiento inmutable avanzado
function ordenarInmutable(array) {
    // Regla:
    // 1. Ordenar por nombre ASC (A → Z)
    // 2. Si el nombre es igual, ordenar por edad DESC (mayor primero)

    return array.toSorted((a, b) => {
        // Orden por nombre A-Z
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;

        // Si los nombres son iguales → ordenar por edad DESC
        return b.edad - a.edad;
    });
}

btn.addEventListener("click", () => {
    const texto = entrada.value.trim();

    if (texto === "") {
        salida.textContent = "Debes ingresar objetos en formato JSON, uno por línea.";
        return;
    }

    try {
        const original = parsearEntrada(texto);

        // Ordenamiento inmutable
        const ordenado = ordenarInmutable(original);

        salida.textContent =
            "Array original (sin modificar):\n" +
            JSON.stringify(original, null, 2) +
            "\n\nArray ordenado inmutable:\n" +
            JSON.stringify(ordenado, null, 2);

    } catch (error) {
        salida.textContent = error.message;
    }
});
