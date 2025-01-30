import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const carouselItems = [
    {
      id: 1,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/ht3.jpg",
      alt: "Designer Rug 1",
    },
    {
      id: 2,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/ht6.jpg",
      alt: "Designer Rug 2",
    },
    {
      id: 3,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/20-1-768x1029-1.jpg",
      alt: "Designer Rug 3",
    },
    {
      id: 4,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/16.jpg",
      alt: "Designer Rug 4",
    },
    {
      id: 5,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/022.jpg",
      alt: "Designer Rug 5",
    },
    {
      id: 6,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/HK01.jpg",
      alt: "Designer Rug 6",
    },
    {
      id: 7,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/27-768x1029.jpg",
      alt: "Designer Rug 7",
    },
    {
      id: 9,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/004-1-768x1028.jpg",
      alt: "Designer Rug 8",
    },
    {
      id: 10,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/08.jpg",
      alt: "Designer Rug 8",
    },
    {
      id: 11,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/HL04.jpg",
      alt: "Designer Rug 8",
    },
    {
      id: 12,
      image: "https://thephenixcarpets.com/wp-content/uploads/2023/05/108.jpg",
      alt: "Designer Rug 8",
    },
  ];

  const itemsToShow = window.innerWidth < 768 ? 1 : 4;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, [carouselItems.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  // Get visible items based on current index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push(carouselItems[index]);
    }
    return items;
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Section - Main Image (4 columns) */}
          <div className="md:col-span-4 relative overflow-hidden">
            <img
              src="https://thephenixcarpets.com/wp-content/uploads/2023/05/ht9-765x1024.jpg"
              alt="Main Product"
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Section - Content and Carousel (8 columns) */}
          <div className="md:col-span-8 flex flex-col justify-between">
            {/* Text Content */}
            <div className="mb-8 py-2">
              <div className="text-start font-semibold mb-4 tracking-[0.05rem]">
                IN STOCK ---
              </div>
              <h2 className="text-2xl text-start font-bold tracking-[0.05rem] mb-4">
                The Phenix Carpet
              </h2>
              <p className="text-gray-600 text-start tracking-[0.03rem]">
                Despite our extensive range of stock designs and sizes, you may
                still find it necessary to have a chosen design specifically
                tailored to your space. We can adjust the colors and materials,
                the scale of pattern, size and shape of the rug to fit a room or
                work with an existing scheme.
              </p>
            </div>

            {/* Carousel Section */}
            <div className="relative mt-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                <div className="flex gap-4 transition-all duration-300 ease-in-out">
                  {getVisibleItems().map((item) => (
                    <div
                      key={item.id}
                      className="flex-1 transform transition-transform duration-700 ease-in-out hover:scale-105"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full md:h-[19rem] max-sm:object-contain max-h-[30rem] md:object-fit rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
