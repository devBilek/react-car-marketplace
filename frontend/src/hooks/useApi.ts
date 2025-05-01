import {useState, useEffect} from "react";
import axios from "axios";

interface Car {
    title: string
    price: number
    brand: string
    model: string
    productionYear: number
    fuelType: string
    bodyType: string
    mileage: number
    transmission: string
}
interface ApiResponse {
    data: Car[];
}

export const useApi = (): ApiResponse => {
    const [data, setData] = useState<Car[]>([]);

    useEffect(() => {
        axios.get<Car[]>("http://127.0.0.1:8000/cars")
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return {data};
}