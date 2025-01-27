import React from 'react';
import { ChevronRight } from 'lucide-react';

const PageBanner = ({ 
  title, 
  subtitle, 
  backgroundImage = "url('/api/placeholder/1920/1080')",
  breadcrumbs = [],
}) => {
  return (
    <nav
      className="relative bg-cover bg-center bg-no-repeat text-sm py-28 md:py-32"
      aria-label="Breadcrumb"
      style={{ backgroundImage }}
    >
      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl tracking-[0.06rem] font-bold text-white mb-4">
            {title}
          </h1>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-1 bg-yellow-300"></div>
            <p className="text-white text-sm md:text-lg font-light">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center items-center mt-8">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-200 mx-2" />
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm md:text-base"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-yellow-300 font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

      </div>
    </nav>
  );
};

export default PageBanner;