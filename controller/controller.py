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

@app.get("/tienda")
def tienda(request: Request):
    return view.get_tienda_view(request)

@app.get("/ayuda")
def ayuda(request: Request):
    return view.get_ayuda_view(request)

@app.get("/terminos")
def terminos(request: Request):
    return view.get_terminos_view(request)

@app.get("/login")
def login(request: Request):
    return view.get_login_view(request)

@app.get("/register")
def register(request: Request):
    return view.get_register_view(request)

@app.get("/recover")
def recover(request: Request):
    return view.get_recover_view(request)