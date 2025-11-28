let filas = 2, columnas = 2;
let matriz = [], transpuesta = [];

for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = prompt("Ingrese el valor de la posición [" + i + "][" + j + "]:");
    }
}

for (let i = 0; i < columnas; i++) {
    transpuesta[i] = [];
    for (let j = 0; j < filas; j++) {
        transpuesta[i][j] = matriz[j][i];
    }
}

let mensaje = "Matriz transpuesta:\n";
for (let i = 0; i < transpuesta.length; i++) {
    mensaje += transpuesta[i].join(" ") + "\n";
}
alert(mensaje);
