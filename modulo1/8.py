def validar_email(email):
    if "@" in email and "." in email:
        return True
    return False

def calcular_descuento(precio, descuento=10):
    precio_final = precio - (precio * descuento / 100)
    return precio_final

def calcular_imc(peso, altura):
    imc = peso / (altura ** 2)
    if imc < 18.5:
        return imc, "Bajo peso"
    elif imc < 25:
        return imc, "Peso normal"
    else:
        return imc, "Sobrepeso"
    
print("=== SISTEMA DE FUNCIONES ===")

# Validar email
email = "ana@gmail.com"
if validar_email(email):
    print(f"Email {email} es válido")

# Calcular precio con descuento
precio = calcular_descuento(100, 15)
print(f"Precio final: ${precio}")

# Calcular IMC
imc, categoria = calcular_imc(70, 1.75)
print(f"IMC: {imc:.1f} - {categoria}")