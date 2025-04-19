from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from model import model
from model.model import Model
from view.view import View
from fastapi.responses import RedirectResponse
from starlette.middleware.sessions import SessionMiddleware

app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key="clave-secreta-super-segura")

model = Model()
view = View()

app.mount("/static", StaticFiles(directory="static"), name="static")





@app.post("/register")
async def registrar_usuario(
    request: Request,
    name: str = Form(...),
    username: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    password2: str = Form(...),
    register_type: str = Form(...)  # este valor viene del <select>
):
    # 🔐 Acá deberías guardar el nuevo usuario en la base de datos...
    # 🧠 También podés guardar en sesión el tipo de cuenta
    request.session["register_type"] = register_type  # "usuario", "artista" o "sello"

    # Podés guardar más datos si querés:
    # request.session["nombre"] = nombre

    # Redirigir al home o al dashboard que corresponda
    return RedirectResponse(url="/", status_code=303)








@app.get("/")
async def index(request: Request):
    return view.get_index_view(request)

@app.get("/album")
async def album(request: Request):
    return view.get_album_view(request)

@app.get("/amigoLista")
async def amigoLista(request: Request):
    return view.get_amigoLista_view(request)

@app.get("/amigos")
async def amigos(request: Request):
    return view.get_amigos_view(request)

@app.get("/artistas")
async def artistas(request: Request):
    return view.get_artistas_view(request)

@app.get("/ayuda")
async def ayuda(request: Request):
    return view.get_ayuda_view(request)

@app.get("/cancion")
async def cancion(request: Request):
    return view.get_cancion_view(request)

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
    return view.get_generos_especifico_view(request)

@app.get("/generos")
async def generos(request: Request):
    return view.get_generos_view(request)

@app.get("/login")
async def login(request: Request):
    return view.get_login_view(request)

@app.get("/mis_compras")
async def mis_compras(request: Request):
    return view.get_mis_compras_view(request)

@app.get("/producto")
async def producto(request: Request):
    return view.get_producto_view(request)

#@app.get("/producto")
#def producto(request: Request, id: int):
 #   return view.get_producto_view(request, id)

@app.get("/recover")
async def recover(request: Request):
    return view.get_recover_view(request)

@app.get("/register")
async def register(request: Request):
    return view.get_register_view(request)

@app.get("/resumen_compra")
async def resumen_compra(request: Request):
    return view.get_resumen_compra_view(request)

@app.get("/search")
async def search(request: Request):
    return view.get_search_view(request)

@app.get("/sellos")
async def sellos(request: Request):
    return view.get_sellos_view(request)

@app.get("/terminos")
async def terminos(request: Request):
    return view.get_terminos_view(request)

@app.get("/tienda")
async def tienda(request: Request):
    return view.get_tienda_view(request)

@app.get("/prueba")
async def prueba(request: Request):
    canciones = model.get_canciones()
    return view.get_prueba_view(request, canciones)

