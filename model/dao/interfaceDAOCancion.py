from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOCancion(ABC):

    @abstractmethod
    def get_canciones(self):
        pass