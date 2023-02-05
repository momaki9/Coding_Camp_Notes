import { Code, Center } from "@chakra-ui/react";

const CodeBlock = ({ code }) => {
    return (
        <Center>
            <Code children={code}></Code>
        </Center>
    )
};

export default CodeBlock;