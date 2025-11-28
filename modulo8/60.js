let limite = parseInt(prompt("Ingrese el límite para encontrar números primos:"));
if (isNaN(limite) || limite < 2) {
    alert("Número inválido");
} else {
    let primos = Array(limite + 1).fill(true);
    primos[0] = primos[1] = false;
    for (let i = 2; i <= Math.sqrt(limite); i++) {
        if (primos[i]) {
            for (let j = i * i; j <= limite; j += i) {
                primos[j] = false;
            }
        }
    }
    let listaPrimos = [];
    for (let i = 2; i <= limite; i++) {
        if (primos[i]) listaPrimos.push(i);
    }
    alert("Números primos hasta " + limite + ":\n" + listaPrimos.join(", "));
}
