from abc import ABC, abstractmethod
from typing import List, Optional

class InterfaceDAOSello(ABC):

    @abstractmethod
    def get_sellos(self):
        pass
    
    @abstractmethod
    def add_sello(self, sello_dto):
        pass
    
    @abstractmethod
    def update_sello(self, sello_dto):
        pass