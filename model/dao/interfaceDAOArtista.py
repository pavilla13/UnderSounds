from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOArtista(ABC):

    @abstractmethod
    def get_artistas(self):
        pass