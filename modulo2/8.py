class Coleccion:
    def __init__(self):
        self.items = []

    def __len__(self):
        return len(self.items)

    def __getitem__(self, index):
        return self.items[index]

    def __setitem__(self, index, valor):
        self.items[index] = valor

    def __iter__(self):
        self._i = 0
        return self

    def __next__(self):
        if self._i >= len(self.items):
            raise StopIteration
        valor = self.items[self._i]
        self._i += 1
        return valor

    def agregar(self, valor):
        self.items.append(valor)


c = Coleccion()
c.agregar("A")
c.agregar("B")
c[1] = "Z"

for x in c:
    print(x)

print(len(c), c[0])
