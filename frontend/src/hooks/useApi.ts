import {useState, useEffect} from "react";
import axios from "axios";

interface CarAd {
    _id: string;

    photos: Array<string>;

    title: string;
    price: number;
    brand: string;
    model: string;
    production_year: number;
    mileage: number;

    fuel_type: 'petrol' | 'diesel' | 'lpg' | 'electric' | 'hybrid';
    transmission: 'manual' | 'automatic' | 'semi-automatic';
}
interface ApiResponse {
    data: CarAd[];
}

export const useApi = (): ApiResponse => {
    const [data, setData] = useState<CarAd[]>([]);

    useEffect(() => {
        axios.get<CarAd[]>("http://127.0.0.1:8000/api/caradcards")
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    return {data};
}