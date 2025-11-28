let array1 = prompt("Ingrese el primer array ordenado (separado por comas):").split(",").map(Number);
let array2 = prompt("Ingrese el segundo array ordenado (separado por comas):").split(",").map(Number);
let combinados = [], i = 0, j = 0;

while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
        combinados.push(array1[i++]);
    } else {
        combinados.push(array2[j++]);
    }
}
while (i < array1.length) combinados.push(array1[i++]);
while (j < array2.length) combinados.push(array2[j++]);

alert("Array combinado ordenado: " + combinados.join(", "));
