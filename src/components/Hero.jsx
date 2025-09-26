import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "img_1.png",
      title: "Skip House Agent!",
      subtitle: "Meet the Real Insiders",
      description:
        "Discover available apartments directly from landlords to save more",
    },
    {
      image: "img_2.jpg",
      title: "Find Your Dream Home",
      subtitle: "Direct From Owners",
      description: "Connect with property owners without middleman fees",
    },
    {
      image: "img_3.png",
      title: "Smart Property Search",
      subtitle: "Verified Listings Only",
      description: "Browse through authenticated properties with real photos",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`/src/assets/images/${slide.image}`}
            alt={slide.title}
            className="w-full h-[800px] object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 opacity-90"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="w-full absolute inset-0 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-5xl font-semibold mb-4 animate-fadeIn"
            >
              {slides[currentSlide].title}
            </h1>
            <h2
              key={`subtitle-${currentSlide}`}
              className="text-3xl md:text-5xl font-semibold mb-6 animate-fadeIn animation-delay-200"
            >
              {slides[currentSlide].subtitle}
            </h2>
            <p
              key={`desc-${currentSlide}`}
              className="text-lg md:text-xl mb-8 animate-fadeIn animation-delay-400"
            >
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Statistics - Full Width at Bottom */}
        <div className="w-4/5 mx-auto bg-white/10 bg-opacity-90 rounded-lg mb-10 backdrop-blur-20 py-4 px-6">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <div className="text-left animate-fadeIn animation-delay-600 text-white">
              <div className="text-4xl md:text-5xl font-bold  mb-2">10k</div>
              <div className="text-sm md:text-base  font-medium">
                Apartment <br /> Listed
              </div>
            </div>
            <div className="text-right animate-fadeIn animation-delay-800 text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-sm md:text-base font-medium">
                Successful <br /> Matches
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;