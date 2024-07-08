# Propiedades del lenguaje
# - Tipado dinámido
# - Alto nivel
# - Interpretado
# - POO --> TODO ES UN OBJETO

print("Repaso!")

# Tipos de datos simples: 
# str - bool - float - int
# Colecciones:
# list - tuple - dict
# Orden - Mutabilidad - Heterogeneidad

# Valores y referencias
mi_lista = [1, 2, 3, ["a", "b"]]
lista_copiada = mi_lista # referencia

########################################
# Copia profunda
import copy
la_copia = copy.deepcopy(mi_lista)
########################################

otra_lista = mi_lista.copy()
print(otra_lista is mi_lista)
print(otra_lista)

mi_lista[3].append("c")
print(mi_lista is lista_copiada) # identidad
print(mi_lista)
print(lista_copiada)

print(otra_lista)
print(la_copia)
