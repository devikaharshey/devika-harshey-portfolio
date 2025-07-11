import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Projects from "./section/Projects.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
export default App;
