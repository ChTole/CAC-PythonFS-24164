import mysql.connector

config_dev = {
    'user': 'root', 
    'password': '',
    'host': '127.0.0.1',
    'database':'edtech2024'
}

config_prod = {} # proximamente, despliegue

conexion = mysql.connector.connect(**config_dev)