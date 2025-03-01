
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMAGES } from "../assets";
import information from "../data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <div className="h-12 w-auto overflow-hidden rounded">
            <img
              src={IMAGES.LOGO}
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="ml-2 font-semibold text-garage-darkBlue text-lg">{information.businessName}</span>
        </a>

        {/* CTA Button */}
        <a href={`tel:${information.phone}`}>
          <Button className="flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            <span>Call Now: {information.phoneDisplay}</span>
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
