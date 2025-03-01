
import information from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100/80 text-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">© {currentYear} {information.businessName}. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
            <a href={`tel:${information.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
              {information.phoneDisplay}
            </a>
            <a href={`mailto:${information.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
              {information.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
