function validarLuhn(numero) {
    let arr = numero.replace(/\D/g, "").split("").reverse().map(Number);
    let suma = arr.reduce((acc, val, idx) => {
        if (idx % 2 === 1) {
            val *= 2;
            if (val > 9) val -= 9;
        }
        return acc + val;
    }, 0);
    return suma % 10 === 0;
}

let tarjeta = prompt("Ingrese el número de tarjeta:");
alert(validarLuhn(tarjeta) ? "Tarjeta válida" : "Tarjeta inválida");
