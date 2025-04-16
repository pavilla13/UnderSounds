from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOProducto(ABC):

    @abstractmethod
    def get_productos(self):
        pass