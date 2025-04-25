from ....dto.usuarioDTO import UsuarioDTO
from ...interfaceDAOUsuario import InterfaceDAOUsuario
from typing import List

class MongoDAOUsuario(InterfaceDAOUsuario):

    def __init__(self, collection):
        self.collection = collection
    
    def get_usuarios(self) -> List[UsuarioDTO]:
        try:
            usuarios = []
            results = self.collection.find({})
            for doc in results:
                usuario = UsuarioDTO()
                usuario.id = doc.get('id')
                usuario.name = doc.get('name')
                usuario.username = doc.get('uesrname')
                usuario.email = doc.get('email')
                usuario.password = doc.get('password')
                usuario.tipo_usuario = doc.get('tipo_usuario')
                usuario.birthdate = doc.get('birthdate')
                usuario.country = doc.get('country')
               
                usuarios.append(usuario)
            return usuarios
        except Exception as e:
            print(f"Error getting users: {e}")
            return []
        
    def add_usuario(self, usuario_dto):
        return self.collection.insert_one(usuario_dto.userdto_to_dict())
    
    def get_usuario_by_username(self, username):
        return self.collection.find_one({
            "$or": [{"username": username}, {"email": username}]
        })
    
    def get_usuario_by_username_email(self, username, email):
        return self.collection.find_one({
            "$or": [{"username": username}, {"email": email}]
        })
