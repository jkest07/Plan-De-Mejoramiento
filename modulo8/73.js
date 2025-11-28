let estudiantes = [
    {nombre: "Juan", edad: 20, calificacion: 85},
    {nombre: "Ana", edad: 22, calificacion: 92},
    {nombre: "Luis", edad: 19, calificacion: 78}
];
estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
alert("Estudiantes ordenados por nombre:\n" + estudiantes.map(e => e.nombre + " - " + e.edad + " años - " + e.calificacion).join("\n"));
