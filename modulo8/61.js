let array = [];
let n = parseInt(prompt("Ingrese la cantidad de elementos del array:"));

if (isNaN(n) || n <= 0) {
    alert("Cantidad inválida");
} else {
    for (let i = 0; i < n; i++) {
        let valor = parseFloat(prompt("Ingrese el elemento " + (i + 1) + ":"));
        array.push(isNaN(valor) ? 0 : valor);
    }
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    alert("La suma de los elementos es: " + suma);
}
