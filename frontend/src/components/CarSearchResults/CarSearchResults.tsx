import {Paper, Title} from "@mantine/core"
import {useApi} from "../../hooks/useApi";
import {CarAdCard} from "../CarAdCard/CarAdCard";

export const CarSearchResults = () => {
    const {data} = useApi();

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