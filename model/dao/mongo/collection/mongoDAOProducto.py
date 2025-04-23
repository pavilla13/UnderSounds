from ....dto.productoDTO import ProductoDTO
from ...interfaceDAOProducto import InterfaceDAOProducto
from typing import List, Optional

class MongoDAOProducto(InterfaceDAOProducto):

    def __init__(self, collection):
        self.collection = collection
    
    def get_productos(self) -> List[ProductoDTO]:
        try:
            productos = []
            results = self.collection.find({})
            for doc in results:
                producto = ProductoDTO()
                producto.id = doc.get('id')
                producto.title = doc.get('title')
                producto.price = doc.get('price')
                producto.image = doc.get('image')
                producto.category = doc.get('category')
                producto.description = doc.get('description')
                productos.append(producto)
            return productos
        except Exception as e:
            print(f"Error getting products: {e}")
            return []