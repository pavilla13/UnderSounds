class SelloDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.foundation_year = None
        self.country = None
        self.artists = []
        self.albums = []

    def is_empty(self):
        return (self.id is None and self.name is None and self.foundation_year is None and
                self.country is None and not self.artists and not self.albums)

    def add_artist(self, artist):
        self.artists.append(artist)

    def add_album(self, album):
        self.albums.append(album)

    def sellodto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "foundation_year": self.foundation_year,
            "country": self.country,
            "artists": [artist.artistadto_to_dict() if hasattr(artist, 'artistadto_to_dict') else artist for artist in self.artists],
            "albums": [album.albumdto_to_dict() if hasattr(album, 'albumdto_to_dict') else album for album in self.albums]
        }