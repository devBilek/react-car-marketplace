import {Divider, Spoiler, Text, Title} from "@mantine/core";

interface DescriptionSectionProps {
    description: string;
}

export const DescriptionSection = ({description}: DescriptionSectionProps) => {
    return (
        <>
            <Divider h='md' mt='lg'/>
            <Title order={3} mb='xs'>Description</Title>
            <Spoiler maxHeight={300} showLabel='Show more' hideLabel='Hide'>
                <Text style={{ whiteSpace: 'pre-line' }}>{description}</Text>
            </Spoiler>
        </>
    )
}