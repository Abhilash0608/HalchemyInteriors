import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import proto_1 from "../assets/proto_1.jpeg"; // Replace with your actual image paths
import proto_2 from "../assets/proto_2.jpeg";
import proto_3 from "../assets/proto_3.jpeg";
import proto_4 from "../assets/proto_4.jpeg";

const images = [proto_1, proto_2, proto_3, proto_4];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  
  // Ref to track if the transition is in progress
  const isTransitioning = useRef(false);

  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
  };

  // Function to handle next slide
  const handleNext = () => {
    if (isTransitioning.current) return; // Prevent if transition is in progress
    isTransitioning.current = true;
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const handlePrevious = () => {
    if (isTransitioning.current) return; // Prevent if transition is in progress
    isTransitioning.current = true;
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isTransitioning.current) {
        handleNext();
      }
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(autoSlide); // Clear interval on component unmount
  }, []);

  // Reset the transition flag after the animation is complete
  useEffect(() => {
    if (isTransitioning.current) {
      const timer = setTimeout(() => {
        isTransitioning.current = false;
      }, 1000); // Wait for the animation to finish (1 second)
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[90vw] w-full h-[70vh] my-12 overflow-hidden m-auto">
      <AnimatePresence className="flex mx-auto w-full">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="absolute w-full h-full mx-auto object-fit rounded-lg shadow-lg"
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>
      {/* Previous Button */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={handlePrevious}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          &lt;
        </button>
      </div>
      {/* Next Button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
