from enum import Enum
from typing import Optional
from pydantic import BaseModel


class FuelType(str, Enum):
    PETROL = "petrol"
    DIESEL = "diesel"
    LPG = "lpg"
    ELECTRIC = "electric"
    HYBRID = "hybrid"


class BodyType(str, Enum):
    SEDAN = "sedan"
    HATCHBACK = "hatchback"
    SUV = "suv"
    COUPE = "coupe"
    COMBI = "combi"
    CONVERTIBLE = "convertible"
    VAN = "van"
    PICKUP = "pickup"


class TransmissionType(str, Enum):
    MANUAL = "manual"
    AUTOMATIC = "automatic"
    SEMI_AUTOMATIC = "semi-automatic"


class DriveType(str, Enum):
    FWD = "front-wheel drive"
    RWD = "rear-wheel drive"
    AWD = "all-wheel drive"


class CarCondition(str, Enum):
    NEW = "new"
    USED = "used"
    DAMAGED = "damaged"


class CarAd(BaseModel):
    # Basic information
    title: str
    price: int
    brand: str
    model: str
    generation: Optional[str] = None  # np. "VW Golf VII"
    production_year: int
    mileage: int  # w km
    condition: CarCondition

    # Technical details
    fuel_type: FuelType
    engine_capacity: Optional[float] = None  # w cm3
    engine_power: Optional[int] = None  # w KM
    body_type: BodyType
    transmission: TransmissionType
    drive_type: Optional[DriveType] = None
    emission_standard: Optional[str] = None  # np. "Euro 6"

    # Additional features
    color: Optional[str] = None
    country_of_origin: Optional[str] = None
    vin: Optional[str] = None
    number_of_doors: Optional[int] = None
    number_of_seats: Optional[int] = None

    # Equipment/options
    features: Optional[list[str]] = None  # np. ["ABS", "klimatyzacja", "czujnik parkowania"]

    # Seller information
    is_private_seller: bool
    phone_number: Optional[str] = None
    city: Optional[str] = None

    # Description and media
    description: Optional[str] = None
    photos: Optional[list[str]] = None  # lista URL do zdjęć

    # Additional metadata
    is_negotiable: Optional[bool] = None
    is_leasing_possible: Optional[bool] = None
    first_registration_date: Optional[str] = None  # data pierwszej rejestracji
    warranty_until: Optional[str] = None  # data ważności gwarancji
    service_history: Optional[bool] = None  # czy posiada historię serwisową