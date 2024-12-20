import React, { useRef, useEffect, useState, useCallback } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { TiArrowRight } from "react-icons/ti";

const ScratchCard = ({ image, overlayImage, brushSize, closeModal }) => {
  const canvasRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [hasScratched, setHasScratched] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); 
  const [dimensions, setDimensions] = useState({
    width: 600,
    height: 400,
  });

  const navigate = useNavigate();
  useEffect(() => {
    // Show the image after 1 second
    const timer = setTimeout(() => setIsImageVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Adjust dimensions based on screen size
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth * 0.9, 600); // 90% of screen width, max 600px
      const height = (width / 3) * 2; // Maintain 3:2 aspect ratio
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Reset canvas
    context.clearRect(0, 0, dimensions.width, dimensions.height);

    // Load and draw the overlay image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = overlayImage;

    img.onload = () => {
      context.globalCompositeOperation = "source-over"; // Reset to default
      context.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      context.globalCompositeOperation = "destination-out"; // Set to scratch mode
    };
  }, [overlayImage, dimensions]);

  const calculateScratchedPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, dimensions.width, dimensions.height).data;

    let totalPixels = dimensions.width * dimensions.height;
    let scratchedPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) scratchedPixels++;
    }

    const percent = (scratchedPixels / totalPixels) * 100;

    if (percent > 70) {
      context.clearRect(0, 0, dimensions.width, dimensions.height); // Reveal full image
      setIsCompleted(true); // Mark the scratch as completed
    }
  }, [dimensions]);

  const handleScratch = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const isTouch = e.type.includes("touch");
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI * 2);
    context.fill();
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setHasScratched(true);
    handleScratch(e);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    calculateScratchedPercent();
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) handleScratch(e);
  };

  const handleExploreClick = () => {
    closeModal(); // Close the modal
    navigate("/"); // Navigate to the home page
  };

  return (
    <div
      className="relative mx-auto"
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      {/* Canvas for overlay image */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="absolute inset-0 cursor-pointer z-10"
      />

      {/* Bottom Image */}
      <img
        src={image}
        alt="bottom"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isImageVisible ? "block opacity-100" : "hidden opacity-0"
        }`}
      />

      {/* Text and Icon (conditionally rendered) */}
      {!hasScratched && (
        <div className="absolute bottom-[45%] left-[30%] text-white bg-black bg-opacity-50 px-4 py-2 rounded-md text-center z-20">
          <p className="text-lg font-bold">
            <MdOutlineWavingHand className="text-3xl inline-block mr-2" />
            Scratch to Reveal
          </p>
        </div>
      )}

      {/* "Explore Now" Button (conditionally rendered) */}
      {isCompleted && (
        <div className="absolute inset-0 flex items-end justify-center bottom-5 z-20">
          <button
            onClick={handleExploreClick}
            className="bg-[#8A7C56] text-white flex items-center justify-center font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Explore Now <TiArrowRight className="text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScratchCard;
