import react from 'react';
import About from './sections/about/About';
import Faqs from './sections/Faqs/Faqs';
import FlotingNav from './sections/floting-navbar/FlotingNav';
import Header from './sections/header/Header';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Navbar from './sections/navbar/Navbar';
import Footer from './sections/footer/Footer';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';



const App = () => {
    const {themeState} = useThemeContext();
    return(
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
        <Theme />
        <FlotingNav />

  </main>

    )
}

export default App;