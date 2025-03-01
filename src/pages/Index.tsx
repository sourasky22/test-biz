
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
