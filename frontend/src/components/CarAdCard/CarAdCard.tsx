import {Paper, Grid, Title, Text, Center} from "@mantine/core"
import { SiAlwaysdata } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";

interface Car {
    title: string,
    price: number,
    brand: string,
    model: string,
    productionYear: number,
    fuelType: string,
    bodyType: string,
    mileage: number,
    transmission: string
}

export const CarAdCard = ({ carData }: { carData: Car }) => {

    return (
        <Paper
            shadow='md'
            mb='md'
            mih={180}
            p='sm'
            withBorder='sm'
        >
            <Grid mb='md'>
                <Grid.Col span={4}>
                    aok
                </Grid.Col>
                <Grid.Col span={6}>
                    <Title order={3} size='lg'>{carData.title}</Title>
                    <Text mb='md'>{carData.brand} {carData.model}</Text>
                    <Grid mr='40%'>
                        <Grid.Col span={6}>
                            <Text><SiAlwaysdata /> {carData.mileage} km</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text><FaCalendarAlt /> {carData.productionYear}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text><MdLocalGasStation /> {carData.fuelType}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text><BsArrowDownUp /> {carData.transmission}</Text>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Center>
                        <Text c='blue' size='xl'>{carData.price} $</Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}