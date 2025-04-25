import json

class AlbumesDTO():
    def __init__(self):
        self.albumlist = []

    def insertAlbum(self, elem):
        self.albumlist.append(elem)

    def albumlist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for album in self.albumlist:
            album = dict(album)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in album:
                album["_id"] = str(album["_id"])
            for k, v in album.items():
                if isinstance(v, ObjectId): 
                    album[k] = str(v)
            clean_list.append(album)
        return json.dumps(clean_list)


class AlbumDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.artist = None
        self.genre = None
        self.description = None
        self.image = None
        self.url = None
        self.valoracion = None  

    def is_Empty(self):
        return (self.id is None and self.name is None and self.artist is None and
                self.genre is None and self.description is None and
                self.image is None and self.url is None and self.valoracion is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_artist(self):
        return self.artist

    def set_artist(self, artist):
        self.artist = artist

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

    def get_valoracion(self):
        return self.valoracion

    def set_valoracion(self, valoracion):
        self.valoracion = valoracion

    def albumdto_to_dict(self):
        return {
            "id": str(self.id) if self.id is not None else None,
            "name": self.name,
            "artist": self.artist,
            "genre": self.genre,
            "description": self.description,
            "image": self.image,
            "url": self.url,
            "valoracion": self.valoracion  
        }
