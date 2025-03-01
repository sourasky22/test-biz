
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IMAGES } from "../assets";
import { siteConfig } from "../config/siteConfig";

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
              className="h-full w-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
          <span className="ml-3 text-xl font-heading font-bold text-garage-darkBlue">
            {siteConfig.siteName}
          </span>
        </a>

        {/* CTA Button */}
        <Button className="flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          <span>Call Now: {siteConfig.contact.phone}</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
