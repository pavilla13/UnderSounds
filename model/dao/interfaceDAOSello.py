from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOSello(ABC):

    @abstractmethod
    def get_sellos(self):
        pass