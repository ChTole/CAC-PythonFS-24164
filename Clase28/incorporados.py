# - Módulos built-in
# https://docs.python.org/es/3/py-modindex.html
import os
from datetime import datetime as dt


hoy = dt.today()

os.system('cls' if os.name == 'nt' else 'clear')
print(hoy)


