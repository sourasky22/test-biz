
import { ArrowRight, Clock, Star, Wrench, Settings } from "lucide-react";
import { IMAGES } from "../assets/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Garage Door Repair",
    description: "Fast and reliable repair services for all garage door makes and models.",
    icon: <Wrench className="h-6 w-6" />,
    image: IMAGES.SERVICE_1,
    delay: 0.1,
  },
  {
    title: "New Door Installation",
    description: "Professional installation of high-quality garage doors to enhance your home.",
    icon: <Settings className="h-6 w-6" />,
    image: IMAGES.SERVICE_2,
    delay: 0.2,
  },
  {
    title: "Spring Replacement",
    description: "Expert spring repair and replacement to keep your door operating smoothly.",
    icon: <Clock className="h-6 w-6" />,
    image: IMAGES.SERVICE_3,
    delay: 0.3,
  },
  {
    title: "Opener Service",
    description: "Installation and repair of garage door openers for reliable automatic operation.",
    icon: <Star className="h-6 w-6" />,
    image: IMAGES.SERVICE_4,
    delay: 0.4,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-soft p-6 card-hover opacity-0 animate-fade-in",
        index % 2 === 0 ? "lg:animate-fade-in-left" : "lg:animate-fade-in-right"
      )}
      style={{ animationDelay: `${service.delay}s` }}
    >
      <div className="h-48 rounded-lg overflow-hidden mb-6">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 bg-garage-blue/10 rounded-lg flex items-center justify-center text-garage-blue">
          {service.icon}
        </div>
        <h3 className="ml-3 text-xl font-semibold text-garage-darkBlue">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <Button variant="outline" className="w-full group">
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-garage-gray">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <div className="inline-block bg-garage-blue/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-garage-blue font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-4">
            Comprehensive Garage Door Solutions
          </h2>
          <p className="text-gray-600">
            We offer a wide range of professional garage door services to keep your door operating safely and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="btn-primary">
            <span>View All Services</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
