import { Paper, Image, useMantineColorScheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import '@mantine/carousel/styles.css';

interface CarGalleryProps {
    photos: string[];
}

export const CarGallery = ({photos}: CarGalleryProps) => {
    const {colorScheme} = useMantineColorScheme();

    return (
        <Paper bg={colorScheme === 'dark' ? 'dark.5' : 'dark.0'} radius='md' mih={450} mah={500}>
            <Carousel height='100%' withIndicators>
                {photos.length >= 1 ?
                    photos.map((photo, index) => (
                        <Carousel.Slide key={index} h='100%'>
                            <Image src={photo} fallbackSrc='https://placehold.co/200x100?text=Photo error' alt='carPhoto' mx='auto' w='80%' mih={500}/>
                        </Carousel.Slide>
                    ))
                    :
                    <Carousel.Slide h='100%'>
                        <Image src='https://placehold.co/200x100?text=No photo' alt='carPhoto' mx='auto' w='80%' mih={500}/>
                    </Carousel.Slide>
                }
            </Carousel>
        </Paper>
    )
}
