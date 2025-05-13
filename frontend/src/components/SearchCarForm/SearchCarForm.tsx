import {Paper, Autocomplete, Grid, Title, Button, Flex} from "@mantine/core"
import {useForm} from "@mantine/form"
import {useNavigate} from "react-router-dom";

export const SearchCarForm = () => {
    const form = useForm({
        initialValues: {
            brand: '',
            model: '',
            year: '',
            fuelType: '',
            bodyType: ''
        },
        //todo - validation
    })

    const navigate = useNavigate();

    const handleReset = () => {
        form.reset()
        navigate(`/search-results?page=1`);
    }
    const handleSubmit = (values: typeof form.values) => {
        const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([_, value]) => value !== null && value !== '')
        );
        const searchParams = new URLSearchParams(filteredValues);
        searchParams.append("page", '1');
        navigate(`/search-results?${searchParams}`);
    }

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
                <form onSubmit={form.onSubmit(handleSubmit)} onReset={handleReset}>
                    <Grid>
                        <Grid.Col span={6}>
                            <Autocomplete
                                label='Car Brand'
                                placeholder='Car Brand'
                                data={["audi", "bmw", "skoda"]}
                                key={form.key('brand')}
                                {...form.getInputProps("brand")}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Autocomplete
                                label='Car Model'
                                placeholder='Car Model'
                                key={form.key('model')}
                                {...form.getInputProps("model")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Production Year'
                                placeholder='Production Year'
                                key={form.key('year')}
                                {...form.getInputProps("year")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Fuel Type'
                                placeholder='Fuel Type'
                                key={form.key('fuelType')}
                                {...form.getInputProps("fuelType")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Autocomplete
                                label='Body Type'
                                placeholder='Body Type'
                                key={form.key('bodyType')}
                                {...form.getInputProps("bodyType")}
                            />
                        </Grid.Col>
                    </Grid>
                    <Flex justify='flex-end' my='sm' gap='xs'>
                        <Button type="reset">
                            Reset
                        </Button>
                        <Button type='submit'>
                            Find
                        </Button>
                    </Flex>

                </form>
            </Paper>
        </>
    )
}