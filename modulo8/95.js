function busquedaBinaria(array, valor) {
    let inicio = 0, fin = array.length - 1;
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (array[medio] === valor) return medio;
        else if (array[medio] < valor) inicio = medio + 1;
        else fin = medio - 1;
    }
    return -1;
}

let arr = prompt("Ingrese números ordenados separados por comas:").split(",").map(Number);
let valor = parseFloat(prompt("Ingrese el valor a buscar:"));
let indice = busquedaBinaria(arr, valor);
alert(indice !== -1 ? "Valor encontrado en índice " + indice : "Valor no encontrado");
