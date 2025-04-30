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
                artista = ArtistaDTO(doc.get('id'),
                                    doc.get('name'), 
                                    doc.get('genre'), 
                                    doc.get('description'), 
                                    doc.get('image'), 
                                    doc.get('url'), 
                                    doc.get('selloId'))       
                artistas.append(artista)
            return artistas
        except Exception as e:
            print(f"Error getting artists: {e}")
            return []
        
    def add_artista(self, artista_dto: ArtistaDTO):
        return self.collection.insert_one(artista_dto.artistdto_to_dict())
    
    def delete_artista(self, id: int):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == id:
                _id = doc.get('_id')
                return self.collection.delete_one({"_id": _id})