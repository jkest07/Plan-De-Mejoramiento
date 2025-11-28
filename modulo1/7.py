# EJERCICIO 7: Sistema de contactos con diccionarios
print("SISTEMA DE GESTIÓN DE CONTACTOS")
print("=" * 40)

# Crear contacto usando diccionario
contacto1 = {
    "nombre": "María García",
    "telefono": "555-1234",
    "email": "maria@email.com",
    "edad": 28,
    "ciudad": "Madrid"
}

# Mostrar información del contacto
print("Información del contacto:")
print(f"Nombre: {contacto1['nombre']}")
print(f"Teléfono: {contacto1['telefono']}")
print(f"Email: {contacto1['email']}")
print(f"Edad: {contacto1['edad']}")
print(f"Ciudad: {contacto1['ciudad']}")

print("\n" + "-" * 40)

# Agregar nueva información
contacto1["profesion"] = "Ingeniera"
contacto1["empresa"] = "TechCorp"
print("Información agregada: profesión y empresa")

# Modificar información existente
contacto1["telefono"] = "555-5678"
print("Teléfono actualizado")

# Mostrar información actualizada
print("\nInformación actualizada:")
for clave, valor in contacto1.items():
    print(f"{clave.capitalize()}: {valor}")

print("\n" + "-" * 40)

# Crear base de datos de contactos
agenda = {
    "maria": {
    "nombre": "María García",
    "telefono": "555-1234",
    "email": "maria@email.com"
    },
    "juan": {
    "nombre": "Juan Pérez",
    "telefono": "555-5678",
    "email": "juan@email.com"
    },
    "ana": {
    "nombre": "Ana López",
    "telefono": "555-9012",
    "email": "ana@email.com"
    }
}

# Mostrar todos los contactos
print("AGENDA COMPLETA:")
for id_contacto, datos in agenda.items():
    print(f"\nID: {id_contacto}")
for campo, valor in datos.items():
    print(f" {campo.capitalize()}: {valor}")
    print("\n" + "-" * 40)

# Buscar contacto específico
buscar_id = "juan"
if buscar_id in agenda:
    contacto = agenda[buscar_id]
    print(f"Contacto encontrado:")
    print(f"Nombre: {contacto['nombre']}")
    print(f"Teléfono: {contacto['telefono']}")
else:
    print(f"Contacto '{buscar_id}' no encontrado")

# Agregar nuevo contacto
nuevo_contacto = {
    "nombre": "Carlos Ruiz",
    "telefono": "555-3456",
    "email": "carlos@email.com"
}
agenda["carlos"] = nuevo_contacto
print(f"\nNuevo contacto agregado: {nuevo_contacto['nombre']}")

# Estadísticas de la agenda
print(f"\nEstadísticas:")
print(f"Total de contactos: {len(agenda)}")
print(f"IDs disponibles: {list(agenda.keys())}")

# Ejemplo con diccionario anidado - Inventario de productos
inventario = {
    "laptop": {
    "precio": 800,
    "stock": 15,
    "categoria": "Electrónicos",
    "proveedor": "TechSupply"
    },
    "mouse": {
    "precio": 25,
    "stock": 50,
    "categoria": "Accesorios",
    "proveedor": "OfficeMax"
    }
}

print(f"\n" + "=" * 40)
print("INVENTARIO DE PRODUCTOS:")

for producto, detalles in inventario.items():
    print(f"\nProducto: {producto.upper()}")
    print(f" Precio: ${detalles['precio']}")
    print(f" Stock: {detalles['stock']} unidades")
    print(f" Categoría: {detalles['categoria']}")