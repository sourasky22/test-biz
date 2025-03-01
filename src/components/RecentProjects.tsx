
import { IMAGES } from "../assets";

const RecentProjects = () => {
  const projectImages = [
    IMAGES.SERVICE_1,
    IMAGES.SERVICE_2,
    IMAGES.SERVICE_3,
    IMAGES.SERVICE_4,
    IMAGES.SERVICE_5,
    IMAGES.SERVICE_6,
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-garage-darkBlue mb-2">Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent garage door installations and repairs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectImages.map((image, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={image} 
                  alt={`Recent garage door project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
