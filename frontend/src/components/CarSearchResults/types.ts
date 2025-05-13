export interface Car {
    _id: string;
    photos: Array<string>;
    title: string;
    price: number;
    brand: string;
    model: string;
    production_year: number;
    mileage: number;
    fuel_type: "petrol" | "diesel" | "lpg" | "electric" | "hybrid";
    transmission: "manual" | "automatic" | "semi-automatic";
}

export interface ApiResponse {
    items: Car[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}