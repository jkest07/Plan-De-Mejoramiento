let contraseña = prompt("Ingrese su contraseña:");

if (contraseña.length < 8) {
    alert("Contraseña inválida. Debe tener al menos 8 caracteres.");
} else {
    alert("Contraseña válida.");
}
