# - Estructura repetitiva indeterminada
# contador = 0

# while contador < 3:
#     print("Dentro del bucle!")
#     contador += 1 # contador = contador + 1
    
# while True: # DE NINGUNA MANERA!

# Sentencias else, continue y break
cumplido = False # bandera o hipótesis
contador = 0
print("** Ingrese tres números pares positivos **")


while not cumplido:
    entrada = input("Ingrese número: ") # "5"
    
    if entrada.isdigit() and int(entrada) % 2 == 0:
        contador += 1
        print(f"contador vale {contador}")
    elif entrada == "terminar":
        break # No se ejecuta el bloque else
        
    if contador < 3:
        continue # vuelvo al principio del bucle
    else:
        cumplido = True
    
    print("testigo del final del bloque del bucle")

else: # opcional
    print("La condición se volvió 'False'")
    
print("Fin")