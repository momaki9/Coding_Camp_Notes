import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import CodeBlock from '../components/CodeBlock';
import Footer from '../components/Footer';

const someText =  "There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits toengineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production";

const someCode = "console.log('Hello World!')"

const Home = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Content text={someText}/>
            <CodeBlock code={someCode} />
            <Content text={someText}/>
            <Footer />
        </>
    )
};

export default Home;