import 'aos/dist/aos.css';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Tim from "../components/Tim";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Product />
            <Tim />
            <Footer />
        </>
    )
}

export default Home
