# Estructuras de control de flujo
# - Condicionales
edad = 5

if edad >= 18: 
    print("Sos mayor de edad.") # bloque indentado (4 espacios por convención)
    
print("Continúa mi algoritmo.")

edad = input("Ingrese su edad: ")

# Ambos casos == MALA PRACTICA  --> Mas info PEP8
# if edad.isdigit() == True: # ASI NO!
# if edad.isdigit() is True: # ASI MENOS! (identidad)
if edad.isdigit() and int(edad) in range(122): # range(122) = 0, 1, 2 ... 121 
    # bloque por V
    if int(edad) >= 18:
        print("Sos mayor de edad.")
    else:
        print("Sos menor de edad.")
        
else:
    print("Dato inválido para edad.")
        
print("Continúa mi algoritmo.")

edad = input("Ingrese su edad otra vez, por favor: ")

if edad.isdigit() and int(edad) in range(18, 122): # 18, 19, 20 ... 121
    print("Sos mayor de edad.")
elif edad.isdigit() and int(edad) in range(1, 18):  # 1, 2, 3 ... 17
    print("Sos menor de edad.")
else:
    print("Dato inválido.")
    
# range
nros_pares = range(4, 14, 2) # desde, hasta -excluido-, paso --> 4, 6, 8, 10, 12

# - Repetitiva indeterminada
# - Repetitiva determinada