// Enums
export enum FuelType {
    PETROL = "petrol",
    DIESEL = "diesel",
    LPG = "lpg",
    ELECTRIC = "electric",
    HYBRID = "hybrid"
}

export enum BodyType {
    SEDAN = "sedan",
    HATCHBACK = "hatchback",
    SUV = "suv",
    COUPE = "coupe",
    COMBI = "combi",
    CONVERTIBLE = "convertible",
    VAN = "van",
    PICKUP = "pickup"
}

export enum TransmissionType {
    MANUAL = "manual",
    AUTOMATIC = "automatic",
    SEMI_AUTOMATIC = "semi-automatic"
}

export enum DriveType {
    FWD = "front-wheel drive",
    RWD = "rear-wheel drive",
    AWD = "all-wheel drive"
}

export enum CarCondition {
    NEW = "new",
    USED = "used",
    DAMAGED = "damaged"
}

// Main interface
export interface CarAdType {
    // Basic information
    title: string;
    price: number;
    brand: string;
    model: string;
    generation: string;  // np. "VW Golf VII"
    production_year: number;
    mileage: number;  // w km
    condition: CarCondition;

    // Technical details
    fuel_type: FuelType;
    engine_capacity: number;  // w cm3
    engine_power: number;  // w KM
    body_type: BodyType;
    transmission: TransmissionType;
    drive_type?: DriveType | null;
    emission_standard?: string | null;  // np. "Euro 6"

    // Additional features
    color: string;
    country_of_origin: string;
    vin: string;
    number_of_doors: number;
    number_of_seats: number;

    // Equipment/options
    features?: string[] | null;  // np. ["ABS", "klimatyzacja", "czujnik parkowania"]

    // Seller information
    is_private_seller: boolean;
    phone_number: string;
    city: string;

    // Description and media
    description?: string | null;
    photos?: string[] | null;  // lista URL do zdjęć

    // Additional metadata
    is_negotiable?: boolean | null;
    is_leasing_possible?: boolean | null;
    first_registration_date?: string | null;  // data pierwszej rejestracji
    warranty_until?: string | null;  // data ważności gwarancji
    service_history?: boolean | null;  // czy posiada historię serwisową
}