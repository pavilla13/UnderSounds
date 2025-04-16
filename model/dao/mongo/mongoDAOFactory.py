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

    def get_cancion_dao(self):
        collection = self.db["canciones"]
        return MongoDAOCancion(collection)

    def get_album_dao(self):
        collection = self.db["albumes"]
        return MongoDAOAlbum(collection)

    def get_artista_dao(self):
        collection = self.db["artistas"]
        return MongoDAOArtista(collection)

    def get_usuario_dao(self):
        collection = self.db["usuarios"]
        return MongoDAOUsuario(collection)

    def get_sello_dao(self):
        collection = self.db["sellos"]
        return MongoDAOSello(collection)

    def get_producto_dao(self):
        collection = self.db["productos"]
        return MongoDAOProducto(collection)

    def get_genero_dao(self):
        collection = self.db["generos"]
        return MongoDAOGenero(collection)

    def get_amigo_dao(self):
        collection = self.db["amigos"]
        return MongoDAOAmigo(collection)