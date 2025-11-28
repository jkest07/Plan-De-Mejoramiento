let numero = parseInt(prompt("Ingrese un número entero:"));

if (isNaN(numero) || numero < 2) {
    alert("Por favor, ingrese un número entero mayor o igual a 2.");
} else {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    alert(numero + (esPrimo ? " es primo." : " no es primo."));
}
