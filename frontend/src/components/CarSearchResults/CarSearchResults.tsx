import { Paper, Text, Pagination, Center } from "@mantine/core";
import { useApi } from "../../hooks/useApi";
import { CarAdCard } from "../CarAdCard/CarAdCard";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import {ApiResponse, Car} from "./types";

export const CarSearchResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const brand = searchParams.get("brand") || "";
    const model = searchParams.get("model") || "";
    const year = searchParams.get("year") || "";
    const fuelType = searchParams.get("fuelType") || "";
    const bodyType = searchParams.get("bodyType") || "";

    const params = new URLSearchParams();
    if (brand) {params.append("brand", brand);}
    if (model) {params.append("model", model);}
    if (year) {params.append("year", year);}
    if (fuelType) {params.append("fuelType", fuelType);}
    if (bodyType) {params.append("bodyType", bodyType);}
    params.append("page", activePage.toString());

    const { data, loading, error } = useApi<ApiResponse>(
        `http://127.0.0.1:8000/api/caradcards?${params.toString()}`
    );

    const handlePageChange = (newPage: number) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("page", newPage.toString());
        setSearchParams(newSearchParams);
        window.scrollTo(0, 0);
    };

    useLayoutEffect(() => {
        if (!loading) {
            window.scrollTo(0, parseInt(sessionStorage.getItem("scrollPosition") || "0", 10));
        }
    }, [loading]);
    useEffect(() => {
        const pageFromURL = searchParams.get("page");
        const newPage = pageFromURL ? parseInt(pageFromURL, 10) : 1;
        if (newPage !== activePage) {
            setActivePage(newPage);
            sessionStorage.setItem("currentPage", newPage.toString());
        }
    }, [searchParams]);
    useEffect(() => {
        if (data?.pages) {
            setTotalPages(data.pages);
        }
    }, [data]);
    useEffect(() => {
        sessionStorage.setItem("currentPage", activePage.toString());
        setTotalPages(1)
    }, [activePage]);

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