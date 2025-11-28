let filasA = 2, columnasA = 2, filasB = 2, columnasB = 2;
let matrizA = [], matrizB = [], resultado = [];

for (let i = 0; i < filasA; i++) {
    matrizA[i] = [];
    for (let j = 0; j < columnasA; j++) {
        matrizA[i][j] = parseFloat(prompt("MatrizA [" + i + "][" + j + "]"));
    }
}

for (let i = 0; i < filasB; i++) {
    matrizB[i] = [];
    for (let j = 0; j < columnasB; j++) {
        matrizB[i][j] = parseFloat(prompt("MatrizB [" + i + "][" + j + "]"));
    }
}

for (let i = 0; i < filasA; i++) {
    resultado[i] = [];
    for (let j = 0; j < columnasB; j++) {
        resultado[i][j] = 0;
        for (let k = 0; k < columnasA; k++) {
            resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}

let mensaje = "Matriz resultante:\n";
for (let i = 0; i < filasA; i++) {
    mensaje += resultado[i].join(" ") + "\n";
}
alert(mensaje);
