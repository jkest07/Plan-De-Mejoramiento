import random

# Número entero aleatorio en rango
dado = random.randint(1, 6)
print(f"Resultado del dado: {dado}")

# Número decimal entre 0 y 1
decimal = random.random()
print(f"Decimal aleatorio: {decimal:.3f}")

# Número decimal en rango específico
precio = random.uniform(10.0, 50.0)
print(f"Precio aleatorio: ${precio:.2f}")

# Número con distribución normal
altura = random.gauss(170, 10) # media=170, desviación=10
print(f"Altura simulada: {altura:.1f} cm")

# Elegir elemento aleatorio
colores = ["rojo", "azul", "verde", "amarillo", "morado"]
color_elegido = random.choice(colores)
print(f"Color seleccionado: {color_elegido}")

# Elegir múltiples elementos sin repetición
ganadores = random.sample(colores, 3)
print(f"Tres ganadores: {ganadores}")

# Elegir con repetición permitida
sorteo = random.choices(colores, k=5)
print(f"Sorteo con repetición: {sorteo}")

# Elegir con pesos diferentes
frutas = ["manzana", "banana", "naranja"]
pesos = [50, 30, 20] # manzana más probable
fruta_elegida = random.choices(frutas, weights=pesos, k=1)[0]
print(f"Fruta elegida: {fruta_elegida}")

import random
class SimuladorJuegos:
    def __init__(self):
        self.historial = []
    
    def lanzar_dados(self, cantidad=2):
        """Simula lanzamiento de dados"""
        dados = [random.randint(1, 6) for _ in range(cantidad)]
        suma = sum(dados)

        resultado = {
        "dados": dados,
        "suma": suma,
        "es_doble": len(set(dados)) == 1 if cantidad == 2 else False
        }
        self.historial.append(("dados", resultado))
        return resultado


    def ruleta_europea(self):
        """Simula ruleta europea (0-36)"""
        numero = random.randint(0, 36)

        # Determinar color
        if numero == 0:
            color = "verde"
        elif numero in [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]:
            color = "rojo"
        else:
            color = "negro"

        # Determinar par/impar
        paridad = "par" if numero % 2 == 0 and numero != 0 else "impar"
        if numero == 0:
            paridad = "cero"

            resultado = {
            "numero": numero,
            "color": color,
            "paridad": paridad
            }

        self.historial.append(("ruleta", resultado))
        return resultado

    def loteria_primitiva(self):
        """Simula lotería primitiva (6 números del 1-49)"""
        numeros = sorted(random.sample(range(1, 50), 6))
        complementario = random.choice([n for n in range(1, 50) if n not in numeros])
        reintegro = random.randint(0, 9)

        resultado = {
        "numeros": numeros,
        "complementario": complementario,
        "reintegro": reintegro
        }

        self.historial.append(("loteria", resultado))
        return resultado

    def cara_o_cruz(self, lanzamientos=1):
        """Simula lanzamiento de moneda"""
        resultados = []

        for _ in range(lanzamientos):
            resultado = random.choice(["cara", "cruz"])
            resultados.append(resultado)
        
        estadisticas = {
            "resultados": resultados,
            "caras": resultados.count("cara"),
            "cruces": resultados.count("cruz"),
            "porcentaje_caras": (resultados.count("cara") / lanzamientos) * 100
            }
        
        self.historial.append(("moneda", estadisticas))
        return estadisticas

    def mostrar_estadisticas(self):
        """Muestra estadísticas del historial"""
        if not self.historial:
            print("No hay juegos registrados")
            return
        
        print("\n=== ESTADÍSTICAS DE JUEGOS ===")
        tipos = {}
        for tipo, _ in self.historial:
            tipos[tipo] = tipos.get(tipo, 0) + 1
        
        for tipo, cantidad in tipos.items():
            print(f"{tipo.capitalize()}: {cantidad} veces")

# Programa principal interactivo
def main_juegos():
    simulador = SimuladorJuegos()
    while True:
        print("\n=== SIMULADOR DE JUEGOS ===")
        print("1. Lanzar dados")
        print("2. Ruleta europea")
        print("3. Lotería primitiva")
        print("4. Cara o cruz")
        print("5. Ver estadísticas")
        print("6. Salir")
        opcion = input("Elige una opción (1-6): ")
        if opcion == "1":
            cantidad = int(input("¿Cuántos dados? (1-6): ") or "2")
            resultado = simulador.lanzar_dados(cantidad)
            print(f"Dados: {resultado['dados']}")
            print(f"Suma: {resultado['suma']}")
            if resultado['es_doble']:
                print("¡DOBLE!")
        elif opcion == "2":
            resultado = simulador.ruleta_europea()
            print(f"Número: {resultado['numero']}")
            print(f"Color: {resultado['color']}")
            print(f"Paridad: {resultado['paridad']}")
        elif opcion == "3":
            resultado = simulador.loteria_primitiva()
            print(f"Números: {resultado['numeros']}")
            print(f"Complementario: {resultado['complementario']}")
            print(f"Reintegro: {resultado['reintegro']}")
        elif opcion == "4":
            lanzamientos = int(input("¿Cuántos lanzamientos? ") or "10")
            resultado = simulador.cara_o_cruz(lanzamientos)
            print(f"Resultados: {resultado['resultados']}")
            print(f"Caras: {resultado['caras']} ({resultado['porcentaje_caras']:.1f}%)")
            print(f"Cruces: {resultado['cruces']}")
        elif opcion == "5":
            simulador.mostrar_estadisticas()
        elif opcion == "6":
            print("¡Hasta luego!")
        break

if __name__ == "__main__":
    main_juegos()
    

import random
from datetime import datetime, timedelta
def generar_datos_prueba():
    """Genera datos ficticios para testing"""
    nombres = ["Ana", "Carlos", "María", "Juan", "Laura", "Pedro", "Sofia", "Miguel"]
    apellidos = ["García", "Rodríguez", "López", "Martínez", "González", "Pérez"]
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"]

    datos = []

    for i in range(100):
        # Generar persona ficticia
        persona = {
            "id": i + 1,
            "nombre": random.choice(nombres),
            "apellido": random.choice(apellidos),
            "edad": random.randint(18, 80),
            "ciudad": random.choice(ciudades),
            "salario": random.randint(20000, 80000),
            "fecha_registro": datetime.now() - timedelta(days=random.randint(1, 365))
        }
        datos.append(persona)
    return datos

# Usar los datos generados
datos_ficticios = generar_datos_prueba()
print("Primeras 5 personas generadas:")
for persona in datos_ficticios[:5]:
    print(f"{persona['nombre']} {persona['apellido']}, {persona['edad']} años, {persona['ciudad']}")