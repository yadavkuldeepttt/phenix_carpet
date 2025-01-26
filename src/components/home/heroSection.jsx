import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../../utils/data";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="relative h-[280px] md:h-[550px] overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            currentSlide === index
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Desktop Image */}
          <img
            src={slide.desktop.image}
            alt={slide.desktop.title}
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Image */}
          <img
            src={slide.mobile.image}
            alt={slide.mobile.title}
            className="block md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              {/* Desktop Title */}
              <h1 className="hidden md:block text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
                {slide.desktop.title}
              </h1>
              {/* Mobile Title */}
              <h1 className="block md:hidden text-3xl font-bold mb-4 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
                {slide.mobile.title}
              </h1>
              {/* Desktop Description */}
              <p className="hidden md:block text-xl mb-8 transform transition-all duration-700 delay-100 ease-out translate-y-0 opacity-100">
                {slide.desktop.description}
              </p>
              {/* Mobile Description */}
              <p className="block md:hidden text-base mb-6 transform transition-all duration-700 delay-100 ease-out translate-y-0 opacity-100">
                {slide.mobile.description}
              </p>
              <button
                onClick={() => handleClick(slide?.link)}
                className="group relative bg-white text-gray-900 px-4 md:px-8 py-2 md:py-3 rounded-full font-medium 
                          overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                          active:scale-95 text-sm md:text-base"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {slide.cta}
                </span>
                <span
                  className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 
                               transition-transform duration-300 origin-left"
                ></span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
