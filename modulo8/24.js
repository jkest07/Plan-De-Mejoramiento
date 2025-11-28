let figura = prompt("Ingrese la figura (círculo, triángulo, rectángulo, cuadrado):").toLowerCase();
let area, perimetro;

switch (figura) {
    case "círculo":
    case "circulo":
        let radio = parseFloat(prompt("Ingrese el radio:"));
        if (isNaN(radio) || radio <= 0) {
            alert("Valor inválido");
        } else {
            area = Math.PI * radio * radio;
            perimetro = 2 * Math.PI * radio;
            alert("Área: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2));
        }
        break;
    case "triángulo":
    case "triangulo":
        let base = parseFloat(prompt("Ingrese la base:"));
        let altura = parseFloat(prompt("Ingrese la altura:"));
        let lado1 = parseFloat(prompt("Ingrese el lado 1:"));
        let lado2 = parseFloat(prompt("Ingrese el lado 2:"));
        let lado3 = parseFloat(prompt("Ingrese el lado 3:"));
        if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0 || isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            alert("Valores inválidos");
        } else {
            area = (base * altura) / 2;
            perimetro = lado1 + lado2 + lado3;
            alert("Área: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2));
        }
        break;
    case "rectángulo":
    case "rectangulo":
        let largo = parseFloat(prompt("Ingrese el largo:"));
        let ancho = parseFloat(prompt("Ingrese el ancho:"));
        if (isNaN(largo) || largo <= 0 || isNaN(ancho) || ancho <= 0) {
            alert("Valores inválidos");
        } else {
            area = largo * ancho;
            perimetro = 2 * (largo + ancho);
            alert("Área: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2));
        }
        break;
    case "cuadrado":
        let lado = parseFloat(prompt("Ingrese el lado:"));
        if (isNaN(lado) || lado <= 0) {
            alert("Valor inválido");
        } else {
            area = lado * lado;
            perimetro = 4 * lado;
            alert("Área: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2));
        }
        break;
    default:
        alert("Figura no reconocida");
        break;
}
