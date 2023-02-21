import Header from "../components/Header";
import Navigation from "../components/Navigation";
// has text prop
import Content from "../components/Content";
//// has title prop
import PageHeading from "../components/Heading";
import PageDivider from "../components/PageDivider";
import data from "../library/unitTest.json";

import {
    Text,
    Link
} from "@chakra-ui/react";

const UnitTest = () => {
    return (
        <>
            <Header />
            <Navigation />
            <PageHeading title={data.altTitle} />
            <PageDivider />
            <Text>{data.background}</Text>
            <PageDivider />
            <Text>{data.notes}</Text>
            <PageDivider />
            <Text>{data.notesFromYT}</Text>
            <PageDivider />
            <PageHeading title={"Documentation and Other Helpful links"} />
            <PageDivider />
            <Link>{data.documentation}</Link>
            <Text>
                <Link>{data.YTLink}</Link>
            </Text>
        </>
    )
}

export default UnitTest;