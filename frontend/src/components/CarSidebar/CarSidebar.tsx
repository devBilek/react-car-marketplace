import {Space, Text, Title} from "@mantine/core";

interface CarSidebarProps {
    title: string;
    brand: string;
    model: string;
    generation: string;
    production_year: number;
    price: number;
}

export const CarSidebar = ({title, brand, model, generation, production_year, price}: CarSidebarProps) => {

    return (
        <>
            <Title order={2}>{title}</Title>
            <Text>{brand} {model} {generation} - {production_year}</Text>
            <Space h='sm'/>
            <Title order={3} size='h1' c='blue'>{price} $</Title>
        </>

    )
}
