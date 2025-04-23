from ...factory.daoFactoryInterface import InterfaceDAOFactory
from pymongo import MongoClient
from .collection.mongoDAOCancion import MongoDAOCancion
from .collection.mongoDAOAlbum import MongoDAOAlbum
from .collection.mongoDAOArtista import MongoDAOArtista
from .collection.mongoDAOUsuario import MongoDAOUsuario
from .collection.mongoDAOSello import MongoDAOSello
from .collection.mongoDAOProducto import MongoDAOProducto
from .collection.mongoDAOGenero import MongoDAOGenero
from .collection.mongoDAOAmigo import MongoDAOAmigo
uri = "mongodb+srv://palonsov:xEkhXFmK7SaCzqbe@cluster0.fpq1ac3.mongodb.net/undersounds"

client = MongoClient(uri)

class MongoDAOFactory(InterfaceDAOFactory):

    def __init__(self):
        try:
            self.db = client["undersounds"]  # Especificamos el nombre de la base de datos
            print("Connection to MongoDB initialized successfully.")
        except Exception as e:
            print("Error in connecting with MongoDB")
            print(e)

    def get_canciones(self):
        collection = self.db["CANCION"]
        return MongoDAOCancion(collection)

    def get_albumes(self):
        collection = self.db["ALBUM"]
        return MongoDAOAlbum(collection)

    def get_artistas(self):
        collection = self.db["ARTISTA"]
        return MongoDAOArtista(collection)

    def get_usuarios(self):
        collection = self.db["USUARIO"]
        return MongoDAOUsuario(collection)

    def get_sellos(self):
        collection = self.db["SELLO"]
        return MongoDAOSello(collection)

    def get_productos(self):
        collection = self.db["PRODUCTO"]
        return MongoDAOProducto(collection)

    def get_generos(self):
        collection = self.db["GENERO"]
        return MongoDAOGenero(collection)

    def get_amigos(self):
        collection = self.db["AMIGO"]
        return MongoDAOAmigo(collection)
