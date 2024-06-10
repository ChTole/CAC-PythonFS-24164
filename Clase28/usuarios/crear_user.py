def validar_cadena(dato):
    
    if dato.isalpha():
        return True
    
    return False


def crear_usuario():
    nombre = input("Ingrese su nombre: ")
    
    if validar_cadena(nombre):
        print(f"Se creó usuari@: {nombre}")
    else:
        print("Dato inválido para nombre!!!")