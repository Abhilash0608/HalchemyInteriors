import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import LoadingScreen from "../../components/LoadingScreen";

const products = [
  {
    id: 1,
    name: "Luxury Sofa",
    image:
      "https://images.unsplash.com/photo-1679558879563-335ee6932106?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual images
    price: "$500",
  },
  {
    id: 2,
    name: "Elegant Chair",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$150",
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    image:
      "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$300",
  },
  {
    id: 4,
    name: "Stylish Lamp",
    image:
      "https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$75",
  },
  {
    id: 5,
    name: "Artistic Wall Decor",
    image:
      "https://images.unsplash.com/photo-1730112635035-a51edf930c0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$200",
  },
  {
    id: 6,
    name: "Hanging Lights",
    image:
      "https://images.unsplash.com/photo-1510074314971-e9796f5a9e15?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$100",
  },
  {
    id: 7,
    name: "Dining Table Set",
    image:
      "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$300",
  },
];

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Set loading duration to 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen isVisible={isLoading} />}
      <div
        style={{
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Hero />
        <div className="bg-gray-100 min-h-screen py-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#8A7C56] font-bold text-center mb-8">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[90vw] mx-auto">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600 text-base md:text-xl lg:text-2xl">
                    {product.price}
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="mt-4 w-1/2 mx-auto align-center bg-[#8A7C56] text-white py-2 px-4 rounded-lg shadow-md transition-all"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
