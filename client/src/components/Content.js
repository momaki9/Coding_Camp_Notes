import { Container } from "@chakra-ui/react";

const Content = ({text}) => {
    return (
        <Container padding={'1'}>
            {text}
        </Container>
    )
};

export default Content;