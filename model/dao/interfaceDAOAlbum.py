from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOAlbum(ABC):

    @abstractmethod
    def get_albumes(self):
        pass