from fastapi import APIRouter
from database import collection
from models.carAd import CarAd

car_router = APIRouter()

@car_router.post("/cars")
def add_car(car: CarAd):
    inserted_item = collection.insert_one(car.model_dump())
    return {"id": str(inserted_item.inserted_id)}

@car_router.get("/cars")
def get_cars():
    return list(collection.find({}, {"_id": 0}))

@car_router.get("/caradcards")
def get_car_ad_cards():
    return list(collection.find({}, {"_id": 0, "bodyType": 0}))