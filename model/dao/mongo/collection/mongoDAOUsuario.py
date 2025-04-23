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
                usuario.nickname = doc.get('nickname')
                usuario.correo = doc.get('correo')
                usuario.country = doc.get('country')
                usuario.date = doc.get('date')
                usuario.name = doc.get('name')
                usuario.password = doc.get('password')
                usuario.userType = doc.get('userType')
               
                usuarios.append(usuario)
            return usuarios
        except Exception as e:
            print(f"Error getting users: {e}")
            return []