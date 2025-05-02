import {Grid, Text, Image, Title, Space, Paper, Divider, Box, Group, Flex, Spoiler, useMantineColorScheme} from "@mantine/core"
import {useParams} from "react-router-dom";
import {useApi} from "../../hooks/useApi";
import {CarAdType} from "./types";
import '@mantine/carousel/styles.css';
import {Carousel} from "@mantine/carousel";
import { SiAlwaysdata } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";

export const CarAd = () => {
    const params = useParams();
    const {data} = useApi<CarAdType>(`http://127.0.0.1:8000/api/carAd/${params.id}`);
    const {colorScheme} = useMantineColorScheme();

    if (!data) {
        return <Text>not found</Text>
    }

    return (
       <>
        <Grid mt='xl' mx="lg">
            <Grid.Col span={9}>
                <Paper bg={colorScheme === 'dark' ? 'dark.5' : 'dark.0'} radius='md'>
                    <Carousel height='100%' withIndicators>
                        <Carousel.Slide><Image
                            src={data.photos?.[0]}
                            alt="carPhoto"
                            w="80%"
                            mx="auto"
                        /></Carousel.Slide>
                        <Carousel.Slide>2</Carousel.Slide>
                        <Carousel.Slide>3</Carousel.Slide>
                    </Carousel>
                </Paper>
                <Divider h='md' mt='lg'/>
                <Title order={3}>Most important information</Title>
                <Group justify='space-between'>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <SiAlwaysdata style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Mileage</Text>
                            <Text size='lg'>{data.mileage} KM</Text>
                        </Flex>
                    </Box>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <MdLocalGasStation style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Fuel type</Text>
                            <Text size='lg'>{data.fuel_type}</Text>
                        </Flex>
                    </Box>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <BsArrowDownUp style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Transmission</Text>
                            <Text size='lg'>{data.transmission}</Text>
                        </Flex>
                    </Box>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <FaCarSide style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Body type</Text>
                            <Text size='lg'>{data.body_type}</Text>
                        </Flex>
                    </Box>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <MdSpeed style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Engine power</Text>
                            <Text size='lg'>{data.engine_power} HP</Text>
                        </Flex>
                    </Box>
                    <Box h={120} w={140} p='md'>
                        <Flex justify='center' align='center' direction='column' w='100%'>
                            <FaCalendarAlt style={{fontSize: '40px'}}/>
                            <Text size='sm' mt='sm'>Production year</Text>
                            <Text size='lg'>{data.production_year}</Text>
                        </Flex>
                    </Box>
                </Group>
                <Divider h='md' mt='lg'/>
                <Title order={3} mb='xs'>Description</Title>
                <Spoiler maxHeight={300} showLabel='Show more' hideLabel='Hide'>
                    <Text style={{ whiteSpace: 'pre-line' }}>{data.description}</Text>
                </Spoiler>

            </Grid.Col>
            <Grid.Col span={3} px='md'>
                <Title order={2}>{data.title}</Title>
                <Text>{data.brand} {data.model} {data.generation} - {data.production_year}</Text>
                <Space h='sm'/>
                <Title order={3} size='h1' c='blue'>{data.price} $</Title>
            </Grid.Col>
        </Grid>
       </>
    )
}