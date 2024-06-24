# Vistas para la arquitectura API REST
from flask import jsonify

from main import app
from componentes.modelos import Docente


@app.route('/api-edtech/docentes')
def mostrar_docentes():
    docentes = Docente.obtener()
    dicc_docentes = [d.__dict__ for d in docentes]
    return jsonify(dicc_docentes)
