function formatearFecha(fecha, formato) {
    let d = new Date(fecha);
    let dia = String(d.getDate()).padStart(2, "0");
    let mes = String(d.getMonth() + 1).padStart(2, "0");
    let año = d.getFullYear();
    if (formato === "dd/mm/yyyy") return dia + "/" + mes + "/" + año;
    if (formato === "mm-dd-yyyy") return mes + "-" + dia + "-" + año;
    if (formato === "yyyy.mm.dd") return año + "." + mes + "." + dia;
    return fecha;
}

let fecha = prompt("Ingrese una fecha (YYYY-MM-DD):");
let formato = prompt("Ingrese el formato (dd/mm/yyyy, mm-dd-yyyy, yyyy.mm.dd):");
alert("Fecha formateada: " + formatearFecha(fecha, formato));
