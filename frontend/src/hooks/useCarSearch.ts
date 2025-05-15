import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useApi} from "./useApi";
import {ApiResponse} from "../types/carAdCardTypes";

export const useCarSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activePage, setActivePage] = useState<number>(1);

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
    useEffect(() => {
        const pageFromURL = searchParams.get("page");
        const newPage = pageFromURL ? parseInt(pageFromURL, 10) : 1;
        if (newPage !== activePage) {
            setActivePage(newPage);
            sessionStorage.setItem("currentPage", newPage.toString());
        }
    }, [searchParams]);
    useEffect(() => {
        sessionStorage.setItem("currentPage", activePage.toString());
    }, [activePage]);

    return {
        data,
        loading,
        error,
        activePage,
        totalPages: data?.pages || 1,
        handlePageChange
    }
}