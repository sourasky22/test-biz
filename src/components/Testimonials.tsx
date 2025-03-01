
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "../assets/images";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    image: IMAGES.PERSON_1,
    text: "The technicians were professional, prompt, and did an excellent job repairing our garage door. They explained everything clearly and even offered maintenance tips. I highly recommend their services!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    position: "Business Owner",
    image: IMAGES.PERSON_2,
    text: "We needed to replace the garage doors for our commercial building, and this company exceeded our expectations. The quality of work was outstanding, and they completed the project on time and within budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Homeowner",
    image: IMAGES.PERSON_3,
    text: "I had an emergency situation with my garage door, and they responded quickly even though it was after hours. The repair was done efficiently, and the door has been working perfectly ever since. Great service!",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateSlideWidth = () => {
      const width = window.innerWidth;
      setSlideWidth(width);
    };

    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let currentX;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    
    const diff = startX - currentX;
    
    if (diff > 50) {
      nextTestimonial();
      setIsDragging(false);
    } else if (diff < -50) {
      prevTestimonial();
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-garage-gray overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <div className="inline-block bg-garage-blue/10 px-4 py-1.5 rounded-full mb-4">
            <span className="text-garage-blue font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. See what our satisfied customers have to say about our garage door services.
          </p>
        </div>

        <div 
          className="relative px-4"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="flex justify-center mb-10">
            <div className="flex space-x-4">
              <Button 
                onClick={prevTestimonial} 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-garage-blue/30 text-garage-blue hover:bg-garage-blue hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                onClick={nextTestimonial} 
                variant="outline" 
                size="icon" 
                className="rounded-full h-10 w-10 border-garage-blue/30 text-garage-blue hover:bg-garage-blue hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-garage-blue/10">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-amber-500 flex">
                          {Array(5).fill(0).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < testimonial.rating ? "currentColor" : "none"} stroke="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-garage-darkBlue">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="mt-6 relative">
                      <Quote className="h-10 w-10 text-garage-blue/10 absolute -top-2 -left-2" />
                      <p className="text-gray-600 text-lg relative z-10 pl-6">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-8 bg-garage-blue" : "w-2 bg-garage-blue/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
