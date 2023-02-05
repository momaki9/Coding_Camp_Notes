import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center
} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Center>
            <Box alignItems={'center'}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Previous Topic</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Next Topic</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Center>
    )
}

export default Footer;