import {Container, Title, Flex, Affix, Space} from "@mantine/core"
import {ColorSchemeToggle} from "../ColorSchemeToggle/ColorSchemeToggle";
import {useNavigate} from "react-router-dom";

export const Banner = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
        window.scrollTo(0, 0);
    }
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
                        <Title
                            order={1}
                            onClick={handleClick}
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            CarMarketPlace
                        </Title>
                        <ColorSchemeToggle />
                    </Flex>
                </Container>
            </Affix>
            <Space h={70}/>
        </>
    )
}