import {useState, useEffect} from "react";
import axios, {AxiosError} from "axios";

export const useApi = <T>(endpoint: string, params?: Record<string, any>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        axios.get(endpoint, {params})
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
            .finally(() => setLoading(false));

    }, [endpoint, params]);

    return {data, loading, error};
}