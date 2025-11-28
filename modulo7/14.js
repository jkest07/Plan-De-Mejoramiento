const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn-procesar");
const salida = document.getElementById("resultado");

// Función para eliminar duplicados usando Set
function obtenerUnicos(array) {
    const conjunto = new Set(array); // Set elimina duplicados automáticamente

    // Dos formas de convertir Set → Array:
    const metodo1 = Array.from(conjunto);
    const metodo2 = [...conjunto];

    return { metodo1, metodo2 };
}

btn.addEventListener("click", () => {
    const texto = entrada.value.trim();

    if (texto === "") {
        salida.textContent = "Debes ingresar valores separados por coma.";
        return;
    }

    // Convertir texto en array
    const array = texto.split(",").map(item => item.trim()).filter(x => x.length > 0);

    const { metodo1, metodo2 } = obtenerUnicos(array);

    salida.textContent =
        "Array original:\n" +
        JSON.stringify(array) +
        "\n\nÚnicos con Array.from():\n" +
        JSON.stringify(metodo1) +
        "\n\nÚnicos con spread operator [...]:\n" +
        JSON.stringify(metodo2);
});
