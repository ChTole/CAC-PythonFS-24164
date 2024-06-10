# ENTORNOS VIRTUALES!!!
# - Módulos de terceros
# https://pypi.org/
import pprint

import requests

consulta = requests.get('https://jsonplaceholder.typicode.com/users')

pp = pprint.PrettyPrinter(indent=4)

print(consulta.status_code)
pp.pprint(consulta.json())