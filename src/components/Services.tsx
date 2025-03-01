
import { ArrowRight, Wrench, Settings, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Emergency Repair",
    description: "24/7 garage door repair services for when you need help right away.",
    icon: <Wrench className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1622372738946-62e2abbf653d?q=80&w=3432&auto=format&fit=crop",
    delay: 0.1,
  },
  {
    title: "New Installations",
    description: "High-quality garage door installations with expert craftsmanship.",
    icon: <Settings className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1635434943845-2f40fbca071f?q=80&w=1932&auto=format&fit=crop", 
    delay: 0.2,
  },
  {
    title: "Spring Replacement",
    description: "Professional spring repair services to keep your door operating safely.",
    icon: <Settings className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1593424850077-d0fc851f3a8f?q=80&w=1770&auto=format&fit=crop",
    delay: 0.3,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 card-hover opacity-0 animate-fade-in",
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
        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {service.icon}
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <div className="flex justify-between items-center">
        <Button variant="outline" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          <span>Details</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <Phone className="mr-2 h-4 w-4" />
          <span>Call Now</span>
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <div className="inline-block bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <span className="text-blue-700 font-medium text-sm">Professional Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reliable Garage Door Solutions
          </h2>
          <p className="text-gray-600">
            We provide expert repair and installation services for all types of garage doors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <span>Get A Free Quote</span>
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
