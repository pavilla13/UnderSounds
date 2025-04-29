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
    def __init__(self, name, username, email, password, tipo_usuario, birthdate, country):
        self.name = name
        self.username = username
        self.email = email
        self.password = password
        self.tipo_usuario = tipo_usuario
        self.birthdate = birthdate
        self.country = country
        self.profilePic = "/static/images/profile.png"  # Siempre imagen por defecto

    def is_Empty(self):
        return (self.name is None and self.username is None and
                self.email is None and self.password is None and self.tipo_usuario is None and
                self.birthdate is None and self.country is None)


    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def get_username(self):
        return self.username

    def set_username(self, username):
        self.username = username

    def get_email(self):
        return self.email

    def set_email(self, email):
        self.email = email

    def get_password(self):
        return self.password

    def set_password(self, password):
        self.password = password

    def get_tipo_usuario(self):
        return self.tipo_usuario

    def set_tipo_usuario(self, tipo_usuario):
        self.tipo_usuario = tipo_usuario

    def get_birthdate(self):
        return self.birthdate

    def set_birthdate(self, birthdate):
        self.birthdate = birthdate

    def get_country(self):
        return self.country

    def set_country(self, country):
        self.country = country

    def get_profilePic(self):
        return self.profilePic
    
    def set_profilePic(self, profilePic):
        self.profilePic = profilePic

    def userdto_to_dict(self):
        return {
            "name": self.name,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "tipo_usuario": self.tipo_usuario,
            "birthdate": self.birthdate,
            "country": self.country,
            "profilePic": self.profilePic
        }
