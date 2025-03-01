
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
