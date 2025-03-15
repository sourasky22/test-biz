
import { cn } from "@/lib/utils";
import { IMAGES } from "../assets";
import { useTheme } from "@/contexts/ThemeContext";

const services = [
  {
    title: "Emergency Repair",
    subtitle: "24/7 garage door repair services for when you need help right away.",
    image: IMAGES.SERVICE_1,
    delay: 0.1,
  },
  {
    title: "New Installations",
    subtitle: "High-quality garage door installations with expert craftsmanship.",
    image: IMAGES.SERVICE_2,
    delay: 0.2,
  },
  {
    title: "Spring Replacement",
    subtitle: "Professional spring repair services to keep your door operating safely.",
    image: IMAGES.SERVICE_3,
    delay: 0.3,
  },
  {
    title: "Cable Repair",
    subtitle: "Fast and reliable cable repair to ensure smooth door operation.",
    image: IMAGES.SERVICE_4,
    delay: 0.4,
  },
  {
    title: "Opener Installation",
    subtitle: "Expert installation of modern garage door openers with security features.",
    image: IMAGES.SERVICE_5,
    delay: 0.5,
  },
  {
    title: "Regular Maintenance",
    subtitle: "Preventative maintenance to extend the life of your garage door system.",
    image: IMAGES.SERVICE_6,
    delay: 0.6,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { theme } = useTheme();
  
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
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground">{service.subtitle}</p>
    </div>
  );
};

const Services = () => {
  const { theme } = useTheme();
  
  return (
    <section id="services" className="py-16 md:py-20 bg-secondary/70">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Professional Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reliable Garage Door Solutions
          </h2>
          <p className="text-muted-foreground">
            We provide expert repair and installation services for all types of garage doors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
