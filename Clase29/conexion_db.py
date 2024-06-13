import mysql.connector

# Establezco la conexión
cnx = mysql.connector.connect(user='root', 
                              password='',
                              host='127.0.0.1',
                              database='edtech2024')
# Generar las consultas
# cursor = cnx.cursor() # devuelve tuplas
cursor = cnx.cursor(dictionary=True) # devuelve???
consulta = "SELECT * FROM docente;" # lenguaje SQL
cursor.execute(consulta)
datos = cursor.fetchall()
print(datos)
# for dato in datos:
#     print(dato)
    # print(type(dato))

# SIEMPRE CIERRO LA CONEXIÓN!!!!
cnx.close()