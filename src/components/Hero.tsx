import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Python Developer",
    "AI Enthusiast",
    "Researcher",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-12 relative overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* Profile Image */}
          <div className="relative flex-[1_1_0%] max-w-[300px] w-full">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 via-purple-300 to-sky-300 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
              <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://i.postimg.cc/CxtfHqDJ/Whats-App-Image-2025-07-06-at-11-32-36-PM.jpg"
                  alt="Komal Suresh Jadhav"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-pink-400 animate-pulse delay-300" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-[1_1_0%] text-center md:text-left space-y-6 max-w-2xl w-full">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Available for work</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="block text-gray-800 mb-1">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-rose-400 via-purple-500 to-sky-500 bg-clip-text text-transparent animate-gradient">
                Komal Jadhav
              </span>
            </h1>

            <div className="h-10 flex items-center justify-center md:justify-start">
              <span className="text-xl font-semibold text-gray-600 transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              Innovative and results-driven professional with expertise in developing
              <span className="text-rose-500 font-medium"> scalable web applications</span> using the
              <span className="text-purple-500 font-medium"> MERN stack</span>, complemented by the integration of
              <span className="text-sky-500 font-medium"> machine learning models</span> to create intelligent, data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50"
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/1komaljadhav/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/20"
              >
                <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/komal-jadhav-6b7301250/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-white/20"
              >
                <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
