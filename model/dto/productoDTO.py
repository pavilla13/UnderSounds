class ProductoDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.type = None  # 'song', 'album', 'merchandise', etc.
        self.price = None
        self.description = None
        self.stock = None
        self.release_date = None
        self.related_artist = None

    def is_empty(self):
        return (self.id is None and self.name is None and self.type is None and
                self.price is None and self.description is None and self.stock is None and
                self.release_date is None and self.related_artist is None)

    def productodto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "price": self.price,
            "description": self.description,
            "stock": self.stock,
            "release_date": str(self.release_date),
            "related_artist": self.related_artist
        }