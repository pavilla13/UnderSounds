from fastapi.templating import Jinja2Templates
from fastapi import Request
import json
templates = Jinja2Templates(directory="view/templates")

class View():
    def __init__(self):
        pass
    def get_index_view(self, request: Request):
        return templates.TemplateResponse("index.html", {"request" : request})