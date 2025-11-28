let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    alert("Por favor, ingrese números enteros positivos.");
} else {
    let a = num1, b = num2;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    let mcd = a;
    let mcm = (num1 * num2) / mcd;
    alert("MCD: " + mcd + "\nMCM: " + mcm);
}
