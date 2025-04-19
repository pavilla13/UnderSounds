from ....dto.albumDTO import AlbumDTO
from ...interfaceDAOAlbum import InterfaceDAOAlbum
from typing import List

class MongoDAOAlbum(InterfaceDAOAlbum):

    def __init__(self, collection):
        self.collection = collection
    
    def get_albumes(self) -> List[AlbumDTO]:
        try:
            albumes = []
            results = self.collection.find({})
            for doc in results:
                album = AlbumDTO()
                album.id = doc.get('_id')
                album.title = doc.get('title')
                album.artist = doc.get('artist')
                album.release_date = doc.get('release_date')
                album.label = doc.get('label')
                album.genre = doc.get('genre')
                album.rating = doc.get('rating')
                album.price = doc.get('price')
                # Aquí podrías cargar las canciones si están embebidas o hacer una consulta separada
                albumes.append(album)
            return albumes
        except Exception as e:
            print(f"Error getting albums: {e}")
            return []