from abc import ABC, abstractmethod
from typing import List, Optional
from ...interfaceDAOCancion import InterfaceDAOCancion
from ....dto.cancionDTO import SongDTO  # Adjust the import path to where SongDTO is defined
from ....dto.generoDTO import GeneroDTO

class MongoDAOCancion(InterfaceDAOCancion):

    def __init__(self, collection):
        self.collection = collection
    
    def get_canciones(self) -> List[SongDTO]:
        try:
            canciones = []
            results = self.collection.find({})
            for doc in results:
                cancion = SongDTO(doc.get('id'),
                                    doc.get('title'), 
                                    doc.get('artist'), 
                                    doc.get('album'), 
                                    doc.get('genre'), 
                                    doc.get('duration'), 
                                    doc.get('url'), 
                                    doc.get('lyrics'), 
                                    doc.get('cover'),
                                    doc.get('valoracion'))
                canciones.append(cancion)
            return canciones
        except Exception as e:
            print(f"Error getting songs: {e}")
            return []
        
    def add_cancion(self, cancion_dto: SongDTO):
        return self.collection.insert_one(cancion_dto.songdto_to_dict())
    
    def update_cancion(self,cancion_dto: SongDTO):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == cancion_dto.get_id():
                _id = doc.get('_id')
                return self.collection.update_one({"_id": _id}, 
                                          {"$set": cancion_dto.songdto_to_dict()})
                
    def delete_cancion(self,id: int):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == id:
                _id = doc.get('_id')
                return self.collection.delete_one({"_id": _id})