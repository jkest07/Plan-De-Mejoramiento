class Singleton:
    _instancia = None

    def __new__(cls, *args, **kwargs):
        if not cls._instancia:
            cls._instancia = super().__new__(cls)
        return cls._instancia


s1 = Singleton()
s2 = Singleton()
print(s1 is s2)


class Animal:
    def hablar(self):
        pass

class Perro(Animal):
    def hablar(self):
        return "Guau"

class Gato(Animal):
    def hablar(self):
        return "Miau"

class AnimalFactory:
    @staticmethod
    def crear(tipo):
        if tipo == "perro":
            return Perro()
        if tipo == "gato":
            return Gato()
        return None

a = AnimalFactory.crear("perro")
print(a.hablar())


class Estrategia:
    def ejecutar(self, precio):
        pass

class Descuento10(Estrategia):
    def ejecutar(self, precio):
        return precio * 0.9

class Descuento20(Estrategia):
    def ejecutar(self, precio):
        return precio * 0.8

class Carrito:
    def __init__(self, estrategia):
        self.estrategia = estrategia

    def calcular(self, precio):
        return self.estrategia.ejecutar(precio)

c = Carrito(Descuento20())
print(c.calcular(100))
