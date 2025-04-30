import json

class SellosDTO():
    def __init__(self):
        self.selloslist = []

    def insertSello(self, elem):
        self.selloslist.append(elem)

    def selloslist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for sello in self.selloslist:
            sello = dict(sello)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in sello:
                sello["_id"] = str(sello["_id"])
            for k, v in sello.items():
                if isinstance(v, ObjectId): 
                    sello[k] = str(v)
            clean_list.append(sello)
        return json.dumps(clean_list)


class SelloDTO():
    def __init__(self, id, name, description, image, url):
        self.id = id
        self.name = name
        self.description = description
        self.image = image if image else "https://i.etsystatic.com/13030856/r/il/ed98c2/4944348678/il_570xN.4944348678_kw6j.jpg"
        self.url = url

    def is_Empty(self):
        return (self.id is None and self.name is None and self.description is None and
                self.image is None and self.url is None)

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

    def sellodto_to_dict(self):
        return {
            "id": self.id if self.id is not None else None,
            "name": self.name,
            "description": self.description,
            "image": self.image,
            "url": self.url
        }
