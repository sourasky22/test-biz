
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <RecentProjects />
      <CustomerTestimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
