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
    def __init__(self, id, title, artist, album, genre, duration, url, lyrics, cover, valoracion):
        self.id = id
        self.title = title
        self.artist = artist
        self.album = album
        self.genre = genre
        self.duration = duration
        self.lyrics = lyrics if lyrics else "La letra de esta canción todavia no esta disponible"
        self.url = url
        self.cover = cover if cover else "https://i.etsystatic.com/13030856/r/il/ed98c2/4944348678/il_570xN.4944348678_kw6j.jpg"
        self.valoracion = valoracion

    def is_Empty(self):
        return (self.id is None and self.title is None and self.artist is None and
                self.album is None and self.genre is None and self.duration is None and
                self.url is None and self.lyrics is None and self.cover is None and
                self.valoracion is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title

    def get_artist(self):
        return self.artist

    def set_artist(self, artist):
        self.artist = artist

    def get_album(self):
        return self.album

    def set_album(self, album):
        self.album = album

    def get_genre(self):
        return self.genre

    def set_genre(self, genre):
        self.genre = genre

    def get_duration(self):
        return self.duration

    def set_duration(self, duration):
        self.duration = duration

    def get_url(self):
        return self.url

    def set_url(self, url):
        self.url = url

    def get_lyrics(self):
        return self.lyrics

    def set_lyrics(self, lyrics):
        self.lyrics = lyrics

    def get_cover(self):
        return self.cover

    def set_cover(self, cover):
        self.cover = cover

    def get_valoracion(self):
        return self.valoracion

    def set_valoracion(self, valoracion):
        self.valoracion = valoracion

    def songdto_to_dict(self):
        return {
            "id": self.id if self.id is not None else None,
            "title": self.title,
            "artist": self.artist,
            "album": self.album,
            "genre": self.genre,
            "duration": self.duration,
            "url": self.url,
            "lyrics": self.lyrics,
            "cover": self.cover,
            "valoracion": self.valoracion  # Nuevo campo añadido al diccionario
        }
