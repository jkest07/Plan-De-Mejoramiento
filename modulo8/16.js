let n = parseInt(prompt("Ingrese la cantidad de términos de Fibonacci:"));

if (isNaN(n) || n <= 0) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    let a = 0, b = 1, mensaje = "Secuencia Fibonacci:\n";
    for (let i = 1; i <= n; i++) {
        mensaje += a + "\n";
        let temp = a + b;
        a = b;
        b = temp;
    }
    alert(mensaje);
}
