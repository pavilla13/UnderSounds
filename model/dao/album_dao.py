from sqlalchemy.orm import Session
from model.database import SessionLocal
from model.album import Album  # Asegúrate de tener el modelo Album definido

class AlbumDAO:
    def __init__(self, db: Session = SessionLocal()):
        self.db = db

    def get_all_albums(self):
        """Obtiene todos los álbumes de la base de datos."""
        return self.db.query(Album).all()

    def get_album_by_id(self, album_id: int):
        """Obtiene un álbum por su ID."""
        return self.db.query(Album).filter(Album.id == album_id).first()

    def create_album(self, album: Album):
        """Crea un nuevo álbum en la base de datos."""
        self.db.add(album)
        self.db.commit()
        self.db.refresh(album)
        return album

    def update_album(self, album_id: int, updated_data: dict):
        """Actualiza un álbum existente."""
        album = self.get_album_by_id(album_id)
        if album:
            for key, value in updated_data.items():
                setattr(album, key, value)
            self.db.commit()
            self.db.refresh(album)
        return album

    def delete_album(self, album_id: int):
        """Elimina un álbum por su ID."""
        album = self.get_album_by_id(album_id)
        if album:
            self.db.delete(album)
            self.db.commit()
        return album
