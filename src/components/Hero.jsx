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
      stats: {
        left: { value: "10K", line1: "Apartment", line2: "Listed" },
        right: { value: "80%", line1: "Successful", line2: "Matchhes" },
      },
    },
    {
      image: "img_2.jpg",
      title: "Find Your Dream Home",
      subtitle: "Direct From Owners",
      description: "Connect with property owners without middleman fees",
      stats: {
        left: { value: "10k+", line1: "Successful", line2: "Jobs Done" },
        right: { value: "Over 10k+", line1: "Renters", line2: "" },
      },
    },
    {
      image: "img_3.png",
      title: "Smart Property Search",
      subtitle: "Verified Listings Only",
      description: "Browse through authenticated properties with real photos",
      stats: {
        left: { value: "N1.5b", line1: "Loaned", line2: "" },
        right: { value: "4.5⭐", line1: "Average", line2: "Ratings" },
      },
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="w-full absolute mt-30 inset-0 flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-[70px] font-semibold mb-3 animate-fadeIn"
            >
              {slides[currentSlide].title}
            </h1>
            <h2
              key={`subtitle-${currentSlide}`}
              className="text-3xl md:text-[70px] font-semibold mb-0 animate-fadeIn animation-delay-200"
            >
              {slides[currentSlide].subtitle}
            </h2>
            <p
              key={`desc-${currentSlide}`}
              className="text-lg md:text-[17px] mb-20 animate-fadeIn animation-delay-400"
            >
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Statistics - Full Width at Bottom */}
        <div className="w-4/5 mx-auto bg-white/10 bg-opacity-90 rounded-lg mb-8 backdrop-blur-20 py-4 px-6">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <div className="text-left animate-fadeIn flex flex-col items-start animation-delay-600 text-white">
              <div className="text-4xl md:text-[40px] font-medium mb-2">
                {slides[currentSlide]?.stats?.left?.value}
              </div>
              <div className="text-sm md:text-[20px] font-medium">
                {slides[currentSlide]?.stats?.left?.line1}
                {slides[currentSlide]?.stats?.left?.line2 ? (
                  <>
                    <br />
                    {slides[currentSlide].stats.left.line2}
                  </>
                ) : null}
              </div>
            </div>
            <div className="text-right animate-fadeIn animation-delay-800 text-white">
              <div className="text-4xl md:text-[40px] font-medium mb-2">
                {slides[currentSlide]?.stats?.right?.value}
              </div>
              <div className="text-sm md:text-[20px] font-medium">
                {slides[currentSlide]?.stats?.right?.line1}
                {slides[currentSlide]?.stats?.right?.line2 ? (
                  <>
                    <br />
                    {slides[currentSlide].stats.right.line2}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
