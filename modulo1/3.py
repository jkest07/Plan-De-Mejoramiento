# EJERCICIO 3: Interacción con el usuario
print("=== CALCULADORA INTERACTIVA ===")

# Línea 1: Solicitar el nombre (texto)
nombre = input("¿Cuál es tu nombre? ")
print(f"¡Hola {nombre}! Vamos a hacer algunos cálculos.")

# Línea 2-3: Solicitar números (convertir a float)
print("\nIngresa dos números para calcular:")
numero1 = float(input("Primer número: "))
numero2 = float(input("Segundo número: "))

# Línea 4: Solicitar operación
print("\nOperaciones disponibles: +, -, *, /")
operacion = input("¿Qué operación quieres realizar? ")

# Línea 5-12: Realizar cálculo según la operación

if operacion == "+":
    resultado = numero1 + numero2
    simbolo = "+"
elif operacion == "-":
    resultado = numero1 - numero2
    simbolo = "-"
elif operacion == "*":
    resultado = numero1 * numero2
    simbolo = "×"
elif operacion == "/":
    if numero2 != 0:
        resultado = numero1 / numero2
        simbolo = "÷"
    else:
        resultado = "Error: División por cero"
        simbolo = "÷"
else:
    resultado = "Operación no válida"
    simbolo = "?"

# Línea 13-15: Mostrar resultado
print(f"\n--- RESULTADO ---")
if isinstance(resultado, (int, float)):
    print(f"{nombre}, el resultado de {numero1} {simbolo} {numero2} = {resultado}")
else:
    print(f"{nombre}, {resultado}")