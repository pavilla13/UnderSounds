class GeneroDTO():
    def __init__(self):
        self.id = None
        self.name = None
        self.description = None
        self.related_genres = []
        self.popular_artists = []
        self.popular_songs = []

    def is_empty(self):
        return (self.id is None and self.name is None and self.description is None and
                not self.related_genres and not self.popular_artists and not self.popular_songs)

    def add_related_genre(self, genre):
        self.related_genres.append(genre)

    def add_popular_artist(self, artist):
        self.popular_artists.append(artist)

    def add_popular_song(self, song):
        self.popular_songs.append(song)

    def generodto_to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "related_genres": self.related_genres,
            "popular_artists": [artist.artistadto_to_dict() if hasattr(artist, 'artistadto_to_dict') else artist for artist in self.popular_artists],
            "popular_songs": [song.songdto_to_dict() if hasattr(song, 'songdto_to_dict') else song for song in self.popular_songs]
        }