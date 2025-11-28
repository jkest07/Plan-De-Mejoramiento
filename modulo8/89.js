let texto = prompt("Ingrese un texto:");
let invertido = texto.split("").reverse().join("");
let capitalizado = texto.split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
alert("Invertido: " + invertido + "\nCapitalizado: " + capitalizado);
