from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOAmigo(ABC):

    @abstractmethod
    def get_amigos(self):
        pass