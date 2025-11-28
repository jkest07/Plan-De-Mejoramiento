function media(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

function mediana(array) {
    let sorted = [...array].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function moda(array) {
    let freq = {}, max = 0, modes = [];
    array.forEach(n => { freq[n] = (freq[n] || 0) + 1; if (freq[n] > max) max = freq[n]; });
    for (let n in freq) if (freq[n] === max) modes.push(Number(n));
    return modes;
}

function desviacionEstandar(array) {
    let m = media(array);
    let sum = array.reduce((a, b) => a + Math.pow(b - m, 2), 0);
    return Math.sqrt(sum / array.length);
}

let numeros = prompt("Ingrese números separados por comas:").split(",").map(Number);
alert(
    "Media: " + media(numeros) +
    "\nMediana: " + mediana(numeros) +
    "\nModa: " + moda(numeros).join(", ") +
    "\nDesviación estándar: " + desviacionEstandar(numeros)
);
