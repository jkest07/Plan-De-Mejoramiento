class Producto:
    def __init__(self, nombre, precio):
        self._nombre = nombre
        self._precio = precio

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, valor):
        if not valor:
            raise ValueError("Nombre inválido")
        self._nombre = valor

    @property
    def precio(self):
        return self._precio

    @precio.setter
    def precio(self, valor):
        if valor < 0:
            raise ValueError("Precio inválido")
        self._precio = valor

    @classmethod
    def crear_desde_texto(cls, texto):
        nombre, precio = texto.split(",")
        return cls(nombre, float(precio))

    @staticmethod
    def convertir_a_dolares(valor):
        return valor / 4100


p = Producto("Laptop", 3500000)
print(Producto.convertir_a_dolares(p.precio))
p2 = Producto.crear_desde_texto("Mouse,50000")
print(p2.precio)
