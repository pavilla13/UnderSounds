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
                cancion.set_idCancion(doc.get('idCancion'))
                cancion.set_nombreCancion(doc.get('nombreCancion'))
                cancion.set_idAlbum(doc.get('idAlbum'))
                cancion.set_idArtista(doc.get('idArtista'))
                cancion.set_idGenero(doc.get('idGenero'))
                cancion.set_url(doc.get('url'))
                #cancion.set_price(doc.get('price'))
                #cancion.set_rating(doc.get('rating'))
                #cancion.set_release(doc.get('release'))
                canciones.append(cancion)
            return canciones
        except Exception as e:
            print(f"Error getting songs: {e}")
            return []