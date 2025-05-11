import { Paper, Image, useMantineColorScheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import '@mantine/carousel/styles.css';

interface CarGalleryProps {
    photos: string[];
}

export const CarGallery = ({photos}: CarGalleryProps) => {
    const {colorScheme} = useMantineColorScheme();

    return (
        <Paper bg={colorScheme === 'dark' ? 'dark.5' : 'dark.0'} radius='md'>
            <Carousel height='100%' withIndicators>
                <Carousel.Slide><Image
                    src={photos?.[0]}
                    alt="carPhoto"
                    w="80%"
                    mx="auto"
                /></Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
        </Paper>
    )
}
