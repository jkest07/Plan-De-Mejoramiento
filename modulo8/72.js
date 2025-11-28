let array = prompt("Ingrese números separados por comas:").split(",").map(Number);
let objetivo = parseFloat(prompt("Ingrese el valor objetivo de la suma:"));
let pares = [];
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === objetivo) {
            pares.push("[" + array[i] + ", " + array[j] + "]");
        }
    }
}
alert("Pares que suman " + objetivo + ": " + (pares.length ? pares.join(", ") : "Ninguno"));
