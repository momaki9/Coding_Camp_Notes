import Header from "../components/Header";
import Navigation from "../components/Navigation";
// has text prop
import Content from "../components/Content";
//// has title prop
import PageHeading from "../components/Heading";
import PageDivider from "../components/PageDivider";
// has four props: previousPage, previousTitle, nextPage, nextTitle
import Footer from "../components/Footer";
import data from "../library/unitTest.json";
// has 2 props: hyperLink, linkText
import Link from "../components/Link";

import {
    Text
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
            <Link hyperLink={data.documentation} linkText="Link to JEST Documentation"/>
            <Link hyperLink={data.YTLink} linkText="Link to Helpful Youtube Video regarding JEST"/>
            <Link hyperLink={"https://www.youtube.com/watch?v=_5JHrg5xjhg"} linkText="Link to Class Youtube Video (Start at 10:22)."/>
            <Footer previousPage={"/"} nextPage={"/NodeJS"} nextTitle="NodeJS"/>
        </>
    )
}

export default UnitTest;