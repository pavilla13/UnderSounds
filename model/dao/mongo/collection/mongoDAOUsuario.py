from ..dto.usuarioDTO import UsuarioDTO
from ...interfaceDAOUsuario import InterfaceDAOUsuario

class MongoDAOUsuario(InterfaceDAOUsuario):

    def __init__(self, collection):
        self.collection = collection
    
    def get_usuarios(self) -> List[UsuarioDTO]:
        try:
            usuarios = []
            results = self.collection.find({})
            for doc in results:
                usuario = UsuarioDTO()
                usuario.id = doc.get('_id')
                usuario.username = doc.get('username')
                usuario.email = doc.get('email')
                usuario.password = doc.get('password')  # En producción esto debería estar hasheado
                usuario.friends = doc.get('friends', [])
                usuario.favorite_songs = doc.get('favorite_songs', [])
                usuario.favorite_albums = doc.get('favorite_albums', [])
                usuario.purchases = doc.get('purchases', [])
                usuarios.append(usuario)
            return usuarios
        except Exception as e:
            print(f"Error getting users: {e}")
            return []