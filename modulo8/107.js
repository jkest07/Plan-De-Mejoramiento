let dia = parseInt(prompt("Ingrese un día de la semana (1=Lunes, 7=Domingo):"));
let tipoDia = (dia >= 1 && dia <= 5) ? "Laboral" :
              (dia === 6 || dia === 7) ? "Fin de semana" : "Día inválido";
alert("El día seleccionado es: " + tipoDia);
