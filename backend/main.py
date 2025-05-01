from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection = db["cars"]

class CarAd(BaseModel):
    title: str
    price: int
    brand: str
    model: str
    productionYear: int
    fuelType: str
    bodyType: str
    mileage: int
    transmission: str

@app.post("/cars")
def add_car(car: CarAd):
    inserted_item = collection.insert_one(car.model_dump())
    return {"id": str(inserted_item.inserted_id)}

@app.get("/cars")
def get_cars():
    return list(collection.find({}, {"_id": 0}))