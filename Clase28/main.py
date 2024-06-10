# Introducción módulos
# - Módulos propios
# Fundamento y creación.
# 1ra opción
# import crear_user
# 2da opción
# from crear_user import crear_usuario
# Paquete
from usuarios.crear_user import crear_usuario
from usuarios.sesion import iniciar_sesion
# from paquete.modulo import función


opcion = ''
menu = """
** Menú **
1 - Crear usuari@
2 - Iniciar sesión
3 - Salir
"""

while opcion != "3":
    print(menu)
    opcion = input("Ingrese su opción: ")
    
    if opcion == "1":
        # print("Creación en construcción")
        # 1ra opción
        # crear_user.crear_usuario()
        # 2da opción
        crear_usuario()
    elif opcion == "2":
        # print("Logueo en construcción")
        saludo = iniciar_sesion()
        print(saludo)
    elif opcion == "3":
        print("Adiós!!!")
    else:
        print("Opción incorrecta!")