
import { Star } from "lucide-react";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The team was professional, efficient and incredibly helpful. They fixed our garage door quickly and even took the time to explain what went wrong. I'll definitely use their services again!"
    },
    {
      name: "Michael Thompson",
      rating: 5,
      text: "I was impressed by how fast they responded to my emergency call. The technician was knowledgeable and fixed the issue with our garage door opener in no time. Highly recommend!"
    },
    {
      name: "Jennifer Martinez",
      rating: 5,
      text: "We had our old garage door replaced and couldn't be happier with the results. The installation was smooth, they cleaned up after themselves, and the new door looks amazing. Great service at a fair price!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-2">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from some of our customers about their experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-garage-blue text-garage-blue" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-garage-darkBlue">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
