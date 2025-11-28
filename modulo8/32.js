let saldo = 1000;
let opcion = prompt("Elija: retirar, depositar, consultar").toLowerCase();

switch (opcion) {
    case "retirar":
        let retiro = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (isNaN(retiro) || retiro <= 0 || retiro > saldo) {
            alert("Monto inválido o saldo insuficiente");
        } else {
            saldo -= retiro;
            alert("Retiro exitoso. Saldo: $" + saldo.toFixed(2));
        }
        break;
    case "depositar":
        let deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (isNaN(deposito) || deposito <= 0) {
            alert("Monto inválido");
        } else {
            saldo += deposito;
            alert("Depósito exitoso. Saldo: $" + saldo.toFixed(2));
        }
        break;
    case "consultar":
        alert("Saldo actual: $" + saldo.toFixed(2));
        break;
    default:
        alert("Opción inválida");
        break;
}
