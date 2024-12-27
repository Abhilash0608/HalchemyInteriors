import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const MostVisitedProducts = () => {
  const mostVisitedProducts = [
    {
      id: 1,
      name: "Luxury Sofa",
      image:
        "https://images.unsplash.com/photo-1679558879563-335ee6932106?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹50000",
    },
    {
      id: 2,
      name: "Elegant Chair",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹15000",
    },
    {
      id: 3,
      name: "Modern Coffee Table",
      image:
        "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹30000",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-20">
      {/* Heading and Button */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
       
        <SectionHeader mainHeading={"Our Most Visited"} subHeading={" Products"}/>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          to="/products"
          className="mt-4 lg:mt-0 bg-[#8A7C56] text-white py-2 px-6 w-48 flex items-center justify-center rounded-lg shadow-md transition-all"
          style={{ overflow: "hidden" }}
        >
            <Link to="/products" className="mr-2 flex items-center justify-center gap-4">
          See More
          <FaArrowRight />

            </Link>
        </motion.button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mostVisitedProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MostVisitedProducts;
