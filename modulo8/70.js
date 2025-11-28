let array = prompt("Ingrese una secuencia de números separados por comas:").split(",").map(Number);
let min = Math.min(...array);
let max = Math.max(...array);
let faltantes = [];
for (let i = min; i <= max; i++) {
    if (!array.includes(i)) faltantes.push(i);
}
alert("Elementos faltantes: " + (faltantes.length ? faltantes.join(", ") : "Ninguno"));
