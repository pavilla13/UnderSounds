import json

class SongsDTO():
    def __init__(self):
        self.songlist = []

    def insertSong(self, elem):
        self.songlist.append(elem)

    def songlist_to_json(self):
        #return json.dumps(self.songlist)
        from bson import ObjectId
        clean_list = []
        for song in self.songlist:
            song = dict(song)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in song:
                song["_id"] = str(song["_id"])
            for k, v in song.items():
                if isinstance(v, ObjectId): 
                    song[k] = str(v)
            clean_list.append(song)
        return json.dumps(clean_list)



class SongDTO():
    def __init__(self):
        self.idCancion = None
        self.nombreCancion = None
        self.idAlbum = None
        self.idArtista = None
        self.idGenero = None
        self.url = None

    def is_Empty(self):
        return (self.idCancion is None and self.nombreCancion is None and self.idAlbum is None and
                self.idArtista is None and self.idGenero is None and self.url is None)

    def get_album(self):
        return self.album

    def set_album(self, album):
        self.album = album

    def get_author(self):
        return self.author

    def set_author(self, author):
        self.author = author

    def get_idCancion(self):
        return self.idCancion

    def set_idCancion(self, idCancion):
        self.idCancion = idCancion

    ###

    def get_nombreCancion(self):
        return self.nombreCancion

    def set_nombreCancion(self, nombreCancion):
        self.nombreCancion = nombreCancion

    def get_idAlbum(self):
        return self.idAlbum

    def set_idAlbum(self, idAlbum):
        self.idAlbum = idAlbum

    def get_idArtista(self):
        return self.idArtista

    def set_idArtista(self, idArtista):
        self.idArtista = idArtista

    def get_idGenero(self):
        return self.idGenero

    def set_idGenero(self, idGenero):
        self.idGenero = idGenero

    def get_url(self):
        return self.url

    def set_url(self, url):
        self.url = url

    ###

    def get_duration(self):
        return self.duration

    def set_duration(self, duration):
        self.duration = duration

    def get_musicgenre(self):
        return self.musicgenre

    def set_musicgenre(self, musicgenre):
        self.musicgenre = musicgenre

    def get_price(self):
        return self.price

    def set_price(self, price):
        self.price = price

    def get_rating(self):
        return self.rating

    def set_rating(self, rating):
        self.rating = rating

    def get_release(self):
        return self.release

    def set_release(self, release):
        self.release = release

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def songdto_to_dict(self):
        return {
            "idCancion": str(self.idCancion) if self.idCancion is not None else None,
            "nombreCancion": self.nombreCancion,
            "idAlbum": str(self.idAlbum) if self.idAlbum is not None else None,
            "idArtista": str(self.idArtista) if self.idArtista is not None else None,
            "idGenero": str(self.idGenero) if self.idGenero is not None else None,
            "url": self.url
        }
    
