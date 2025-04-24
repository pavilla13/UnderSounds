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

from fastapi.responses import JSONResponse
from view.view import USERS_DB

app = FastAPI()

# Middleware para manejar sesiones
app.add_middleware(SessionMiddleware, secret_key="clave-secreta-super-segura")

model = Model()
view = View()

app.mount("/static", StaticFiles(directory="static"), name="static")


#@app.post("/register")
#async def registrar_usuario(
 #   request: Request,
  #  name: str = Form(...),
   # username: str = Form(...),
#    email: str = Form(...),
 #   password: str = Form(...),
  #  password2: str = Form(...),
   # register_type: str = Form(...)  # este valor viene del <select>
#):
    # 🔐 Acá deberías guardar el nuevo usuario en la base de datos...
    # 🧠 También podés guardar en sesión el tipo de cuenta
 #   request.session["register_type"] = register_type  # "usuario", "artista" o "sello"

    # Podés guardar más datos si querés:
    # request.session["nombre"] = nombre

    # Redirigir al home o al dashboard que corresponda
  #  return RedirectResponse(url="/", status_code=303)



#@app.post("/login")
#def login_user(request: Request, username: str = Form(...), password: str = Form(...)):
    # Simulamos obtener usuario (esto deberías conectarlo a tu base de datos real)
 #   dummy_user = {"username": "juan", "password": "1234", "type": "artist"}

  #  if username == dummy_user["username"] and password == dummy_user["password"]:
   #     request.session["user"] = {
    #        "username": dummy_user["username"],
     #       "type": dummy_user["type"]
      #  }
       # return RedirectResponse(url="/", status_code=303)

    # Si las credenciales no coinciden
#    return templates.TemplateResponse("login.html", {
 #       "request": request,
  #      "error": "Credenciales incorrectas"
   # })



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
    return await view.procesar_registro_view(
        request, name, username, email, password, password2,
        tipo_usuario, birthdate, country, terms)

@app.get("/login")
async def login(request: Request):
    return view.get_login_view(request)

# RUTA: Procesar login (POST)
@app.post("/login")
async def procesar_login(request: Request, username: str = Form(...), password: str = Form(...)):
    return await view.procesar_login_view(request, username, password)

@app.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return RedirectResponse("/", status_code=303)

# RUTA: Página principal (requiere saber si está logueado)
@app.get("/")
async def index(request: Request):
    return view.get_index_view(request)


@app.get("/debug_users")
async def debug_users(request: Request):
    return JSONResponse(content=USERS_DB)

@app.get("/clear_users")
async def clear_users():
    USERS_DB.clear()  # Esto vacía la lista de usuarios
    return JSONResponse(content={"message": "Usuarios vaciados correctamente."})




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

#@app.get("/producto")
#def producto(request: Request, id: int):
 #   return view.get_producto_view(request, id)

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


