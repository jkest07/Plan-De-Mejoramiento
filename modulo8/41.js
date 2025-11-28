
let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

if (isNaN(numero)) {
    alert("Número inválido");
} else {
    let mensaje = "Tabla de multiplicar del " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        mensaje += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(mensaje);
}
