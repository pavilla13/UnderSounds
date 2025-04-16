from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOGenero(ABC):

    @abstractmethod
    def get_generos(self):
        pass