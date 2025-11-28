let minutos = parseInt(prompt("Ingrese los minutos a convertir:"));

if (isNaN(minutos) || minutos < 0) {
    alert("Valor inválido");
} else {
    let horas = Math.floor(minutos / 60);
    let mins = minutos % 60;
    alert(minutos + " minutos = " + horas + " horas y " + mins + " minutos");
}
