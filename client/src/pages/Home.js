import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import CodeBlock from '../components/CodeBlock';
// has four props: previousPage, previousTitle, nextPage, nextTitle (set equal to page route and title)
import Footer from '../components/Footer';

import Outline from '../components/Outline';

const someText =  "There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits toengineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production";

const someCode = "console.log('Hello World!') //outputs the string: Hello World!";
const someMoreCode = "const arrowFunction = () => {";
const someMoreCodeAgain = "return console.log('This is an arrow function');";
const finalLine = "}; //when the function is called, expected output is the string: This is an arrow function"

const Home = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Content text={someText}/>
            <CodeBlock code={someCode} />
            <CodeBlock code={someMoreCode} />
            <CodeBlock code={someMoreCodeAgain} />
            <CodeBlock code={finalLine} />
            <Content text={someText}/>
            <Outline />
            <Footer previousPage={'/'} nextPage={'/TDD'} nextTitle="Test Driven Development"/>
        </>
    )
};

export default Home;