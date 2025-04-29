import {Paper, Autocomplete, Grid, Title} from "@mantine/core"

export const SearchCarForm = () => {
    return (
        <>
            <Paper
                shadow='md'
                p='sm'
            >
                <Title
                    order={2}
                    mb='md'
                >
                    Find your car
                </Title>
                <form>
                    <Grid>
                        <Grid.Col span={6}>
                            <Autocomplete
                                label='Car Brand'
                                placeholder='Car Brand'
                                data={["audi", "bmw", "skoda"]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Autocomplete
                                label='Car Model'
                                placeholder='Car Model'
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Production Year'
                                placeholder='Production Year'
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Fuel Type'
                                placeholder='Fuel Type'
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Body Type'
                                placeholder='Body Type'
                            />
                        </Grid.Col>

                    </Grid>
                </form>
            </Paper>
        </>
    )
}