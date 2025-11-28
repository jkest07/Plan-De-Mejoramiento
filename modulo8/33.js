let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let tarifaHora = parseFloat(prompt("Ingrese la tarifa por hora:"));
let salario;

if (isNaN(horasTrabajadas) || horasTrabajadas < 0 || isNaN(tarifaHora) || tarifaHora < 0) {
    alert("Valores inválidos");
} else {
    salario = horasTrabajadas * tarifaHora;
    alert("El salario total es: $" + salario.toFixed(2));
}
