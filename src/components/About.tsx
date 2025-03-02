
import { CheckCircle, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/assets";

const features = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Expert Technicians",
    description: "Our team consists of highly trained and experienced garage door specialists."
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Response Time",
    description: "We understand emergencies happen, so we offer prompt service when you need it most."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Quality Guaranteed",
    description: "We stand behind our work with warranties and satisfaction guarantees."
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-garage-blue/10 to-transparent rounded-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src={IMAGES.HERO} // Using HERO image as fallback for ABOUT
                  alt="About Our Company" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg transform rotate-3 animate-float">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[IMAGES.SERVICE_1, IMAGES.SERVICE_2, IMAGES.SERVICE_3].map((image, index) => (
                        <div key={index} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Team Member ${index + 1}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Trusted by</p>
                      <p className="font-semibold text-garage-darkBlue">1000+ Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg transform -rotate-2 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="text-amber-500 flex">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-garage-darkBlue">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-right">
            <div className="inline-block bg-garage-blue/10 px-4 py-1.5 rounded-full mb-4">
              <span className="text-garage-blue font-medium text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-6">
              Your Trusted Garage Door Service Provider Since 2005
            </h2>
            <p className="text-gray-600 mb-6">
              We are a team of dedicated professionals committed to providing exceptional garage door services. With years of experience in the industry, we have built a reputation for quality workmanship and outstanding customer service.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="h-10 w-10 bg-garage-blue/10 rounded-lg flex items-center justify-center text-garage-blue flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-garage-darkBlue">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                Learn More About Us
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
