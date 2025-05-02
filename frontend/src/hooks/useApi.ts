import {useState, useEffect} from "react";
import axios from "axios";

export const useApi = <T,>(endpoint: string, params?: Record<string, any>) => {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        axios.get(endpoint, {params})
        .then((response) => {
            setData(response.data);
            console.log("Odpowiedź z API:", data)
        })
        .catch((error) => {
            console.log(error);
        })

    }, [endpoint, params]);

    return {data};
}