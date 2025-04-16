from abc import abstractmethod, ABC

# Crea los diferentes DAO para el acceso a la información
"""
InterfaceDAOFactory es una clase abstracta que define la interfaz para las fábricas de DAO (Data Access Object).
Utiliza el módulo `abc` (Abstract Base Classes) para garantizar que las subclases implementen los métodos definidos.
Métodos:
---------
- getSongDao():
    Método abstracto que debe ser implementado por las clases DAOFactory para proporcionar una instancia
    del DAO de canciones.
"""


class InterfaceDAOFactory(ABC):

    @abstractmethod
    def get_canciones(self):
        pass
    
    @abstractmethod
    def get_albumes(self):
        pass
    
    @abstractmethod
    def get_usuarios(self):
        pass

    @abstractmethod
    def get_amigos(self):
        pass

    @abstractmethod
    def get_artistas(self):
        pass

    @abstractmethod
    def get_sellos(self):
        pass

    @abstractmethod
    def get_productos(self):
        pass

    @abstractmethod
    def get_generos(self):
        pass
    """
    Aquí crear métodos abstractos para obtener otros DAOs, que son los de las interfaces de los modelos.
    """
