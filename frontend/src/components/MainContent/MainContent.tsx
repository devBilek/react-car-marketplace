import {Container} from "@mantine/core"
import {ReactNode} from "react";

interface MainContentProps {
    children: ReactNode
    size?: string
}

export const MainContent = ({children, size = "lg"}: MainContentProps) => {
    return (
        <Container
            size={size}
            mih={1200}
            mt='md'
            p='md'
            styles={{
                root: {
                    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
                }
            }}
        >
            {children}
        </Container>
    )
}