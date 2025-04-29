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
                album = AlbumDTO(doc.get('id'),
                                  doc.get('name'), 
                                  doc.get('artist'), 
                                  doc.get('genre'), 
                                  doc.get('description'), 
                                  doc.get('image'), 
                                  doc.get('url'),
                                  doc.get('valoracion'))
                albumes.append(album)
            return albumes
        except Exception as e:
            print(f"Error getting albums: {e}")
            return []
        
    def add_album(self, album_dto: AlbumDTO):
        return self.collection.insert_one(album_dto.albumdto_to_dict())
    
    def update_album(self,album_dto: AlbumDTO):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == album_dto.get_id():
                _id = doc.get('_id')
                return self.collection.update_one({"_id": _id}, 
                                          {"$set": album_dto.albumdto_to_dict()})
                
    def delete_album(self,id: int):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == id:
                _id = doc.get('_id')
                return self.collection.delete_one({"_id": _id})