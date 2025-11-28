let array = prompt("Ingrese elementos separados por comas:").split(",");
let criterio = prompt("Ordenar por (ascendente/descendente):").toLowerCase();

array.sort((a, b) => {
    if (!isNaN(a) && !isNaN(b)) return criterio === "ascendente" ? a - b : b - a;
    return criterio === "ascendente" ? a.localeCompare(b) : b.localeCompare(a);
});

alert("Array ordenado: " + array.join(", "));
