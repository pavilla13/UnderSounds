from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOCancion(ABC):

    @abstractmethod
    def get_canciones(self):
        pass
    
    @abstractmethod
    def add_cancion(self, cancion_dto):
        pass
    
    @abstractmethod
    def update_cancion(self, cancion_dto):
        pass
    
    @abstractmethod
    def delete_cancion(self, id: int):
        pass