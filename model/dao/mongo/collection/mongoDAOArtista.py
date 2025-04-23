from ....dto.artistaDTO import ArtistaDTO
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
                artista.id = doc.get('id')
                artista.name = doc.get('name')
                artista.genre = doc.get('genre')
                artista.description = doc.get('description')
                artista.image = doc.get('image')
                artista.url = doc.get('url')
                artista.selloId = doc.get('selloId')
                
                artistas.append(artista)
            return artistas
        except Exception as e:
            print(f"Error getting artists: {e}")
            return []