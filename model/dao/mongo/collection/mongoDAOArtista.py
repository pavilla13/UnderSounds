from dto.artistaDTO import ArtistaDTO
from ...interfaceDAOArtista import InterfaceDAOArtista
from typing import List

class MongoDAOArtista(InterfaceDAOArtista):

    def __init__(self, collection):
        self.collection = collection
    
    def get_artistas(self) -> List[ArtistaDTO]:
        try:
            artistas = []
            results = self.collection.find({})
            for doc in results:
                artista = ArtistaDTO()
                artista.id = doc.get('_id')
                artista.name = doc.get('name')
                artista.genres = doc.get('genres', [])
                artista.biography = doc.get('biography')
                artista.active_years = doc.get('active_years')
                # Los álbumes podrían cargarse aquí o en una consulta separada
                artistas.append(artista)
            return artistas
        except Exception as e:
            print(f"Error getting artists: {e}")
            return []