let estudiantes = [
    {nombre: "Juan", edad: 20, calificacion: 85},
    {nombre: "Ana", edad: 22, calificacion: 92},
    {nombre: "Luis", edad: 19, calificacion: 78}
];
estudiantes.sort((a, b) => b.calificacion - a.calificacion);
alert("Estudiantes ordenados por calificación:\n" + estudiantes.map(e => e.nombre + " - " + e.calificacion).join("\n"));
