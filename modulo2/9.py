class Numero:
    def __init__(self, valor):
        self.valor = valor

    def __add__(self, otro):
        return Numero(self.valor + otro.valor)

    def __sub__(self, otro):
        return Numero(self.valor - otro.valor)

    def __mul__(self, otro):
        return Numero(self.valor * otro.valor)

    def __eq__(self, otro):
        return self.valor == otro.valor

    def __lt__(self, otro):
        return self.valor < otro.valor

    def __contains__(self, item):
        return item == self.valor

    def __call__(self, x):
        return self.valor * x

    def __str__(self):
        return str(self.valor)


a = Numero(10)
b = Numero(3)
print(a + b)
print(a - b)
print(a * b)
print(a == Numero(10))
print(a < b)
print(10 in a)
print(a(5))
