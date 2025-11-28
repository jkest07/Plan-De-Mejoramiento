def calcular_promedio():
    calificaciones = []
    print("Ingresa 5 calificaciones:")

    for i in range(5):
        while True:
            try:
                nota = float(input(f"Calificación {i+1} (0-100): "))
                if 0 <= nota <= 100:
                    calificaciones.append(nota)
                    break
                else:
                    print("La nota debe estar entre 0 y 100")
            except ValueError:
                print("Ingresa un número válido")

    promedio = sum(calificaciones) / len(calificaciones)

    # Asignar letra
    if promedio >= 90:
        letra = "A"
    elif promedio >= 80:
        letra = "B"
    elif promedio >= 70:
        letra = "C"
    elif promedio >= 60:
        letra = "D"
    else:
        letra = "F"

    print(f"Promedio: {promedio:.1f} - Calificación: {letra}")


calcular_promedio()
