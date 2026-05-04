from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uvicorn
# from database import engine
# from models import Base

# Base.metadata.create_all(bind=engine)

app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")
DATABASE_URL = ""

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request,
        "index.html"
    )

@app.get("/leaders")
async def leaders_board(request: Request):
    return templates.TemplateResponse(
        request,
        "leaders_board.html"
    )

@app.get("/dev_message")
async def leaders_board(request: Request):
    return templates.TemplateResponse(
        request,
        "development_message.html"
    )

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)