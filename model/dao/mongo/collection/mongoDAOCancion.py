from abc import ABC, abstractmethod
from typing import List, Optional
from ...interfaceDAOCancion import InterfaceDAOCancion
from dto.cancionDTO import SongDTO

class MongoDAOCancion(InterfaceDAOCancion):

    def __init__(self, collection):
        self.collection = collection
    
    def get_canciones(self) -> List[SongDTO]:
        try:
            canciones = []
            results = self.collection.find({})
            for doc in results:
                cancion = SongDTO()
                cancion.set_id(doc.get('_id'))
                cancion.set_title(doc.get('title'))
                cancion.set_author(doc.get('author'))
                cancion.set_album(doc.get('album'))
                cancion.set_duration(doc.get('duration'))
                cancion.set_musicgenre(doc.get('musicgenre'))
                cancion.set_price(doc.get('price'))
                cancion.set_rating(doc.get('rating'))
                cancion.set_release(doc.get('release'))
                canciones.append(cancion)
            return canciones
        except Exception as e:
            print(f"Error getting songs: {e}")
            return []