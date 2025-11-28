def calculadora_segura():
    while True:
        try:
            print("\n=== CALCULADORA SEGURA ===")
            num1 = float(input("Primer número: "))
            operacion = input("Operación (+, -, *, /): ")
            num2 = float(input("Segundo número: "))
        
            if operacion == "+":
                resultado = num1 + num2
            elif operacion == "-":
                resultado = num1 - num2
            elif operacion == "*":
                resultado = num1 * num2
            elif operacion == "/":
                if num2 == 0:
                    raise ZeroDivisionError("División por cero")
                resultado = num1 / num2
            else:
                raise ValueError("Operación no válida")

            print(f"Resultado: {num1} {operacion} {num2} = {resultado}")
            continuar = input("¿Otra operación? (s/n): ")
            if continuar.lower() != 's':
                break

        except ValueError as e:
            print(f"Error de valor: {e}")
        except ZeroDivisionError as e:
            print(f"Error matemático: {e}")
        except KeyboardInterrupt:
            print("\nPrograma terminado por el usuario")
            break
        except Exception as e:
            print(f"Error inesperado: {e}")
# Ejecutar calculadora
calculadora_segura()

def sistema_archivos_seguro():
    def leer_archivo_seguro(nombre_archivo):
        try:
            with open(nombre_archivo, "r", encoding="utf-8") as archivo:
                return archivo.read()
        except FileNotFoundError:
            print(f"Archivo {nombre_archivo} no encontrado")
            return None
        except PermissionError:
            print(f"Sin permisos para leer {nombre_archivo}")
            return None
        except Exception as e:
            print(f"Error inesperado: {e}")
            return None

    def escribir_archivo_seguro(nombre_archivo, contenido):
        try:
            with open(nombre_archivo, "w", encoding="utf-8") as archivo:
                archivo.write(contenido)
                print(f"Archivo {nombre_archivo} guardado exitosamente")
                return True
        except PermissionError:
            print(f"Sin permisos para escribir {nombre_archivo}")
            return False
        except Exception as e:
            print(f"Error al guardar: {e}")
            return False

    # Usar las funciones
    contenido = leer_archivo_seguro("mi_archivo.txt")
    if contenido:
        print("Contenido del archivo:")
        print(contenido)
    
    nuevo_contenido = "Este es un archivo de prueba"
    escribir_archivo_seguro("nuevo_archivo.txt", nuevo_contenido)
    sistema_archivos_seguro()