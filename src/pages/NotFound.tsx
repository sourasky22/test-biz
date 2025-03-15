
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto opacity-0 animate-fade-in">
        <div className="text-9xl font-bold text-primary mb-6 leading-none opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>Page Not Found</h1>
        <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          We're sorry, the page you requested could not be found.
          Please go back to the homepage.
        </p>
        <Button 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
