import {useState, useEffect} from "react";
import axios from "axios";

interface Car {
    brand: string,
    model: string
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