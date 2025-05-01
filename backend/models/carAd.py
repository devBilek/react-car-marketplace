from pydantic import BaseModel

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