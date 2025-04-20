from abc import ABC, abstractmethod
from typing import List, Optional
from ...interfaceDAOCancion import InterfaceDAOCancion
from ....dto.cancionDTO import SongDTO  # Adjust the import path to where SongDTO is defined

class MongoDAOCancion(InterfaceDAOCancion):

    def __init__(self, collection):
        self.collection = collection
    
    def get_canciones(self) -> List[SongDTO]:
        try:
            canciones = []
            results = self.collection.find({})
            for doc in results:
                cancion = SongDTO()
                cancion.set_id(doc.get('id'))
                cancion.set_title(doc.get('title'))
                cancion.set_artist(doc.get('artist'))
                cancion.set_album(doc.get('album'))
                cancion.set_genre(doc.get('genre'))
                cancion.set_duration(doc.get('duration'))
                cancion.set_cover(doc.get('cover'))
                cancion.set_lyrics(doc.get('lyrics'))
                canciones.append(cancion)
            return canciones
        except Exception as e:
            print(f"Error getting songs: {e}")
            return []