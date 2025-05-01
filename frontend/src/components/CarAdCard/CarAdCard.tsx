import {Paper, Grid, Title, Text} from "@mantine/core"

interface Car {
    title: string,
    price: number,
    brand: string,
    model: string,
    productionYear: number,
    fuelType: string,
    bodyType: string,
    carData?: any
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
                <Grid.Col span={3}>
                    aok
                </Grid.Col>
                <Grid.Col span={7}>
                    <Title order={3} mb='md'>{carData.title}</Title>
                    <Grid mr='xl'>
                        <Grid.Col span={6}>
                            <Text>{carData.brand} {carData.model}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>{carData.productionYear}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>{carData.fuelType}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text>{carData.bodyType}</Text>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text c='blue' size='xl'>{carData.price} $</Text>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}