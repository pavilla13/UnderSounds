from fastapi.templating import Jinja2Templates
from fastapi import Request
import json
from fastapi.responses import HTMLResponse, RedirectResponse


# Simulamos una "base de datos" temporal en memoria
USERS_DB = {}


templates = Jinja2Templates(directory="view/templates")

class View():
    def __init__(self):
        pass

    def get_register_view(self, request: Request):
        return templates.TemplateResponse("register.html", {"request": request}) 
    
    async def procesar_registro_view(self, request: Request, name, username, email, password, password2,
                                    tipo_usuario, birthdate, country, terms):
        if len(password) < 8:
            return templates.TemplateResponse("register.html", {
                "request": request,
                "error": "La contraseña debe tener al menos 8 caracteres.",
                "name": name,
                "username": username,
                "email": email,
                "tipo_usuario": tipo_usuario,
                "birthdate": birthdate,
                "country": country
            })
        
        # Validación simple: contraseñas deben coincidir
        if password != password2:
            return templates.TemplateResponse("register.html", {
                "request": request,
                "error": "Las contraseñas no coinciden.",
                "name": name,
                "username": username,
                "email": email,
                "tipo_usuario": tipo_usuario,
                "birthdate": birthdate,
                "country": country
            })

        # Validar que el usuario o email no exista ya
        for user in USERS_DB.values():
            if user["username"] == username or user["email"] == email:
                return templates.TemplateResponse("register.html", {
                    "request": request,
                    "error": "El usuario o correo ya está registrado.",
                    "name": name,
                    "username": username,
                    "email": email,
                    "tipo_usuario": tipo_usuario,
                    "birthdate": birthdate,
                    "country": country
                })

        # Si todo bien, guardar el nuevo usuario
        USERS_DB[username] = {
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "tipo_usuario": tipo_usuario,
            "birthdate": birthdate,
            "country": country
        }
        # Redirigir al login si todo es correcto
        return RedirectResponse("/register?registro=exito", status_code=303)

    def get_login_view(self, request: Request):
        return templates.TemplateResponse("login.html", {"request" : request})
    
    async def procesar_login_view(self, request: Request, username: str, password: str):
        user = USERS_DB.get(username) or next((u for u in USERS_DB.values() if u["email"] == username), None)

        if user and user["password"] == password:
            # Guardamos en sesión usando clave: tipo_usuario
            request.session["user"] = {
                "username": user["username"],
                "tipo_usuario": user["tipo_usuario"]
            }
            return RedirectResponse("/", status_code=303)
        else:
            return templates.TemplateResponse("login.html", {
                "request": request,
                "error": "Usuario o contraseña incorrectos."
            })

    def get_index_view(self, request: Request, canciones, albumes, generos):
        # "user" es el diccionario que guardamos en sesión
        user = request.session.get("user")
        canciones_list = json.loads(canciones)
        albumes_list = json.loads(albumes)
        generos_list = json.loads(generos)
        return templates.TemplateResponse("index.html", {"request": request, "user": user, 
                                                         "canciones": canciones_list,
                                                        "albumes": albumes_list,
                                                        "generos": generos_list})
    

# Luego, en cualquier función:
# user = request.session.get("user")

    def get_album_view(self, request: Request,albumes, tracklist, artistas):
        user = request.session.get("user")
        albumes_list = json.loads(albumes)
        tracklist_list = json.loads(tracklist)
        artistas_list = json.loads(artistas)
        return templates.TemplateResponse("album.html", {"request": request, "user": user,
                                                         "albumes": albumes_list,
                                                         "tracklist": tracklist_list, 
                                                         "artistas": artistas_list})
    
    def get_albumes_subidos_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("albumes_subidos.html", {"request" : request, "user": user })
    
    def get_amigoLista_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("amigoLista.html", {"request" : request, "user": user})
    
    def get_amigos_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("amigos.html", {"request" : request, "user": user})
    
    def get_artistas_view(self, request: Request, artistas):
        user = request.session.get("user")
        artistas_list = json.loads(artistas)
        return templates.TemplateResponse("artistas.html", {"request" : request, "user": user, "artistas": artistas_list})
    
    def get_ayuda_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("ayuda.html", {"request" : request, "user": user})
    
    def get_cancion_view(self, request: Request, canciones):
        user = request.session.get("user")
        canciones_list = json.loads(canciones)
        return templates.TemplateResponse("cancion.html", {"request" : request, "user": user, "canciones": canciones_list})
    
    def get_checkout_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("checkout.html", {"request" : request, "user": user})
    
    def get_edit_perfil_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("edit_perfil.html", {"request" : request, "user": user})
    
    def get_favoritos_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("favoritos.html", {"request" : request, "user": user})
    
    def get_generos_especifico_view(self, request: Request, generos, canciones):
        user = request.session.get("user")
        generos_list = json.loads(generos)
        canciones_list = json.loads(canciones)
        return templates.TemplateResponse("generos especifico.html", {"request" : request, "user": user, "generos": generos_list, "canciones": canciones_list})
    
    def get_generos_view(self, request: Request, generos, canciones):
        user = request.session.get("user")
        generos_list = json.loads(generos)
        canciones_list = json.loads(canciones)
        return templates.TemplateResponse("generos.html", {"request" : request, "user": user,
                                                           "generos": generos_list,
                                                           "canciones": canciones_list}) 
    
    def get_gestion_sello_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("gestion_sello.html", {"request" : request, "user": user}) 

    def get_login_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("login.html", {"request" : request, "user": user})
    
    def get_mis_compras_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("mis_compras.html", {"request" : request, "user": user})
    
    def get_producto_view(self, request: Request, productos):
        user = request.session.get("user")
        productos_list = json.loads(productos)
        return templates.TemplateResponse("producto.html", {"request" : request, "user": user, "productos": productos_list})
    
    #def get_producto_view(self, request: Request, id: int):
     #   return templates.TemplateResponse("producto.html", {
      #      "request": request,
       #     "id": id
        #})
    
    def get_recover_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("recover.html", {"request" : request, "user": user})
    

    def get_resumen_compra_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("resumen_compra.html", {"request" : request, "user": user})  

    def get_search_view(self, request: Request, albumes, artistas, canciones, sellos, amigos):
        user = request.session.get("user")
        albumes_list = json.loads(albumes)
        artistas_list = json.loads(artistas)
        canciones_list = json.loads(canciones)
        sellos_list = json.loads(sellos)
        amigos_list = json.loads(amigos)

        return templates.TemplateResponse("search.html", {"request" : request, 
                                                          "user": user,
                                                          "albumes": albumes_list,
                                                          "artistas": artistas_list,
                                                          "canciones": canciones_list,
                                                          "sellos": sellos_list,
                                                          "amigos": amigos_list})
    
    def get_sellos_view(self, request: Request, sellos, artistas):
        user = request.session.get("user")
        sellos_list = json.loads(sellos)
        artistas_list = json.loads(artistas)
        return templates.TemplateResponse("sellos.html", {"request" : request, "user": user, "sellos": sellos_list, "artistas": artistas_list})
    
    def get_subir_album_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("subir_album.html", {"request" : request, "user": user})
    
    def get_terminos_view(self, request: Request):
        user = request.session.get("user")
        return templates.TemplateResponse("terminos.html", {"request" : request, "user": user})
    
    def get_tienda_view(self, request: Request, productos):
        user = request.session.get("user")
        productos_list = json.loads(productos)
        return templates.TemplateResponse("tienda.html", {"request" : request, "user": user, "productos": productos_list})
    
    