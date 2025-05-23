import {Paper, Grid, Title, Text, Center, Image} from "@mantine/core"
import { SiAlwaysdata } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {Car} from '../../types/carAdCardTypes'

export const CarAdCard = ({ carData }: { carData: Car }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
        navigate(`/car-ad/${carData._id}`)
    }

    return (
        <Paper
            onClick={handleClick}
            shadow='md'
            mb='md'
            mih={180}
            p='sm'
            withBorder
            style={{cursor: 'pointer'}}
        >
            <Grid my='sm'>
                <Grid.Col span={3}>
                    {carData.photos?.[0] ?
                        <Image src={carData.photos?.[0]} fallbackSrc='https://placehold.co/250x180?text=Photo error' alt="carPhoto" radius='sm' h={180} />
                        :
                        <Image src='https://placehold.co/250x180?text=No photo' alt="carPhoto" radius='sm' h={180} />
                    }
                </Grid.Col>
                <Grid.Col span={7}>
                    <Title order={3} size='lg'>{carData.title}</Title>
                    <Text mb='md'>{carData.brand} {carData.model}</Text>
                    <Grid mr='40%'>
                        <Grid.Col span={6}>
                            <Text><SiAlwaysdata /> {carData.mileage} km</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text><FaCalendarAlt /> {carData.production_year}</Text>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Text><MdLocalGasStation /> {carData.fuel_type}</Text>
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