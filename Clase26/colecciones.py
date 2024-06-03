# Colecciones
# - Listas (array)
# - Tuplas (parecido al array)
# - Diccionarios (JSON - casi object)
# - Sets y frozensets (conjuntos)

# Listas - propiedades
mi_lista = ["hola", True, 24164]
print(mi_lista)

# Son heterogéneas --> cualquier objeto
print(mi_lista[2]) # aplica el "slicing" como en las cadenas
# Son ordenadas --> tienen índices

# Mutabilidad --> son mutables
mi_lista[1] = False
print(mi_lista)

mi_lista.append(["a", "b"]) # agrego al final
print(mi_lista)

# Tuplas
# Son ordenadas, heterogéneas e INMUTABLES

# dos formas de crear una tupla
mi_tupla = ("a", 12, [1, 2, 3])
otra_tupla = True, False, 3.14
print(mi_tupla)
print(otra_tupla)

# mi_tupla.append("cadena") # AttributeError: 'tuple' object has no attribute 'append'

print(mi_tupla[2])

mi_tupla[2].append("Hasta el miércoles!")
print(mi_tupla)

print(mi_tupla[2][1])
# print(mi_tupla[2][10]) # IndexError: list index out of range

print(mi_tupla[2][3][9:])