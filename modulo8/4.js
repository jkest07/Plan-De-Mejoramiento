let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let añoActual = new Date().getFullYear();

if (isNaN(añoNacimiento) || añoNacimiento > añoActual || añoNacimiento <= 0) {
    alert("Por favor, ingrese un año válido.");
} else {
    let edad = añoActual - añoNacimiento;
    alert("Usted tiene " + edad + " años.");
}
