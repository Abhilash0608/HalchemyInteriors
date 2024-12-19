import React, { useRef, useEffect, useState, useCallback } from "react";
import { MdOutlineWavingHand } from "react-icons/md";

const ScratchCard = ({ width, height, image, overlayImage, brushSize }) => {
  const canvasRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const [hasScratched, setHasScratched] = useState(false); // New state to track scratching

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Reset canvas
    context.clearRect(0, 0, width, height);

    // Load and draw the overlay image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = overlayImage;

    img.onload = () => {
      context.globalCompositeOperation = "source-over"; // Reset to default
      context.drawImage(img, 0, 0, width, height);
      context.globalCompositeOperation = "destination-out"; // Set to scratch mode
    };
  }, [overlayImage, width, height]);

  const calculateScratchedPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, width, height).data;

    let totalPixels = width * height;
    let scratchedPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) scratchedPixels++;
    }

    const percent = (scratchedPixels / totalPixels) * 100;
    setScratchedPercent(percent);

    if (percent > 60) {
      context.clearRect(0, 0, width, height); // Reveal full image
    }
  }, [width, height]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setHasScratched(true); // Mark that scratching has started
    scratch(e);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    calculateScratchedPercent();
  };

  const handleMouseMove = (e) => {
    if (isMouseDown) scratch(e);
  };

  const scratch = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI * 2);
    context.fill();
  };

  return (
    <div style={{ position: "relative", width, height }}>
      {/* Bottom Image */}
      <img
        src={image}
        alt="bottom"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Canvas for scratching */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "pointer",
        }}
      />

      {/* Text and Icon (conditionally rendered) */}
      {!hasScratched && (
        <div
          style={{
            position: "absolute",
            bottom: "45%",
            left: "35%",
            color: "white",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <p className="text-center">
            <MdOutlineWavingHand className="text-3xl ml-8" />
            Scratch to Reveal
          </p>
        </div>
      )}
    </div>
  );
};

export default ScratchCard;
