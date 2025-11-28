let n = parseInt(prompt("Ingrese la cantidad de términos de Fibonacci:"));
if (isNaN(n) || n <= 0) {
    alert("Número inválido");
} else {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert("Serie Fibonacci: " + fib.slice(0, n).join(", "));
}
