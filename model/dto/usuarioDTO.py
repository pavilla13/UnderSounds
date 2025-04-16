class UsuarioDTO():
    def __init__(self):
        self.id = None
        self.username = None
        self.email = None
        self.password = None
        self.friends = []
        self.favorite_songs = []
        self.favorite_albums = []
        self.purchases = []

    def is_empty(self):
        return (self.id is None and self.username is None and self.email is None and
                self.password is None and not self.friends and not self.favorite_songs and
                not self.favorite_albums and not self.purchases)

    def add_friend(self, friend):
        self.friends.append(friend)

    def add_favorite_song(self, song):
        self.favorite_songs.append(song)

    def add_favorite_album(self, album):
        self.favorite_albums.append(album)

    def add_purchase(self, purchase):
        self.purchases.append(purchase)

    def usuariodto_to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "friends": [friend.amigodto_to_dict() if hasattr(friend, 'amigodto_to_dict') else friend for friend in self.friends],
            "favorite_songs": [song.songdto_to_dict() if hasattr(song, 'songdto_to_dict') else song for song in self.favorite_songs],
            "favorite_albums": [album.albumdto_to_dict() if hasattr(album, 'albumdto_to_dict') else album for album in self.favorite_albums],
            "purchases": [purchase.productodto_to_dict() if hasattr(purchase, 'productodto_to_dict') else purchase for purchase in self.purchases]
        }