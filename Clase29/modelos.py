# Clases

import config_db

class Tabla: # superclase --> 
    pass

# class Docente(Tabla): 

class Docente: # notación PascalCase para el nombre de la clase
    # Atributos de clase
    # comunes a todas las instancias
    tabla = 'docente'
    campos = ('id', 'nombre', 'apellido', 'cuit')
    conexion = config_db.conexion
    
    # Método constructor (o incializador)
    def __init__(self, *args, id=None):
        # Atributos de la instacia
        # self.nombre = nombre
        # self.apellido = apellido
        # self.cuit = cuit
        if id:
            for campo, valor in zip(self.campos, args[0]):
                setattr(self, campo, valor) # self.campo = valor
        else:
            for campo, valor in zip(self.campos[1:], args):
                setattr(self, campo, valor) # self.campo = valor
            
                
    
    def saludar(self):
        return f"Hola, soy {self.nombre}!"
    
    def guardar_db(self):
        self.conexion.connect()
        cursor = self.conexion.cursor()
        consulta = f"INSERT INTO {self.tabla} {str(self.campos[1:]).replace("'", "`")} VALUES (%s, %s, %s);"
        datos = (self.nombre, self.apellido, self.cuit)
        cursor.execute(consulta, datos)
        self.conexion.commit()
        self.conexion.close()
        
    def modificar():
        pass
        
    def eliminar():
        pass
    
    @classmethod
    def obtener_todos(cls):
        f"SELECT * FROM {cls.tabla}"
        pass
    
    @classmethod
    def obtener_docente(cls, id):
        cls.conexion.connect()
        cursor = cls.conexion.cursor()
        consulta = f"SELECT * FROM {cls.tabla} WHERE id = %s;"
        datos = (id,)
        cursor.execute(consulta, datos)
        datos = cursor.fetchone()
        cls.conexion.close()
        # return datos # retorné tupla
        return Docente(datos, id=id)
    

