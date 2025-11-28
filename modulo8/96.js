function calculadoraCientifica() {
    let operacion = prompt("Ingrese operación: sin, cos, tan, log, sqrt, pow");
    let numero = parseFloat(prompt("Ingrese número:"));
    let resultado;
    if (operacion === "sin") resultado = Math.sin(numero);
    else if (operacion === "cos") resultado = Math.cos(numero);
    else if (operacion === "tan") resultado = Math.tan(numero);
    else if (operacion === "log") resultado = Math.log(numero);
    else if (operacion === "sqrt") resultado = Math.sqrt(numero);
    else if (operacion === "pow") {
        let exponente = parseFloat(prompt("Ingrese exponente:"));
        resultado = Math.pow(numero, exponente);
    } else resultado = "Operación inválida";
    alert("Resultado: " + resultado);
}

calculadoraCientifica();
