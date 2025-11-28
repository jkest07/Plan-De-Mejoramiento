const btn = document.getElementById("btn-ejecutar");
const salida = document.getElementById("resultado");

btn.addEventListener("click", () => {

    // ======================================
    // 1️⃣ reduce() → Sumar números
    // ======================================
    const numeros = [5, 10, 20, 5];
    const suma = numeros.reduce((acum, n) => acum + n, 0);

    // ======================================
    // 2️⃣ flatMap() → Expandir listas anidadas
    // ======================================
    const cursos = [
        { nombre: "Juan", materias: ["Math", "History"] },
        { nombre: "Maria", materias: ["Science"] },
        { nombre: "Pedro", materias: ["Math", "Science", "Art"] }
    ];

    const materiasPlanas = cursos.flatMap(est => est.materias);

    // ======================================
    // 3️⃣ groupBy() → Agrupar por categoría (ES2023)
    // ======================================
    const productos = [
        { nombre: "Camiseta", categoria: "Ropa" },
        { nombre: "Pantalón", categoria: "Ropa" },
        { nombre: "Laptop", categoria: "Tecnología" },
        { nombre: "Mouse", categoria: "Tecnología" }
    ];

    // Agrupar por categoría
    const agrupados = productos.groupBy(p => p.categoria);

    // ======================================
    // Mostrar resultados
    // ======================================
    salida.textContent =
        "=== reduce(): Suma de números ===\n" +
        JSON.stringify({ numeros, suma }, null, 2) +
        "\n\n=== flatMap(): Materias unificadas ===\n" +
        JSON.stringify({ cursos, materiasPlanas }, null, 2) +
        "\n\n=== groupBy(): Productos agrupados ===\n" +
        JSON.stringify(agrupados, null, 2);
});
