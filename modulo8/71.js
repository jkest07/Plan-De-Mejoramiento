let array = prompt("Ingrese números separados por comas:").split(",").map(Number);
let maxActual = array[0], maxGlobal = array[0];
for (let i = 1; i < array.length; i++) {
    maxActual = Math.max(array[i], maxActual + array[i]);
    if (maxActual > maxGlobal) maxGlobal = maxActual;
}
alert("Suma máxima de subarray contiguo: " + maxGlobal);
