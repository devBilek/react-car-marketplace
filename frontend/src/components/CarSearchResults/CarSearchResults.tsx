import {Paper, Title} from "@mantine/core"
import {useApi} from "../../hooks/useApi";

export const CarSearchResults = () => {
    const {data} = useApi();

    return (
        <>
            <Paper
                shadow="md"
                mt='xl'
                p='md'
            >
                {data.map((car, index) => (
                    <Title key={index}>{car.model}</Title>
                ))}
            </Paper>
        </>
    )
}