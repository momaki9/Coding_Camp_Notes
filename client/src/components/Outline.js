import topics from "../library/topics.json";
import PageDivider from "./PageDivider";
// has 2 props: hyperLink, linkText
import Link from "./Link";
import {
    Heading,
    Center,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"

const Outline = () => {

    return (
        <>
            <PageDivider />
            <Center>
                <Heading>Topics Outline</Heading>
            </Center>
            <PageDivider />
            <Center>
                <UnorderedList>
                    {topics.map((topic) => {
                        return (
                            <ListItem key={topic.title}><Link hyperLink={topic.URL} linkText={topic.title}>{topic.title}</Link></ListItem>
                        );
                    })};
                </UnorderedList>
            </Center>
            <PageDivider />
        </>
    )
};



export default Outline;