function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

let email = prompt("Ingrese un email:");
alert(validarEmail(email) ? "Email válido" : "Email inválido");
