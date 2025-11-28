# EJERCICIO 2: Operaciones matemáticas
print("CALCULADORA BÁSICA")

# Definir números para operar
numero1 = 15
numero2 = 4

# Operaciones básicas
suma = numero1 + numero2 # 15 + 4 = 19
resta = numero1 - numero2 # 15 - 4 = 11
multiplicacion = numero1 * numero2 # 15 * 4 = 60
division = numero1 / numero2 # 15 / 4 = 3.75

# Operaciones especiales
division_entera = numero1 // numero2 # 15 // 4 = 3
modulo = numero1 % numero2 # 15 % 4 = 3
potencia = numero1 ** numero2 # 15^4 = 50625

# Mostrar resultados
print(f"Suma: {numero1} + {numero2} = {suma}")
print(f"Resta: {numero1} - {numero2} = {resta}")
print(f"Multiplicación: {numero1} × {numero2} = {multiplicacion}")
print(f"División: {numero1} ÷ {numero2} = {division}")
print(f"División entera: {numero1} // {numero2} = {division_entera}")
print(f"Módulo: {numero1} % {numero2} = {modulo}")
print(f"Potencia: {numero1}^{numero2} = {potencia}")