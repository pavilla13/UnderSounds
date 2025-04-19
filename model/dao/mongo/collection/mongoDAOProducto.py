from dto.productoDTO import ProductoDTO
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
                producto.id = doc.get('_id')
                producto.name = doc.get('name')
                producto.type = doc.get('type')
                producto.price = doc.get('price')
                producto.description = doc.get('description')
                producto.stock = doc.get('stock')
                producto.release_date = doc.get('release_date')
                producto.related_artist = doc.get('related_artist')
                productos.append(producto)
            return productos
        except Exception as e:
            print(f"Error getting products: {e}")
            return []
    
    def update_producto_stock(self, product_id: str, new_stock: int) -> bool:
        try:
            result = self.collection.update_one(
                {'_id': product_id},
                {'$set': {'stock': new_stock}}
            )
            return result.modified_count > 0
        except Exception as e:
            print(f"Error updating product stock: {e}")
            return False