from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOUsuario(ABC):

    @abstractmethod
    def get_usuarios(self):
        pass

    @abstractmethod
    def add_usuario(self, usuario_dto):
        pass

    @abstractmethod
    def get_usuario_by_username(self, username):
        pass

    @abstractmethod
    def get_usuario_by_username_email(self, username, email):
        pass

    @abstractmethod
    def actualizar_usuario(self, user_id, nuevos_datos):
        pass
