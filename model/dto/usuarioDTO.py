import json

class UsuariosDTO():
    def __init__(self):
        self.userlist = []

    def insertUser(self, elem):
        self.userlist.append(elem)

    def userlist_to_json(self):
        from bson import ObjectId
        clean_list = []
        for user in self.userlist:
            user = dict(user)  # por si viene como objeto tipo pymongo.cursor.Cursor
            if "_id" in user:
                user["_id"] = str(user["_id"])
            for k, v in user.items():
                if isinstance(v, ObjectId): 
                    user[k] = str(v)
            clean_list.append(user)
        return json.dumps(clean_list)


class UsuarioDTO():
    def __init__(self):
        self.id = None
        self.nickname = None
        self.correo = None
        self.country = None
        self.date = None
        self.name = None
        self.password = None
        self.userType = None

    def is_Empty(self):
        return (self.id is None and self.nickname is None and self.correo is None and
                self.country is None and self.date is None and self.name is None and
                self.password is None and self.userType is None)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_nickname(self):
        return self.nickname

    def set_nickname(self, nickname):
        self.nickname = nickname

    def get_correo(self):
        return self.correo

    def set_correo(self, correo):
        self.correo = correo

    def get_country(self):
        return self.country

    def set_country(self, country):
        self.country = country

    def get_date(self):
        return self.date

    def set_date(self, date):
        self.date = date

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_password(self):
        return self.password

    def set_password(self, password):
        self.password = password

    def get_userType(self):
        return self.userType

    def set_userType(self, userType):
        self.userType = userType

    def userdto_to_dict(self):
        return {
            "id": str(self.id) if self.id is not None else None,
            "nickname": self.nickname,
            "correo": self.correo,
            "country": self.country,
            "date": self.date,
            "name": self.name,
            "password": self.password,
            "userType": self.userType
        }
