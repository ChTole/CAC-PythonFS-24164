# Excepciones
# SON PARA CONTENER POSIBLES ERRORES, NO PARA CONSTRUIR!!!
numero = input('Ingrese un número: ')

try:
    division = 1 / int(numero)
except ValueError:
    print('No ingresaste un número.')
except ZeroDivisionError:
    print('No puedo dividir por cero.')
else:
    print('¿Cuándo se ejecuta?') # Cuando se ejecutó "try"
finally:
    print('Fin de la captura de las posibles excepciones.')

print('Fin del algoritmo.')