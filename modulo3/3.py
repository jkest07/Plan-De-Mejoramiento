def calculadora_rpg():
    clases = {
        "Guerrero": {"vida_mult": 10, "ataque_mult": 3, "defensa_mult": 4},
        "Mago": {"vida_mult": 5, "ataque_mult": 6, "defensa_mult": 2},
        "Arquero": {"vida_mult": 7, "ataque_mult": 5, "defensa_mult": 3},
        "Clérigo": {"vida_mult": 8, "ataque_mult": 2, "defensa_mult": 5}
    }

    # Pedir nivel
    while True:
        try:
            nivel = int(input("Nivel del personaje (1-50): "))
            if 1 <= nivel <= 50:
                break
            else:
                print("El nivel debe estar entre 1 y 50")
        except ValueError:
            print("Ingresa un número válido")

    # Elegir clase
    nombres_clases = list(clases.keys())
    indice = mostrar_menu(nombres_clases, "SELECCIONA LA CLASE")
    clase_elegida = nombres_clases[indice]

    # Calcular estadísticas
    mult = clases[clase_elegida]
    vida = 50 + (nivel * mult["vida_mult"])
    ataque = 10 + (nivel * mult["ataque_mult"])
    defensa = 5 + (nivel * mult["defensa_mult"])

    # Mostrar resultado
    print(f"\n=== {clase_elegida.upper()} NIVEL {nivel} ===")
    print(f"Vida: {vida}")
    print(f"Ataque: {ataque}")
    print(f"Defensa: {defensa}")


calculadora_rpg()