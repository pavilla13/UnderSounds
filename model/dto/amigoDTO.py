class AmigoDTO():
    def __init__(self):
        self.id = None
        self.username = None
        self.friendship_date = None
        self.common_interests = []  # Géneros, artistas, etc. en común
        self.last_interaction = None

    def is_empty(self):
        return (self.id is None and self.username is None and self.friendship_date is None and
                not self.common_interests and self.last_interaction is None)

    def add_common_interest(self, interest):
        self.common_interests.append(interest)

    def amigodto_to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "friendship_date": str(self.friendship_date),
            "common_interests": self.common_interests,
            "last_interaction": str(self.last_interaction)
        }