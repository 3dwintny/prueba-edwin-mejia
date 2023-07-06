import re
def calcular(operacion):
    # Validar la cadena de operaciones
    if not re.match(r'^[0-9+\-*/.]*$', operacion):
        return "Operación inválida"

    try:
        resultado = evaluar_expresion(operacion)
        return resultado
    except ZeroDivisionError:
        return "División por cero"
    except:
        return "Error al evaluar la operación"

def evaluar_expresion(expresion):
    #suma o resta
    terminos = re.split(r'([-+])', expresion)
    # Inicializar el resultado con el primer término
    resultado = evaluar_termino(terminos[0])
    # Iterar sobre los términos restantes
    for i in range(1, len(terminos), 2):
        operador = terminos[i]
        termino = evaluar_termino(terminos[i+1])

        if operador == '+':
            resultado += termino
        else:
            resultado -= termino

    return resultado

def evaluar_termino(termino):
    # para multiplicar o dividir
    factores = re.split(r'([*/])', termino)

    # Inicializar el resultado con el primer factor
    resultado = evaluar_factor(factores[0])

    # Iterar sobre los factores restantes
    for i in range(1, len(factores), 2):
        operador = factores[i]
        factor = evaluar_factor(factores[i+1])

        if operador == '*':
            resultado *= factor
        else:
            resultado /= factor

    return resultado

def evaluar_factor(factor):
    # Convertir el factor a número
    try:
        return float(factor)
    except:
        raise ValueError("Factor inválido")


# Ejemplo de uso
operacion = input("Introduce la operación: ")
resultado = calcular(operacion)
print("Resultado:", resultado)
