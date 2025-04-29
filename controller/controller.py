from fastapi import FastAPI, Request, Form, UploadFile, File, HTTPException
from fastapi.staticfiles import StaticFiles
from model import model
from model.model import Model
from view.view import View
from fastapi.responses import RedirectResponse
from starlette.middleware.sessions import SessionMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from model.dto.usuarioDTO import UsuarioDTO, UsuariosDTO
from model.dto.albumDTO import AlbumDTO
import os
import json


app = FastAPI()

# Middleware para manejar sesiones
app.add_middleware(SessionMiddleware, secret_key="password")

model = Model()
view = View()

app.mount("/static", StaticFiles(directory="static"), name="static")




@app.get("/register")
async def register(request: Request):
    return view.get_register_view(request)

@app.post("/register")
async def procesar_registro(
    request: Request,
    name: str = Form(...),
    username: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    password2: str = Form(...),
    tipo_usuario: str = Form(...),
    birthdate: str = Form(...),
    country: str = Form(...),
    terms: bool = Form(...)
):
    
    if len(password) < 8:
        return view.render_register(
            request,
            error="La contraseña debe tener al menos 8 caracteres.",
            name=name,
            username=username,
            email=email,
            birthdate=birthdate
        )

    if password != password2:
        return view.render_register(
            request,
            error="Las contraseñas no coinciden.",
            name=name,
            username=username,
            email=email,
            birthdate=birthdate
        )

    if model.buscar_usuario_register(username, email):
        return view.render_register(
            request,
            error="El usuario o correo ya está registrado.",
            name=name,
            username=username,
            email=email,
            birthdate=birthdate
        )

    usuario =  UsuarioDTO(name, username, email, password, tipo_usuario, birthdate, country)
    model.registrar_usuario(usuario)
    return view.render_register(request, success_message="¡Registro exitoso! Ahora puedes iniciar sesión.")  
    


@app.get("/login")
async def login(request: Request):
    return view.get_login_view(request)

# RUTA: Procesar login (POST)
@app.post("/login")
async def procesar_login(request: Request, username: str = Form(...), password: str = Form(...)):
    user = model.buscar_usuario_login(username)

    if user and user["password"] == password:
        request.session["user"] = {
            "username": user["username"],
            "email": user["email"],
            "name": user["name"],
            "tipo_usuario": user["tipo_usuario"],
            "profilePic": user["profilePic"]
        }
        return RedirectResponse("/", status_code=303)
    return view.render_login(request, error="Usuario o contraseña incorrectos.")


@app.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return RedirectResponse("/", status_code=303)



@app.get("/edit_perfil")
async def edit_perfil(request: Request):
    return view.get_edit_perfil_view(request)

@app.post("/editar_perfil")
async def editar_perfil(
    request: Request,
    firstName: str = Form(...),
    email: str = Form(...),
    username: str = Form(...),
    currentPassword: str = Form(None),
    newPassword: str = Form(None),
    confirmPassword: str = Form(None),
    profilePic: UploadFile = File(None)
):
    session_user = request.session.get("user")
    if not session_user:
        return RedirectResponse("/login", status_code=303)

    user = model.buscar_usuario_register(session_user["username"], session_user["email"]) # para obtener todo el user

    # Verificamos si cambia la contraseña
    if newPassword or confirmPassword:
        if newPassword != confirmPassword:
            return view.render_edit_profile(request, user, error="Las nuevas contraseñas no coinciden.")
        if len(newPassword) < 8:
            return view.render_edit_profile(request, user, error="La nueva contraseña debe tener al menos 8 caracteres.")
        if user["password"] != currentPassword:
            return view.render_edit_profile(request, user, error="La contraseña actual es incorrecta.")
        # Si todo está correcto, actualizamos
        user["password"] = newPassword


    # Actualizamos solo si no vienen vacíos
    if firstName:
        user["name"] = firstName
    if email:
        # Verificamos si el email nuevo ya existe en otro usuario
        if model.buscar_usuario_register(None, email):  # Poniendo None en username
            return view.render_edit_profile(request, user, error="El correo electrónico ya está en uso.")
        user["email"] = email
    if username:
        # Verificamos si el username nuevo ya existe en otro usuario
        if model.buscar_usuario_register(username, None):  # Poniendo None en email
            return view.render_edit_profile(request, user, error="El nombre de usuario ya está en uso.")
        user["username"] = username


    if profilePic and profilePic.filename:
        # Asegurar que la carpeta existe
        os.makedirs("static/images", exist_ok=True)
        # Guardamos el archivo en el directorio 'static/images/'
        file_location = f"static/images/{profilePic.filename}"
        with open(file_location, "wb") as f:
            f.write(await profilePic.read()) # Guardamos el archivo en el disco
        user["profilePic"] = file_location # Guarda la ruta del archivo en la base de datos

    model.actualizar_usuario(user["_id"], user)
       
    # Actualizar la sesión
    request.session["user"]["name"] = user["name"]
    request.session["user"]["email"] = user["email"]
    request.session["user"]["username"] = user["username"]
    request.session["user"]["profilePic"] = user["profilePic"]

    return view.render_edit_profile(request, user, success_message="¡Cambios guardados con éxito! Ahora puedes continuar.")  


# RUTA: Página principal (requiere saber si está logueado)
@app.get("/")
async def index(request: Request):
    canciones = model.get_canciones()
    albumes = model.get_albumes()
    generos = model.get_generos()
    return view.get_index_view(request, canciones, albumes, generos)





@app.get("/album")
async def album(request: Request):
    albumes = model.get_albumes()
    tracklist = model.get_canciones()
    artistas = model.get_artistas()
    return view.get_album_view(request, albumes, tracklist, artistas)

@app.get("/albumes_subidos")
async def albumes_subidos(request: Request):
    albumes = model.get_albumes()
    return view.get_albumes_subidos_view(request, albumes)

@app.get("/amigoLista")
async def amigoLista(request: Request):
    return view.get_amigoLista_view(request)

@app.get("/amigos")
async def amigos(request: Request):
    return view.get_amigos_view(request)

@app.get("/artistas")
async def artistas(request: Request):
    artistas = model.get_artistas()
    canciones = model.get_canciones()
    albumes = model.get_albumes()
    return view.get_artistas_view(request, artistas, canciones, albumes)

@app.get("/ayuda")
async def ayuda(request: Request):
    return view.get_ayuda_view(request)

@app.get("/cancion")
async def cancion(request: Request):
    canciones = model.get_canciones()
    return view.get_cancion_view(request, canciones)

@app.get("/checkout")
async def checkout(request: Request):
    checkout_list = model.get_productos()
    return view.get_checkout_view(request, checkout_list)


@app.get("/favoritos")
async def favoritos(request: Request):
    return view.get_favoritos_view(request)

@app.get("/generos_especifico")
async def generos_especifico(request: Request):
    generos = model.get_generos()
    canciones = model.get_canciones()
    return view.get_generos_especifico_view(request, generos, canciones)

@app.get("/generos")
async def generos(request: Request):
    generos = model.get_generos()
    canciones = model.get_canciones()
    return view.get_generos_view(request, generos, canciones)

@app.get("/gestion_sello")
async def gestion_sello(request: Request):
    return view.get_gestion_sello_view(request)


@app.get("/mis_compras")
async def mis_compras(request: Request):
    return view.get_mis_compras_view(request)

@app.get("/producto")
async def producto(request: Request):
    productos = model.get_productos()
    return view.get_producto_view(request, productos)

@app.get("/recover")
async def recover(request: Request):
    return view.get_recover_view(request)


@app.get("/resumen_compra")
async def resumen_compra(request: Request):
    return view.get_resumen_compra_view(request)

@app.get("/search")
async def search(request: Request):
    albumes = model.get_albumes()
    artistas = model.get_artistas()
    canciones = model.get_canciones()
    sellos = model.get_sellos()
    amigos = model.get_amigos()
    return view.get_search_view(request, albumes, artistas, canciones, sellos, amigos)

@app.get("/sellos")
async def sellos(request: Request):
    sellos = model.get_sellos()
    artistas = model.get_artistas()
    return view.get_sellos_view(request, sellos, artistas)

@app.get("/subir_album")
async def subir_album(request: Request):
    return view.get_subir_album_view(request)

@app.post("/subir_album")
async def subir_album_post(
    request: Request,
    nombre: str = Form(...),
    descripcion: str = Form(...),
    genero: str = Form(...),
    portada: str = Form(...)):
    
    session_user = request.session.get("user")
    
    artista = session_user["username"]
    
    import random
    numero = random.randint(1, 5)
    
    albumes = model.get_albumes()
    albums_list = json.loads(albumes)
    ultimo_album = albums_list[-1]
    ultimo_id = ultimo_album['id']
    
    idAlbum = int(ultimo_id) + 1
    
    url = "/album?id="+str(idAlbum)
    
    album = AlbumDTO(idAlbum, nombre, artista, genero, descripcion, portada, url, numero)
    
    model.create_album(album)
    return RedirectResponse("/albumes_subidos", status_code=303)
    
@app.get("/actualizar_album")    
async def actualizar_album(request: Request):
    albumes = model.get_albumes()
    return view.get_actualizar_album_view(request, albumes)

@app.post("/actualizar_album")
async def actualizar_album(request: Request, id: int, 
                            nombre: str = Form(None),
                            descripcion: str = Form(None),
                            genero: str = Form(None),
                            portada: str = Form(None)):
    # Obtener el álbum existente
    albumes = model.get_albumes()
    albums_list = json.loads(albumes)
    
    album = next((a for a in albums_list if a["id"] == id), None)
    if not album:
        raise HTTPException(status_code=404, detail="Álbum no encontrado")
    
    if nombre != "":
        album["name"] = nombre
    if descripcion != "":
        album["description"] = descripcion
    if genero != "":
        album["genre"] = genero
    if portada != "":
        album["image"] = portada
    
    # Crear un nuevo objeto AlbumDTO con los datos actualizados
    updated_album = AlbumDTO(id, 
                             album["name"], 
                             album["artist"], 
                             album["genre"], 
                             album["description"],
                             album["image"], 
                             album["url"],
                             album["valoracion"])
    
    # Guardar el álbum actualizado en la base de datos
    model.update_album(updated_album)
    
    return RedirectResponse("/albumes_subidos", status_code=303)

@app.get("/eliminar_album")
async def eliminar_album(request: Request):
    albumes = model.get_albumes()
    return view.get_eliminar_album_view(request, albumes)

@app.post("/eliminar_album")
async def eliminar_album_post(request: Request, id: int = Form(...)):
    # Asumimos que model.delete_album existe y borra por id
    model.delete_album(id)
    return RedirectResponse("/albumes_subidos", status_code=303)

@app.get("/terminos")
async def terminos(request: Request):
    return view.get_terminos_view(request)

@app.get("/tienda")
async def tienda(request: Request):
    productos = model.get_productos()
    return view.get_tienda_view(request, productos)

@app.get("/privacidad")
async def privacidad(request: Request):
    return view.get_privacidad_view(request)

