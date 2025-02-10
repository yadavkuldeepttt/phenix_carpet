import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const AboutUsSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Link */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl tracking-[0.06rem] md:text-3xl font-bold text-gray-900">
              About Us
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-3"></div>
          </div>
          <Link
            to="/about"
            className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <span className="text-sm font-medium">View Full Story</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              It is our proud pleasure to present you our good designs with eye
              catching colour scheme. THE PHENIX CARPET was established in 1996,
              and since then we've been crafting excellence in every thread.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {[
                "Hand Knots",
                "Natural Dyes",
                "Expert Weavers",
                "Premium Materials",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quick Vision Statement */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 italic tracking-[0.03rem]">
                "Our organization believes in making new ways and creating new
                products, striving to provide the best quality and most
                competitive rates in the industry."
              </p>
            </div>
          </div>

          {/* Right Column - Leadership */}
          {/* <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`text-center transform hover:-translate-y-1 transition-transform duration-300 ${
                    index === 1 ? "mt-8" : ""
                  }`}
                >
                  <div className="mb-4">
                    <div className="overflow-hidden rounded-xl shadow-md bg-white">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full  object-cover"
                        />
                      ) : (
                        <div className="w-full object-cover bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">
                            Image Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gray-200"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gray-200"></div>
          </div> */}

          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-md bg-white">
              <img
                src="/images/about-us.jpg"
                alt="Leadership"
                className="object-fit"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gray-200"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
