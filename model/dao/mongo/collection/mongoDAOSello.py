from ....dto.selloDTO import SelloDTO
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
                sello = SelloDTO(doc.get('id'), doc.get('name'), doc.get('description'), doc.get('image'), doc.get('url'))
                sellos.append(sello)
            return sellos
        except Exception as e:
            print(f"Error getting record labels: {e}")
            return []
        
    def add_sello(self, sello_dto: SelloDTO):
        return self.collection.insert_one(sello_dto.sellodto_to_dict())
    
    def update_sello(self, sello_dto: SelloDTO):
        results = self.collection.find({})
        for doc in results:
            if doc.get('id') == sello_dto.get_id():
                _id = doc.get('_id')
                return self.collection.update_one({"_id": _id}, 
                                          {"$set": sello_dto.sellodto_to_dict()})