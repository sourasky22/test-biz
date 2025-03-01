
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { IMAGES } from "../assets/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <div className="h-12 w-auto overflow-hidden rounded">
            <img
              src={IMAGES.LOGO}
              alt="Logo"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
          <span className="ml-3 text-xl font-heading font-bold text-garage-darkBlue">
            Premium Garage Doors
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={cn(
                    "nav-link",
                    activeSection === link.href.substring(1) && "active-nav-link"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Now</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-garage-darkBlue p-2"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-lg font-medium border-b border-gray-100"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <Button className="w-full flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Call Now: (555) 123-4567</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
