import React, { useEffect, useState, useCallback } from "react";
 import { associateBrands } from "../utils/servicesData";

const InfiniteCarousel = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const totalImages = associateBrands.length;
    const cardWidth = 150; // Width of each card

    const nextPosition = useCallback(() => {
        setScrollPosition((prevPosition) => {
            const newPosition = prevPosition + 1;
            if (newPosition >= totalImages * cardWidth) {
                return 0; // Reset to the start
            }
            return newPosition;
        });
    }, [totalImages, cardWidth]); // Add dependencies to avoid stale closures

    useEffect(() => {
        const interval = setInterval(nextPosition, 30); // Change position every 30 milliseconds for smooth scrolling
        return () => clearInterval(interval); // Cleanup on unmount
    }, [nextPosition]); // nextPosition is stable because of useCallback

    return (
        <div className="overflow-hidden md:max-w-[80vw] max-w-[90vw] mx-auto">
            <div
                className="flex"
                style={{
                    transform: `translateX(-${scrollPosition}px)`,
                    transition: 'transform 0.1s linear',
                }}
            >
                {/* Render images twice for seamless scrolling */}
                {[...associateBrands, ...associateBrands,...associateBrands].map((item, index) => (
                    <div
                        key={index}
                        className="flex gap-4 items-center justify-center w-[80px] w-min-[80px] md:w-[150px] md:w-min-[150px]  rounded-md  mx-8 md:mx-12 my-8 transition"
                        style={{ width: '150px', minWidth: '150px' }} // Fixed width for cards
                    >
                        <img className="mx-[20px]" src={item.src} alt={item.alt} height={120} width={120} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
