function tablaMultiplicar(n) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) tabla.push(`${n} x ${i} = ${n*i}`);
    return tabla.join("\n");
}

let numero = parseInt(prompt("Ingrese un número para la tabla de multiplicar:"));
alert("Tabla de multiplicar de " + numero + ":\n" + tablaMultiplicar(numero));
