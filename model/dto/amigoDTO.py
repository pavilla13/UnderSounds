import json

class AmigosDTO():
    def __init__(self):
        self.amigolist = []

    def insertAmigo(self, elem):
        self.amigolist.append(elem)

    def amigolist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for amigo in self.amigolist:
            amigo = dict(amigo)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in amigo:
                amigo["_id"] = str(amigo["_id"])
            for k, v in amigo.items():
                if isinstance(v, ObjectId): 
                    amigo[k] = str(v)
            clean_list.append(amigo)
        return json.dumps(clean_list)


class AmigoDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.description = None
        self.url = None

    def is_Empty(self):
        return (self.id is None and self.name is None and self.description is None and
                self.url is None)

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

    def get_url(self):
        return self.url

    def set_url(self, url):
        self.url = url

    def amigodto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "url": self.url
        }
