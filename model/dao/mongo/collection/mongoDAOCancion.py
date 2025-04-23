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
                cancion = SongDTO()
                cancion.set_id(doc.get('id'))
                cancion.set_title(doc.get('title'))
                cancion.set_artist(doc.get('artist'))
                cancion.set_album(doc.get('album'))
                cancion.set_genre(doc.get('genre'))
                cancion.set_duration(doc.get('duration'))
                cancion.set_url(doc.get('url'))
                cancion.set_lyrics(doc.get('lyrics'))
                canciones.append(cancion)
            return canciones
        except Exception as e:
            print(f"Error getting songs: {e}")
            return []
        
    def get_generos(self) -> List[GeneroDTO]:
        try:
            generos = []
            results = self.collection.find({})
            for doc in results:
                genero = GeneroDTO()
                genero.set_id(doc.get('id'))
                genero.set_url(doc.get('url'))
                genero.set_description(doc.get('description'))
                genero.set_image(doc.get('image'))
                genero.set_name(doc.get('name'))
                generos.append(genero)
            return generos
        except Exception as e:
            print(f"Error getting genres: {e}")
            return []