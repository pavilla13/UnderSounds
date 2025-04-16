from ..dto.selloDTO import SelloDTO
from ...interfaceDAOSello import InterfaceDAOSello
from typing import List, Optional

class MongoDAOSello(InterfaceDAOSello):

    def __init__(self, collection):
        self.collection = collection
    
    def get_sellos(self) -> List[SelloDTO]:
        try:
            sellos = []
            results = self.collection.find({})
            for doc in results:
                sello = SelloDTO()
                sello.id = doc.get('_id')
                sello.name = doc.get('name')
                sello.foundation_year = doc.get('foundation_year')
                sello.country = doc.get('country')
                sello.artists = doc.get('artists', [])
                sello.albums = doc.get('albums', [])
                sellos.append(sello)
            return sellos
        except Exception as e:
            print(f"Error getting record labels: {e}")
            return []
    
    def get_sello_by_name(self, name: str) -> Optional[SelloDTO]:
        try:
            doc = self.collection.find_one({'name': name})
            if doc:
                sello = SelloDTO()
                sello.id = doc.get('_id')
                sello.name = doc.get('name')
                sello.foundation_year = doc.get('foundation_year')
                sello.country = doc.get('country')
                sello.artists = doc.get('artists', [])
                sello.albums = doc.get('albums', [])
                return sello
            return None
        except Exception as e:
            print(f"Error getting record label by name: {e}")
            return None
    
    def add_album_to_sello(self, sello_id: str, album_id: str) -> bool:
        try:
            result = self.collection.update_one(
                {'_id': sello_id},
                {'$addToSet': {'albums': album_id}}
            )
            return result.modified_count > 0
        except Exception as e:
            print(f"Error adding album to record label: {e}")
            return False
