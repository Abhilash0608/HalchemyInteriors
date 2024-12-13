import React, { useState } from 'react';
import { portfolioImages } from '../utils/servicesData';

const Portfolio = () => {
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0); // Track selected portfolio index
  const [selectedImage, setSelectedImage] = useState(portfolioImages[0].images[0]);

  const currentPortfolio = portfolioImages[currentPortfolioIndex];

  const handleTabChange = (index) => {
    setCurrentPortfolioIndex(index);
    setSelectedImage(portfolioImages[index].images[0]); // Reset to the first image of the selected portfolio
  };

  return (
    <>
      <div className="w-full flex flex-col max-w-[90vw] lg:max-w-[80vw] mx-auto items-center px-4 py-8">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-full mb-6">
          {portfolioImages.map((portfolio, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-medium transition-all flex-shrink-0 ${
                index === currentPortfolioIndex
                  ? 'bg-[#8A7C56] text-white'
                  : 'bg-gray-200 text-[#8A7C56] hover:bg-[#6D6244] hover:text-white'
              }`}
            >
              {portfolio.title}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <h1 className=" text-[#8A7C56]  font-medium text-center mb-6 text-3xl text-2xl md:text-4xl lg:text-4xl">
          {currentPortfolio.title}
        </h1>
        <div className="w-full md:w-3/5 h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {currentPortfolio.images.map((image, index) => (
            <div
              key={index}
              className="w-10 h-10 md:w-20 md:h-20 bg-cover bg-center rounded-md cursor-pointer hover:scale-105 transform transition-all"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
              }}
              onClick={() => setSelectedImage(image)}
            ></div>
          ))}
        </div>
        <p className="text-center text-gray-600  max-w-3xl text-base  text-base md:text-xl lg:text-xl">
          {currentPortfolio.description}
        </p>
      </div>
    </>
  );
};

export default Portfolio;
