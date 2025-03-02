import React from "react";
import { useParams, useNavigate } from "react-router";
import {
  categoryDescriptions,
  productsCategoryCollection,
} from "../../../utils/data";
import PageBanner from "../../pageBanner";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Normalize category from URL
  const normalizedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter products based on category
  const filteredProducts = productsCategoryCollection.filter(
    (product) => product.category === normalizedCategory
  );

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
            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                      className="w-full sm:h-[14rem] md:h-[17rem] lg:h-[20rem] object-cover transform group-hover:scale-105 transition-transform duration-300"
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
              ))
            ) : (
              <p className="text-center text-gray-600">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;