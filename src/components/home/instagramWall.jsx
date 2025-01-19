import React from "react";
import { Instagram } from "lucide-react";

const InstagramWall = () => {
  const collections = [
    {
      id: 1,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/tpc03-scaled.jpg",
      link: "https://instagram.com/collection1",
    },
    {
      id: 2,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/tpc02-scaled.jpg",
      link: "https://instagram.com/collection2",
    },
    {
      id: 3,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/tpc06-1-scaled.jpg",
      link: "https://instagram.com/collection3",
    },
    {
      id: 4,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/tpc04-scaled.jpg",
      link: "https://instagram.com/collection4",
    },
    {
      id: 5,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/Untitled-1-copy.jpg",
      link: "https://instagram.com/collection5",
    },
    {
      id: 6,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/tpc05-scaled.jpg",
      link: "https://instagram.com/collection5",
    },
    {
      id: 7,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/Untitled-2.jpg",
      link: "https://instagram.com/collection5",
    },
    {
      id: 8,
      image:
        "https://thephenixcarpets.com/wp-content/uploads/2023/05/Untitled-2.jpg",
      link: "https://instagram.com/collection6",
    },
  ];

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-16">
      <h2 className="text-3xl tracking-[0.05rem] font-bold text-center mb-12">INSTAGRAM WALL</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="group relative">
            {/* Images Stack */}
            <div className="relative h-72 transition-all duration-500">
              <div
                className={`absolute inset-0 transition-all duration-500 transform
                  
                    group-hover:rotate-0 group-hover:translate-y-50
                    group-hover:duration-300`}
              >
                <img
                  src={collection.image}
                  alt={`${collection.title}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Instagram Icon Overlay */}
            <a
              href={collection.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramWall;
