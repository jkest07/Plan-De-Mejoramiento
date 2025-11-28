function lanzarDado(caritas, veces) {
    let resultados = [];
    for (let i = 0; i < veces; i++) {
        resultados.push(Math.floor(Math.random() * caritas) + 1);
    }
    return resultados;
}

let caras = parseInt(prompt("Ingrese número de caras del dado:"));
let tiradas = parseInt(prompt("Ingrese número de tiradas:"));
let resultados = lanzarDado(caras, tiradas);
let suma = resultados.reduce((a, b) => a + b, 0);
let promedio = suma / tiradas;

alert("Resultados: " + resultados.join(", ") +
      "\nSuma: " + suma +
      "\nPromedio: " + promedio.toFixed(2));
