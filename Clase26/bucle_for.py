# - Estructura repetitiva determinada

# for ... in
# for variable_control in objeto_iterable:

for valor in range(5): # 0, 1, 2, 3, 4
    print(f"La variable de control vale: {valor}")
    
cadena = "Comisión 24164"
#         0123456...
print(cadena[2])
print(cadena[2:6]) # slicing
print(cadena[2:6:2]) # slicing - desde:hasta(exc):paso

for letra in cadena:
    print(f"Letra: {letra} - clase: {type(letra)}")
    
# Tarea: implementar else, break y continue