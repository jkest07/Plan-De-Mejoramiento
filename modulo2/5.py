from abc import ABC, abstractmethod
import math

class Figura(ABC):
    @abstractmethod
    def calcular_area(self):
        pass

    def __str__(self):
        return f"{self.__class__.__name__} - Área: {round(self.calcular_area(), 2)}"

    def __repr__(self):
        return f"{self.__class__.__name__}({round(self.calcular_area(), 2)})"


class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def calcular_area(self):
        return math.pi * (self.radio ** 2)


class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def calcular_area(self):
        return self.ancho * self.alto


class Triangulo(Figura):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def calcular_area(self):
        return (self.base * self.altura) / 2


figuras = [
    Circulo(5),
    Rectangulo(4, 8),
    Triangulo(10, 6),
    Circulo(2)
]

for f in figuras:
    print(f)

ordenadas = sorted(figuras, key=lambda x: x.calcular_area())
print(ordenadas)

mayor = max(figuras, key=lambda x: x.calcular_area())
menor = min(figuras, key=lambda x: x.calcular_area())

print("Mayor:", mayor)
print("Menor:", menor)
