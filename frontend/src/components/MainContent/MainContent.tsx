import {Container} from "@mantine/core"
import {SearchCarForm} from "../SearchCarForm/SearchCarForm";

export const MainContent = () => {
    return (
        <Container
            size='lg'
            mih={1200}
            mt='md'
            p='md'
            styles={{
                root: {
                    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
                }
            }}
        >
            <SearchCarForm/>
        </Container>
    )
}