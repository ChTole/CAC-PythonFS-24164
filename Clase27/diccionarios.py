# Diccionarios
# Pares { clave: valor } -> JSON

dicc_vacio = {} # diccionario vacío

materias = {
    "matemáticas": [7.5, 8, 6],
    "literatura": [8, 7.5, 9]
}

print(materias["literatura"])
# print(materias[0]) # KeyError: 0

# agrego par
materias["química"] = False
print(materias)

materias["química"] = [] # => las claves son única, si existe sobreescribo el valor
print(materias)

del materias["química"]
print(materias)
# Propiedades
# - Orden --> no son ordenados
# - Mutabilidad --> Son mutables, puedo agregar pares, modificarlos y eliminarlos
# - Heterogeneidad
#       * Claves: sólo pueden objetos inmutables (tuple, str, int, float, bool)
#       * Valores: pueden ser cualquier objeto

# print(materias["geografía"]) # KeyError: 'geografía'

print(materias.get("geografía", "no existe"))

# A partir de Python 3.6 se pueden "ordenar"

print(materias.keys())
print(materias.values())
print(materias.items())


print(type(materias.keys()))

for clave in materias.keys():
    print(f"{clave} ** {materias[clave]}")
    
nro_1, nro_2 = 5, 3.14
print(nro_1)
print(nro_2)

for clave, valor in materias.items(): #  clave, valor      ("matemáticas", [...])
    print(f"{clave} ** {valor}")

for par in materias.items():
    print(f"{par[0]} ** {par[1]}")
    
print(  list(materias.values())[1]  ) # La evidencia de que se manipular con orden