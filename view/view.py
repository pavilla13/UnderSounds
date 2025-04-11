from fastapi.templating import Jinja2Templates
from fastapi import APIRouter, Request
import json
from fastapi.responses import HTMLResponse



templates = Jinja2Templates(directory="view/templates")

class View():
    def __init__(self):
        pass

    def get_index_view(self, request: Request):
        return templates.TemplateResponse("index.html", {"request" : request})
    
    def get_tienda_view(self, request: Request):
        return templates.TemplateResponse("tienda.html", {"request" : request})

    def get_ayuda_view(self, request: Request):
        return templates.TemplateResponse("ayuda.html", {"request" : request})
    
    def get_terminos_view(self, request: Request):
        return templates.TemplateResponse("terminos.html", {"request" : request})