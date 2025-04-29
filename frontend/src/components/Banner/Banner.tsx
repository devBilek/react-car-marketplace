import {Container, Title, Flex, Affix, Space} from "@mantine/core"
import {ColorSchemeToggle} from "../ColorSchemeToggle/ColorSchemeToggle";

export const Banner = () => {
    return (
        <>
            <Affix position={{top: 0, left: 0, right: 0}}>
                <Container
                    fluid
                    bg="var(--mantine-color-body)"
                    h={70}
                    styles={{
                        root: {
                            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
                        }
                    }}
                >
                    <Flex w='100%' h='100%' align='center' justify='space-between'>
                        <Title order={1}>CarMarketPlace</Title>
                        <ColorSchemeToggle />
                    </Flex>
                </Container>
            </Affix>
            <Space h={70}/>
        </>
    )
}