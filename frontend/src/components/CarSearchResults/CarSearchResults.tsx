import {Paper, Text} from "@mantine/core"
import {useApi} from "../../hooks/useApi";
import {CarAdCard} from "../CarAdCard/CarAdCard";

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
    const {data} = useApi<Car[]>("http://127.0.0.1:8000/api/caradcards");
    console.log("Received data:", data)

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