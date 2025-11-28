function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = parseInt(prompt("Ingrese el número de términos de Fibonacci a calcular:"));
if (isNaN(n) || n < 0) {
    alert("Número inválido");
} else {
    let serie = [];
    for (let i = 0; i < n; i++) {
        serie.push(fibonacci(i));
    }
    alert("Serie de Fibonacci: " + serie.join(", "));
}
