import json

class ArtistasDTO():
    def __init__(self):
        self.artistlist = []

    def insertArtist(self, elem):
        self.artistlist.append(elem)

    def artistlist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for artist in self.artistlist:
            artist = dict(artist)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in artist:
                artist["_id"] = str(artist["_id"])
            for k, v in artist.items():
                if isinstance(v, ObjectId): 
                    artist[k] = str(v)
            clean_list.append(artist)
        return json.dumps(clean_list)


class ArtistaDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.genre = None
        self.description = None
        self.image = None
        self.url = None
        self.selloId = None

    def is_Empty(self):
        return (self.id is None and self.name is None and self.genre is None and
                self.description is None and self.image is None and
                self.url is None and self.selloId is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_genre(self):
        return self.genre

    def set_genre(self, genre):
        self.genre = genre

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

    def get_selloId(self):
        return self.selloId

    def set_selloId(self, selloId):
        self.selloId = selloId

    def artistdto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "genre": self.genre,
            "description": self.description,
            "image": self.image,
            "url": self.url,
            "selloId": self.selloId
        }
