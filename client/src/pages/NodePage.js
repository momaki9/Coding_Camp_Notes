import Header from "../components/Header";
import Navigation from "../components/Navigation";
// has text prop
import Content from "../components/Content";
// has code prop
import CodeBlock from "../components/CodeBlock";
// has title prop
import PageHeading from "../components/Heading";
// has linkText and hyperLink props
import ExternalLink from "../components/Link";
import data from "../library/nodejs.json";
import PageDivider from "../components/PageDivider";
import { Center, Code, Heading, Text } from "@chakra-ui/react";

const NodePage = () => {
    return (
        <>
            <Header />
            <Navigation />
            <PageHeading title={data.heading} />
            <Text fontStyle={'italic'}>{data.quote}</Text>
            <ExternalLink hyperLink={data.installationLink} linkText={"Node Installation"} />
            <Content text={data.text} />
            <PageDivider />
            <Content text={data.definition} />
            <Content text={data.note} />
            <PageDivider />
            <Center>
                <Text>
                    <Code>npm i</Code> installs the dependencies/node packages defined in the package.json file
                </Text>
            </Center>
            <PageDivider />
            <Content text={"Those packages are used and installed by node as a different way to utilize them instead of using a CDN link"} />
            <Content text="node index executes the appplication (extention note required)" />
            <PageDivider />
            <Heading size={'lg'} margin='0.5'>
            ES6: Version of JavaScript
            </Heading>
            <Content text="Arrow functions, let, and const, functional loops and template literals." />
            <Content text={data.anotherNote} />
        </>
    )
}

export default NodePage;