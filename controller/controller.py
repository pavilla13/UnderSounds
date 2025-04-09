from fastapi import FastAPI, Request
from view.view import View

app = FastAPI()

view = View()

@app.get("/")
def index(request: Request):
    #return {"message": "Hello World"}
    return view.get_index_view(request)