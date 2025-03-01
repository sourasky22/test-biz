
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import information from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you! Your message has been sent successfully.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: information.phoneDisplay,
      delay: 0.1,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: information.email,
      delay: 0.2,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: `${information.address}, ${information.city}, ${information.state} ${information.zipCode}`,
      delay: 0.3,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Working Hours",
      details: information.workingHours,
      delay: 0.4,
    },
  ];

  console.log("information",information)
  const encodedLocation = encodeURIComponent(`${information.address}, ${information.city}, ${information.state} ${information.zipCode}`);
  console.log("encodedLocation",encodedLocation)
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7227817835845!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808eb456e36f%3A0xe3898438a5b5f7e0!2s${encodedLocation}!5e0!3m2!1sen!2sus!4v1663180036428!5m2!1sen!2sus`;


  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <div className="inline-block bg-garage-blue/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-garage-blue font-medium text-sm">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-4">
            Get In Touch With Our Team
          </h2>
          <p className="text-gray-600">
            Have a question or need a quote? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-in-left">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-semibold text-garage-darkBlue mb-6">Send Us a Message</h3>
              
              <form 
                action={`https://formsubmit.co/${information.email}`} 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-garage-blue focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={information.email}
                      required
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-garage-blue focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={information.phoneDisplay}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-garage-blue focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full p-3 min-h-[120px] border border-gray-200 rounded-lg focus:ring-2 focus:ring-garage-blue focus:border-transparent"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary py-6 group"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-soft p-6 card-hover opacity-0 animate-fade-in"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <div className="h-12 w-12 bg-garage-blue/10 rounded-lg flex items-center justify-center text-garage-blue mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-garage-darkBlue mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft p-8 overflow-hidden aspect-square">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
