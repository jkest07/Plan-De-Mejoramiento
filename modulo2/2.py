import random
import datetime
from decimal import Decimal, ROUND_HALF_UP


class CuentaBancaria:
    """
    Clase que representa una cuenta bancaria con encapsulación completa.
    Demuestra protección de datos, validaciones y control de acceso.
    """

    # ===== ATRIBUTO DE CLASE =====
    _contador_cuentas = 0  # Contador para generar números únicos

    def __init__(self, titular, saldo_inicial=0, tipo_cuenta="AHORROS"):
        """
        Constructor de la cuenta bancaria.

        Args:
            titular (str): Nombre del propietario de la cuenta.
            saldo_inicial (float): Saldo inicial (por defecto 0).
            tipo_cuenta (str): Tipo de cuenta (AHORROS, CORRIENTE, etc.).
        """

        # ===== VALIDACIONES INICIALES =====
        if not isinstance(titular, str) or len(titular.strip()) == 0:
            raise ValueError("El titular debe ser un texto no vacío")

        if not isinstance(saldo_inicial, (int, float)) or saldo_inicial < 0:
            raise ValueError("El saldo inicial debe ser un número positivo")

        # ===== ATRIBUTOS PÚBLICOS =====
        self.titular = titular.strip().title()
        self.tipo_cuenta = tipo_cuenta.upper()
        self.fecha_apertura = datetime.datetime.now()
        self.activa = True

        # ===== ATRIBUTOS PRIVADOS =====
        self.__saldo = Decimal(str(saldo_inicial)).quantize(
            Decimal('0.01'), rounding=ROUND_HALF_UP
        )
        self.__numero_cuenta = self.__generar_numero_cuenta()
        self.__historial = []
        self.__pin = None

        # ===== INCREMENTAR CONTADOR DE CLASE =====
        CuentaBancaria._contador_cuentas += 1

        # ===== REGISTRAR APERTURA =====
        if saldo_inicial > 0:
            self.__registrar_transaccion(
                "DEPOSITO_INICIAL", saldo_inicial, "Apertura de cuenta"
            )

    # ==================================================
    # MÉTODOS PRIVADOS (AUXILIARES)
    # ==================================================

    def __generar_numero_cuenta(self):
        """Genera un número de cuenta único."""
        prefijo = "ACC"
        numero = str(random.randint(100000, 999999))
        sufijo = str(CuentaBancaria._contador_cuentas).zfill(4)
        return f"{prefijo}-{numero}-{sufijo}"

    def __validar_monto(self, monto):
        """Valida que el monto sea válido para transacciones."""
        if not isinstance(monto, (int, float, Decimal)):
            raise TypeError("El monto debe ser un número")

        if monto <= 0:
            raise ValueError("El monto debe ser mayor a cero")

        if monto > 1_000_000:
            raise ValueError("El monto excede el límite de transacción ($1,000,000)")

        return Decimal(str(monto)).quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)

    def __validar_cuenta_activa(self):
        """Verifica que la cuenta esté activa."""
        if not self.activa:
            raise RuntimeError("La cuenta está inactiva. No se pueden realizar transacciones.")

    def __registrar_transaccion(self, tipo, monto, descripcion=""):
        """Registra una transacción en el historial."""
        transaccion = {
            'fecha': datetime.datetime.now(),
            'tipo': tipo,
            'monto': float(monto),
            'saldo_anterior': float(self.__saldo),
            'saldo_nuevo': float(self.__saldo + Decimal(str(monto))) if tipo == "DEPOSITO" else float(self.__saldo),
            'descripcion': descripcion,
            'id_transaccion': len(self.__historial) + 1
        }
        self.__historial.append(transaccion)

    # ==================================================
    # MÉTODOS PÚBLICOS PRINCIPALES
    # ==================================================

    def depositar(self, monto, descripcion="Depósito"):
        """
        Deposita dinero en la cuenta.

        Args:
            monto (float): Cantidad a depositar.
            descripcion (str): Descripción de la transacción.

        Returns:
            dict: Información de la transacción realizada.
        """
        self.__validar_cuenta_activa()
        monto_validado = self.__validar_monto(monto)

        saldo_anterior = self.__saldo
        self.__saldo += monto_validado
        self.__registrar_transaccion("DEPOSITO", monto_validado, descripcion)

        return {
            'exitoso': True,
            'tipo': 'DEPOSITO',
            'monto': float(monto_validado),
            'saldo_anterior': float(saldo_anterior),
            'saldo_nuevo': float(self.__saldo),
            'fecha': datetime.datetime.now(),
            'mensaje': f"Depósito exitoso. Nuevo saldo: ${self.__saldo:,.2f}"
        }

    def retirar(self, monto, descripcion="Retiro"):
        """
        Retira dinero de la cuenta.

        Args:
            monto (float): Cantidad a retirar.
            descripcion (str): Descripción del retiro.

        Returns:
            dict: Información de la transacción realizada.
        """
        self.__validar_cuenta_activa()
        monto_validado = self.__validar_monto(monto)

        # Verificar fondos suficientes
        if monto_validado > self.__saldo:
            raise ValueError(
                f"Fondos insuficientes. Saldo disponible: ${self.__saldo:,.2f}"
            )

        saldo_anterior = self.__saldo
        self.__saldo -= monto_validado
        self.__registrar_transaccion("RETIRO", monto_validado, descripcion)

        return {
            'exitoso': True,
            'tipo': 'RETIRO',
            'monto': float(monto_validado),
            'saldo_anterior': float(saldo_anterior),
            'saldo_nuevo': float(self.__saldo),
            'fecha': datetime.datetime.now(),
            'mensaje': f"Retiro exitoso. Nuevo saldo: ${self.__saldo:,.2f}"
        }
