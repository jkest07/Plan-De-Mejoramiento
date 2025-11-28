# ===== PASO 1: DEFINICIÓN DE LA CLASE =====
class Persona: # 'class' define una nueva clase, 'Persona' es el nombre (siempre en mayúscula)
    """
    Clase que representa a una persona con atributos básicos y métodos de interacción.
    Esta es una docstring - documenta qué hace la clase.
    """

# ===== PASO 2: MÉTODO CONSTRUCTOR =====
    def __init__(self, nombre, edad, email="sin_email@ejemplo.com"):
        """
        Constructor: se ejecuta automáticamente al crear un objeto.
        - self: referencia al objeto que se está creando
        - nombre, edad: parámetros obligatorios
        - email: parámetro opcional con valor por defecto
        """
        # Validación de datos (buena práctica)
        if not isinstance(nombre, str) or len(nombre.strip()) == 0:
            raise ValueError("El nombre debe ser un texto no vacío")
        if not isinstance(edad, int) or edad < 0:
            raise ValueError("La edad debe ser un número entero positivo")
    
        # Asignación de atributos de instancia
        self.nombre = nombre.strip().title() # Limpia y capitaliza el nombre
        self.edad = edad
        self.email = email.lower() # Convierte email a minúsculas
        self._activo = True # Atributo "protegido" (convención con _)
        self.__id_interno = id(self) # Atributo "privado" (convención con __)
    
    # ===== PASO 3: MÉTODOS DE INSTANCIA =====
    def saludar(self):
        """Método simple que hace que la persona salude."""
        return f"¡Hola! Mi nombre es {self.nombre} y tengo {self.edad} años."
    def cumplir_años(self):
        """Método que incrementa la edad en 1."""
        self.edad += 1
        return f"¡Feliz cumpleaños {self.nombre}! Ahora tienes {self.edad} años."
    def cambiar_email(self, nuevo_email):
        """Método para cambiar el email con validación."""
        if "@" not in nuevo_email or "." not in nuevo_email:
            raise ValueError("Email inválido")
        self.email = nuevo_email.lower()
        return f"Email actualizado a: {self.email}"
    
    # ===== PASO 4: MÉTODOS ESPECIALES (DUNDER METHODS) =====
    def __str__(self):
        """Define cómo se ve el objeto cuando usas print()."""
        return f"Persona(nombre='{self.nombre}', edad={self.edad})"
    def __repr__(self):
        """Representación técnica del objeto para desarrolladores."""
        return f"Persona('{self.nombre}', {self.edad}, '{self.email}')"
    def __eq__(self, otra_persona):
        """Define cuándo dos personas son iguales (mismo nombre y edad)."""
        if not isinstance(otra_persona, Persona):
            return False
        return self.nombre == otra_persona.nombre and self.edad == otra_persona.edad
    def __lt__(self, otra_persona):
        """Define el operador 'menor que' para ordenar por edad."""
        return self.edad < otra_persona.edad

    # ===== PASO 5: PROPERTIES (GETTERS Y SETTERS) =====
    @property
    def es_mayor_edad(self):
        """Property que calcula si es mayor de edad automáticamente."""
        return self.edad >= 18

    @property
    def activo(self):
        """Getter para el atributo protegido _activo."""
        return self._activo

    @activo.setter
    def activo(self, valor):
        """Setter con validación para el atributo activo."""
        if not isinstance(valor, bool):
            raise ValueError("El estado activo debe ser True o False")
        self._activo = valor
    
    # ===== PASO 6: MÉTODOS DE CLASE Y ESTÁTICOS =====
    @classmethod
    def desde_string(cls, datos_string):
        """Método de clase: crea una Persona desde un string 'Nombre,Edad,Email'."""
        try:
            nombre, edad, email = datos_string.split(',')
            return cls(nombre.strip(), int(edad.strip()), email.strip())
        except ValueError:
            raise ValueError("Formato inválido. Use: 'Nombre,Edad,Email'")

    @staticmethod
    def es_nombre_valido(nombre):
        """Método estático: valida un nombre sin necesidad de crear un objeto."""
        return isinstance(nombre, str) and len(nombre.strip()) > 0 and nombre.strip().isalpha()
    

    # ===== ARCHIVO: persona.py =====
# [Pega aquí el código de la tarjeta anterior]
# ===== EJEMPLOS DE USO =====
if __name__ == "__main__":
    print("=== CREANDO PERSONAS ===")

# Ejemplo 1: Creación básica
persona1 = Persona("juan pérez", 25, "juan@email.com")
print(f"Persona creada: {persona1}")
print(f"¿Es mayor de edad? {persona1.es_mayor_edad}")

# Ejemplo 2: Usando métodos
print(f"\n{persona1.saludar()}")
print(persona1.cumplir_años())

# Ejemplo 3: Creación desde string
persona2 = Persona.desde_string("María García,30,maria@email.com")
print(f"Desde string: {persona2}")

# Ejemplo 4: Comparaciones
persona3 = Persona("Juan Pérez", 26) # Mismo nombre, diferente edad
print(f"\n¿Son iguales persona1 y persona3? {persona1 == persona3}")
print(f"¿persona1 es menor que persona2? {persona1 < persona2}")

# Ejemplo 5: Lista de personas y ordenamiento
personas = [persona1, persona2, persona3]
personas_ordenadas = sorted(personas) # Usa __lt__ automáticamente
print(f"\nPersonas ordenadas por edad:")
for p in personas_ordenadas:
    print(f" - {p}")

# Ejemplo 6: Validación de nombres
nombres_test = ["Ana", "123", "", "José María"]
for nombre in nombres_test:
    valido = Persona.es_nombre_valido(nombre)
    print(f"¿'{nombre}' es válido? {valido}")

# Ejemplo 7: Manejo de errores
try:
    persona_error = Persona("", -5) # Esto causará error
except ValueError as e:
    print(f"\nError capturado: {e}")

# Ejemplo 8: Properties en acción
persona1.activo = False
print(f"\n¿Persona1 está activa? {persona1.activo}")    
