from sqlalchemy.orm import Session
from model.database import SessionLocal
from model.user import User  # Asegúrate de tener el modelo User definido

class UserDAO:
    def __init__(self, db: Session = SessionLocal()):
        self.db = db

    def get_all_users(self):
        """Obtiene todos los usuarios de la base de datos."""
        return self.db.query(User).all()

    def get_user_by_id(self, user_id: int):
        """Obtiene un usuario por su ID."""
        return self.db.query(User).filter(User.id == user_id).first()

    def create_user(self, user: User):
        """Crea un nuevo usuario en la base de datos."""
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def update_user(self, user_id: int, updated_data: dict):
        """Actualiza un usuario existente."""
        user = self.get_user_by_id(user_id)
        if user:
            for key, value in updated_data.items():
                setattr(user, key, value)
            self.db.commit()
            self.db.refresh(user)
        return user

    def delete_user(self, user_id: int):
        """Elimina un usuario por su ID."""
        user = self.get_user_by_id(user_id)
        if user:
            self.db.delete(user)
            self.db.commit()
        return user
