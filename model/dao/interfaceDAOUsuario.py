from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOUsuario(ABC):

    @abstractmethod
    def get_usuarios(self):
        pass