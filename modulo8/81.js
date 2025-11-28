function validarNumero(valor, min, max) {
    let num = parseFloat(valor);
    return !isNaN(num) && num >= min && num <= max;
}

function validarTexto(texto, minLength, maxLength) {
    return typeof texto === "string" && texto.length >= minLength && texto.length <= maxLength;
}

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarFecha(fecha) {
    let d = new Date(fecha);
    return !isNaN(d.getTime());
}

let tipo = prompt("Ingrese el tipo de dato a validar (numero, texto, email, fecha):").toLowerCase();

if (tipo === "numero") {
    let valor = prompt("Ingrese un número:");
    let min = parseFloat(prompt("Ingrese el valor mínimo:"));
    let max = parseFloat(prompt("Ingrese el valor máximo:"));
    alert(validarNumero(valor, min, max) ? "Número válido" : "Número inválido");
} else if (tipo === "texto") {
    let texto = prompt("Ingrese un texto:");
    let min = parseInt(prompt("Longitud mínima:"));
    let max = parseInt(prompt("Longitud máxima:"));
    alert(validarTexto(texto, min, max) ? "Texto válido" : "Texto inválido");
} else if (tipo === "email") {
    let email = prompt("Ingrese un email:");
    alert(validarEmail(email) ? "Email válido" : "Email inválido");
} else if (tipo === "fecha") {
    let fecha = prompt("Ingrese una fecha (YYYY-MM-DD):");
    alert(validarFecha(fecha) ? "Fecha válida" : "Fecha inválida");
} else {
    alert("Tipo de dato no reconocido");
}
