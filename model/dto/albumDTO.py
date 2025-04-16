class AlbumDTO():
    def __init__(self):
        self.id = None
        self.title = None
        self.artist = None
        self.release_date = None
        self.label = None
        self.genre = None
        self.songs = []
        self.rating = None
        self.price = None

    def is_empty(self):
        return (self.id is None and self.title is None and self.artist is None and
                self.release_date is None and self.label is None and self.genre is None and
                not self.songs and self.rating is None and self.price is None)

    def add_song(self, song):
        self.songs.append(song)

    def albumdto_to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "artist": self.artist,
            "release_date": str(self.release_date),
            "label": self.label,
            "genre": self.genre,
            "songs": [song.songdto_to_dict() if hasattr(song, 'songdto_to_dict') else song for song in self.songs],
            "rating": self.rating,
            "price": self.price
        }