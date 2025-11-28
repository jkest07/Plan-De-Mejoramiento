# Escribir información en un archivo
def guardar_contacto(nombre, telefono, email):
    with open("contactos.txt", "a", encoding="utf-8") as archivo:
        linea = f"{nombre},{telefono},{email}\n"
        archivo.write(linea)
    print(f"Contacto {nombre} guardado exitosamente")
    
# Leer y mostrar todos los contactos
def mostrar_contactos():
    try:
        with open("contactos.txt", "r", encoding="utf-8") as archivo:
            print("=== LISTA DE CONTACTOS ===")
            for i, linea in enumerate(archivo, 1):
                nombre, telefono, email = linea.strip().split(",")
                print(f"{i}. {nombre} - {telefono} - {email}")
    except FileNotFoundError:
        print("No hay contactos guardados aún")

# Sistema de notas personales
def agregar_nota():
    nota = input("Escribe tu nota: ")
    fecha = datetime.now().strftime("%Y-%m-%d %H:%M")
    
    with open("mis_notas.txt", "a", encoding="utf-8") as archivo:
        archivo.write(f"[{fecha}] {nota}\n")
    print("Nota guardada")

def leer_notas():
    try:
        with open("mis_notas.txt", "r", encoding="utf-8") as archivo:
            print("=== MIS NOTAS ===")
            contenido = archivo.read()
            if contenido:
                print(contenido)
            else:
                print("No hay notas")
    except FileNotFoundError:
        print("No hay archivo de notas")  
        

from datetime import datetime

# Menú interactivo
def menu_principal():
    while True:
        print("\n=== GESTOR DE ARCHIVOS ===")
        print("1. Agregar contacto")
        print("2. Ver contactos")
        print("3. Agregar nota")
        print("4. Ver notas")
        print("5. Salir")
        
        opcion = input("Elige opción (1-5): ")
        
        if opcion == "1":
            nombre = input("Nombre: ")
            telefono = input("Teléfono: ")
            email = input("Email: ")
            guardar_contacto(nombre, telefono, email)
        elif opcion == "2":
            mostrar_contactos()
        elif opcion == "3":
            agregar_nota()
        elif opcion == "4":
            leer_notas()
        elif opcion == "5":
            print("¡Hasta luego!")
            break
        else:
            print("Opción no válida")

# Ejecutar programa
if __name__ == "__main__":
    menu_principal()