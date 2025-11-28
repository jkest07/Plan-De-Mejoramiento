# EJERCICIO 5: Bucles y repeticiones
print("EJEMPLOS DE BUCLES EN PYTHON")
print("=" * 40)

# EJEMPLO 1: Bucle for con range()
print("1. Contando del 1 al 5:")
for numero in range(1, 6):
    print(f"Número: {numero}")
    print("\n" + "-" * 30)

# EJEMPLO 2: Bucle for con lista
print("2. Recorriendo una lista de frutas:")
frutas = ["manzana", "banana", "naranja", "uva"]

for fruta in frutas:
    print(f"Me gusta la {fruta}")
    print("\n" + "-" * 30)

# EJEMPLO 3: Bucle while
    print("3. Contador con while:")
    contador = 1
while contador <= 3:
    print(f"Vuelta número {contador}")
    contador += 1 # Equivale a: contador = contador + 1
    print("\n" + "-" * 30)

# EJEMPLO 4: Bucle con break
print("4. Buscando un número específico:")
numeros = [10, 25, 30, 45, 50]
buscar = 30

for num in numeros:
    print(f"Revisando: {num}")
    if num == buscar:
        print(f"¡Encontrado! El número {buscar} está en la lista")
    break
print("No es el que buscamos, continuamos...")
print("\n" + "-" * 30)

# EJEMPLO 5: Bucle con continue
print("5. Mostrando solo números pares:")
for i in range(1, 11):
    if i % 2 != 0: # Si es impar
        continue # Salta al siguiente número
    print(f"{i} es par")
    print("\n" + "-" * 30)

# EJEMPLO 6: Aplicación práctica - Menú interactivo
print("6. Menú interactivo:")
while True:
    print("\n--- MENÚ ---")
    print("1. Saludar")
    print("2. Calcular cuadrado")
    print("3. Salir")
    opcion = input("Elige una opción (1-3): ")
    if opcion == "1":
        nombre = input("¿Cómo te llamas? ")
        print(f"¡Hola {nombre}!")
    elif opcion == "2":
        numero = int(input("Ingresa un número: "))
        cuadrado = numero ** 2
        print(f"El cuadrado de {numero} es {cuadrado}")
    elif opcion == "3":
        print("¡Hasta luego!")
        break
    else:
        print("Opción no válida")