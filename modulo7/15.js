const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn-ordenar");
const salida = document.getElementById("resultado");

btn.addEventListener("click", () => {
    const texto = entrada.value.trim();

    if (texto === "") {
        salida.textContent = "Debes ingresar números separados por coma.";
        return;
    }

    // Convertir texto en array de números
    const original = texto.split(",").map(n => Number(n.trim()));

    // Validar que sean números
    if (original.some(n => Number.isNaN(n))) {
        salida.textContent = "Solo se permiten números.";
        return;
    }

    // Orden inmutable usando toSorted()
    const asc = original.toSorted((a, b) => a - b);
    const desc = original.toSorted((a, b) => b - a);

    // Orden inmutable usando spread operator para copiar primero
    const copia = [...original];
    const asc2 = copia.sort((a, b) => a - b);  // muta copia pero NO original

    salida.textContent =
        "Array original (sin cambios):\n" +
        JSON.stringify(original) +
        "\n\nOrden ascendente con toSorted():\n" +
        JSON.stringify(asc) +
        "\n\nOrden descendente con toSorted():\n" +
        JSON.stringify(desc) +
        "\n\nOrden ascendente usando spread operator + sort():\n" +
        JSON.stringify(asc2);
});
