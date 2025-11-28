import json

class GestorArchivos:
    def __init__(self, ruta):
        self.ruta = ruta

    def guardar(self, datos):
        with open(self.ruta, "w", encoding="utf-8") as f:
            json.dump(datos, f, indent=4)

    def cargar(self):
        try:
            with open(self.ruta, "r", encoding="utf-8") as f:
                return json.load(f)
        except FileNotFoundError:
            return []

gestor = GestorArchivos("inventario.json")
gestor.guardar([{"producto": "Pan", "precio": 2000}])
print(gestor.cargar())
