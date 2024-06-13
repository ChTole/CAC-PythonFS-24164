from modelos import Docente

# docente = Docente("Juan", "Perez", "80123456780")
# otro_docente = Docente("John", "Doe", "70876543210")
otro_docente = Docente("Chris", "Tole", "70876543210")

# docente.guardar_db()
otro_docente.guardar_db()


# print(docente)
# print(type(docente))
# print(docente.tabla)
# print(docente.campos)
# print(docente.nombre)
# print(docente.saludar())
# print('*' * 30)
# print(otro_docente.tabla)
# print(otro_docente.campos)
# print(otro_docente.nombre)
# print(otro_docente.saludar())
# print('*' * 30)
# print(dir(docente))
# print(Docente.__mro__)

docente = Docente.obtener_docente(2)
print(docente)
print(type(docente))
print(docente.__dict__)