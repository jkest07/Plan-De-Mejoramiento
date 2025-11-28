let limite = parseInt(prompt("Ingrese un número límite para mostrar números primos:"));

if (isNaN(limite) || limite < 2) {
    alert("Número inválido");
} else {
    let mensaje = "Números primos hasta " + limite + ":\n";
    for (let num = 2; num <= limite; num++) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            mensaje += num + "\n";
        }
    }
    alert(mensaje);
}
