import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  categoryDescriptions,
  productsCategoryCollection,
} from "../../../utils/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../../pageBanner";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Normalize category from URL
  const normalizedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter products based on category
  const filteredProducts = productsCategoryCollection.filter(
    (product) => product.category === normalizedCategory
  );

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (newPage) => {
    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${category}/${productId}`);
  };

  const description =
    categoryDescriptions[normalizedCategory] || "Description not available.";

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title={normalizedCategory}
        subtitle="Luxury Carpets for Premium Spaces"
        backgroundImage="url('/images/004_1.jpg')"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `${normalizedCategory}` },
        ]}
      />

      <div className="mx-auto">
        {/* product category */}
        <div className="md:px-14 px-5 py-8 flex flex-col items-start bg-gray-200">
          <h3 className="md:text-2xl text-xl font-bold mb-4 tracking-[0.05rem]">
            {normalizedCategory} Rugs
          </h3>
          <p className="text-gray-700 max-sm:text-sm text-start tracking-[0.05rem]">
            {description}
          </p>
        </div>

        <div className="container mx-auto px-4 py-10">
          {/* Product Grid */}
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
          ${
            isAnimating
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }
          transition-all duration-300 ease-in-out`}
          >
            {currentItems.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className={`w-full 
                  sm:h-[14rem] md:h-[17rem] lg:h-[20rem] 
                  object-cover transform group-hover:scale-105 transition-transform duration-300`}
              />
              
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="py-2 px-6">
                  <h3 className="text-lg font-semibold tracking-[0.04rem] text-gray-900 mb-2">
                    {product.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center
              ${
                currentPage === number
                  ? "bg-blue-600 text-white scale-110"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-600">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
