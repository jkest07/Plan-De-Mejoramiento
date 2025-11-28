def mostrar_menu(opciones, titulo="MENÚ"):
    print("\n" + titulo)
    print("-" * len(titulo))

    for i, opcion in enumerate(opciones, start=1):
        print(f"{i}. {opcion}")

    while True:
        try:
            eleccion = int(input("Elige una opción: "))
            if 1 <= eleccion <= len(opciones):
                return eleccion - 1
            else:
                print("Número fuera de rango, intenta de nuevo.")
        except ValueError:
            print("Entrada inválida, ingresa un número.")

# -------------------------------
# Ejercicio guiado 1
# -------------------------------

comidas = ["Pizza", "Hamburguesa", "Tacos", "Sushi", "Pasta"]
indice_elegido = mostrar_menu(comidas, "ELIGE TU COMIDA FAVORITA")
comida_favorita = comidas[indice_elegido]
print(f"¡Excelente elección! Elegiste: {comida_favorita}")
