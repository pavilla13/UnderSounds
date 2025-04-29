from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOAlbum(ABC):

    @abstractmethod
    def get_albumes(self):
        pass
    
    @abstractmethod
    def add_album(self, album_dto):
        pass
    
    @abstractmethod
    def update_album(self, album_dto):
        pass