from componentes.conexion_db import conexion


def obtener_datos():
    # Por defecto MySQL -> timeOut = 300seg.
    con = conexion
    
    try:
        print('BBDD conectada')
        cursor = con.cursor(dictionary=True)
    except Exception as e:
        print('BBDD reconectada')
        con.connect()
        cursor = con.cursor()
        
    consulta = 'SELECT * FROM test;'
    cursor.execute(consulta)
    datos = cursor.fetchall()
    con.close()
    
    return datos