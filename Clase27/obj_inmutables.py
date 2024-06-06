# String

cadena = "Python"
print(cadena)

print(cadena[1])

# cadena[1] = "i" # TypeError: 'str' object does not support item assignment
# => las cadenas son inmutables

cadena = cadena[0] + "i" + cadena[2:] # reasignación -> tipado dinámico

print(cadena)
print(cadena.upper())
print(cadena)

nro = 5
print(nro)

nro += 1 # nro = nro + 1
print(nro)