let tamaño = parseInt(prompt("Ingrese el tamaño de la matriz cuadrada:"));
if (isNaN(tamaño) || tamaño <= 0) {
    alert("Tamaño inválido");
} else {
    let matriz = [];
    for (let i = 0; i < tamaño; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamaño; j++) {
            matriz[i][j] = parseFloat(prompt("Ingrese el valor de la posición [" + i + "][" + j + "]:"));
        }
    }
    let diagonal = [];
    for (let i = 0; i < tamaño; i++) {
        diagonal.push(matriz[i][i]);
    }
    alert("Elementos de la diagonal principal: " + diagonal.join(", "));
}
