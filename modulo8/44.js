let limite = parseInt(prompt("Ingrese un número límite para mostrar números pares:"));

if (isNaN(limite) || limite < 2) {
    alert("Número inválido");
} else {
    let mensaje = "Números pares hasta " + limite + ":\n";
    for (let i = 2; i <= limite; i += 2) {
        mensaje += i + "\n";
    }
    alert(mensaje);
}
