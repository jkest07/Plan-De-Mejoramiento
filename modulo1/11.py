from datetime import datetime, date, timedelta

ahora = datetime.now()
print(f"Ahora: {ahora}")

hoy = date.today()
print(f"Hoy: {hoy}")

ahora = datetime.now()

print(f"Español: {ahora.strftime('%d/%m/%Y')}")
print(f"ISO: {ahora.strftime('%Y-%m-%d')}")
print(f"Hora: {ahora.strftime('%H:%M:%S')}")

def calcular_edad(fecha_nacimiento):
    hoy = date.today()
    edad = hoy.year - fecha_nacimiento.year
    return edad

nacimiento = date(1990, 5, 15)
edad = calcular_edad(nacimiento)
print(f"Edad: {edad} años")

recordatorios = []
def agregar_recordatorio(mensaje, dias):
    fecha = datetime.now() + timedelta(days=dias)
    recordatorio = {
        "mensaje": mensaje,
        "fecha": fecha
    }
    recordatorios.append(recordatorio)
    print(f"Recordatorio agregado")

agregar_recordatorio("Reunión importante", 1)

import time
def medir_tiempo(funcion):
    def wrapper():
        inicio = time.time()
        resultado = funcion()
        fin = time.time()
        tiempo = fin - inicio
        print(f"Tardó {tiempo:.4f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def operacion_lenta():
    total = sum(range(1000000))
    return total

resultado = operacion_lenta()