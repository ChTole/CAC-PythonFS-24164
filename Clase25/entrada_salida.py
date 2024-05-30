# Entrada y salida de datos por consola
print("Soy una cadena", -3.14, True)

# input() # esperando Enter
# input("Presione Enter para finalizar.") # agrego prompt
# dato = input("Ingrese un dato: ") # SIEMPRE DEVUELVE UN STR!!!
# print("Se ingresó: ", dato, " y es ", type(dato))
num_1 = input("Ingrese un número: ")
num_2 = input("Ingrese otro número: ")
producto = float(num_1) * float(num_2) # "casteo" los datos
print("El producto es: ", producto)

