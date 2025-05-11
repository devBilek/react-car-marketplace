import {Box, Divider, Flex, Group, Text, Title} from "@mantine/core";
import {SiAlwaysdata} from "react-icons/si";
import {MdLocalGasStation, MdSpeed} from "react-icons/md";
import {BsArrowDownUp} from "react-icons/bs";
import {FaCalendarAlt, FaCarSide} from "react-icons/fa";

interface CarGalleryProps {
    mileage: number;
    fuel_type: 'petrol' | 'diesel' | 'lpg' | 'electric' | 'hybrid';
    transmission: 'manual' | 'automatic' | 'semi-automatic';
    body_type: 'sedan' | 'hatchback' | 'suv' | 'coupe' | 'combi' | 'convertible' | 'van' | 'pickup';
    engine_power: number;
    production_year: number;
}

export const KeySpecs = ({mileage, fuel_type, transmission, body_type, engine_power, production_year}: CarGalleryProps) => {
    return (
        <>
            <Divider h='md' mt='lg'/>
            <Title order={3}>Most important information</Title>
            <Group justify='space-between'>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <SiAlwaysdata style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Mileage</Text>
                        <Text size='lg'>{mileage} KM</Text>
                    </Flex>
                </Box>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <MdLocalGasStation style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Fuel type</Text>
                        <Text size='lg'>{fuel_type}</Text>
                    </Flex>
                </Box>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <BsArrowDownUp style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Transmission</Text>
                        <Text size='lg'>{transmission}</Text>
                    </Flex>
                </Box>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <FaCarSide style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Body type</Text>
                        <Text size='lg'>{body_type}</Text>
                    </Flex>
                </Box>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <MdSpeed style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Engine power</Text>
                        <Text size='lg'>{engine_power} HP</Text>
                    </Flex>
                </Box>
                <Box h={120} w={140} p='md'>
                    <Flex justify='center' align='center' direction='column' w='100%'>
                        <FaCalendarAlt style={{fontSize: '40px'}}/>
                        <Text size='sm' mt='sm'>Production year</Text>
                        <Text size='lg'>{production_year}</Text>
                    </Flex>
                </Box>
            </Group>
        </>
    )
}