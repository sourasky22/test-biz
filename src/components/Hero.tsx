
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "../assets"; 
import information from "../data";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="inline-block bg-garage-blue/10 px-4 py-1.5 rounded-full">
              <span className="text-garage-blue font-medium text-sm">Professional Garage Door Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-garage-darkBlue leading-tight">
              Expert Garage Door <br />
              <span className="text-garage-blue">Repair & Installation</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Trust our professional technicians to handle all your garage door needs with precision and care. Fast, reliable service for your peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary" onClick={scrollToContact}>
                <span>Free Estimate</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a href={`tel:${information.phone}`}>
                <Button size="lg" variant="outline" className="btn-outline">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{information.phoneDisplay}</span>
                </Button>
              </a>
            </div>
            
            <div className="pt-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Same Day Service",
                  "Free Estimates",
                  "Licensed & Insured",
                  "100% Satisfaction"
                ].map((item, index) => (
                  <li key={index} className="flex items-center opacity-0 animate-fade-in-left" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-garage-blue mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft opacity-0 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src={IMAGES.HERO} 
                alt="Garage Door Service" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
