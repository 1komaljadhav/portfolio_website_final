
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { Toaster } from "../components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-emerald-50">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Services />
      <Certifications />
      <Contact />
      <Toaster />
    </div>
  );
};

export default Index;
