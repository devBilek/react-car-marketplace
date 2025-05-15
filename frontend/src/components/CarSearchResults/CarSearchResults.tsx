import { Paper, Text, Pagination, Center } from "@mantine/core";
import { useCarSearch } from "../../hooks/useCarSearch";
import { CarAdCard } from "../CarAdCard/CarAdCard";
import { useLayoutEffect } from "react";
import {Car} from '../../types/carAdCardTypes'

export const CarSearchResults = () => {
    const {
        data,
        loading,
        error,
        activePage,
        totalPages,
        handlePageChange,
    } = useCarSearch();

    useLayoutEffect(() => {
        if (!loading) {
            window.scrollTo(0, parseInt(sessionStorage.getItem("scrollPosition") || "0", 10));
        }
    }, [loading]);

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
        <Paper shadow="md" mt="xl" p="md">
            {data.items.map((car: Car, index: number) => (
                <CarAdCard carData={car} key={index} />
            ))}
            <Center my="lg">
                <Pagination
                    value={activePage}
                    total={totalPages}
                    onChange={handlePageChange}
                    siblings={1}
                    boundaries={1}
                />
            </Center>
        </Paper>
    );
};