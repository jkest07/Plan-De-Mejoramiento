# ================================
# MINI PROYECTO: CREADOR DE HÉROES
# ================================

def mostrar_menu(opciones, titulo):
    print(f"\n=== {titulo} ===")
    for i, opcion in enumerate(opciones, start=1):
        print(f"{i}. {opcion}")

    while True:
        try:
            eleccion = int(input("Elige una opción: "))
            if 1 <= eleccion <= len(opciones):
                return eleccion - 1
            else:
                print("Número fuera de rango.")
        except ValueError:
            print("Ingresa un número válido.")

def crear_personaje():
    # CATEGORÍA 1: Clase
    clases = {
        "Guerrero": {"vida": 40, "ataque": 10, "velocidad": 3},
        "Hechicero": {"vida": 25, "ataque": 18, "velocidad": 4},
        "Asesino": {"vida": 30, "ataque": 14, "velocidad": 8}
    }

    # CATEGORÍA 2: Arma
    armas = {
        "Espada": {"ataque": 5, "velocidad": -1},
        "Arco": {"ataque": 3, "velocidad": 2},
        "Báculo": {"ataque": 7, "velocidad": 0}
    }

    # CATEGORÍA 3: Mascota
    mascotas = {
        "Lobo": {"vida": 10, "ataque": 4},
        "Halcón": {"vida": 5, "ataque": 2},
        "Dragón bebé": {"vida": 15, "ataque": 6}
    }

    # Elegir Clase
    lista_clases = list(clases.keys())
    ind_clase = mostrar_menu(lista_clases, "ELIGE TU CLASE")
    clase = lista_clases[ind_clase]

    # Elegir Arma
    lista_armas = list(armas.keys())
    ind_arma = mostrar_menu(lista_armas, "ELIGE TU ARMA")
    arma = lista_armas[ind_arma]

    # Elegir Mascota
    lista_mascotas = list(mascotas.keys())
    ind_mascota = mostrar_menu(lista_mascotas, "ELIGE TU MASCOTA")
    mascota = lista_mascotas[ind_mascota]

    # ==========================
    # CÁLCULO DE ESTADÍSTICAS
    # ==========================

    base = clases[clase]
    bonus_arma = armas[arma]
    bonus_mascota = mascotas[mascota]

    vida_final = base["vida"] + bonus_mascota["vida"]
    ataque_final = base["ataque"] + bonus_arma["ataque"] + bonus_mascota["ataque"]
    velocidad_final = base["velocidad"] + bonus_arma["velocidad"]

    # ==========================
    # RESULTADO FINAL
    # ==========================

    print("\n===============================")
    print("   PERSONAJE CREADO CON ÉXITO")
    print("===============================")
    print(f"Clase: {clase}")
    print(f"Arma: {arma}")
    print(f"Mascota: {mascota}")
    print("-------------------------------")
    print(f"Vida total: {vida_final}")
    print(f"Ataque total: {ataque_final}")
    print(f"Velocidad total: {velocidad_final}")
    print("===============================\n")


def main():
    while True:
        crear_personaje()
        continuar = input("¿Quieres crear otro personaje? (s/n): ").lower()
        if continuar != "s":
            print("¡Gracias por jugar!")
            break


main()
