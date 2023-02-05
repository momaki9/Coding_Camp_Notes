import { Divider, Stack, Text } from "@chakra-ui/react"

const PageDivider = () => {
    return (
        <Stack direction='row' h='20px' p={4}>
            <Divider orientation='vertical' />
        </Stack>
    )
};

export default PageDivider;