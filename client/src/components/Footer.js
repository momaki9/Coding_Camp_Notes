import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center
} from "@chakra-ui/react";

const Footer = ({ previousPage, previousTitle, nextPage, nextTitle }) => {
    return (
        <Center>
            <Box alignItems={'center'}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={previousPage} title={previousTitle}>Previous Topic</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={nextPage} title={nextTitle}>Next Topic</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </Center>
    )
}

export default Footer;