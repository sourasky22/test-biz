
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const { theme, layout } = useTheme();
  
  // Define layout-specific component arrangements
  const renderLayout = () => {
    switch (layout) {
      case 1:
        return (
          <>
            <Hero />
            <Services />
            <RecentProjects />
            <CustomerTestimonials />
            <Contact />
          </>
        );
      case 2:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <CustomerTestimonials />
            <RecentProjects />
            <Contact />
          </>
        );
      case 3:
        return (
          <>
            <Hero />
            <Services />
            <About />
            <RecentProjects />
            <CustomerTestimonials />
            <Contact />
          </>
        );
      case 4:
        return (
          <>
            <Hero />
            <CustomerTestimonials />
            <Services />
            <RecentProjects />
            <About />
            <Contact />
          </>
        );
      case 5:
        return (
          <>
            <Hero />
            <RecentProjects />
            <About />
            <Services />
            <CustomerTestimonials />
            <Contact />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <Services />
            <RecentProjects />
            <CustomerTestimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className={cn(`min-h-screen bg-background text-foreground layout-${layout}`)}>
      <Navbar />
      {renderLayout()}
      <Footer />
    </div>
  );
};

export default Index;
