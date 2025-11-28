import json
# Datos Python
persona = {
    "nombre": "Ana García",
    "edad": 28,
    "activo": True,
    "habilidades": ["Python", "JavaScript", "SQL"]
}

# Convertir a JSON
json_texto = json.dumps(persona, indent=2, ensure_ascii=False)
print("JSON generado:")
print(json_texto)

# Convertir de JSON a Python
persona_recuperada = json.loads(json_texto)
print(f"Nombre: {persona_recuperada['nombre']}")
print(f"Habilidades: {persona_recuperada['habilidades']}")

import json
from datetime import datetime
def guardar_configuracion(config, archivo="config.json"):
    try:
        with open(archivo, "w", encoding="utf-8") as f:
            json.dump(config, f, indent=2, ensure_ascii=False)
        print(f"Configuración guardada en {archivo}")
        return True
    except Exception as e:
        print(f"Error al guardar: {e}")
        return False

def cargar_configuracion(archivo="config.json"):
    try:
        with open(archivo, "r", encoding="utf-8") as f:
            config = json.load(f)
            return config
    except FileNotFoundError:
        print("Archivo no encontrado, usando configuración por defecto")
        return crear_configuracion_defecto()
def crear_configuracion_defecto():
    return {
    "aplicacion": {
        "nombre": "Mi Aplicación",
        "version": "1.0.0",
        "debug": False
    },
        "base_datos": {
        "host": "localhost",
        "puerto": 5432
    }
}
    
# Ejemplo de uso
config = crear_configuracion_defecto()
guardar_configuracion(config)
config_cargada = cargar_configuracion()
print("App:", config_cargada["aplicacion"]["nombre"])


import json
from datetime import datetime

class GestorProductos:
    def __init__(self):
        self.productos = []
        self.archivo = "productos.json"
        self.cargar_productos()
    
    def cargar_productos(self):
        try:
            with open(self.archivo, "r", encoding="utf-8") as f:
                datos = json.load(f)
                self.productos = datos.get("productos", [])
                print(f"Cargados {len(self.productos)} productos")
        except FileNotFoundError:
            print("Archivo no existe, iniciando vacío")
            self.productos = []
    def guardar_productos(self):
        datos = {
            "fecha_actualizacion": datetime.now().isoformat(),
            "total": len(self.productos),
            "productos": self.productos
            }
        
        with open(self.archivo, "w", encoding="utf-8") as f:
            json.dump(datos, f, indent=2, ensure_ascii=False)
        print("Productos guardados")

    def agregar_producto(self, nombre, precio, categoria):
        nuevo_id = len(self.productos) + 1
        producto = {
            "id": nuevo_id,
            "nombre": nombre,
            "precio": precio,
            "categoria": categoria,
            "fecha_creacion": datetime.now().isoformat()
        }
        self.productos.append(producto)
        print(f"Producto '{nombre}' agregado")

    def buscar_por_categoria(self, categoria):
        resultados = []
        for producto in self.productos:
            if producto["categoria"].lower() == categoria.lower():
                resultados.append(producto)
        return resultados

# Usar el gestor
gestor = GestorProductos()
gestor.agregar_producto("Laptop", 800, "Electrónicos")
gestor.agregar_producto("Mouse", 25, "Accesorios")
gestor.guardar_productos()

# Buscar productos
electronicos = gestor.buscar_por_categoria("Electrónicos")
print(f"Productos electrónicos: {len(electronicos)}")

def validar_persona(datos):
    """Valida estructura de datos de persona"""

    campos_requeridos = ["nombre", "edad", "email"]
    # Verificar campos requeridos
    for campo in campos_requeridos:
        if campo not in datos:
            print(f"Falta el campo: {campo}")
            return False

    # Verificar tipos
    if not isinstance(datos["nombre"], str) or not datos["nombre"]:
        print("Nombre debe ser texto no vacío")
        return False

    if not isinstance(datos["edad"], int) or datos["edad"] < 0:
        print("Edad debe ser número positivo")
        return False

    if "@" not in datos["email"]:
        print("Email debe contener @")
        return False

    print("Datos válidos")
    return True

# Ejemplos
persona_valida = {
"nombre": "Juan Pérez",
"edad": 30,
"email": "juan@email.com"
}
persona_invalida = {
"nombre": "",
"edad": -5,
"email": "email_sin_arroba"
}
validar_persona(persona_valida)
validar_persona(persona_invalida)