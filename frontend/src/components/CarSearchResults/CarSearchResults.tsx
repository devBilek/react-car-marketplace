import {Paper, Text, Pagination, Center} from "@mantine/core"
import {useWindowScroll} from "@mantine/hooks";
import {useApi} from "../../hooks/useApi";
import {CarAdCard} from "../CarAdCard/CarAdCard";
import {useSearchParams, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

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

interface ApiResponse {
    items: Car[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}

export const CarSearchResults = () => {
    const [searchParams] = useSearchParams();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [_, scrollTo] = useWindowScroll()
    const {pathname} = useLocation();


    const brand = searchParams.get('brand') || '';
    const model = searchParams.get('model') || '';
    const year = searchParams.get('year') || '';
    const fuelType = searchParams.get('fuelType') || '';
    const bodyType = searchParams.get('bodyType') || '';

    const params = new URLSearchParams();
    if (brand) {params.append('brand', brand);}
    if (model) {params.append('model', model);}
    if (year) {params.append('year', year);}
    if (fuelType) {params.append('fuelType', fuelType);}
    if (bodyType) {params.append('bodyType', bodyType);}
    params.append('page', activePage.toString());

    const {data, loading, error} = useApi<ApiResponse>(`http://127.0.0.1:8000/api/caradcards?${params.toString()}`);

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, [pathname]);

    useEffect(() => {
        if(data?.pages) {
            setTotalPages(data?.pages);
        }
        if (!loading) {
            scrollTo({y: 0})
        }
    }, [data]);
    useEffect(() => {
        setActivePage(1);
    }, [brand, model, year, fuelType, bodyType]);

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }
    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (!data || data.items.length === 0) {
        return <Text>No cars found</Text>;
    }
    return (
        <Paper
            shadow="md"
            mt='xl'
            p='md'
        >
            {data.items.map((car: Car, index: number) => (
                <CarAdCard carData={car} key={index} />
            ))}
            <Center my='lg'>
                <Pagination
                    value={activePage}
                    total={totalPages}
                    onChange={setActivePage}
                    siblings={1}
                    boundaries={1}
                />
            </Center>
        </Paper>
    )
}