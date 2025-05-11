import {Paper, Text} from "@mantine/core"
import {useApi} from "../../hooks/useApi";
import {CarAdCard} from "../CarAdCard/CarAdCard";
import {useSearchParams} from "react-router-dom";

interface Car {
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

export const CarSearchResults = () => {
    const [searchParams] = useSearchParams();

    const params = []
    const brand = searchParams.get('brand') || '';
    const model = searchParams.get('model') || '';
    const year = searchParams.get('year') || '';
    const fuelType = searchParams.get('fuelType') || '';
    const bodyType = searchParams.get('bodyType') || '';

    if (brand) {params.push(`brand=${brand}`);}
    if (model) {params.push(`model=${model}`);}
    if (year) {params.push(`year=${year}`);}
    if (fuelType) {params.push(`fuelType=${fuelType}`);}
    if (bodyType) {params.push(`bodyType=${bodyType}`);}
    params.join('&');

    const {data} = useApi<Car[]>(`http://127.0.0.1:8000/api/caradcards?${params}`);

    if (!data || data.length === 0) {
        return <Text>No cars found</Text>;
    }

    return (
        <>
            <Paper
                shadow="md"
                mt='xl'
                p='md'
            >
                {data.map((car: any, index: number) => (
                    <CarAdCard carData={car} key={index} />
                ))}
            </Paper>
        </>
    )
}