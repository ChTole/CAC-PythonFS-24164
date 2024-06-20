from flask import Flask
from flask import jsonify
# from flask import Flask, jsonify

from componentes.datos import obtener_datos

app = Flask(__name__)

# Vista
@app.route('/') # http://127.0.0.1:5000
def inicio():
    # return "Bienvenid@s Comisión 24164 a Flask!"
    return "<h1>Bienvenid@s Comisión 24164 a Flask!</h1>"

@app.route('/api/test') # http://127.0.0.1:5000/api/test
def mostrar_datos():
    return jsonify(obtener_datos())

if __name__ == '__main__':
    app.run()