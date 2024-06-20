import mysql.connector

config_dev = {
    'user': 'root', 
    'password': '',
    'host': '127.0.0.1',
    'database':'edtech2024_test'
}

config_prod = {} # proximamente, despliegue

conexion = mysql.connector.connect(**config_dev)