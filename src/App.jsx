import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Timeline from "./components/ExperianceEducation.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import FocusCards from "./components/FocusCards.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import AboutMeScrollHero from "./components/AboutMeScrollHero.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-orb">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
         {/* <FocusCards /> */}
         <AboutMeScrollHero/>
        <Skills />
        <Timeline/>
        {/* <Experience /> */}
        {/* <Services/> */}
        {/* <Education />  */}

        <Projects />
        {/* <Certifications /> */}
         <Services/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
