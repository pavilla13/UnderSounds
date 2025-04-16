from ...factory.daoFactoryInterface import InterfaceDAOFactory
from pymongo import MongoClient
from .collection.mongoDAOCancion import MongoDAOCancion  

uri = "mongodb+srv://palonsov:xEkhXFmK7SaCzqbe@cluster0.fpq1ac3.mongodb.net/undersounds"

client = MongoClient(uri)

class MongoDAOFactory(InterfaceDAOFactory):

    def __init__(self):
        #Código para la conexión con MongoDB
        try:
            self.db = client.get_database()
            print("Connection to Firebase Firestore initialized successfully.")
        except Exception as e:
            print("Error in connecting with db")
            print(e)

    def getSongDao(self):
        collection = self.db.unsersounds.CANCION
        return MongoDAOCancion(collection)
