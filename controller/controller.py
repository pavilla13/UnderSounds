from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from view.view import View

app = FastAPI()

view = View()

app.mount("/static", StaticFiles(directory="static"), name="static")

#app.mount("/partials", StaticFiles(directory="view/partials"), name="partials")


@app.get("/")
def index(request: Request):
    #return {"message": "Hello World"}
    return view.get_index_view(request)

@app.get("/album")
def album(request: Request):
    return view.get_album_view(request)

@app.get("/amigoLista")
def amigoLista(request: Request):
    return view.get_amigoLista_view(request)

@app.get("/amigos")
def amigos(request: Request):
    return view.get_amigos_view(request)

@app.get("/artistas")
def artistas(request: Request):
    return view.get_artistas_view(request)

@app.get("/ayuda")
def ayuda(request: Request):
    return view.get_ayuda_view(request)

@app.get("/cancion")
def cancion(request: Request):
    return view.get_cancion_view(request)

@app.get("/checkout")
def checkout(request: Request):
    return view.get_checkout_view(request)

@app.get("/edit_perfil")
def edit_perfil(request: Request):
    return view.get_edit_perfil_view(request)

@app.get("/favoritos")
def favoritos(request: Request):
    return view.get_favoritos_view(request)

@app.get("/generos_especifico")
def generos_especifico(request: Request):
    return view.get_generos_especifico_view(request)

@app.get("/generos")
def generos(request: Request):
    return view.get_generos_view(request)

@app.get("/login")
def login(request: Request):
    return view.get_login_view(request)

@app.get("/mis_compras")
def mis_compras(request: Request):
    return view.get_mis_compras_view(request)

@app.get("/producto")
def producto(request: Request):
    return view.get_producto_view(request)

@app.get("/recover")
def recover(request: Request):
    return view.get_recover_view(request)

@app.get("/register")
def register(request: Request):
    return view.get_register_view(request)

@app.get("/resumen_compra")
def resumen_compra(request: Request):
    return view.get_resumen_compra_view(request)

@app.get("/search")
def search(request: Request):
    return view.get_search_view(request)

@app.get("/sellos")
def sellos(request: Request):
    return view.get_sellos_view(request)

@app.get("/terminos")
def terminos(request: Request):
    return view.get_terminos_view(request)

@app.get("/tienda")
def tienda(request: Request):
    return view.get_tienda_view(request)

