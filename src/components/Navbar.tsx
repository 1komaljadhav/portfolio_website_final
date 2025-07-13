import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400 bg-clip-text text-transparent animate-pulse">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 font-medium transition-all duration-300 hover:text-rose-500"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-rose-400 text-rose-600 hover:bg-rose-50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700 hover:text-rose-500 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-4 animate-fade-in-down space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 font-medium py-2 hover:text-rose-500 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3 border-rose-400 text-rose-600 hover:bg-rose-50 transition hover:shadow-md"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
