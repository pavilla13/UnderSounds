from bson import ObjectId
import json

class GeneroDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.description = None
        self.image = None
        self.url = None
        self.valoracion = None  

    def is_empty(self):
        return (self.id is None and self.name is None and self.description is None and
                self.image is None and self.url is None and self.valoracion is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_description(self):
        return self.description

    def set_description(self, description):
        self.description = description

    def get_image(self):
        return self.image

    def set_image(self, image):
        self.image = image

    def get_url(self):
        return self.url

    def set_url(self, url):
        self.url = url

    def get_valoracion(self):
        return self.valoracion

    def set_valoracion(self, valoracion):
        self.valoracion = valoracion

    def generodto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "url": self.url,
            "valoracion": self.valoracion  
        }
        
class GenerosDTO():
    def __init__(self):
        self.generos = []

    def insertGenero(self, genero):
        self.generos.append(genero)

    def genrelist_to_json(self):
        clean_list = []
        for genre in self.generos:
            if isinstance(genre, GeneroDTO):  # Convert GeneroDTO to dict if necessary
                genre = genre.generodto_to_dict()
            if "_id" in genre:
                genre["_id"] = str(genre["_id"])
            for k, v in genre.items():
                if isinstance(v, ObjectId):  # Convert ObjectId to string
                    genre[k] = str(v)
            clean_list.append(genre)
        return json.dumps(clean_list)