print("hola mundo!")

# Propiedades del lenguaje:
# - Interpretado
# - Alto nivel
# - Tipado dinámino
# - Fuertemente tipado

# Tipos de datos - "simples"
# float - decimal
num_decimal = 3.14

print(num_decimal, type(num_decimal))

# int - enteros
num_entero = -8
print(num_entero, type(num_entero))

# print("2" + 2) # TypeError
print("Comisión" + " 24164")
print("Comisión " * 4)
print("a" > "A")

mi_booleano = True
otro_booleano = False

# bool - Booleanos --> True or False
print(mi_booleano, type(mi_booleano))
print(otro_booleano, type(otro_booleano))

print(5 + True)
print(5 * False)
print(5 / False) # ZeroDivisionError