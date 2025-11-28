let edad = parseInt(prompt("Ingrese la edad del cliente:"));
let descuento = (edad < 12) ? "50%" :
                (edad <= 64) ? "10%" :
                "30%";
alert("Descuento aplicable: " + descuento);
