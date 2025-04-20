from fastapi.templating import Jinja2Templates
from fastapi import APIRouter, Request
import json
from fastapi.responses import HTMLResponse



templates = Jinja2Templates(directory="view/templates")

class View():
    def __init__(self):
        pass

    #def get_index_view(self, request: Request):
     #   tipo_usuario = request.session.get("register_type")
      #  return templates.TemplateResponse("index.html", {
       #     "request": request,
        #    "tipo_usuario": tipo_usuario}) 

    def get_index_view(self, request: Request):
        tipo_usuario = request.session.get("register_type") 
        return templates.TemplateResponse("index.html", {
            "request": request,
            "tipo_usuario": tipo_usuario })
    
    def get_album_view(self, request: Request):
        return templates.TemplateResponse("album.html", {"request" : request})
    
    def get_amigoLista_view(self, request: Request):
        return templates.TemplateResponse("amigoLista.html", {"request" : request})
    
    def get_amigos_view(self, request: Request):
        return templates.TemplateResponse("amigos.html", {"request" : request})
    
    def get_artistas_view(self, request: Request):
        return templates.TemplateResponse("artistas.html", {"request" : request})
    
    def get_ayuda_view(self, request: Request):
        return templates.TemplateResponse("ayuda.html", {"request" : request})
    
    def get_cancion_view(self, request: Request, canciones):
        canciones_list = json.loads(canciones)
        return templates.TemplateResponse("cancion.html", {"request" : request, "canciones": canciones_list})
    
    def get_checkout_view(self, request: Request):
        return templates.TemplateResponse("checkout.html", {"request" : request})
    
    def get_edit_perfil_view(self, request: Request):
        return templates.TemplateResponse("edit_perfil.html", {"request" : request})
    
    def get_favoritos_view(self, request: Request):
        return templates.TemplateResponse("favoritos.html", {"request" : request})
    
    def get_generos_especifico_view(self, request: Request):
        return templates.TemplateResponse("generos especifico.html", {"request" : request})
    
    def get_generos_view(self, request: Request):
        return templates.TemplateResponse("generos.html", {"request" : request}) 

    def get_login_view(self, request: Request):
        return templates.TemplateResponse("login.html", {"request" : request})
    
    def get_mis_compras_view(self, request: Request):
        return templates.TemplateResponse("mis_compras.html", {"request" : request})
    
    def get_producto_view(self, request: Request):
        return templates.TemplateResponse("producto.html", {"request" : request})
    
    #def get_producto_view(self, request: Request, id: int):
     #   return templates.TemplateResponse("producto.html", {
      #      "request": request,
       #     "id": id
        #})
    
    def get_recover_view(self, request: Request):
        return templates.TemplateResponse("recover.html", {"request" : request})
    
    def get_register_view(self, request: Request):
        return templates.TemplateResponse("register.html", {
            "request": request}) 

    def get_resumen_compra_view(self, request: Request):
        return templates.TemplateResponse("resumen_compra.html", {"request" : request})  

    def get_search_view(self, request: Request):
        return templates.TemplateResponse("search.html", {"request" : request})
    
    def get_sellos_view(self, request: Request):
        return templates.TemplateResponse("sellos.html", {"request" : request})
    
    def get_terminos_view(self, request: Request):
        return templates.TemplateResponse("terminos.html", {"request" : request})
    
    def get_tienda_view(self, request: Request):
        return templates.TemplateResponse("tienda.html", {"request" : request})
    
    def get_prueba_view(self, request: Request, canciones):
        canciones_list = json.loads(canciones)
        return templates.TemplateResponse("prueba.html", {"request" : request, "canciones": canciones_list})
    