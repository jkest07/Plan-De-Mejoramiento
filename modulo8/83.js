function generarPassword(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < longitud; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return password;
}

let longitud = parseInt(prompt("Ingrese la longitud de la contraseña:"));
alert("Contraseña generada: " + generarPassword(longitud));
