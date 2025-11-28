function binario(n){return n.toString(2);}
function decimal(n){return parseInt(n);}
function hexadecimal(n){return n.toString(16);}

let numero = parseInt(prompt("Ingrese un número:"));
alert(
    "Binario: " + binario(numero) +
    "\nDecimal: " + decimal(numero) +
    "\nHexadecimal: " + hexadecimal(numero)
);
