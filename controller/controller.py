from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from view.view import View

app = FastAPI()

view = View()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def index(request: Request):
    #return {"message": "Hello World"}
    return view.get_index_view(request)

@app.get("/tienda")
def tienda(request: Request):
    return view.get_tienda_view(request)