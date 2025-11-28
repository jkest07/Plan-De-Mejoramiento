# EJERCICIO 6: Trabajando con listas
print("GESTIÓN DE LISTA DE TAREAS")
print("=" * 30)

# Crear lista inicial
tareas = ["Estudiar Python", "Hacer ejercicio", "Comprar víveres"]

# Mostrar lista inicial
print("Tareas iniciales:")
for i, tarea in enumerate(tareas):
    print(f"{i+1}. {tarea}")
    print("\n" + "-" * 30)

# Agregar nueva tarea
nueva_tarea = "Llamar al médico"
tareas.append(nueva_tarea)
print(f"Agregada: '{nueva_tarea}'")

# Insertar tarea en posición específica
tareas.insert(1, "Revisar emails")
print("Insertada 'Revisar emails' en posición 2")

# Mostrar lista actualizada
print("\nTareas actualizadas:")
for i, tarea in enumerate(tareas):
    print(f"{i+1}. {tarea}")
    print("\n" + "-" * 30)

# Marcar tarea como completada (eliminar)
tarea_completada = tareas.pop(0) # Elimina la primera tarea
print(f"Completada: '{tarea_completada}'")

# Cambiar una tarea existente
tareas[1] = "Hacer ejercicio en el parque"
print("Modificada tarea de ejercicio")

# Buscar una tarea específica
buscar = "Comprar víveres"
if buscar in tareas:
    posicion = tareas.index(buscar)
    print(f"'{buscar}' encontrada en posición {posicion + 1}")
else:
    print(f"'{buscar}' no encontrada")

# Mostrar lista final
print("\nTareas pendientes:")
for i, tarea in enumerate(tareas):
    print(f"{i+1}. {tarea}")
    print(f"\nTotal de tareas pendientes: {len(tareas)}")

# Operaciones adicionales con listas
numeros = [5, 2, 8, 1, 9, 3]
print(f"\nLista de números: {numeros}")
print(f"Número mayor: {max(numeros)}")
print(f"Número menor: {min(numeros)}")
print(f"Suma total: {sum(numeros)}")

# Ordenar lista
numeros.sort()
print(f"Lista ordenada: {numeros}")

# Ordenar en reversa
numeros.sort(reverse=True)
print(f"Lista en orden descendente: {numeros}")