import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PageHeading from "../components/Heading";
import PageDivider from "../components/PageDivider";
import Content from "../components/Content";
import JSONNotes from "../library/mern.json";
import {
    Image,
    Stack,
    Center
} from "@chakra-ui/react";

import mernFolderss from "../assets/image/mernFolderStructure.png";
import mernFolderss2 from "../assets/image/mernFolderStructure2.png";
import mernFolderss3 from "../assets/image/mernFolderStructure3.png";

const MERN = () => {
    return (
        <>
            <Header />
            <Navigation />
            <PageHeading title={JSONNotes.title} />
            <PageDivider />
            <Content text={JSONNotes.folderLayout} />
            <PageDivider />
            <Center>
            <Stack direction={'row'} marginBottom={'2%'}>
                <Image src={mernFolderss} height={'min-content'}/>
                <Image src={mernFolderss2} height={'min-content'}/>
                <Image src={mernFolderss3} height={'min-content'}/>
            </Stack>
            </Center>
        </>
    )
};

export default MERN;