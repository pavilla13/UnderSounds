from ....dto.amigoDTO import AmigoDTO
from ...interfaceDAOAmigo import InterfaceDAOAmigo
from typing import List

class MongoDAOAmigo(InterfaceDAOAmigo):

    def __init__(self, collection):
        self.collection = collection
    
    def get_amigos(self) -> List[AmigoDTO]:
        try:
            amigos = []
            results = self.collection.find({})
            for doc in results:
                amigo = AmigoDTO()
                amigo.id = doc.get('id')
                amigo.name = doc.get('name')
                amigo.description = doc.get('description')
                amigo.url = doc.get('url')
                amigos.append(amigo)
            return amigos
        except Exception as e:
            print(f"Error getting friends: {e}")
            return []
    
    def add_amigo(self, amigo_dto: AmigoDTO) -> bool:
        try:
            amigo_data = {
                'username': amigo_dto.username,
                'friendship_date': amigo_dto.friendship_date,
                'common_interests': amigo_dto.common_interests,
                'last_interaction': amigo_dto.last_interaction
            }
            result = self.collection.insert_one(amigo_data)
            return result.acknowledged
        except Exception as e:
            print(f"Error adding friend: {e}")
            return False