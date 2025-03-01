
import { Mail, Phone } from "lucide-react";
import { IMAGES } from "../assets/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-8 w-8 overflow-hidden rounded-lg mr-3">
              <img
                src={IMAGES.LOGO}
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-heading font-bold text-gray-900">Premium Garage Doors</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4 mr-2 text-blue-600" />
              <span>(555) 123-4567</span>
            </a>
            <a href="mailto:info@premiumgarage.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="h-4 w-4 mr-2 text-blue-600" />
              <span>info@premiumgarage.com</span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-4">
          <p>© {currentYear} Premium Garage Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
