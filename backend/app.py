from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Request(BaseModel):
    latitude: float
    longitude: float


# ダミーデータ
trashcans = [
    {"id": 1, "latitude": 35.7137757, "longitude": 139.7969451, "location_description": "近くの公園に設置してあります"},
    {"id": 2, "latitude": 35.7143071, "longitude": 139.7963245, "location_description": "近くの交差点に設置してあります"},
    {"id": 3, "latitude": 35.7144253, "longitude": 139.7953445, "location_description": "近くの駅に設置してあります"},
    {"id": 4, "latitude": 35.714748, "longitude": 139.7952627, "location_description": "近くの商店街に設置してあります"},
    {"id": 5, "latitude": 35.7111474, "longitude": 139.7965377, "location_description": "近くの学校に設置してあります"},
    {"id": 6, "latitude": 35.7119654, "longitude": 139.7963265, "location_description": "近くの図書館に設置してあります"},
    {"id": 7, "latitude": 35.7124165, "longitude": 139.7963355, "location_description": "近くの公民館に設置してあります"},
    {"id": 8, "latitude": 35.7128409, "longitude": 139.7963711, "location_description": "近くの病院に設置してあります"},
    {"id": 9, "latitude": 35.7128488, "longitude": 139.7960204, "location_description": "近くのスーパーに設置してあります"},
    {"id": 10, "latitude": 35.7112601, "longitude": 139.7963721, "location_description": "近くのコンビニに設置してあります"},
]

requests = [
    {"id": 1, "latitude": 35.71279354903134, "longitude": 139.79717373847964},
    {"id": 2, "latitude": 35.7132465360125, "longitude": 139.79656219482425},
]


@app.get("/api")
def read_root():
    return {"Hello": "World"}


@app.get("/api/trashcans")
def get_trashcans():
    return {"trashcans": trashcans}


@app.get("/api/requests")
def get_requests():
    return {"requests": requests}


@app.post("/api/requests")
def create_request(request: Request):
    new_id = len(requests) + 1
    new_request = {"id": new_id, "latitude": request.latitude, "longitude": request.longitude}
    requests.append(new_request)
    return {"request": new_request}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
