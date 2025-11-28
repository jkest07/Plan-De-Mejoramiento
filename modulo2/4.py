class Vehiculo:
    def __init__(self, marca, modelo, velocidad_max):
        self.marca = marca
        self.modelo = modelo
        self.velocidad_max = velocidad_max

    def descripcion(self):
        return f"{self.marca} {self.modelo} - Velocidad Máx: {self.velocidad_max} km/h"

    def tipo(self):
        return "Vehículo"


class Auto(Vehiculo):
    def __init__(self, marca, modelo, velocidad_max, puertas):
        super().__init__(marca, modelo, velocidad_max)
        self.puertas = puertas

    def descripcion(self):
        return f"Auto {self.marca} {self.modelo} ({self.puertas} puertas)"


class Motocicleta(Vehiculo):
    def __init__(self, marca, modelo, velocidad_max, cilindrada):
        super().__init__(marca, modelo, velocidad_max)
        self.cilindrada = cilindrada

    def descripcion(self):
        return f"Motocicleta {self.marca} {self.modelo} - {self.cilindrada} cc"


class Camion(Vehiculo):
    def __init__(self, marca, modelo, velocidad_max, capacidad_ton):
        super().__init__(marca, modelo, velocidad_max)
        self.capacidad_ton = capacidad_ton

    def descripcion(self):
        return f"Camión {self.marca} {self.modelo} - {self.capacidad_ton} toneladas"


# ======= Polimorfismo y pruebas =======

vehiculos = [
    Auto("Toyota", "Corolla", 180, 4),
    Motocicleta("Yamaha", "R3", 200, 321),
    Camion("Volvo", "FH16", 140, 25)
]

for v in vehiculos:
    print(v.descripcion())

print(isinstance(vehiculos[0], Vehiculo))
print(issubclass(Auto, Vehiculo))
print(hasattr(vehiculos[1], "cilindrada"))
print(type(vehiculos[2]).__name__)
