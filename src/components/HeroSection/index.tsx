import { useState , useEffect } from "react";
import { imagesUrlArrayData } from "../../data/ImagesArrayData";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imagesUrlArrayData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, [imagesUrlArrayData.length]);
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-secondary rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src={imagesUrlArrayData[currentImageIndex]}
              alt="Wellness retreat"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Discover Your Inner Peace
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join us for a series of wellness retreats designed to help you find
              tranquility and rejuvenation in your busy life.
            </p>
            <a href="#learn-more" className="inline-block">
              <button className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 ">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;