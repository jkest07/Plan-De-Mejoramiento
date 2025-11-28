class Producto:
    def __init__(self, nombre, categoria, precio, stock):
        self.nombre = nombre
        self.categoria = categoria
        self.precio = precio
        self.stock = stock

    def actualizar_stock(self, cantidad):
        self.stock += cantidad

    def valor_total(self):
        return self.precio * self.stock


class Inventario:
    def __init__(self):
        self.productos = []

    def agregar_producto(self, producto):
        if any(p.nombre == producto.nombre for p in self.productos):
            raise ValueError("El producto ya existe.")
        self.productos.append(producto)

    def eliminar_producto(self, nombre):
        for i, p in enumerate(self.productos):
            if p.nombre == nombre:
                del self.productos[i]
                return
        raise ValueError("Producto no encontrado.")

    def actualizar_stock(self, nombre, cantidad):
        for p in self.productos:
            if p.nombre == nombre:
                p.actualizar_stock(cantidad)
                return
        raise ValueError("Producto no encontrado.")

    def buscar_por_nombre(self, nombre):
        return [p for p in self.productos if nombre.lower() in p.nombre.lower()]

    def buscar_por_categoria(self, categoria):
        return list(filter(lambda p: p.categoria.lower() == categoria.lower(), self.productos))

    def buscar_por_precio(self, minimo, maximo):
        return [p for p in self.productos if minimo <= p.precio <= maximo]

    def alerta_stock_bajo(self, limite=5):
        return [p for p in self.productos if p.stock <= limite]

    def reporte_inventario(self):
        return [(p.nombre, p.categoria, p.precio, p.stock, p.valor_total()) for p in self.productos]

    def valor_total_inventario(self):
        return sum(p.valor_total() for p in self.productos)


# ========== EJEMPLO DE USO ==========

inv = Inventario()

inv.agregar_producto(Producto("Laptop", "Tecnología", 2500, 10))
inv.agregar_producto(Producto("Mouse", "Tecnología", 40, 3))
inv.agregar_producto(Producto("Silla Gamer", "Muebles", 350, 7))

inv.actualizar_stock("Mouse", 5)
inv.eliminar_producto("Silla Gamer")

print("Búsqueda por nombre:", [p.nombre for p in inv.buscar_por_nombre("lap")])
print("Búsqueda por categoría:", [p.nombre for p in inv.buscar_por_categoria("Tecnología")])
print("Productos en rango:", [p.nombre for p in inv.buscar_por_precio(30, 500)])
print("Stock bajo:", [p.nombre for p in inv.alerta_stock_bajo()])
print("Reporte:", inv.reporte_inventario())
print("Valor total inventario:", inv.valor_total_inventario())
