let limite = parseInt(prompt("Ingrese el límite para buscar números perfectos:"));
if (isNaN(limite) || limite <= 0) {
    alert("Número inválido");
} else {
    let mensaje = "Números perfectos hasta " + limite + ":\n";
    for (let num = 2; num <= limite; num++) {
        let suma = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) suma += i;
        }
        if (suma === num) mensaje += num + "\n";
    }
    alert(mensaje);
}
