from ..dto.GeneroDTO import GeneroDTO
from ...interfaceDAOGenero import InterfaceDAOGenero
from typing import List

class MongoDAOGenero(InterfaceDAOGenero):

    def __init__(self, collection):
        self.collection = collection
    
    def get_generos(self) -> List[GeneroDTO]:
        try:
            generos = []
            results = self.collection.find({})
            for doc in results:
                genero = GeneroDTO()
                genero.id = doc.get('_id')
                genero.name = doc.get('name')
                genero.description = doc.get('description')
                genero.related_genres = doc.get('related_genres', [])
                genero.popular_artists = doc.get('popular_artists', [])
                genero.popular_songs = doc.get('popular_songs', [])
                generos.append(genero)
            return generos
        except Exception as e:
            print(f"Error getting genres: {e}")
            return []
    
    def get_genero_by_name(self, name: str) -> Optional[GeneroDTO]:
        try:
            doc = self.collection.find_one({'name': name})
            if doc:
                genero = GeneroDTO()
                genero.id = doc.get('_id')
                genero.name = doc.get('name')
                genero.description = doc.get('description')
                genero.related_genres = doc.get('related_genres', [])
                genero.popular_artists = doc.get('popular_artists', [])
                genero.popular_songs = doc.get('popular_songs', [])
                return genero
            return None
        except Exception as e:
            print(f"Error getting genre by name: {e}")
            return None
