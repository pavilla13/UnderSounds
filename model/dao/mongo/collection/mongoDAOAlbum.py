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
                album.id = doc.get('id')
                album.artist = doc.get('artist')
                album.name = doc.get('name')
                album.genre = doc.get('genre')
                album.description = doc.get('description')
                album.image = doc.get('image')
                album.url = doc.get('url')
                album.valoracion = doc.get('valoracion')
                albumes.append(album)
            return albumes
        except Exception as e:
            print(f"Error getting albums: {e}")
            return []