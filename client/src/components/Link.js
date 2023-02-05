import { Link, Wrap, WrapItem } from "@chakra-ui/react";
import { FiExternalLink } from 'react-icons/fi';

const ExternalLink = ({ hyperLink, linkText }) => {
    return (
        <Wrap justify='flex-start'>
            <WrapItem>
                <Link href={hyperLink} isExternal>{linkText}</Link>
            </WrapItem>
            <WrapItem>
                <FiExternalLink />
            </WrapItem>
        </Wrap>
    )
}

export default ExternalLink;