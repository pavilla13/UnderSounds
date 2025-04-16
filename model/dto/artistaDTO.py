class ArtistaDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.genres = []
        self.albums = []
        self.biography = None
        self.active_years = None

    def is_empty(self):
        return (self.id is None and self.name is None and not self.genres and
                not self.albums and self.biography is None and self.active_years is None)

    def add_genre(self, genre):
        self.genres.append(genre)

    def add_album(self, album):
        self.albums.append(album)

    def artistadto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "genres": self.genres,
            "albums": [album.albumdto_to_dict() if hasattr(album, 'albumdto_to_dict') else album for album in self.albums],
            "biography": self.biography,
            "active_years": self.active_years
        }