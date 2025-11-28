# EJERCICIO 4: Sistema de calificaciones
print("SISTEMA DE CALIFICACIONES ESCOLARES")

# Solicitar la calificación
calificacion = float(input("Ingresa tu calificación (0-100): "))

# Validar rango
if calificacion < 0 or calificacion > 100:
    print("Error: La calificación debe estar entre 0 y 100")
else:

# Determinar la letra según la calificación
    if calificacion >= 90:
        letra = "A"
        mensaje = "EXCELENTE!"
    elif calificacion >= 80:
        letra = "B"
        mensaje = "MUY BIEN!"
    elif calificacion >= 70:
        letra = "C"
        mensaje = "BIEN"
    elif calificacion >= 60:
        letra = "D"
        mensaje = "SUFICIENTE"
    else:
        letra = "F"
        mensaje = "REPROBADO"

# Mostrar resultados
print(f"Calificación: {calificacion}")
print(f"Letra: {letra}")
print(f"Estado: {mensaje}")

# Recomendaciones
if calificacion >= 90:
    print("Sigue así! Eres ejemplar.")
elif calificacion >= 70:
    print("Buen trabajo, puedes mejorar.")
else:
    print("Necesitas estudiar más.")