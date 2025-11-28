let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(n => n % 2 === 0);
let cuadrados = pares.map(n => n * n);
let suma = cuadrados.reduce((acc, val) => acc + val, 0);
alert("Suma de cuadrados de números pares: " + suma);
