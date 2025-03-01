
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "../assets/images";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add subscription logic here
    toast.success("Thank you for subscribing to our newsletter!");
    const input = e.currentTarget.querySelector('input');
    if (input) {
      input.value = '';
    }
  };

  return (
    <footer className="bg-garage-darkBlue text-white pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 overflow-hidden rounded-lg mr-3">
                <img
                  src={IMAGES.LOGO}
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-heading font-bold">Premium Garage Doors</span>
            </div>
            <p className="text-gray-300 mb-6">
              Providing professional garage door services with quality workmanship and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-garage-blue transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-garage-blue after:mt-1.5 pb-2">Services</h4>
            <ul className="space-y-3">
              {[
                "Garage Door Repair",
                "Spring Replacement",
                "New Door Installation",
                "Opener Service",
                "Emergency Service",
                "Maintenance Plans"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 text-garage-blue transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-garage-blue after:mt-1.5 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 text-garage-blue transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-garage-blue after:mt-1.5 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { icon: <MapPin className="h-5 w-5" />, text: "123 Garage Street, City, State 12345" },
                { icon: <Phone className="h-5 w-5" />, text: "(555) 123-4567" },
                { icon: <Mail className="h-5 w-5" />, text: "info@garagedoorservice.com" }
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-garage-blue mr-3 mt-1">{contact.icon}</div>
                  <span className="text-gray-300">{contact.text}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-4">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-0 text-white placeholder:text-gray-400 rounded-l-md"
              />
              <Button type="submit" className="rounded-l-none bg-garage-blue hover:bg-garage-lightBlue">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 mb-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} Premium Garage Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
