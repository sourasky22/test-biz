
const RecentProjects = () => {
  const projectImages = [
    "/lovable-uploads/1e355c9c-bc8c-4b5c-bfc1-52a4726594c3.png",
    "/lovable-uploads/dc3efa8b-e0d8-4381-8f8d-ffb5b68abf49.png",
    "/lovable-uploads/62330209-9e8c-41ea-81c8-58d19607f48d.png",
    "/lovable-uploads/3c189a59-8325-46ad-b8e0-1be0bc687e10.png",
    "/lovable-uploads/fbb384f3-f876-4363-b5cb-c9edb97ad766.png",
    "/lovable-uploads/61b7818b-33a6-4c12-9779-9a7cd070431b.png",
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
