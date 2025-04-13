from sqlalchemy.orm import Session
from model.database import SessionLocal
from model.artist import Artist  # Asegúrate de tener el modelo Artist definido

class ArtistDAO:
    def __init__(self, db: Session = SessionLocal()):
        self.db = db

    def get_all_artists(self):
        """Obtiene todos los artistas de la base de datos."""
        return self.db.query(Artist).all()

    def get_artist_by_id(self, artist_id: int):
        """Obtiene un artista por su ID."""
        return self.db.query(Artist).filter(Artist.id == artist_id).first()

    def create_artist(self, artist: Artist):
        """Crea un nuevo artista en la base de datos."""
        self.db.add(artist)
        self.db.commit()
        self.db.refresh(artist)
        return artist

    def update_artist(self, artist_id: int, updated_data: dict):
        """Actualiza un artista existente."""
        artist = self.get_artist_by_id(artist_id)
        if artist:
            for key, value in updated_data.items():
                setattr(artist, key, value)
            self.db.commit()
            self.db.refresh(artist)
        return artist

    def delete_artist(self, artist_id: int):
        """Elimina un artista por su ID."""
        artist = self.get_artist_by_id(artist_id)
        if artist:
            self.db.delete(artist)
            self.db.commit()
        return artist
