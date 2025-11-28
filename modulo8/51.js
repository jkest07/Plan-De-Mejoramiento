let filas = 2;
let columnas = 2;
let matriz1 = [];
let matriz2 = [];
let suma = [];

for (let i = 0; i < filas; i++) {
    matriz1[i] = [];
    matriz2[i] = [];
    suma[i] = [];
    for (let j = 0; j < columnas; j++) {
        matriz1[i][j] = parseFloat(prompt("Matriz1 [" + i + "][" + j + "]"));
        matriz2[i][j] = parseFloat(prompt("Matriz2 [" + i + "][" + j + "]"));
        suma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}

let mensaje = "Matriz resultante:\n";
for (let i = 0; i < filas; i++) {
    mensaje += suma[i].join(" ") + "\n";
}
alert(mensaje);
