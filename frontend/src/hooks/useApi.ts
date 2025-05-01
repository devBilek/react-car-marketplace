import {useState, useEffect} from "react";
import axios from "axios";

interface CarAd {
    title: string
    price: number
    brand: string
    model: string
    productionYear: number
    fuelType: string
    mileage: number
    transmission: string
}
interface ApiResponse {
    data: Car[];
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