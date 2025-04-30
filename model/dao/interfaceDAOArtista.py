from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOArtista(ABC):

    @abstractmethod
    def get_artistas(self):
        pass
    
    @abstractmethod
    def add_artista(self, artista_dto):
        pass
    
    @abstractmethod
    def delete_artista(self, artista_id):
        pass