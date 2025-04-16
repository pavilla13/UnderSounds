#from ...interfaceDAOSong import InterfaceSongDAO
#from pymongo.collection import Collection
from ...interfaceDAOCancion import InterfaceDAOCancion

class MongoDAOCancion(InterfaceDAOCancion):

    def __init__(self, collection):
        self.collection = collection
    
    def get_songs(self):
        try:
            query = list(self.collection.find({}))  # (MongoDB)

            print(query)
        except Exception as e:
            print(e)
        
        return query