import json

class ProductosDTO():
    def __init__(self):
        self.productlist = []

    def insertProducto(self, elem):
        self.productlist.append(elem)

    def productlist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for product in self.productlist:
            product = dict(product)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in product:
                product["_id"] = str(product["_id"])
            for k, v in product.items():
                if isinstance(v, ObjectId): 
                    product[k] = str(v)
            clean_list.append(product)
        return json.dumps(clean_list)


class ProductoDTO():
    def __init__(self):
        self.id = None
        self.title = None
        self.price = None
        self.image = None
        self.category = None
        self.description = None

    def is_Empty(self):
        return (self.idn is None and self.title is None and self.price is None and
                self.image is None and self.category is None and self.description is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_price(self):
        return self.price

    def set_price(self, price):
        self.price = price

    def get_image(self):
        return self.image

    def set_image(self, image):
        self.image = image

    def get_category(self):
        return self.category

    def set_category(self, category):
        self.category = category

    def get_description(self):
        return self.description

    def set_description(self, description):
        self.description = description

    def productdto_to_dict(self):
        return {
            "id": str(self.id) if self.id is not None else None,
            "title": self.title,
            "price": self.price,
            "image": self.image,
            "category": self.category,
            "description": self.description
        }
    
