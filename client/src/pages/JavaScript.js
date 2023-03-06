import Header from '../components/Header';
import Navigation from '../components/Navigation';
// has title prop
import PageHeading from '../components/Heading';
// has text prop
import Content from '../components/Content';
import PageDivider from '../components/PageDivider';
// has four props: previousPage, previousTitle, nextPage, nextTitle
import Footer from '../components/Footer';
// has 2 props: hyperLink, linkText
import Link from '../components/Link';
import JavascriptNotes from '../library/javascript.json';
import {
    Heading,
    Center
} from '@chakra-ui/react';

const JavaScriptPage = () => {

    return (
        <>
            <Header />
            <Navigation />
            <PageHeading title={JavascriptNotes.title} />
            <PageDivider />
            <Content text={JavascriptNotes.setup} />
            <PageDivider />
            <Center>
                <Heading size={'lg'}>Variables</Heading>
            </Center>
            <Content text={JavascriptNotes.notes.variables} />
            <PageDivider />
            <Center>
                <Heading size={'lg'}>Data Types</Heading>
            </Center>
            <Content text={JavascriptNotes.notes.dataType} />
            <PageDivider />
            <Content text={JavascriptNotes.dataTypes.undefined} />
            <PageDivider />
            <Content text={JavascriptNotes.dataTypes.string} />
            <PageDivider />
            <Content text={JavascriptNotes.dataTypes.number} />
            <PageDivider />
            <Content text={JavascriptNotes.dataTypes.boolean} />
            <PageDivider />
            <Center>
                <Heading size={'lg'}>Operators</Heading>
            </Center>
            <Content text={JavascriptNotes.tools.operators.add} />
            <Content text={JavascriptNotes.tools.operators.subtract} />
            <Content text={JavascriptNotes.tools.operators.multiply} />
            <Content text={JavascriptNotes.tools.operators.divide} />
            <Content text={JavascriptNotes.tools.operators.modulus} />
            <PageDivider />
            <Center>
                <Heading size={'lg'}>Comparison Operators</Heading>
            </Center>
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.looseEquality} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.strictEquality} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.looseInequality} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.strictInequality} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.greaterThan} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.lessThan} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.greaterThanOrEqual} />
            <Content text={JavascriptNotes.tools.operators.comparisonOperators.lessThanOrEqual} />
            <PageDivider />
            <Center>
                <Heading size={'lg'}>Logical Operators</Heading>
            </Center>
            <Content text={JavascriptNotes.tools.operators.logicalOperators.both} />
            <Content text={JavascriptNotes.tools.operators.logicalOperators.or} />
            <Content text={JavascriptNotes.tools.operators.logicalOperators.not} />
            <PageDivider />
            <PageHeading title={'Helpful Links'} />
            <Link hyperLink={'https://youtu.be/13se4zxcyn4'} linkText='JavaScript Day 1' />
            <Footer previousPage={'/'} previousTitle="Go Home" nextPage={'/TDD'} nextTitle="Test Driven Development" />
        </>
    )
}

export default JavaScriptPage;