class Tabla:
    
    # Constructor
    def __init__(self, n_tabla, n_campos, n_conexion):
        self.tabla = n_tabla
        self.campos = n_campos
        self.conexion = n_conexion
            
    # *** CRUD ***
    # Creador/"Constructor" de instancias de subclase
    def crear(self, valores):
       for campo, valor in zip(self.campos, valores):
           setattr(self, campo, valor)
    
    def guardar_db(self):
        pass
    
    # Lectura
    @classmethod 
    def obtener(cls):
        consulta = f"SELECT * FROM {cls.tabla}"
        return cls.__conectar(consulta)
    
    # Modificación
    @classmethod 
    def actualizar(cls):
        pass
    
    # Eliminación
    @classmethod 
    def eliminar(cls):
        pass
    
    # *** Método común en CRUD (encapsulado) ***
    @classmethod
    def __conectar(cls, consulta):
        
        try:
            cursor = cls.conexion.cursor()
        except Exception as e:
            cls.conexion.connect()
            cursor = cls.conexion.cursor()
        
        cursor.execute(consulta)
        datos = cursor.fetchall()
        cls.conexion.close()
        
        # lista por comprehensión
        resultado = [cls(registro) for registro in datos]
        
        return resultado