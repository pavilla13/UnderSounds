from fastapi import FastAPI, Request, Form
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
    return RedirectResponse("/login", status_code=303)
    


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
            "tipo_usuario": user["tipo_usuario"]
        }
        return RedirectResponse("/", status_code=303)
    return view.render_login(request, error="Usuario o contraseña incorrectos.")


@app.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return RedirectResponse("/", status_code=303)

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
    return view.get_albumes_subidos_view(request)

@app.get("/amigoLista")
async def amigoLista(request: Request):
    return view.get_amigoLista_view(request)

@app.get("/amigos")
async def amigos(request: Request):
    return view.get_amigos_view(request)

@app.get("/artistas")
async def artistas(request: Request):
    artistas = model.get_artistas()
    return view.get_artistas_view(request, artistas)

@app.get("/ayuda")
async def ayuda(request: Request):
    return view.get_ayuda_view(request)

@app.get("/cancion")
async def cancion(request: Request):
    canciones = model.get_canciones()
    return view.get_cancion_view(request, canciones)

@app.get("/checkout")
async def checkout(request: Request):
    return view.get_checkout_view(request)

@app.get("/edit_perfil")
async def edit_perfil(request: Request):
    return view.get_edit_perfil_view(request)

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

