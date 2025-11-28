let compras = parseFloat(prompt("Ingrese el total de sus compras:"));
let puntos;

if (isNaN(compras) || compras < 0) {
    alert("Valor inválido");
} else if (compras < 100) {
    puntos = 0;
} else if (compras < 500) {
    puntos = 10;
} else {
    puntos = 25;
}

alert("Usted ganó " + puntos + " puntos de lealtad");
