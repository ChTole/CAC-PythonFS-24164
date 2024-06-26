# Clases que corresponden a entidades en la BBDD
from base_db.config_db import conexion as con
from base_db.dml import Tabla
from auxiliares.cifrado import encriptar

        
class Curso(Tabla):
    
    tabla = 'curso'
    conexion = con
    campos = ('id', 'tema_id', 'fecha_inicio', 'fecha_cierre', 'docente_id', 'cupo')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)
        
class Docente(Tabla):
    
    tabla = 'docente'
    conexion = con
    campos = ('id', 'nombre', 'apellido', 'cuit')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)
        
class Tema(Tabla):
    
    tabla = 'tema'
    conexion = con
    campos = ('id', 'tema', 'nivel_id', 'descripcion')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)
        
class Nivel(Tabla):
    
    tabla = 'nivel'
    conexion = con
    campos = ('id', 'nivel')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)

class Imagen(Tabla):
    
    tabla = 'imagen'
    conexion = con
    campos = ('id', 'tema_id', 'url_img', 'texto_alt')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)
        
class Estudiante(Tabla):
    
    tabla = 'estudiante'
    conexion = con
    campos = ('id', 'id_cuenta','nombre', 'apellido', 'doc_identidad', 'educacion')
    
    def __init__(self, *args, de_bbdd=False):
        super().crear(args, de_bbdd)
        
class Cuenta(Tabla):
    
    tabla = 'cuenta'
    conexion = con
    campos = ('id', 'correo', 'clave')
    
    def __init__(self, *args, de_bbdd=False):
        
        if not de_bbdd:
            cuenta = []
            cuenta.append(args[0])
            cuenta.append(encriptar(args[1]))
            super().crear(tuple(cuenta), de_bbdd)
        else:
            super().crear(args, de_bbdd)