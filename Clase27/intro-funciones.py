# Funciones
# Respetar el orden de los tiempos:
# 1° - Definición
# 2° - Invocación

def saludar():
    # Las variables creadas dentro de la función son de ámbito local
    nombre = "Comisión 24164"
    saludo = f"Hola {nombre}"
    print(saludo)
    
saludar()

# Ámbitos
# print(nombre) # NameError: name 'nombre' is not defined


# Diferencia con JS
# {
#     ámbito
#   {
#       otro ámbito
#   }    
# }

def retornarSaludo(nombre):
    saludo = f"Hola {nombre}"
    return saludo

print(retornarSaludo("Christian"))