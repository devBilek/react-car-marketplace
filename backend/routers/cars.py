from bson import ObjectId
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
def get_car_ad_cards(
        brand: str | None = None,
        model: str | None = None,
        year: int | None = None,
        fuelType: str | None = None,
        bodyType: str | None = None
):
    projection = {
        "_id": 1,
        "photos": 1,
        "title": 1,
        "price": 1,
        "brand": 1,
        "model": 1,
        "production_year": 1,
        "fuel_type": 1,
        "mileage": 1,
        "transmission": 1
    }
    filters = {}

    if brand:
        filters["brand"] = brand
    if model:
        filters["model"] = model
    if year:
        filters["production_year"] = year
    if fuelType:
        filters["fuel_type"] = fuelType
    if bodyType:
        filters["body_type"] = bodyType

    car_ads = list(collection.find(filters, projection, collation={"locale": "pl", "strength": 2}))

    for car_ad in car_ads:
        car_ad["_id"] = str(car_ad["_id"])

    return car_ads

@car_router.get("/carAd/{car_ad_id}")
def get_car_ad_by_id(car_ad_id: str):
    return collection.find_one({"_id": ObjectId(car_ad_id)}, {"_id": 0})
