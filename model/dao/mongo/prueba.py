from pymongo import MongoClient

# 1. Conectar al servidor MongoDB (ajusta la URI según tu configuración)
client = MongoClient("mongodb+srv://palonsov:xEkhXFmK7SaCzqbe@cluster0.fpq1ac3.mongodb.net/undersounds")

# 2. Seleccionar la base de datos y la colección
db = client["undersounds"]
coleccion = db["USUARIO"]

# 3. Realizar una consulta; en este caso se obtienen todos los documentos
cursor = coleccion.find({})

# 4. Iterar sobre el cursor para procesar cada documento
for documento in cursor:
    print(documento)

